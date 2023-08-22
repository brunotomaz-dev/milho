import React, { useEffect, useState } from "react";

interface TimerProps {
  onTimeUp: () => void;
  onTick: (timeRemaining: number) => void; // Adicione essa prop
}

const Timer: React.FC<TimerProps> = ({ onTimeUp, onTick }) => {
  const [timeRemaining, setTimeRemaining] = useState<number>(30);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(prevTime => {
        if (prevTime === 1) {
          clearInterval(timer);
          onTimeUp();
          return 30; // Reset the timer
        }
        onTick(prevTime - 1);
        return prevTime - 1;
      });
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [onTimeUp, onTick]);

  return <h3 className="timer">{timeRemaining}</h3>;
};

export default Timer;
