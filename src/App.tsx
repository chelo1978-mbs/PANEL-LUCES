import { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { CodelcoButton, CodelcoPanel } from './types';
import { fetchButtons, fetchPanel, saveAllButtons, savePanel } from './services/firebase';
import { defaultCodelcoButtons } from './data/defaultButtons';
import PanelViewer from './components/PanelViewer';
import InfoCard from './components/InfoCard';
import VisualEditor from './components/VisualEditor';
import { Pencil, Shield } from 'lucide-react';
import { resolveAssetUrl } from './utils/assets';

const DEFAULT_PANEL: CodelcoPanel = {
  filas: 5,
  columnas: 7,
  empresa: 'CODELCO',
  logo: '/logos/codelco.svg',
  titulo: 'IDENTIFICACIÓN DE ALARMAS DE CABINA'
};

const getBundledIconPath = (buttonId: string): string | null => {
  const match = /^btn-(\d{3})$/.exec(buttonId);
  if (!match) return null;
  const number = Number(match[1]);
  return number >= 1 && number <= 32
    ? `/imagenes%20botones/${buttonId}.png`
    : null;
};

const normalizeButtonIcon = (button: CodelcoButton): CodelcoButton => {
  const bundledPath = getBundledIconPath(button.id);
  if (!bundledPath) return button;

  const currentValue = button.icono?.valor || '';
  const shouldUseBundledFile =
    !currentValue ||
    /^https?:\/\//i.test(currentValue) ||
    button.icono?.tipo === 'lucide';

  return {
    ...button,
    icono: shouldUseBundledFile
      ? { tipo: 'png', valor: bundledPath, tamano: button.icono?.tamano ?? 70 }
      : { ...button.icono, tamano: button.icono?.tamano ?? 70 }
  };
};

// Official Codelco Logo Component
function CodelcoLogo({ src, empresa, className = "" }: { src: string; empresa: string; className?: string }) {
  return (
    <div className={`flex items-center ${className}`} id="codelco-logo">
      <img
        src={resolveAssetUrl(src || '/logos/codelco.svg')}
        alt={empresa || 'CODELCO'}
        className="h-10 sm:h-12 w-auto object-contain"
        referrerPolicy="no-referrer"
        onError={(e) => {
          (e.target as HTMLImageElement).src = resolveAssetUrl('/logos/codelco.svg');
        }}
      />
    </div>
  );
}

export default function App() {
  const [buttons, setButtons] = useState<CodelcoButton[]>([]);
  const [panelConfig, setPanelConfig] = useState<CodelcoPanel | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedButtonId, setSelectedButtonId] = useState<string | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [saveStatus, setSaveStatus] = useState<'saved' | 'saving' | 'error'>('saved');
  const buttonsRef = useRef<CodelcoButton[]>([]);
  const panelRef = useRef<CodelcoPanel>(DEFAULT_PANEL);
  const saveTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const persistEditorChanges = async () => {
    if (saveTimerRef.current) {
      clearTimeout(saveTimerRef.current);
      saveTimerRef.current = null;
    }

    setSaveStatus('saving');
    const [buttonsSaved, panelSaved] = await Promise.all([
      saveAllButtons(buttonsRef.current),
      savePanel(panelRef.current)
    ]);
    const saved = buttonsSaved && panelSaved;
    setSaveStatus(saved ? 'saved' : 'error');
    return saved;
  };

  const scheduleEditorSave = () => {
    setSaveStatus('saving');
    if (saveTimerRef.current) clearTimeout(saveTimerRef.current);
    saveTimerRef.current = setTimeout(() => {
      void persistEditorChanges();
    }, 650);
  };

  const handleUpdateButtons = (updatedButtons: CodelcoButton[]) => {
    buttonsRef.current = updatedButtons;
    setButtons(updatedButtons);
    scheduleEditorSave();
  };

  const handleUpdatePanel = (updatedPanel: CodelcoPanel) => {
    panelRef.current = updatedPanel;
    setPanelConfig(updatedPanel);
    scheduleEditorSave();
  };

  const handleCloseEditor = async () => {
    if (saveStatus === 'saving' || saveTimerRef.current) {
      await persistEditorChanges();
    }
    setIsEditing(false);
  };

  // Load from Firebase on Mount
  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true);
        const [fetchedButtons, fetchedConfig] = await Promise.all([
          fetchButtons(),
          fetchPanel()
        ]);

        const resolvedPanel = fetchedConfig || DEFAULT_PANEL;
        panelRef.current = resolvedPanel;
        setPanelConfig(resolvedPanel);

        if (fetchedButtons && fetchedButtons.length > 0) {
          // Check if remote DB is missing new buttons (btn-031, btn-032) or needs local image updates
          const hasNewButtons = fetchedButtons.some(b => b.id === 'btn-031') && fetchedButtons.some(b => b.id === 'btn-032');
          
          const mergedButtons = [
            ...fetchedButtons.map(remoteBtn => {
              const defBtn = defaultCodelcoButtons.find(button => button.id === remoteBtn.id);
              const merged = defBtn
                ? {
                    ...defBtn,
                    ...remoteBtn,
                    imagen: remoteBtn.imagen || defBtn.imagen
                  }
                : remoteBtn;
              return normalizeButtonIcon(merged);
            }),
            ...defaultCodelcoButtons
              .filter(defBtn => !fetchedButtons.some(remoteBtn => remoteBtn.id === defBtn.id))
              .map(normalizeButtonIcon)
          ];

          buttonsRef.current = mergedButtons;
          setButtons(mergedButtons);

          // If remote was missing new buttons, persist updated dataset to Firebase
          if (!hasNewButtons || fetchedButtons.length < defaultCodelcoButtons.length) {
            saveAllButtons(mergedButtons).catch(console.error);
            savePanel(resolvedPanel).catch(console.error);
          }
        } else {
          // If remote DB is empty, seed it with default Codelco buttons automatically
          const localButtons = defaultCodelcoButtons.map(normalizeButtonIcon);
          buttonsRef.current = localButtons;
          panelRef.current = DEFAULT_PANEL;
          setButtons(localButtons);
          setPanelConfig(DEFAULT_PANEL);
          await saveAllButtons(localButtons);
          await savePanel(DEFAULT_PANEL);
        }
      } catch (err) {
        console.error('Failed to contact Firebase, loading local offline mode:', err);
        // Offline Fallback for robust operations
        const localButtons = defaultCodelcoButtons.map(normalizeButtonIcon);
        buttonsRef.current = localButtons;
        panelRef.current = DEFAULT_PANEL;
        setButtons(localButtons);
        setPanelConfig(DEFAULT_PANEL);
      } finally {
        setLoading(false);
      }
    }
    void loadData();
    return () => {
      if (saveTimerRef.current) clearTimeout(saveTimerRef.current);
    };
  }, []);

  const selectedButton = buttons.find((b) => b.id === selectedButtonId) || null;

  const handleSelectButton = (button: CodelcoButton) => {
    if (button.activo) {
      setSelectedButtonId(button.id);
    }
  };

  const handleDeselect = () => {
    setSelectedButtonId(null);
  };

  if (loading) {
    return (
      <div className="min-h-screen w-full bg-[#F4F8FB] text-slate-800 flex flex-col items-center justify-center gap-4 font-sans">
        <div className="relative flex items-center justify-center">
          <div className="w-12 h-12 border-4 border-sky-300 border-t-sky-600 rounded-full animate-spin" />
          <div className="absolute w-6 h-6 border-4 border-sky-500 border-b-transparent rounded-full animate-spin reverse-spin" />
        </div>
        <div className="text-center space-y-1">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-sky-800 animate-pulse">
            Sincronizando con Servidor CODELCO...
          </span>
          <p className="text-[10px] text-slate-500 font-mono">ESTABLECIENDO ENLACE SEGURO CON BASE DE DATOS DE CABINA</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-[#F4F8FB] text-slate-800 flex flex-col justify-between overflow-x-hidden relative font-sans">
      
      {/* Clean White + Light Blue Industrial Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#EFF6FC] via-[#F8FAFC] to-[#EEF5FA] pointer-events-none z-0" />
      <div className="absolute inset-0 opacity-[0.035] bg-[linear-gradient(to_right,#0284c7_1px,transparent_1px),linear-gradient(to_bottom,#0284c7_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none z-0" />

      {/* Top Header Bar */}
      <header className="w-full max-w-7xl mx-auto px-6 py-5 md:py-6 flex flex-col md:flex-row items-center justify-between gap-6 z-10 border-b border-sky-200/80 bg-white/80 backdrop-blur-md rounded-2xl mt-4 shadow-sm shadow-sky-900/5">
        
        {/* Left Codelco Identity Logo */}
        <CodelcoLogo
          src={panelConfig?.logo || DEFAULT_PANEL.logo}
          empresa={panelConfig?.empresa || DEFAULT_PANEL.empresa}
        />

        {/* Center Title / Subtitle */}
        <div className="text-center md:text-left space-y-1.5 md:pl-6 md:border-l border-sky-200 flex-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100/90 border border-sky-300 text-[10px] font-mono font-bold tracking-widest text-sky-800 uppercase shadow-xs">
            <Shield className="w-3.5 h-3.5 text-sky-600" />
            {panelConfig?.empresa || DEFAULT_PANEL.empresa} • PANEL DE CONTROL
          </div>
          <h1 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight uppercase font-mono">
            {panelConfig?.titulo && panelConfig.titulo !== 'Museo Interactivo de Simbología Industrial' ? panelConfig.titulo : 'IDENTIFICACIÓN DE ALARMAS DE CABINA'}
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 max-w-2xl font-normal leading-relaxed">
            Entrenamiento de operadores para camiones CAEX de alto tonelaje. Seleccione componentes para verificar protocolos operativos de seguridad y alarmas de cabina.
          </p>
        </div>
        
        {/* Right System Info Badge */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => {
              setSelectedButtonId(null);
              setIsEditing(true);
            }}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white shadow-sm transition-all active:scale-95"
            title="Abrir editor completo conectado a Firebase"
          >
            <Pencil className="w-4 h-4 text-amber-400" />
            <span className="text-[10px] font-mono font-black uppercase tracking-wider">Editor</span>
          </button>
          <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-sky-50 border border-sky-200 text-sky-900 shadow-xs">
            <div className="relative flex items-center justify-center">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              <span className="absolute w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping opacity-75" />
            </div>
            <div className="flex flex-col text-left font-mono text-[10px]">
              <span className="font-bold text-sky-950 uppercase tracking-wider">Sistema Operativo</span>
              <span className="text-[9px] text-sky-700 uppercase">{buttons.filter(button => button.activo).length} Alarmas Activas</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Container Content */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 md:px-6 py-6 md:py-10 z-10 flex flex-col gap-10">
        <motion.div
          key="museum-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="space-y-10"
        >
          <AnimatePresence mode="wait">
            {isEditing && panelConfig ? (
              <motion.div
                key="visual-editor"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
              >
                <VisualEditor
                  buttons={buttons}
                  panelConfig={panelConfig}
                  onUpdateButtons={handleUpdateButtons}
                  onUpdatePanel={handleUpdatePanel}
                  onClose={() => void handleCloseEditor()}
                  saveStatus={saveStatus}
                />
              </motion.div>
            ) : !selectedButton ? (
              // Normal panel view
              <motion.div
                key="standard-panel"
                initial={{ opacity: 0, scale: 0.99 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.99 }}
                transition={{ duration: 0.35 }}
                className="w-full flex flex-col items-center justify-center gap-6"
              >
                <PanelViewer
                  buttons={buttons}
                  panelConfig={panelConfig || DEFAULT_PANEL}
                  selectedButtonId={selectedButtonId}
                  onSelectButton={handleSelectButton}
                />
                <div className="text-center space-y-1.5 py-1">
                  <span className="text-[11px] font-mono font-black text-sky-800 tracking-widest uppercase flex items-center justify-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-sm shadow-emerald-400 animate-pulse" />
                    TABLERO DE SUPERVISIÓN CENTRAL
                  </span>
                  <p className="text-xs text-slate-600 font-medium">
                    Presione cualquier componente de alarma para desplegar la información de ingeniería detallada.
                  </p>
                </div>
              </motion.div>
            ) : (
              // Zoomed layout view
              <motion.div
                key="zoomed-panel"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35 }}
                className="w-full flex flex-col lg:flex-row items-stretch justify-center gap-8 lg:gap-10"
              >
                {/* Left Frame: Focused Zoomed button grid */}
                <div className="w-full lg:w-[52%] flex justify-center">
                  <PanelViewer
                    buttons={buttons}
                    panelConfig={panelConfig || DEFAULT_PANEL}
                    selectedButtonId={selectedButtonId}
                    onSelectButton={handleSelectButton}
                  />
                </div>

                {/* Right Frame: Standard SOP Info Card */}
                <div className="w-full lg:w-[48%] flex justify-center">
                  <InfoCard
                    button={selectedButton}
                    onClose={handleDeselect}
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Bottom Developer Signature Section */}
          <div className="w-full border border-sky-200/90 bg-white/90 backdrop-blur-sm rounded-2xl py-6 px-4 flex flex-col items-center justify-center text-center shadow-sm shadow-sky-900/5">
            <p className="text-sm font-mono font-black text-sky-900 tracking-widest uppercase">
              Desarrollado por M. Briceño.
            </p>
          </div>
        </motion.div>
      </main>

      {/* Industrial Clean Footer */}
      <footer className="w-full py-5 text-center text-[10px] text-slate-500 font-mono tracking-widest z-10 border-t border-sky-200/70 bg-white/70 backdrop-blur-sm flex items-center justify-center px-8">
        <span className="uppercase font-medium text-slate-600">CODELCO ORGULLO DE TODOS LOS CHILENOS • © 2026</span>
      </footer>

    </div>
  );
}
