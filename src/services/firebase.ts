import { CodelcoButton, CodelcoPanel } from '../types';

const DATABASE_URL = 'https://panel-control-codelco-default-rtdb.firebaseio.com';

export async function fetchButtons(): Promise<CodelcoButton[]> {
  try {
    const response = await fetch(`${DATABASE_URL}/buttons.json`);
    if (!response.ok) {
      throw new Error('Error al obtener los botones de Firebase');
    }
    const data = await response.json();
    if (!data) return [];
    
    // Firebase could return an array or an object
    if (Array.isArray(data)) {
      // Filter out null elements if any, and map to CodelcoButton
      return data.filter(Boolean);
    } else if (typeof data === 'object') {
      return Object.keys(data).map(key => ({
        ...data[key],
        // Ensure ID is set
        id: data[key].id || key
      }));
    }
    return [];
  } catch (error) {
    console.error('Firebase fetchButtons error:', error);
    throw error;
  }
}

export async function fetchPanel(): Promise<CodelcoPanel> {
  try {
    const response = await fetch(`${DATABASE_URL}/panel.json`);
    if (!response.ok) {
      throw new Error('Error al obtener la configuración del panel');
    }
    const data = await response.json();
    if (data) return data;
    
    // Return default panel settings
    return {
      filas: 5,
      columnas: 7,
      empresa: 'CODELCO',
      logo: '/logos/codelco.svg',
      titulo: 'IDENTIFICACIÓN DE ALARMAS DE CABINA'
    };
  } catch (error) {
    console.error('Firebase fetchPanel error:', error);
    // Return default fallback
    return {
      filas: 5,
      columnas: 7,
      empresa: 'CODELCO',
      logo: '/logos/codelco.svg',
      titulo: 'IDENTIFICACIÓN DE ALARMAS DE CABINA'
    };
  }
}

export async function saveAllButtons(buttons: CodelcoButton[]): Promise<boolean> {
  try {
    const response = await fetch(`${DATABASE_URL}/buttons.json`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(buttons)
    });
    return response.ok;
  } catch (error) {
    console.error('Firebase saveAllButtons error:', error);
    return false;
  }
}

export async function savePanel(panel: CodelcoPanel): Promise<boolean> {
  try {
    const response = await fetch(`${DATABASE_URL}/panel.json`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(panel)
    });
    return response.ok;
  } catch (error) {
    console.error('Firebase savePanel error:', error);
    return false;
  }
}
