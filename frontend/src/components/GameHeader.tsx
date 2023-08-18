import React from 'react';

const GameHeader: React.FC = () => {
  return (
    <header className='game-header'>
      <div className='header-container'>
        <h1>Nome</h1>
        <h2>Points</h2>
      </div>
    </header>
  );
}

export default GameHeader;