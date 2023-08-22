import React from 'react';
import { useAppSelector } from '../redux/hook/hooks';

const GameHeader: React.FC = () => {
  const { name, points } = useAppSelector((state) => state.game);

  return (
    <header className='game-header'>
      <div className='header-container'>
        <h2>{ name }</h2>
        <h2>{`Pontos: ${ points } ` }</h2>
      </div>
    </header>
  );
}

export default GameHeader;