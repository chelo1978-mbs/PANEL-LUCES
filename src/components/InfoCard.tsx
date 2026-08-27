import { motion } from 'motion/react';
import { CodelcoButton } from '../types';
import { resolveAssetUrl } from '../utils/assets';
import { AlertTriangle, Calendar, Info, ArrowLeft, Settings, HelpCircle, FileText } from 'lucide-react';

interface InfoCardProps {
  button: CodelcoButton | null;
  onClose: () => void;
}

export default function InfoCard({ button, onClose }: InfoCardProps) {
  if (!button) return null;

  const priorityColors = {
    'Crítica': { bg: 'bg-red-50', border: 'border-red-200', text: 'text-red-700', badge: 'bg-red-600' },
    'Alta': { bg: 'bg-orange-50', border: 'border-orange-200', text: 'text-orange-700', badge: 'bg-orange-500' },
    'Media': { bg: 'bg-amber-50', border: 'border-amber-200', text: 'text-amber-800', badge: 'bg-amber-500' },
    'Baja': { bg: 'bg-slate-100', border: 'border-slate-200', text: 'text-slate-700', badge: 'bg-slate-500' }
  };

  const priorityStyle = priorityColors[button.datosTecnicos?.prioridad || 'Media'];

  return (
    <motion.div
      initial={{ opacity: 0, x: 30, scale: 0.96 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={{ opacity: 0, x: 20, scale: 0.96 }}
      transition={{ type: 'spring', damping: 24, stiffness: 140 }}
      className="w-full max-w-xl bg-white border-2 border-sky-200 rounded-2xl shadow-[0_20px_50px_rgba(2,132,199,0.08)] flex flex-col overflow-hidden text-slate-800"
      id={`infocard-${button.id}`}
    >
      {/* Top Accent Strip in Celeste / Blue */}
      <div className="h-2 w-full bg-gradient-to-r from-sky-400 via-sky-600 to-sky-400" />

      {/* Header Container */}
      <div className="p-6 md:p-8 space-y-6 overflow-y-auto max-h-[70vh] custom-scrollbar">
        {/* Badges & Meta Row */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Section/Category Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-sky-50 border border-sky-200 text-[10px] font-mono font-bold uppercase tracking-widest text-sky-800">
            <Settings className="w-3.5 h-3.5 text-sky-600" />
            {button.categoria || 'SISTEMA'}
          </div>

          {/* Technical Priority Badge */}
          <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-md border ${priorityStyle.bg} ${priorityStyle.border} ${priorityStyle.text} text-[10px] font-mono font-bold uppercase tracking-widest`}>
            <span className={`w-1.5 h-1.5 rounded-full ${priorityStyle.badge} animate-pulse`} />
            PRIORIDAD: {button.datosTecnicos?.prioridad || 'MEDIA'}
          </div>
        </div>

        {/* Title */}
        <div className="space-y-1">
          <span className="text-[10px] font-mono font-bold text-sky-700 uppercase tracking-widest">
            ID MANDO: {button.id}
          </span>
          <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 tracking-tight leading-tight uppercase font-sans border-b border-sky-100 pb-3">
            {button.nombre}
          </h2>
        </div>

        {/* Dynamic Image Box */}
        {(() => {
          const hasImage = !!button.imagen;
          const imageUrl = typeof button.imagen === 'string' ? button.imagen : button.imagen?.valor;
          const imageSize = typeof button.imagen === 'string' ? undefined : button.imagen?.tamano;

          if (!hasImage || !imageUrl) return null;

          return (
            <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-sky-200 bg-slate-950 flex items-center justify-center group">
              <img
                src={resolveAssetUrl(imageUrl)}
                alt={button.nombre}
                style={{
                  width: imageSize ? `${imageSize}%` : '100%',
                  height: imageSize ? 'auto' : '100%',
                  maxHeight: '100%',
                  objectFit: imageSize ? 'contain' : 'cover',
                }}
                className="opacity-95 group-hover:opacity-100 transition-all duration-300"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
              <div className="absolute inset-0 border border-sky-400/20 rounded-xl pointer-events-none group-hover:border-sky-400/40 transition-colors" />
            </div>
          );
        })()}

        {/* Technical Data Fields Grid */}
        <div className="grid grid-cols-2 gap-4 bg-sky-50/70 p-4 rounded-xl border border-sky-100 font-mono text-xs">
          <div className="space-y-1">
            <span className="text-slate-500 text-[9px] uppercase tracking-wider block font-semibold">Sistema Operativo</span>
            <span className="text-slate-800 font-bold uppercase">{button.datosTecnicos?.sistema || 'N/A'}</span>
          </div>
          <div className="space-y-1 border-l border-sky-200/80 pl-4">
            <span className="text-slate-500 text-[9px] uppercase tracking-wider block font-semibold">Componente Físico</span>
            <span className="text-slate-800 font-bold uppercase">{button.datosTecnicos?.componente || 'N/A'}</span>
          </div>
        </div>

        {/* Specifications List */}
        <div className="space-y-5">
          {/* Descripción */}
          {button.descripcion && (
            <div className="space-y-1.5">
              <h3 className="text-[10px] font-bold uppercase tracking-widest text-sky-800 flex items-center gap-1.5 font-mono">
                <Info className="w-4 h-4 text-sky-600" />
                Descripción General
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed font-sans">
                {button.descripcion}
              </p>
            </div>
          )}

          {/* ¿Qué hace? */}
          {button.queHace && (
            <div className="space-y-1.5">
              <h3 className="text-[10px] font-bold uppercase tracking-widest text-sky-800 flex items-center gap-1.5 font-mono">
                <HelpCircle className="w-4 h-4 text-sky-600" />
                Acción del Dispositivo (¿Qué hace?)
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed font-sans bg-sky-50/50 p-4 rounded-xl border border-sky-100">
                {button.queHace}
              </p>
            </div>
          )}

          {/* ¿Cuándo se utiliza? */}
          {button.cuandoSeUtiliza && (
            <div className="space-y-1.5">
              <h3 className="text-[10px] font-bold uppercase tracking-widest text-sky-800 flex items-center gap-1.5 font-mono">
                <Calendar className="w-4 h-4 text-sky-600" />
                Condición de Uso (¿Cuándo se utiliza?)
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed font-sans">
                {button.cuandoSeUtiliza}
              </p>
            </div>
          )}

          {/* Advertencia Box */}
          {button.advertencia && (
            <div className="p-4 bg-red-50 border-l-4 border-red-500 rounded-r-xl space-y-1.5">
              <h3 className="text-[10px] font-bold uppercase tracking-widest text-red-700 flex items-center gap-1.5 font-mono">
                <AlertTriangle className="w-4 h-4 text-red-600" />
                ADVERTENCIA DE SEGURIDAD
              </h3>
              <p className="text-xs text-red-900 leading-relaxed font-sans font-medium">
                {button.advertencia}
              </p>
            </div>
          )}

          {/* Protocolo de Operación */}
          {button.protocolo && button.protocolo.length > 0 && (
            <div className="space-y-3 pt-2">
              <h3 className="text-[10px] font-bold uppercase tracking-widest text-sky-800 flex items-center gap-1.5 font-mono">
                <FileText className="w-4 h-4 text-sky-600" />
                Protocolo de Operación Estándar (SOP)
              </h3>
              <div className="space-y-2.5">
                {button.protocolo.map((step, sIdx) => (
                  <div key={sIdx} className="flex gap-3 items-start bg-slate-50 border border-sky-100 p-3 rounded-xl">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-sky-100 border border-sky-300 flex items-center justify-center text-sky-800 text-xs font-mono font-bold">
                      {sIdx + 1}
                    </div>
                    <p className="text-xs text-slate-700 leading-relaxed pt-0.5">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Footer controls */}
      <div className="px-6 py-4 md:px-8 bg-sky-50/70 border-t border-sky-100 flex items-center justify-between">
        <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-semibold">
          Codelco División Norte
        </span>
        <button
          onClick={onClose}
          className="px-5 py-2 rounded-lg bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs flex items-center gap-2 transition-all active:scale-95 shadow-sm shadow-sky-600/30 cursor-pointer"
          id="btn-return-panel"
        >
          <ArrowLeft className="w-4 h-4" />
          VOLVER AL PANEL
        </button>
      </div>
    </motion.div>
  );
}
