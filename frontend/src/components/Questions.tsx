import React, { useEffect, useState } from "react";
import { IGameQuestionsProps } from "../interfaces/IGame";

const Questions: React.FC<IGameQuestionsProps> = ({ tierQuestions, tier, setTier }) => {
  const [questionIndex, setQuestionIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [timeRemaining, setTimeRemaining] = useState<number>(30);

  useEffect(() => {
    shuffleAnswers(tierQuestions[questionIndex].Options)
    
    const timer = setInterval(() => {
      setTimeRemaining(prevTime => prevTime - 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };

  }, [tierQuestions, questionIndex]);

  useEffect(() => {
    if (timeRemaining === 0) {
      //alert('Time is up!');
      setTimeRemaining(30);
      // enviar para tela com feedback de pontos
    }
  }, [timeRemaining]);


  const shuffleAnswers = (answers: string[]) : void => {
    const shuffledAnswers = [...answers].sort(() => Math.random() - 0.5);
    setAnswers(shuffledAnswers);
  }

  const handleAnswerClick = (event: React.MouseEvent<HTMLButtonElement>) : void => {
    const { name } = event.currentTarget;
    if (name === tierQuestions[questionIndex].Answer) {
      alert('Correct Answer!');
      setTimeRemaining(30);
    } else {
      alert('Wrong Answer!');
    }
    setQuestionIndex(questionIndex + 1);
  }

  return (
    <>
      <h3>{ timeRemaining }</h3>
      <section className='form'>
        <h2>{ tierQuestions[questionIndex].Question }</h2>
        <div className='container-question-list'>
          {answers && answers.map((answer, index) => {

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

export default Questions;