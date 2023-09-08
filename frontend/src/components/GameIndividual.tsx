import React, { useEffect, useState } from 'react';
import simulateQuestions from '../api/simulateDB';
import Questions from '../components/Questions';
import { IQuestions } from '../interfaces/IGame';
import GameHeader from './GameHeader';

const GameIndividual: React.FC = () => {
  const [questionsTier, setQuestionsTier] = useState<IQuestions[]>([]);
  const [gameIsOn, setGameIsOn] = useState<boolean>(false);
  const [questions, setQuestions] = useState<IQuestions[][]>([]);
  const [tier, setTier] = useState(0);

  useEffect(() => {
    setQuestions([
      simulateQuestions.n1,
      simulateQuestions.n2,
      simulateQuestions.n3,
    ]);
  }, []);

  const sortQuestions = (questionsArray: IQuestions[]): void => {
    const questions = [...questionsArray].sort(() => Math.random() - 0.5);
    setQuestionsTier(questions.slice(0, 5));
  };

  return (
    <>
      <GameHeader />
      <div className='game-choice-container'>
        {gameIsOn ? (
          <Questions
            tier={tier}
            setTier={setTier}
            tierQuestions={questionsTier}
          />
        ) : (
          <button
            className='game-choice-btn'
            onClick={() => {
              sortQuestions(questions[tier]), setGameIsOn(true);
            }}
          >
            Iniciar
          </button>
        )}
      </div>
    </>
  );
};

export default GameIndividual;
