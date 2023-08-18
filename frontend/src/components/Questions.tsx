import React, { useEffect, useState } from "react";
import { IGameQuestionsProps } from "../interfaces/IGame";

const Questions: React.FC<IGameQuestionsProps> = ({ tierQuestions, tier, setTier }) => {
  const [questionIndex, setQuestionIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<string[]>([]);

  useEffect(() => {
    shuffleAnswers(tierQuestions[questionIndex].Options)
  }, [tierQuestions, questionIndex]);



  const shuffleAnswers = (answers: string[]) : void => {
    const shuffledAnswers = [...answers].sort(() => Math.random() - 0.5);
    setAnswers(shuffledAnswers);
  }

  const handleAnswerClick = (event: React.MouseEvent<HTMLButtonElement>) : void => {
    const { name } = event.currentTarget;
    if (name === tierQuestions[questionIndex].Answer) {
      alert('Correct Answer!');
    } else {
      alert('Wrong Answer!');
    }
    setQuestionIndex(questionIndex + 1);
  }

  return (
    <>
      <h3>Game Questions:</h3>
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