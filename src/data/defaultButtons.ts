import { CodelcoButton } from '../types';

export const defaultCodelcoButtons: CodelcoButton[] = [
  // FILA 1: Tracción y Potencia
  {
    id: 'btn-001',
    nombre: 'Inhabilitación General de Tracción',
    fila: 1,
    columna: 1,
    orden: 1,
    activo: true,
    visible: true,
    categoria: 'Tracción y Potencia',
    color: '#F7A600',
    icono: { tipo: 'png', valor: '/imagenes%20botones/btn-001.png', tamano: 70 },
    imagen: '/imagenes_botones/btn-001.svg',
    descripcion: 'Dispositivo electrónico de enclavamiento diseñado para suspender la propulsión de la maquinaria en condiciones críticas.',
    queHace: 'Corta inmediatamente el suministro de energía a los solenoides proporcionales de la transmisión principal, evitando el movimiento accidental de las ruedas.',
    cuandoSeUtiliza: 'Se activa de forma preventiva durante los ciclos de carga de material o cuando la máquina se detiene en zonas de tránsito denso.',
    advertencia: 'No sustituye al freno de servicio hidráulico ni al de estacionamiento mecánico.',
    protocolo: [
      'Paso 1: Detener completamente la marcha del equipo.',
      'Paso 2: Presionar el pulsador de Inhabilitación General.',
      'Paso 3: Confirmar el encendido del LED rojo antes de habilitar el paso de cargadores externos.'
    ],
    datosTecnicos: {
      sistema: 'Power Train / Transmisión',
      componente: 'Solenoide de Corte Principal',
      prioridad: 'Crítica'
    }
  },
  {
    id: 'btn-002',
    nombre: 'Nivel de Aceite de Transmisión',
    fila: 1,
    columna: 2,
    orden: 2,
    activo: true,
    visible: true,
    categoria: 'Tracción y Potencia',
    color: '#F7A600',
    icono: { tipo: 'png', valor: '/imagenes%20botones/btn-002.png', tamano: 70 },
    imagen: '/imagenes_botones/btn-002.svg',
    descripcion: 'Sensor óptico y alarma de nivel del depósito de lubricación de la caja de cambios.',
    queHace: 'Monitorea que el volumen del fluido hidráulico de la transmisión se mantenga por encima del umbral mínimo de operación segura.',
    cuandoSeUtiliza: 'Inspección de diagnóstico rápida previa a la puesta en marcha de la máquina pesada.',
    advertencia: 'Si se ilumina con el motor encendido, apáguelo inmediatamente para evitar daños catastróficos por fricción y calor seco.',
    protocolo: [
      'Paso 1: Detener el camión en un área nivelada y segura.',
      'Paso 2: Colocar la palanca de cambios en Neutro.',
      'Paso 3: Verificar la lectura digital en el indicador auxiliar del tablero.'
    ],
    datosTecnicos: {
      sistema: 'Sistemas Hidráulicos',
      componente: 'Cárter de Transmisión',
      prioridad: 'Alta'
    }
  },
  {
    id: 'btn-003',
    nombre: 'Freno de Estacionamiento (PARK)',
    fila: 1,
    columna: 3,
    orden: 3,
    activo: true,
    visible: true,
    categoria: 'Tracción y Potencia',
    color: '#F7A600',
    icono: { tipo: 'png', valor: '/imagenes%20botones/btn-003.png', tamano: 70 },
    imagen: '/imagenes_botones/btn-003.svg',
    descripcion: 'Interruptor de accionamiento directo del freno de estacionamiento electromecánico.',
    queHace: 'Aplica presión hidráulica inversa para liberar los resortes que bloquean mecánicamente el eje de salida de la transmisión.',
    cuandoSeUtiliza: 'Cada vez que el operador se detenga de manera estática o se prepare para descender de la cabina de control.',
    advertencia: 'Asegúrese de calzar el equipo en pendientes pronunciadas; el freno mecánico podría deslizarse bajo cargas extremas.',
    protocolo: [
      'Paso 1: Reducir la velocidad total mediante el retardador y freno de pie.',
      'Paso 2: Colocar la palanca selectora en Neutral.',
      'Paso 3: Accionar la palanca de freno de estacionamiento en modo "ON" y confirmar bloqueo mecánico.'
    ],
    datosTecnicos: {
      sistema: 'Sistemas de Frenos',
      componente: 'Calíper de Bloqueo de Eje',
      prioridad: 'Crítica'
    }
  },
  {
    id: 'btn-004',
    nombre: 'Bloqueo de Funciones de Implementos',
    fila: 1,
    columna: 4,
    orden: 4,
    activo: true,
    visible: true,
    categoria: 'Tracción y Potencia',
    color: '#F7A600',
    icono: { tipo: 'png', valor: '/imagenes%20botones/btn-004.png', tamano: 70 },
    imagen: '/imagenes_botones/btn-004.svg',
    descripcion: 'Sistema de aislamiento hidráulico de seguridad para evitar operaciones involuntarias de los brazos de trabajo.',
    queHace: 'Desenergiza la válvula solenoide piloto hidráulica del cargador, pala o implemento acoplado.',
    cuandoSeUtiliza: 'Durante traslados a alta velocidad o al circular por carreteras de servicio público.',
    advertencia: 'Este botón no detiene caídas lentas causadas por fugas de sellos internos de los cilindros hidráulicos.',
    protocolo: [
      'Paso 1: Colocar los implementos a nivel de piso (pala/tolva abajo).',
      'Paso 2: Accionar el interruptor de bloqueo en la consola derecha.',
      'Paso 3: Mover las palancas de mando para confirmar el bloqueo piloto.'
    ],
    datosTecnicos: {
      sistema: 'Sistema de Implementos',
      componente: 'Válvula de Alivio Piloto',
      prioridad: 'Alta'
    }
  },
  {
    id: 'btn-005',
    nombre: 'Traba del Diferencial Eje Delantero',
    fila: 1,
    columna: 5,
    orden: 5,
    activo: true,
    visible: true,
    categoria: 'Tracción y Potencia',
    color: '#F7A600',
    icono: { tipo: 'png', valor: '/imagenes%20botones/btn-005.png', tamano: 70 },
    imagen: '/imagenes_botones/btn-005.svg',
    descripcion: 'Acoplamiento rígido de tracción para el diferencial del eje de dirección delantero.',
    queHace: 'Bloquea el engranaje planetario delantero forzando a que ambas ruedas giren a la misma velocidad sin importar la carga.',
    cuandoSeUtiliza: 'Al ingresar a fango denso, arena suelta, nieve o rampas mojadas donde una rueda comienza a patinar.',
    advertencia: 'Estrictamente prohibido realizar giros cerrados con el diferencial bloqueado para evitar la rotura de los palieres.',
    protocolo: [
      'Paso 1: Detener o reducir la marcha a menos de 5 km/h.',
      'Paso 2: Alinear las ruedas delanteras en sentido recto.',
      'Paso 3: Presionar el interruptor basculante de traba.'
    ],
    datosTecnicos: {
      sistema: 'Diferenciales y Ejes',
      componente: 'Actuador Neumático/Hidráulico de Corona',
      prioridad: 'Alta'
    }
  },
  {
    id: 'btn-006',
    nombre: 'Traba de la Caja de Transferencia',
    fila: 1,
    columna: 6,
    orden: 6,
    activo: true,
    visible: true,
    categoria: 'Tracción y Potencia',
    color: '#F7A600',
    icono: { tipo: 'png', valor: '/imagenes%20botones/btn-006.png', tamano: 70 },
    imagen: '/imagenes_botones/btn-006.svg',
    descripcion: 'Interruptor selector de bloqueo para el diferencial central de transferencia de fuerza tracción 4x4.',
    queHace: 'Solidariza la distribución de torque en proporción exacta 50% adelante y 50% atrás de forma mecánica.',
    cuandoSeUtiliza: 'En condiciones extremas de baja adherencia para mantener un avance sostenido en pendientes pronunciadas de cantera.',
    advertencia: 'Su uso prolongado en asfalto o superficies secas genera torsión excesiva en la transmisión (wind-up) y desgaste prematuro.',
    protocolo: [
      'Paso 1: Asegurarse de que el motor esté a ralentí.',
      'Paso 2: Conectar la traba central mediante el mando manual.',
      'Paso 3: Conducir con velocidades de torque bajas y estables.'
    ],
    datosTecnicos: {
      sistema: 'Caja de Transferencia',
      componente: 'Eje de Acoplamiento Central',
      prioridad: 'Alta'
    }
  },

  // FILA 2: Sistemas de Operación / Dirección
  {
    id: 'btn-007',
    nombre: 'Dirección de Emergencia / Auxiliar',
    fila: 2,
    columna: 1,
    orden: 7,
    activo: true,
    visible: true,
    categoria: 'Dirección',
    color: '#C87533',
    icono: { tipo: 'png', valor: '/imagenes%20botones/btn-007.png', tamano: 70 },
    imagen: '/imagenes_botones/btn-007.svg',
    descripcion: 'Indicador y sistema de activación hidráulico alterno en caso de caída de presión en la línea primaria de dirección.',
    queHace: 'Arranca un motor eléctrico auxiliar que bombea fluido hidráulico directo al sistema de dirección para mantener el control mecánico.',
    cuandoSeUtiliza: 'Se enciende de forma automática si la bomba principal de dirección falla con el equipo en movimiento.',
    advertencia: 'La bomba auxiliar consume gran energía de batería. Detenga el equipo inmediatamente en una zona despejada.',
    protocolo: [
      'Paso 1: Mantener la calma y sujetar el volante con fuerza.',
      'Paso 2: Dirigir el equipo a un área segura de detención inmediata.',
      'Paso 3: Notificar por radio a operaciones sobre la falla de dirección primaria.'
    ],
    datosTecnicos: {
      sistema: 'Sistema de Dirección',
      componente: 'Bomba Eléctrica de Respaldo 24V',
      prioridad: 'Crítica'
    }
  },
  {
    id: 'btn-008',
    nombre: 'Inhabilitación de Retardador',
    fila: 2,
    columna: 2,
    orden: 8,
    activo: true,
    visible: true,
    categoria: 'Frenos',
    color: '#C87533',
    icono: { tipo: 'png', valor: '/imagenes%20botones/btn-008.png', tamano: 70 },
    imagen: '/imagenes_botones/btn-008.svg',
    descripcion: 'Interruptor de anulación del freno hidrodinámico o retardador de transmisión.',
    queHace: 'Corta las señales de modulación del freno hidráulico, transfiriendo toda la responsabilidad de frenado al sistema de discos húmedos.',
    cuandoSeUtiliza: 'Al conducir sobre hielo, asfalto resbaladizo o calzadas extremadamente mojadas para evitar el bloqueo del eje trasero.',
    advertencia: 'Al desactivarlo, aumenta la fatiga térmica del freno mecánico. Reduzca la velocidad general del vehículo.',
    protocolo: [
      'Paso 1: Evaluar las condiciones de adherencia del camino.',
      'Paso 2: Accionar el interruptor para apagar el retardador hidrodinámico.',
      'Paso 3: Aplicar frenado de servicio de forma manual y progresiva.'
    ],
    datosTecnicos: {
      sistema: 'Sistemas de Frenado Auxiliar',
      componente: 'Solenoide de Retardador de Transmisión',
      prioridad: 'Alta'
    }
  },
  {
    id: 'btn-009',
    nombre: 'Presión de Frenos de Servicio',
    fila: 2,
    columna: 3,
    orden: 9,
    activo: true,
    visible: true,
    categoria: 'Frenos',
    color: '#C87533',
    icono: { tipo: 'png', valor: '/imagenes%20botones/btn-009.png', tamano: 70 },
    imagen: '/imagenes_botones/btn-009.svg',
    descripcion: 'Luz piloto de alerta de presión en el circuito acumulador de los frenos de pie.',
    queHace: 'Señala que los acumuladores de presión de nitrógeno/fluido mantienen la carga requerida para el frenado de emergencia.',
    cuandoSeUtiliza: 'Autodiagnóstico preventivo. Debe apagarse pocos segundos después del arranque del motor una vez cargado el sistema.',
    advertencia: 'Si la alerta se enciende durante el trayecto, los frenos fallarán de forma inminente. Utilice el freno manual de parqueo.',
    protocolo: [
      'Paso 1: Detener la marcha del equipo de inmediato mediante los frenos remanentes.',
      'Paso 2: Aplicar el freno de estacionamiento de seguridad.',
      'Paso 3: Apagar el motor diésel y solicitar asistencia mecánica.'
    ],
    datosTecnicos: {
      sistema: 'Circuito de Frenado Principal',
      componente: 'Acumuladores de Nitrógeno Tipo Pistón',
      prioridad: 'Crítica'
    }
  },
  {
    id: 'btn-010',
    nombre: 'Luces de Trabajo de Carretera',
    fila: 2,
    columna: 4,
    orden: 10,
    activo: true,
    visible: true,
    categoria: 'Iluminación',
    color: '#C87533',
    icono: { tipo: 'png', valor: '/imagenes%20botones/btn-010.png', tamano: 70 },
    imagen: '/imagenes_botones/btn-010.svg',
    descripcion: 'Selector de luces halógenas o proyectores de alta potencia del chasis de la máquina.',
    queHace: 'Energiza directamente los relés de iluminación de alta intensidad exteriores para visibilidad panorámica.',
    cuandoSeUtiliza: 'En condiciones de penumbra nocturna o al ingresar a frentes cerrados de túneles y excavaciones.',
    advertencia: 'Apague estas luces en carreteras públicas para evitar el encandilamiento total de otros conductores civiles.',
    protocolo: [
      'Paso 1: Encender las luces de posición normales.',
      'Paso 2: Activar el interruptor de luces de carretera en áreas de rajo abierto.',
      'Paso 3: Desactivar temporalmente al cruzar con otros equipos de frente.'
    ],
    datosTecnicos: {
      sistema: 'Sistema Eléctrico 24V',
      componente: 'Faros Halógenos Frontales Chasis',
      prioridad: 'Baja'
    }
  },
  {
    id: 'btn-011',
    nombre: 'Alerta de Falla de Transmisión',
    fila: 2,
    columna: 5,
    orden: 11,
    activo: true,
    visible: true,
    categoria: 'Transmisión',
    color: '#C87533',
    icono: { tipo: 'png', valor: '/imagenes%20botones/btn-011.png', tamano: 70 },
    imagen: '/imagenes_botones/btn-011.svg',
    descripcion: 'Piloto central de diagnóstico electrónico de averías en la transmisión de potencia.',
    queHace: 'Indica que el microcontrolador de la TCU ha registrado códigos de error graves relacionados con presiones de embrague o deslizamientos.',
    cuandoSeUtiliza: 'Supervisión constante en el tablero principal de alerta de códigos activos del motor de fuerza.',
    advertencia: 'Requiere detención técnica y diagnóstico con escáner OBD. Continuar operando puede destruir los embragues planetarios.',
    protocolo: [
      'Paso 1: Llevar el equipo a un andén de taller o zona despejada.',
      'Paso 2: Registrar el código numérico de falla que parpadea en la pantalla.',
      'Paso 3: Solicitar revisión de diagnóstico de transmisión.'
    ],
    datosTecnicos: {
      sistema: 'Control de Transmisión Electrónico',
      componente: 'Unidad TCU Electrónica',
      prioridad: 'Crítica'
    }
  },
  {
    id: 'btn-012',
    nombre: 'Modulación de Transmisión (Embrague)',
    fila: 2,
    columna: 6,
    orden: 12,
    activo: true,
    visible: true,
    categoria: 'Transmisión',
    color: '#C87533',
    icono: { tipo: 'png', valor: '/imagenes%20botones/btn-012.png', tamano: 70 },
    imagen: '/imagenes_botones/btn-012.svg',
    descripcion: 'Ajuste del nivel de modulación del flujo hidráulico en el cambio de marcha.',
    queHace: 'Modifica la velocidad de llenado y presión en las cámaras de los pistones de los embragues húmedos.',
    cuandoSeUtiliza: 'Al ajustar la respuesta de la máquina según se realicen operaciones pesadas de empuje o transporte de alta velocidad.',
    advertencia: 'Una modulación demasiado lenta aumentará la fricción interna y generará sobrecalentamiento prematuro del aceite.',
    protocolo: [
      'Paso 1: Ajustar el selector rotativo según el tipo de terreno.',
      'Paso 2: Realizar pruebas de embrague en marchas iniciales.',
      'Paso 3: Monitorear que los cambios sean suaves pero firmes.'
    ],
    datosTecnicos: {
      sistema: 'Hidráulica de Transmisión',
      componente: 'Válvula Moduladora Proporcional',
      prioridad: 'Media'
    }
  },

  // FILA 3: Hidráulica y Chasis
  {
    id: 'btn-013',
    nombre: 'Control de Suspensión Autonivelante',
    fila: 3,
    columna: 1,
    orden: 13,
    activo: true,
    visible: true,
    categoria: 'Sistema Hidráulico',
    color: '#4CAF50',
    icono: { tipo: 'png', valor: '/imagenes%20botones/btn-013.png', tamano: 70 },
    imagen: '/imagenes_botones/btn-013.svg',
    descripcion: 'Sistema de control para la amortiguación hidroneumática de los ejes de carga.',
    queHace: 'Abre o cierra válvulas reguladoras para equilibrar el volumen de nitrógeno de los acumuladores en función de la carga útil del chasis.',
    cuandoSeUtiliza: 'Al realizar transporte en terrenos irregulares para reducir la fatiga mecánica del chasis y mejorar la comodidad.',
    advertencia: 'No realice este ajuste en rampas pronunciadas o con personal operando debajo del vehículo.',
    protocolo: [
      'Paso 1: Detener por completo la máquina.',
      'Paso 2: Habilitar el control de auto-nivelado en el panel izquierdo.',
      'Paso 3: Esperar que el chasis se estabilice antes de continuar la marcha.'
    ],
    datosTecnicos: {
      sistema: 'Sistema de Suspensión CAEX',
      componente: 'Cilindros Hidroneumáticos Delanteros/Traseros',
      prioridad: 'Alta'
    }
  },
  {
    id: 'btn-014',
    nombre: 'Seccionador Eléctrico Principal',
    fila: 3,
    columna: 2,
    orden: 14,
    activo: true,
    visible: true,
    categoria: 'Motor',
    color: '#4CAF50',
    icono: { tipo: 'png', valor: '/imagenes%20botones/btn-014.png', tamano: 70 },
    imagen: '/imagenes_botones/btn-014.svg',
    descripcion: 'Interruptor central térmico de corte de energía general para las líneas de la batería.',
    queHace: 'Abre mecánicamente el circuito principal para aislar por completo la electrónica de control y potencia del motor.',
    cuandoSeUtiliza: 'Al estacionar el equipo por períodos prolongados de inactividad o antes de iniciar mantenimiento crítico.',
    advertencia: 'Nunca desactive el aislador con el motor en marcha; el pico de tensión resultante destruirá alternadores y sensores del PLC.',
    protocolo: [
      'Paso 1: Apagar el motor diésel y esperar a que la computadora se apague.',
      'Paso 2: Girar la llave mecánica de corte a la posición "OFF".',
      'Paso 3: Instalar candado y tarjeta de seguridad (LOTO) en el interruptor físico.'
    ],
    datosTecnicos: {
      sistema: 'Sistema Eléctrico de Chasis',
      componente: 'Interruptor Master Rotativo Heavy Duty',
      prioridad: 'Crítica'
    }
  },
  {
    id: 'btn-015',
    nombre: 'Control de Elevación de Tolva',
    fila: 3,
    columna: 3,
    orden: 15,
    activo: true,
    visible: true,
    categoria: 'Sistema Hidráulico',
    color: '#4CAF50',
    icono: { tipo: 'png', valor: '/imagenes%20botones/btn-015.png', tamano: 70 },
    imagen: '/imagenes_botones/btn-015.svg',
    descripcion: 'Mando proporcional hidráulico para el volteo de tolvas de carga extrapesadas.',
    queHace: 'Modula la dirección del flujo de las bombas de alta presión a los cilindros telescópicos de elevación de tolva.',
    cuandoSeUtiliza: 'Durante los ciclos normales de descarga de material pétreo o mineral en la zona de acopio.',
    advertencia: 'Asegúrese de que el camión se encuentre sobre un terreno perfectamente nivelado antes de levantar la tolva.',
    protocolo: [
      'Paso 1: Colocar la palanca en Neutro y aplicar frenos de servicio.',
      'Paso 2: Jalar la palanca de elevación de tolva hacia atrás de manera progresiva.',
      'Paso 3: Al finalizar la descarga, empujar la palanca hacia adelante para bajar la tolva por gravedad.'
    ],
    datosTecnicos: {
      sistema: 'Sistema de Volteo Hidráulico',
      componente: 'Cilindros Hidráulicos Telescópicos de 3 Etapas',
      prioridad: 'Crítica'
    }
  },
  {
    id: 'btn-016',
    nombre: 'Límite de Marcha (Bloqueo 5ta)',
    fila: 3,
    columna: 4,
    orden: 16,
    activo: true,
    visible: true,
    categoria: 'Transmisión',
    color: '#4CAF50',
    icono: { tipo: 'png', valor: '/imagenes%20botones/btn-016.png', tamano: 70 },
    imagen: '/imagenes_botones/btn-016.svg',
    descripcion: 'Inhibidor electrónico de cambios para restringir la transmisión hasta la cuarta marcha.',
    queHace: 'Comunica a la TCU la restricción de acoplamiento para bloquear el engranaje de sobremarcha más alto.',
    cuandoSeUtiliza: 'Durante el descenso cargado en pendientes de mina para maximizar el frenado hidrodinámico por compresión.',
    advertencia: 'No exceda el límite de RPM nominal del motor diésel; controle la velocidad combinando con el freno de servicio.',
    protocolo: [
      'Paso 1: Reducir velocidad por debajo del umbral de acoplamiento de 4ta.',
      'Paso 2: Pulsar el botón de límite de cambios en el tablero de consola.',
      'Paso 3: Confirmar la indicación en la pantalla del tablero.'
    ],
    datosTecnicos: {
      sistema: 'Gestión Electrónica de Marchas',
      componente: 'Mapeo de Solenoide de Sobremarcha 5ta',
      prioridad: 'Alta'
    }
  },
  {
    id: 'btn-017',
    nombre: 'Temperatura Aceite Transmisión',
    fila: 3,
    columna: 5,
    orden: 17,
    activo: true,
    visible: true,
    categoria: 'Transmisión',
    color: '#4CAF50',
    icono: { tipo: 'png', valor: '/imagenes%20botones/btn-017.png', tamano: 70 },
    imagen: '/imagenes_botones/btn-017.svg',
    descripcion: 'Monitoreo continuo de la temperatura térmica del fluido hidráulico de transmisión.',
    queHace: 'Informa ópticamente un exceso de calor detectado en el colector de la caja o del convertidor de par.',
    cuandoSeUtiliza: 'Indicador preventivo automático. Se enciende cuando el fluido supera el umbral crítico de 115°C.',
    advertencia: 'Si se activa, detenga el avance, coloque neutro y mantenga el motor a ralentí moderado para permitir el enfriamiento.',
    protocolo: [
      'Paso 1: Detener la marcha del equipo a un costado seguro del rajo.',
      'Paso 2: Colocar la palanca en Neutral y mantener el motor encendido a 1200 RPM.',
      'Paso 3: Esperar que el indicador se apague antes de reiniciar la operación.'
    ],
    datosTecnicos: {
      sistema: 'Enfriamiento de Transmisión',
      componente: 'Termocupla de Temperatura del Convertidor',
      prioridad: 'Alta'
    }
  },
  {
    id: 'btn-018',
    nombre: 'Horómetro de Servicio de Transmisión',
    fila: 3,
    columna: 6,
    orden: 18,
    activo: true,
    visible: true,
    categoria: 'Transmisión',
    color: '#4CAF50',
    icono: { tipo: 'png', valor: '/imagenes%20botones/btn-018.png', tamano: 70 },
    imagen: '/imagenes_botones/btn-018.svg',
    descripcion: 'Indicador de horas acumuladas de operación mecánica de la transmisión.',
    queHace: 'Registra el tiempo neto de rotación del eje de transmisión para establecer intervalos regulares de servicio preventivo.',
    cuandoSeUtiliza: 'Únicamente para auditorías de mantenimiento preventivo técnico y control de desgaste de piezas.',
    advertencia: 'El horómetro se bloquea si se detecta sabotaje o desconexión deliberada en los cables del captador magnético.',
    protocolo: [
      'Paso 1: Encender el interruptor de instrumentos.',
      'Paso 2: Tomar lectura del panel digital del horómetro.',
      'Paso 3: Registrar el dato en la bitácora diaria de operación.'
    ],
    datosTecnicos: {
      sistema: 'Instrumentación de Cabina',
      componente: 'Contador de Impulsos Magnéticos de Transmisión',
      prioridad: 'Baja'
    }
  },

  // FILA 4: Alarmas de Chasis y Depósitos
  {
    id: 'btn-019',
    nombre: 'Inhabilitación de Bloqueo de Tracción',
    fila: 4,
    columna: 1,
    orden: 19,
    activo: true,
    visible: true,
    categoria: 'Tracción y Potencia',
    color: '#1976D2',
    icono: { tipo: 'png', valor: '/imagenes%20botones/btn-019.png', tamano: 70 },
    imagen: '/imagenes_botones/btn-019.svg',
    descripcion: 'Interruptor para anular el acoplamiento automático de tracción del chasis.',
    queHace: 'Inhabilita el acoplamiento del diferencial automático de deslizamiento limitado regulado por el controlador principal.',
    cuandoSeUtiliza: 'Durante trayectos largos sobre carreteras secas donde no se requiere tracción forzada adicional.',
    advertencia: 'Reduzca la velocidad general del vehículo antes de realizar maniobras de curva sobre terrenos resbaladizos.',
    protocolo: [
      'Paso 1: Asegurarse de transitar en camino seco pavimentado.',
      'Paso 2: Activar la inhabilitación del bloqueo.',
      'Paso 3: Monitorear el correcto rodaje y consumo de combustible.'
    ],
    datosTecnicos: {
      sistema: 'Tracción Electrónica Automática',
      componente: 'Solenoide de Presión Diferencial Trasero',
      prioridad: 'Media'
    }
  },
  {
    id: 'btn-020',
    nombre: 'Nivel del Depósito Hidráulico General',
    fila: 4,
    columna: 2,
    orden: 20,
    activo: true,
    visible: true,
    categoria: 'Sistema Hidráulico',
    color: '#1976D2',
    icono: { tipo: 'png', valor: '/imagenes%20botones/btn-020.png', tamano: 70 },
    imagen: '/imagenes_botones/btn-020.svg',
    descripcion: 'Sensor óptico e indicador de nivel bajo de aceite en el tanque de implementos principal.',
    queHace: 'Advierte que el depósito hidráulico general ha descendido por debajo del límite mínimo para los cilindros.',
    cuandoSeUtiliza: 'Monitoreo indispensable antes de realizar levantamientos de tolva o excavaciones extremas.',
    advertencia: 'Trabajar con nivel bajo de aceite hidráulico genera aireación e implosión de microburbujas, dañando las bombas.',
    protocolo: [
      'Paso 1: Estacionar el equipo y colocar todos los implementos abajo.',
      'Paso 2: Verificar el nivel visual en la mirilla física del tanque.',
      'Paso 3: Rellenar con fluido hidráulico norma ISO 46 si el nivel es bajo.'
    ],
    datosTecnicos: {
      sistema: 'Sistema Hidráulico de Implementos',
      componente: 'Interruptor de Flotador de Nivel Crítico',
      prioridad: 'Alta'
    }
  },
  {
    id: 'btn-021',
    nombre: 'Traba Eléctrica de la Transmisión',
    fila: 4,
    columna: 3,
    orden: 21,
    activo: true,
    visible: true,
    categoria: 'Transmisión',
    color: '#1976D2',
    icono: { tipo: 'png', valor: '/imagenes%20botones/btn-021.png', tamano: 70 },
    imagen: '/imagenes_botones/btn-021.svg',
    descripcion: 'Interruptor auxiliar para el embrague hidráulico de la caja de cambios.',
    queHace: 'Interrumpe eléctricamente la alimentación a los solenoides de tracción permitiendo el rodaje libre temporal sin carga.',
    cuandoSeUtiliza: 'Durante maniobras de precisión extrema o detención rápida de la máquina sin apagar el motor.',
    advertencia: 'No lo use como un sistema de freno continuo; genera picos térmicos severos en el paquete de embragues.',
    protocolo: [
      'Paso 1: Desacelerar y activar la traba electrónica.',
      'Paso 2: Mover el equipo en cortas distancias a velocidad regulada.',
      'Paso 3: Desactivar la traba al retornar a marchas normales.'
    ],
    datosTecnicos: {
      sistema: 'Mecanismo de Desconexión Rápida',
      componente: 'Relé de Desenergización Selectiva',
      prioridad: 'Media'
    }
  },
  {
    id: 'btn-022',
    nombre: 'Alerta de Inclinación de Chasis',
    fila: 4,
    columna: 4,
    orden: 22,
    activo: true,
    visible: true,
    categoria: 'Seguridad',
    color: '#1976D2',
    icono: { tipo: 'png', valor: '/imagenes%20botones/btn-022.png', tamano: 70 },
    imagen: '/imagenes_botones/btn-022.svg',
    descripcion: 'Alarma de seguridad giroscópica integrada en el chasis para la prevención de vuelcos.',
    queHace: 'Mide la inclinación angular de la máquina y alerta acústicamente si se superan los límites de pendiente lateral.',
    cuandoSeUtiliza: 'Monitoreo automático activo durante todo el proceso de excavación o descarga de áridos en laderas.',
    advertencia: 'Si la alerta se enciende, baje de inmediato la tolva de carga y retroceda con extrema precaución a suelo plano.',
    protocolo: [
      'Paso 1: Detener la marcha y evitar levantar la tolva.',
      'Paso 2: Desplazarse lentamente en reversa en línea recta.',
      'Paso 3: Nivelar la base de operaciones antes de retomar la descarga.'
    ],
    datosTecnicos: {
      sistema: 'Seguridad Antivuelcos CAEX',
      componente: 'Sensor Inclinómetro de Estado Sólido',
      prioridad: 'Crítica'
    }
  },
  {
    id: 'btn-023',
    nombre: 'Temperatura del Aceite Hidráulico',
    fila: 4,
    columna: 5,
    orden: 23,
    activo: true,
    visible: true,
    categoria: 'Sistema Hidráulico',
    color: '#1976D2',
    icono: { tipo: 'png', valor: '/imagenes%20botones/btn-023.png', tamano: 70 },
    imagen: '/imagenes_botones/btn-023.svg',
    descripcion: 'Sensor térmico preventivo de alta temperatura en el circuito de los implementos de excavación.',
    queHace: 'Monitorea el sobrecalentamiento del fluido hidráulico de alta presión que alimenta las bombas de pistones.',
    cuandoSeUtiliza: 'Debe permanecer apagado. Se activa de forma automática si la temperatura del depósito supera los 95°C.',
    advertencia: 'El calor degrada irreversiblemente el aceite y destruye los empaques, provocando fugas masivas.',
    protocolo: [
      'Paso 1: Reducir la exigencia de las palancas de excavación.',
      'Paso 2: Dejar el equipo a ralentí moderado en una zona plana.',
      'Paso 3: Confirmar que el radiador hidráulico auxiliar se active correctamente.'
    ],
    datosTecnicos: {
      sistema: 'Enfriamiento Hidráulico Central',
      componente: 'Sensor Térmico de Retorno de Tanque',
      prioridad: 'Alta'
    }
  },
  {
    id: 'btn-024',
    nombre: 'Marcha de Fuerza / Reductora (Tortuga)',
    fila: 4,
    columna: 6,
    orden: 24,
    activo: true,
    visible: true,
    categoria: 'Transmisión',
    color: '#1976D2',
    icono: { tipo: 'png', valor: '/imagenes%20botones/btn-024.png', tamano: 70 },
    imagen: '/imagenes_botones/btn-024.svg',
    descripcion: 'Interruptor selector para marchas planetarias reductoras de fuerza máxima.',
    queHace: 'Modifica electrónicamente la relación de engranajes de la caja de velocidades para entregar el par motor máximo.',
    cuandoSeUtiliza: 'Al subir rampas con la carga máxima del camión o en terrenos altamente inestables y resbaladizos.',
    advertencia: 'Limite estrictamente la velocidad máxima del chasis; engranar a alta revolución causará rotura de coronas.',
    protocolo: [
      'Paso 1: Frenar y detener completamente el camión.',
      'Paso 2: Colocar Neutro y accionar el selector "Tortuga / Fuerza".',
      'Paso 3: Engranar primera marcha y avanzar con aceleración suave.'
    ],
    datosTecnicos: {
      sistema: 'Reducción de Engranajes Planetarios',
      componente: 'Solenoide de Acoplamiento de Reductora (Low)',
      prioridad: 'Alta'
    }
  },

  // FILA 5: Filtros de Combustible y Ventiladores
  {
    id: 'btn-025',
    nombre: 'Presión de Aceite del Retardador',
    fila: 5,
    columna: 1,
    orden: 25,
    activo: true,
    visible: true,
    categoria: 'Frenos',
    color: '#C87533',
    icono: { tipo: 'png', valor: '/imagenes%20botones/btn-025.png', tamano: 70 },
    imagen: '/imagenes_botones/btn-025.svg',
    descripcion: 'Monitoreo de presión en la cámara de par de freno hidráulico del retardador.',
    queHace: 'Verifica la presión hidráulica de inyección de aceite para asegurar la retención hidrodinámica adecuada.',
    cuandoSeUtiliza: 'Supervisión de seguridad técnica durante descensos prolongados con control de velocidad activo.',
    advertencia: 'Un descenso de presión del retardador transferirá la inercia del vehículo a los frenos de pie, recalentándolos.',
    protocolo: [
      'Paso 1: Detener la marcha del camión CAEX cargado.',
      'Paso 2: Conectar el retardador manual al nivel 3.',
      'Paso 3: Monitorear que la aguja o gráfico del acumulador suba al rango verde.'
    ],
    datosTecnicos: {
      sistema: 'Sistemas de Freno Hidrodinámico',
      componente: 'Bomba de Carga del Retardador',
      prioridad: 'Alta'
    }
  },
  {
    id: 'btn-026',
    nombre: 'Separador de Agua (Filtro Diésel)',
    fila: 5,
    columna: 2,
    orden: 26,
    activo: true,
    visible: true,
    categoria: 'Filtros',
    color: '#C87533',
    icono: { tipo: 'png', valor: '/imagenes%20botones/btn-026.png', tamano: 70 },
    imagen: '/imagenes_botones/btn-026.svg',
    descripcion: 'Sensor de humedad y drenaje en el sistema de filtrado primario de combustible.',
    queHace: 'Advierte sobre la presencia de agua decantada en el fondo del recipiente de filtro de combustible diésel.',
    cuandoSeUtiliza: 'Revisión técnica de combustible. Se activa automáticamente por diferencia de conductividad.',
    advertencia: 'Drene de inmediato el filtro mediante la válvula manual inferior. El agua destruirá los inyectores common-rail.',
    protocolo: [
      'Paso 1: Apagar el motor y colocar tarjeta de bloqueo.',
      'Paso 2: Abrir la válvula de drenaje en la base del filtro primario.',
      'Paso 3: Cerrar al observar flujo limpio de diésel sin agua.'
    ],
    datosTecnicos: {
      sistema: 'Alimentación de Combustible',
      componente: 'Filtro Separador de Humedad Canister',
      prioridad: 'Alta'
    }
  },
  {
    id: 'btn-027',
    nombre: 'Bloqueo de Tracción del Remolque',
    fila: 5,
    columna: 3,
    orden: 27,
    activo: true,
    visible: true,
    categoria: 'Tracción y Potencia',
    color: '#C87533',
    icono: { tipo: 'png', valor: '/imagenes%20botones/btn-027.png', tamano: 70 },
    imagen: '/imagenes_botones/btn-027.svg',
    descripcion: 'Sistema de acoplamiento hidráulico de asistencia motriz para el remolque.',
    queHace: 'Habilita o desconecta el flujo de aceite para motores hidrostáticos acoplados a las ruedas del remolque trasero.',
    cuandoSeUtiliza: 'Durante arranques difíciles en subidas de cantera resbaladizas con alta carga útil acoplada.',
    advertencia: 'Desactivar obligatoriamente al superar los 15 km/h para evitar sobrecalentamiento destructivo del fluido.',
    protocolo: [
      'Paso 1: Alinear el remolque en sentido recto al tractor.',
      'Paso 2: Conectar la tracción asistida del remolque.',
      'Paso 3: Avanzar con torque controlado.'
    ],
    datosTecnicos: {
      sistema: 'Tracción Auxiliar Hidrostática',
      componente: 'Motores de Pistones Radiales en Ruedas',
      prioridad: 'Media'
    }
  },
  {
    id: 'btn-028',
    nombre: 'Bypass de Filtro de Aceite Hidráulico',
    fila: 5,
    columna: 4,
    orden: 28,
    activo: true,
    visible: true,
    categoria: 'Filtros',
    color: '#C87533',
    icono: { tipo: 'png', valor: '/imagenes%20botones/btn-028.png', tamano: 70 },
    imagen: '/imagenes_botones/btn-028.svg',
    descripcion: 'Sensor diferencial de presión para la protección contra obstrucciones en el filtro hidráulico.',
    queHace: 'Indica que el elemento de filtrado está saturado de micropartículas, provocando que el aceite circule sin filtrar por la válvula bypass.',
    cuandoSeUtiliza: 'Diagnóstico técnico preventivo para programar paradas de mantenimiento del tren hidráulico.',
    advertencia: 'El aceite sin filtrar erosionará rápidamente las caras de fricción de las bombas y válvulas direccionales.',
    protocolo: [
      'Paso 1: Detener operaciones de implementos.',
      'Paso 2: Reportar alarma de bypass de filtro al supervisor.',
      'Paso 3: Reemplazar el cartucho filtrante de micropartículas en taller.'
    ],
    datosTecnicos: {
      sistema: 'Filtrado Hidráulico Central',
      componente: 'Válvula Bypass Presostato',
      prioridad: 'Alta'
    }
  },
  {
    id: 'btn-029',
    nombre: 'Bloqueo de Arranque del Motor',
    fila: 5,
    columna: 5,
    orden: 29,
    activo: true,
    visible: true,
    categoria: 'Motor',
    color: '#C87533',
    icono: { tipo: 'png', valor: '/imagenes%20botones/btn-029.png', tamano: 70 },
    imagen: '/imagenes_botones/btn-029.svg',
    descripcion: 'Sistema electrónico de seguridad de arranque preventivo interconectado.',
    queHace: 'Evita la excitación del solenoide del motor de arranque si las palancas de mando o transmisiones no están en Neutro absoluto.',
    cuandoSeUtiliza: 'Autodiagnóstico preventivo activo en cada ciclo de arranque inicial de la cabina.',
    advertencia: 'Si la luz persiste con el equipo en neutro, compruebe los microinterruptores de las puertas y el asiento del operador.',
    protocolo: [
      'Paso 1: Asegurarse de que la palanca de cambios esté en Neutro y frenos aplicados.',
      'Paso 2: Confirmar cierre total de puertas y ajuste de cinturón.',
      'Paso 3: Girar llave de arranque. Si se bloquea, revisar sensores de bloqueo.'
    ],
    datosTecnicos: {
      sistema: 'Seguridad Operacional Diésel',
      componente: 'Sensor de Posición de Neutral de Transmisión',
      prioridad: 'Crítica'
    }
  },
  {
    id: 'btn-030',
    nombre: 'Embrague de Ventilador de Transmisión',
    fila: 5,
    columna: 6,
    orden: 30,
    activo: true,
    visible: true,
    categoria: 'Motor',
    color: '#C87533',
    icono: { tipo: 'png', valor: '/imagenes%20botones/btn-030.png', tamano: 70 },
    imagen: '/imagenes_botones/btn-030.svg',
    descripcion: 'Sistema de control del ventilador refrigerante del radiador térmico de transmisión.',
    queHace: 'Conecta eléctricamente el embrague electromagnético del ventilador de enfriamiento según la lectura térmica.',
    cuandoSeUtiliza: 'En condiciones de alta exigencia de carga continua en la caja de engranajes.',
    advertencia: 'Vigile siempre los indicadores térmicos auxiliares; si el embrague patina, se generará sobrecalentamiento.',
    protocolo: [
      'Paso 1: Configurar el embrague de ventilador en modo automático.',
      'Paso 2: En caso de rampas pronunciadas, activar modo manual forzado.',
      'Paso 3: Monitorear el descenso térmico en el indicador digital.'
    ],
    datosTecnicos: {
      sistema: 'Enfriamiento Hidrostático',
      componente: 'Embrague Electromagnético Viscoso',
      prioridad: 'Media'
    }  },
  {
    id: 'btn-031',
    nombre: 'Propulsión Reducida',
    fila: 5,
    columna: 7,
    orden: 31,
    activo: true,
    visible: true,
    categoria: 'Tracción y Potencia',
    color: '#F7A600',
    icono: { tipo: 'png', valor: '/imagenes%20botones/btn-031.png', tamano: 70 },
    imagen: '/imagenes_botones/btn-031.svg',
    descripcion: 'Modo de limitación de potencia eléctrica y torque en los motores de tracción de las ruedas (Wheel Motors) para condiciones de falla o sobretemperatura.',
    queHace: 'Restringe la entrega de corriente del alternador principal a los inversores IGBT de tracción, limitando la velocidad y aceleración máxima del camión CAEX.',
    cuandoSeUtiliza: 'Se activa automáticamente ante sobretemperatura en los inversores de tracción o manualmente para maniobrar con potencia restringida hacia el taller mecánico.',
    advertencia: 'No intente subir rampas pronunciadas con carga completa en modo de propulsión reducida; el equipo podría perder inercia y detenerse.',
    protocolo: [
      'Paso 1: Notificar a despacho de mina sobre la limitación de potencia de propulsión.',
      'Paso 2: Activar el modo de propulsión reducida y verificar el indicador ámbar en el tablero.',
      'Paso 3: Conducir por la berma de servicio hacia la bahía de mantenimiento a velocidad moderada.'
    ],
    datosTecnicos: {
      sistema: 'Sistema de Mando Eléctrico CAEX',
      componente: 'Inversores IGBT / Motores de Rueda',
      prioridad: 'Alta'
    }
  },
  {
    id: 'btn-032',
    nombre: 'Retardo Dinámico en Nivel Reducido',
    fila: 4,
    columna: 7,
    orden: 32,
    activo: true,
    visible: true,
    categoria: 'Frenos',
    color: '#EF4444',
    icono: { tipo: 'png', valor: '/imagenes%20botones/btn-032.png', tamano: 70 },
    imagen: '/imagenes_botones/btn-032.svg',
    descripcion: 'Alarma y estado de degradación en la capacidad de frenado eléctrico por parásitos resistivos (Grid de Retardo).',
    queHace: 'Informa al operador que la potencia de disipación térmica de las resistencias de retardo está limitada debido a alta temperatura de los sopladores o fallas de ventilación.',
    cuandoSeUtiliza: 'Supervisión crítica durante descensos de rampas cargado; alerta que se debe reducir la velocidad de entrada a la pendiente.',
    advertencia: 'El camión no podrá mantener la velocidad en pendientes solo con retardo eléctrico. Se debe aplicar el freno de servicio mecánico de discos húmedos.',
    protocolo: [
      'Paso 1: Reducir inmediatamente la velocidad con el freno de servicio de pie.',
      'Paso 2: Seleccionar una velocidad de descenso menor en el selector de retardo RSC.',
      'Paso 3: Evitar el sobrecalentamiento de los frenos mecánicos y comunicar la condición a despacho de mina.'
    ],
    datosTecnicos: {
      sistema: 'Sistema de Retardo Eléctrico (RSC)',
      componente: 'Bancos de Resistencias / Sopladores Grid',
      prioridad: 'Crítica'
    }
  }
];
