import React from 'react';
import * as Icons from 'lucide-react';
import { resolveAssetUrl } from '../utils/assets';

export type IconType = 'lucide' | 'emoji' | 'svg' | 'png' | 'url';

interface ButtonIconRendererProps {
  tipo: IconType;
  valor: string;
  className?: string;
  color?: string;
  tamano?: number;
}

export default function ButtonIconRenderer({
  tipo,
  valor,
  className = "w-6 h-6",
  color,
  tamano
}: ButtonIconRendererProps) {
  
  // Custom Inline SVG Sanitizer / Renderer
  if (tipo === 'svg') {
    try {
      // Basic validation of SVG string
      if (valor && valor.includes('<svg')) {
        return (
          <div 
            className={`${className} flex items-center justify-center`}
            style={{ 
              color: color || 'currentColor',
              width: tamano ? `${tamano}px` : undefined,
              height: tamano ? `${tamano}px` : undefined
            }}
            dangerouslySetInnerHTML={{ __html: valor }}
          />
        );
      }
    } catch (e) {
      console.error('Invalid SVG content:', e);
    }
    // Fallback if SVG fails
    return <Icons.Settings className={className} size={tamano} style={{ color }} />;
  }

  // Emojis
  if (tipo === 'emoji') {
    return (
      <span 
        className="select-none leading-none block font-normal text-center"
        style={{ fontSize: tamano ? `${tamano}px` : undefined }}
      >
        {valor || '⚙️'}
      </span>
    );
  }

  // PNG, Base64, or remote URLs
  if (tipo === 'png' || tipo === 'url') {
    const sizeStyle = tamano ? { width: `${tamano}px`, height: `${tamano}px` } : {};
    const containerClass = tamano 
      ? "relative flex items-center justify-center rounded-lg overflow-hidden bg-black/40 border p-[2px] transition-all duration-300 flex-shrink-0"
      : "relative flex items-center justify-center rounded-md overflow-hidden bg-black/50 border p-[1px] transition-all duration-300 w-6 h-6 sm:w-7 sm:h-7 max-h-full max-w-full flex-shrink-0";

    return (
      <div 
        className={containerClass}
        style={{ 
          borderColor: color || 'rgba(113, 113, 122, 0.4)',
          boxShadow: `0 2px 6px rgba(0,0,0,0.5), 0 0 6px ${color ? `${color}25` : 'transparent'}`,
          ...sizeStyle
        }}
      >
        <img
          src={resolveAssetUrl(valor) || 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="gray" stroke-width="2"><circle cx="12" cy="12" r="10"/></svg>'}
          alt="Button Icon"
          className="w-full h-full object-contain rounded"
          referrerPolicy="no-referrer"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="gray" stroke-width="2"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M21 15L16 10L5 21"/></svg>';
          }}
        />
        {/* Subtle physical lens highlight overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.04] to-white/[0.12] pointer-events-none" />
      </div>
    );
  }

  // Lucide Icons
  const IconComponent = (Icons as any)[valor];
  if (IconComponent) {
    return <IconComponent className={className} size={tamano} style={{ color }} />;
  }

  // Default fallback Lucide icon
  return <Icons.Sliders className={className} size={tamano} style={{ color }} />;
}

// Available Lucide Icons list for selection
export const POPULAR_LUCIDE_ICONS = [
  'Ban', 'Droplets', 'Disc', 'Lock', 'Settings', 'Shuffle',
  'Compass', 'XCircle', 'Activity', 'Sun', 'TriangleAlert', 'Sliders',
  'ArrowUpDown', 'Power', 'ArrowUp', 'Hash', 'Thermometer', 'Hourglass',
  'Unlock', 'Waves', 'Link', 'OctagonAlert', 'Turtle', 'Gauge', 'Filter',
  'Truck', 'RefreshCw', 'Key', 'Fan', 'Battery', 'Lightbulb', 'Bell',
  'Radio', 'Eye', 'Wrench', 'Cpu', 'Database', 'ShieldAlert', 'Flame',
  'Zap', 'Wind', 'Volume2', 'Wrench', 'HardHat', 'Trash2', 'Copy'
];
