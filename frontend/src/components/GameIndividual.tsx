import React, { useCallback, useEffect, useState } from 'react';
import { requestData } from '../api/requests';
import Questions from '../components/Questions';
import { IQuestions } from '../interfaces/IGame';
import GameHeader from './GameHeader';

const GameIndividual: React.FC = () => {
  const [questionsTier, setQuestionsTier] = useState<IQuestions[]>([]);
  const [gameIsOn, setGameIsOn] = useState<boolean>(false);
  const [questions, setQuestions] = useState<IQuestions[]>([]);
  const [tier, setTier] = useState(0);

  const requestQuestions = async (tier: number) => {
    const id = tier + 1;
    const response = await requestData(`questions/n${id}`);
    const data = { ...response.data };
    console.log(id, data.questions);
    setQuestions(data.questions);
  };

  const sortQuestions = useCallback((): void => {
    const sorted = [...questions].sort(() => Math.random() - 0.5);
    setQuestionsTier(sorted.slice(0, 5));
  }, [questions]);

  useEffect(() => {
    requestQuestions(tier)
  }, [tier]);
  
  useEffect(() => {
    sortQuestions();
  }
  , [sortQuestions]);

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
              sortQuestions(), setGameIsOn(true);
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
