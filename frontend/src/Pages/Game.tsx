import React, { useState } from 'react';
import GameChoices from '../components/GameChoices';
import GameIndividual from '../components/GameIndividual';

const Game: React.FC = () => {
  const [choice, setChoice] = useState(0);

  return (
    <>
    {(choice === 0) && <GameChoices choice={setChoice} />}
    {(choice === 1) && <GameIndividual />}
    </>
  )
}

export default Game;