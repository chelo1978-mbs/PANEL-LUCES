import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CodelcoButton, CodelcoPanel } from '../types';
import ButtonIconRenderer from './ButtonIconRenderer';

interface PanelViewerProps {
  buttons: CodelcoButton[];
  panelConfig: CodelcoPanel;
  selectedButtonId: string | null;
  onSelectButton: (button: CodelcoButton) => void;
}

export default function PanelViewer({
  buttons,
  panelConfig,
  selectedButtonId,
  onSelectButton,
}: PanelViewerProps) {
  const selectedButton = buttons.find((b) => b.id === selectedButtonId) || null;
  const [isMobile, setIsMobile] = useState(false);

  // Responsive state listener
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Grid sizing constants
  const ROWS = Math.max(1, panelConfig.filas || 5);
  const COLS = Math.max(1, panelConfig.columnas || 7);

  // Zooming Calculations
  const scale = isMobile ? 2.2 : 2.6;
  let tx = 0;
  let ty = 0;

  if (selectedButton) {
    // 1-based coordinates
    const r = selectedButton.fila;
    const c = selectedButton.columna;

    // Calculate center of this grid cell in percentage (0 to 100)
    const cx = ((c - 0.5) / COLS) * 100;
    const cy = ((r - 0.5) / ROWS) * 100;

    // Center target point directly in the middle of frame (50%, 50%)
    tx = (50 - cx) * scale;
    ty = (50 - cy) * scale;
  }

  // Create grid matrix
  const gridCells = [];
  for (let r = 1; r <= ROWS; r++) {
    for (let c = 1; c <= COLS; c++) {
      // Find button in this grid coordinate
      const btn = buttons.find((b) => b.fila === r && b.columna === c && b.visible);
      gridCells.push({ fila: r, columna: c, button: btn });
    }
  }

  return (
    <div 
      className="relative w-full aspect-[16/10.5] md:aspect-[16/9.5] bg-[#0A0A0C] rounded-2xl shadow-[0_32px_80px_rgba(0,0,0,0.85)] border-4 border-zinc-800/90 overflow-hidden select-none"
      id="panel-outer-frame"
    >
      {/* Heavy Machinery Bevel / Shadow Overlay */}
      <div className="absolute inset-0 border border-black/80 rounded-xl pointer-events-none z-50 shadow-[inset_0_4px_16px_rgba(255,255,255,0.05),_inset_0_-4px_16px_rgba(0,0,0,0.8)]" />

      {/* Industrial Screws at the 4 Corners */}
      <div className="absolute top-3 left-3 w-3 h-3 rounded-full bg-zinc-700 border border-zinc-900 shadow-inner z-50 flex items-center justify-center">
        <div className="w-1.5 h-0.5 bg-zinc-900 transform rotate-45" />
      </div>
      <div className="absolute top-3 right-3 w-3 h-3 rounded-full bg-zinc-700 border border-zinc-900 shadow-inner z-50 flex items-center justify-center">
        <div className="w-1.5 h-0.5 bg-zinc-900 transform -rotate-45" />
      </div>
      <div className="absolute bottom-3 left-3 w-3 h-3 rounded-full bg-zinc-700 border border-zinc-900 shadow-inner z-50 flex items-center justify-center">
        <div className="w-1.5 h-0.5 bg-zinc-900 transform -rotate-12" />
      </div>
      <div className="absolute bottom-3 right-3 w-3 h-3 rounded-full bg-zinc-700 border border-zinc-900 shadow-inner z-50 flex items-center justify-center">
        <div className="w-1.5 h-0.5 bg-zinc-900 transform rotate-85" />
      </div>

      {/* Industrial Grid Plate of the Console */}
      <motion.div
        className="w-full h-full p-4 sm:p-6 md:p-7"
        animate={{
          scale: selectedButton ? scale : 1,
          x: selectedButton ? `${tx}%` : '0%',
          y: selectedButton ? `${ty}%` : '0%',
        }}
        transition={{
          type: 'spring',
          damping: 26,
          stiffness: 110,
        }}
        style={{
          transformOrigin: '50% 50%',
        }}
      >
        {/* Dynamic Dark Brushed Carbon Plate */}
        <div className="absolute inset-0 bg-[#121215] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900/40 via-[#0E0E10] to-[#08080A] z-0" />
        
        {/* Subtle high-tech guidelines */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#C87533_1px,transparent_1px),linear-gradient(to_bottom,#C87533_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none z-0" />

        {/* Dynamic Grid Plate */}
        <div
          className="relative w-full h-full grid gap-2 md:gap-3 z-10 p-1.5 sm:p-2 md:p-3 bg-black/40 rounded-xl border border-zinc-900 shadow-inner"
          style={{
            gridTemplateColumns: `repeat(${COLS}, minmax(0, 1fr))`,
            gridTemplateRows: `repeat(${ROWS}, minmax(0, 1fr))`
          }}
        >
          {gridCells.map((cell, idx) => {
            const isBtnSelected = selectedButtonId === cell.button?.id;
            const anySelected = selectedButtonId !== null;
            const btn = cell.button;

            return (
              <div 
                key={`${cell.fila}-${cell.columna}-${idx}`}
                className="relative w-full h-full flex items-center justify-center rounded-lg min-h-0 min-w-0"
              >
                {btn ? (
                  <motion.button
                    onClick={() => {
                      if (!anySelected && btn.activo) {
                        onSelectButton(btn);
                      }
                    }}
                    whileHover={!anySelected && btn.activo ? { scale: 1.03 } : {}}
                    whileTap={!anySelected && btn.activo ? { scale: 0.96 } : {}}
                    className={`relative w-full h-full flex flex-col items-center justify-between p-1 sm:p-1.5 rounded-lg border transition-all duration-300 ease-out focus:outline-none select-none overflow-hidden ${
                      isBtnSelected 
                        ? 'border-[#F7A600] bg-zinc-900/95 text-[#F7A600] shadow-[0_0_20px_rgba(247,166,0,0.45)] z-30'
                        : btn.activo
                          ? anySelected
                            ? 'border-zinc-900/30 bg-zinc-950/20 text-zinc-600 opacity-20 pointer-events-none'
                            : 'border-zinc-800/70 bg-zinc-900/85 text-zinc-200 hover:border-zinc-700 hover:bg-zinc-800/90 shadow-md cursor-pointer'
                          : 'border-zinc-900 bg-zinc-950/40 text-zinc-700 opacity-40 cursor-not-allowed'
                    }`}
                    style={{
                      // Left indicator line
                      borderLeftWidth: btn.activo ? '3px' : '1px',
                      borderLeftColor: isBtnSelected ? '#F7A600' : btn.color || '#C87533'
                    }}
                    id={`grid-btn-${btn.id}`}
                    disabled={anySelected && !isBtnSelected}
                  >
                    {/* Position Code (e.g. 1-1) */}
                    <span className="absolute top-1 right-1 text-[6.5px] sm:text-[7px] font-mono font-bold text-zinc-500">
                      {cell.fila}-{cell.columna}
                    </span>

                    {/* Industrial LED Dot Indicator at Top Left */}
                    <div className="absolute top-1 left-1 flex items-center gap-1">
                      <span 
                        className={`w-1.5 h-1.5 rounded-full shadow-sm transition-all duration-300 ${
                          isBtnSelected
                            ? 'bg-[#F7A600] shadow-[0_0_8px_#F7A600]'
                            : btn.activo
                              ? 'bg-[#4CAF50] shadow-[0_0_4px_#4CAF50]'
                              : 'bg-zinc-800'
                        }`} 
                      />
                    </div>

                    {/* Icon / Image Container */}
                    <div className="mt-3 flex-1 w-full min-h-0 flex items-center justify-center py-0.5">
                      <ButtonIconRenderer
                        tipo={btn.icono.tipo}
                        valor={btn.icono.valor}
                        tamano={btn.icono.tamano}
                        className={`w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 max-h-full max-w-full transition-transform duration-300 ${
                          isBtnSelected ? 'scale-110' : 'group-hover:scale-105'
                        }`}
                        color={isBtnSelected ? '#F7A600' : btn.color || '#A0A0AB'}
                      />
                    </div>

                    {/* Button Name Label */}
                    <span className="w-full text-[6.5px] xs:text-[7px] sm:text-[7.5px] md:text-[8px] lg:text-[8.5px] font-bold font-mono text-center tracking-tight leading-[1.1] uppercase select-none px-0.5 pb-0.5 line-clamp-2 break-words">
                      {btn.nombre}
                    </span>

                    {/* Highlight Box when Zoomed */}
                    {isBtnSelected && (
                      <div className="absolute inset-0 rounded-lg border border-[#F7A600]/80 bg-[#F7A600]/5 pointer-events-none animate-pulse" />
                    )}
                  </motion.button>
                ) : (
                  // Blank Spacer / Empty Cover Plate on the Modular Dashboard
                  <div className="relative w-full h-full bg-[#09090C] border border-zinc-900 rounded-lg shadow-inner flex flex-col items-center justify-center p-1 overflow-hidden opacity-60">
                    <div className="w-1.5 h-1.5 rounded-full bg-zinc-800 border border-zinc-950 mb-1" />
                    <span className="text-[6px] sm:text-[7px] font-mono font-bold text-zinc-700 tracking-wider uppercase">
                      RESERVA
                    </span>
                    <span className="text-[5.5px] font-mono text-zinc-800">
                      {cell.fila}-{cell.columna}
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </motion.div>

      {/* Grid Coordinates Overlay */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/70 px-3 py-1 rounded border border-zinc-800 text-[8px] font-mono font-bold tracking-widest text-zinc-500 z-40 uppercase">
        {selectedButton ? `FOCALIZADO: ${selectedButton.id} (${selectedButton.fila}-${selectedButton.columna})` : 'MÓDULO CENTRAL DE SUPERVISIÓN INDUSTRIAL'}
      </div>
    </div>
  );
}
