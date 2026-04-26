import React, { useState } from 'react';
import { CyberButton } from '../ui/CyberButton';
import { GlitchText } from '../ui/GlitchText';
import { ArrowRight, ShieldAlert, User, Terminal } from 'lucide-react';
import { COLORS } from '../../constants';

interface OnboardingProps {
  onComplete: (name: string) => void;
}

export const Onboarding: React.FC<OnboardingProps> = ({ onComplete }) => {
  const [step, setStep] = useState(0);
  const [agentName, setAgentName] = useState('');
  const [nameError, setNameError] = useState('');

  const infoSteps = [
    {
      title: "LA AMENAZA",
      content: "El mundo está conectado. Tu cafetera, tu coche, tu marcapasos. Pero la conexión es frágil.",
      icon: <ShieldAlert className="w-16 h-16 text-[#ff5f00]" />,
      color: COLORS.neonOrange
    },
    {
      title: "TU MENTOR",
      content: "Soy Alan. Me dedico a limpiar desastres digitales. Ahora te toca a ti. Tu arma no es el código, es tu mente.",
      icon: <User className="w-16 h-16 text-[#52e9f1]" />,
      color: COLORS.electricCyan
    },
    {
      title: "¿LISTO?",
      content: "Usa tu lógica. Nada es lo que parece. Bienvenido a la resistencia.",
      icon: <Terminal className="w-16 h-16 text-white" />,
      color: "#fff"
    }
  ];

  const totalSteps = infoSteps.length + 1; // +1 for name step

  const handleNext = () => {
    if (step === 0) {
      // Name step validation
      if (!agentName.trim()) {
        setNameError('Debes introducir tu nombre de agente');
        return;
      }
      setNameError('');
      setStep(1);
    } else if (step < totalSteps - 1) {
      setStep(step + 1);
    } else {
      onComplete(agentName.trim());
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleNext();
  };

  // Step 0: name input
  if (step === 0) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center p-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-[#52e9f1]/10 to-transparent pointer-events-none" />

        <div className="max-w-md w-full border border-[#52e9f1]/30 bg-[#080d19]/90 backdrop-blur-md p-8 relative overflow-hidden z-10">
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#ff5f00]"></div>
          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#ff5f00]"></div>
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#ff5f00]"></div>
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#ff5f00]"></div>

          <div className="flex flex-col items-center text-center space-y-6">
            <div className="animate-bounce p-4 border-2 rounded-full border-[#52e9f1]">
              <User className="w-16 h-16 text-[#52e9f1]" />
            </div>

            <GlitchText
              text="IDENTIFÍCATE, AGENTE"
              as="h2"
              className="text-2xl font-bold"
              color={COLORS.electricCyan}
            />

            <p className="text-gray-300 text-lg leading-relaxed font-rajdhani">
              Antes de acceder al sistema, necesitamos saber quién eres.
            </p>

            <div className="w-full">
              <input
                type="text"
                value={agentName}
                onChange={(e) => { setAgentName(e.target.value); setNameError(''); }}
                onKeyDown={handleKeyDown}
                placeholder="Tu nombre de agente..."
                maxLength={20}
                autoFocus
                className="w-full bg-transparent border border-[#52e9f1]/50 text-white text-center text-xl font-bold tracking-widest px-4 py-3 focus:outline-none focus:border-[#52e9f1] placeholder-gray-600"
                style={{ fontFamily: 'monospace' }}
              />
              {nameError && (
                <p className="text-[#ef4444] text-sm mt-2">{nameError}</p>
              )}
            </div>

            <div className="w-full pt-2">
              <CyberButton onClick={handleNext} className="w-full" variant="danger">
                ACCEDER AL SISTEMA <ArrowRight className="w-4 h-4" />
              </CyberButton>
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: totalSteps }).map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full transition-colors ${i === step ? 'bg-[#52e9f1]' : 'bg-gray-700'}`}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Steps 1-3: existing info steps
  const currentData = infoSteps[step - 1];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-[#52e9f1]/10 to-transparent pointer-events-none" />

      <div className="max-w-md w-full border border-[#52e9f1]/30 bg-[#080d19]/90 backdrop-blur-md p-8 relative overflow-hidden z-10">
        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#ff5f00]"></div>
        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#ff5f00]"></div>
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#ff5f00]"></div>
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#ff5f00]"></div>

        <div className="flex flex-col items-center text-center space-y-6">
          <div className="animate-bounce p-4 border-2 rounded-full" style={{ borderColor: currentData.color }}>
            {currentData.icon}
          </div>

          <GlitchText
            text={currentData.title}
            as="h2"
            className="text-3xl font-bold"
            color={currentData.color}
          />

          <p className="text-gray-300 text-lg leading-relaxed font-rajdhani">
            {currentData.content}
          </p>

          <div className="w-full pt-4">
            <CyberButton onClick={handleNext} className="w-full" variant={step === 1 ? 'danger' : 'secondary'}>
              {step === totalSteps - 1 ? "ENTRAR AL SISTEMA" : "SIGUIENTE"} <ArrowRight className="w-4 h-4" />
            </CyberButton>
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: totalSteps }).map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition-colors ${i === step ? 'bg-[#52e9f1]' : 'bg-gray-700'}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
