import React from 'react';
import { IGameProps } from '../interfaces/IGame';

const GameChoices: React.FC<IGameProps> = ({ choice }) => {
  return (
    <nav className='game-choice-container'>
      <button
        className='game-choice-btn'
        type='button'
        onClick={() => choice(1)}
      >
        Individual
      </button>
      <button
        className='game-choice-btn'
        type='button'
        onClick={() => choice(2)}
      >
        Grupo
      </button>
    </nav>
  );
};

export default GameChoices;
