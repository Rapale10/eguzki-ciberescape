
export const COLORS = {
  neonOrange: '#ff5f00',
  deepCyberBlue: '#080d19',
  electricCyan: '#52e9f1',
  alertRed: '#ef4444',
  successGreen: '#10b981',
  white: '#ffffff'
};

// In this environment, we cannot use ES module imports for images. 
// We use a direct string path relative to index.html.
export const ALAN_AVATAR_URL = 'alan.png';

// Fallback URL that matches Alan's description (Blue hair, glasses, tech look) 
// This ensures the UI doesn't break if the local file is missing or not served.
export const ALAN_FALLBACK_URL = "https://api.dicebear.com/9.x/avataaars/svg?seed=AlanGenZ&top=shortHairTheCaesarSidePart&hairColor=2c699a&accessories=prescription02&clotheType=blazerShirt&clotheColor=3c4f5c&skinColor=f8d25c&avatarStyle=Circle";

export const RANKS_DATA = [
    { title: "Becario de Distrito", minXp: 0, icon: "🌱" },
    { title: "Oficial de Redes", minXp: 300, icon: "🛡️" },
    { title: "Analista CNI", minXp: 900, icon: "🕵️" },
    { title: "Agente Sombra", minXp: 1800, icon: "👻" },
    { title: "Protocolo Cero", minXp: 3000, icon: "👑" }
];

export const LEVELS_METADATA = [
  {
    id: 1,
    title: "La Nota en el Monitor",
    description: "Ayuda al Comisario a recuperar el acceso a su terminal. Recuerda: la observación es clave.",
    difficulty: 'Easy',
    xpReward: 100
  },
  {
    id: 2,
    title: "El Impostor del DM",
    description: "Un supuesto soporte técnico te contacta por Instagram. Identifica las red flags.",
    difficulty: 'Medium',
    xpReward: 250
  },
  {
    id: 3,
    title: "Smishing Alert",
    description: "Tu bandeja de SMS está llena. Distingue entre mensajes reales y estafas.",
    difficulty: 'Hard',
    xpReward: 500
  },
  {
    id: 4,
    title: "La Trampa del QR",
    description: "Un cartel en la calle ofrece premios. ¿Escanear o no escanear? Esa es la cuestión.",
    difficulty: 'Medium',
    xpReward: 300
  },
  {
    id: 5,
    title: "Wi-Fi Pública",
    description: "Estás en el aeropuerto y necesitas enviar un archivo. Cuidado con los gemelos malvados.",
    difficulty: 'Hard',
    xpReward: 600
  }
];

// Static hints to replace AI functionality
export const STATIC_HINTS = [
  "¿Has revisado debajo del monitor?",
  "Mira bien el calendario en la pared.",
  "A veces las contraseñas combinan nombres y fechas.",
  "El perro del comisario parece ser importante para él."
];

// Pre-defined tips for instant loading (0 latency)
export const LEVEL_TIPS = {
  1: "¡Nunca dejes contraseñas en post-its! Es como dejar la llave debajo del felpudo: cualquiera que pase por ahí entra sin hackear nada. 60% de las brechas son físicas.",
  2: "¡Ojo avizor! El soporte técnico real NUNCA te pedirá contraseñas por DM ni te mandará enlaces extraños. Si ves 'verificar cuenta' en un mensaje directo, bloquea y reporta.",
  3: "Si un SMS de paquete te huele a glitch, tu firewall es no darle clic como un noob. Urgencia + Link extraño = Estafa asegurada.",
  4: "¡Cuidado! El 'Quishing' es real. Los códigos QR pueden llevarte a webs falsas o descargar malware. Si el código es una pegatina pegada sobre un cartel original, ¡es una trampa!",
  5: "¡Peligro en el aire! Los hackers crean redes Wi-Fi con nombres parecidos a las oficiales (Evil Twins). Usa siempre 4G/5G o una VPN en lugares públicos."
};
