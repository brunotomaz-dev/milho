import React, { useEffect, useState } from 'react';
import simulateQuestions from '../api/simulateDB';
import Questions from '../components/Questions';
import { IQuestions } from '../interfaces/IGame';

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
      <h1>Game Individual - Header</h1>
      <div className='container-flex-column'>
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
