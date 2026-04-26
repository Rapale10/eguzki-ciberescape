
import { STATIC_HINTS } from "../constants";

export const getCyberTip = async (topic: string): Promise<string> => {
  return "Consejo: La mejor defensa es el sentido común.";
};

export const getLevelFeedback = async (success: boolean, context: string): Promise<string> => {
  if (success) {
    return "¡Sistema desbloqueado con éxito!";
  }

  // Return a random hint from the static list instead of calling AI
  const randomHint = STATIC_HINTS[Math.floor(Math.random() * STATIC_HINTS.length)];
  return randomHint;
};
