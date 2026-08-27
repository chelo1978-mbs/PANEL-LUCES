export interface ButtonIcon {
  tipo: 'lucide' | 'emoji' | 'svg' | 'png' | 'url';
  valor: string;
  tamano?: number;
}

export interface ButtonImagen {
  tipo: string;
  valor: string;
  tamano?: number;
}

export interface ButtonDatosTecnicos {
  sistema: string;
  componente: string;
  prioridad: 'Crítica' | 'Alta' | 'Media' | 'Baja';
}

export interface CodelcoButton {
  id: string;
  nombre: string;
  fila: number;
  columna: number;
  orden: number;
  activo: boolean;
  visible: boolean;
  categoria: string;
  color: string;
  icono: ButtonIcon;
  imagen: string | ButtonImagen;
  descripcion: string;
  queHace: string;
  cuandoSeUtiliza: string;
  advertencia: string;
  protocolo: string[];
  datosTecnicos: ButtonDatosTecnicos;
}

export interface CodelcoPanel {
  filas: number;
  columnas: number;
  empresa: string;
  logo: string;
  titulo: string;
}
