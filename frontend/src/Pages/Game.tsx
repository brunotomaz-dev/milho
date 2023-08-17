import React, { useState } from 'react';
import GameChoices from '../components/GameChoices';

const Game: React.FC = () => {
  const [choice, setChoice] = useState(0);

  return (
    <>
    {(choice === 0) && <GameChoices choice={setChoice} />}
    </>
  )
}

export default Game;