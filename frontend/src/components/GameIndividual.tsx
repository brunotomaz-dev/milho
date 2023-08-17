import React, { useEffect, useState } from 'react';
import simulateQuestions from '../api/simulateDB';
import { IQuestions } from '../interfaces/IGame';

const GameIndividual: React.FC = () => {
  const [questions, setQuestions] = useState<IQuestions[]>();
  const [gameQuestions, setGameQuestions] = useState<IQuestions[]>([]);
  const [gameIsOn, setGameIsOn] = useState<boolean>(false);
  const [questionIndex, setQuestionIndex] = useState<number>(0);

  useEffect(() => {
    setQuestions(simulateQuestions.n1);
  }, []);

  const sortQuestions = () : void => {
    if (questions) {
      const sortedQuestions = [...questions].sort(() => Math.random() - 0.5);
      setGameQuestions(sortedQuestions.slice(0, 5));
    }
  }

  const handleAnswerClick = (event: React.MouseEvent<HTMLButtonElement>) : void => {
    const { name } = event.currentTarget;
    if (name === gameQuestions[questionIndex].Answer) {
      alert('Correct Answer!');
    } else {
      alert('Wrong Answer!');
    }
    setQuestionIndex(questionIndex + 1);
  }

  const renderQuestions = ()  => {
    const answers = gameQuestions[questionIndex].Options.sort(() => Math.random() - 0.5);
    return (
      <>
        <h3>Game Questions:</h3>
        <section className='form'>
          <h2>{ gameQuestions[questionIndex].Question }</h2>
          <div className='container-question-list'>
            {answers.map((answer, index) => {

              return (
                <button className='question-btn' type="button" key={index} name={answer} onClick={handleAnswerClick}>{answer}</button>
                )
              })
            }
          </div>
        </section>
      </>
    )
  }
      

  return (
    <div>
      <h1>Game Individual - Header</h1>
      <div className='container-flex-column'>
        {gameIsOn ? renderQuestions() : <button className='game-choice-btn' onClick={() => {sortQuestions(); setGameIsOn(true)}}>Iniciar</button>}
        </div>
      
    </div>
  )
}

export default GameIndividual;