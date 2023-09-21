import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { sendData, setToken } from "../api/requests";
import { IGameQuestionsProps } from "../interfaces/IGame";
import { useAppDispatch } from "../redux/hook/hooks";
import { addPoint } from "../redux/reducers/gameSlice";
import Timer from "./Timer";

enum PointsBonus {
  'tier1' = 1.25,
  'tier2' = 1.5,
  'tier3' = 1.75,
}

const Questions: React.FC<IGameQuestionsProps> = ({ tierQuestions, tier, setTier }) => {
  const [questionIndex, setQuestionIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [timeRemaining, setTimeRemaining] = useState<number>(30);
  const [score, setScore] = useState<number>(0);
  const [questionPoints, setQuestionPoints] = useState<number>(0);
  const [renderFeedback, setRenderFeedback] = useState<boolean>(false);
  const [renderQuestions, setRenderQuestions] = useState<boolean>(true);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const [feedbackButton, setFeedbackButton] = useState<string>('Próxima pergunta');
  const [newTier, setNewTier] = useState<boolean>(false);
  const [clear, setClear] = useState<boolean>(false);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    shuffleAnswers(tierQuestions[questionIndex].options)

  }, [tierQuestions, questionIndex]);

  const sendScore = async () : Promise<void> => {
    const name = localStorage.getItem('name');
    const token = localStorage.getItem('token');
    setToken(token as string);
    await sendData('/score', { name, score });
  }


  const wrongAnswer = () : void => {
    setRenderFeedback(true);
    setRenderQuestions(false);
    setIsCorrect(false);
    sendScore();
    setTier(0);
    setFeedbackButton('Sair do jogo');
  };

  const rightAnswer = () : void => {
    dispatch(addPoint(questionPoints));
      setTimeRemaining(30);
      setRenderFeedback(false);
      setRenderQuestions(true);
      setFeedbackButton('Próxima pergunta');
  }

  const calculateScore = () : void => {
    const tierKey = `tier${tier + 1}` as keyof typeof PointsBonus;
    const points = Math.ceil(((tier + 1) * timeRemaining) * PointsBonus[tierKey]);
    setScore(prevScore => prevScore + points);
    setQuestionPoints(points);
  }

  const shuffleAnswers = (answers: string[]) : void => {
    const shuffledAnswers = [...answers].sort(() => Math.random() - 0.5);
    setAnswers(shuffledAnswers);
  }

  const tierChange = () : void => {
    tier === 2 ? setClear(true) : setNewTier(true);
  };

  const handleAnswerClick = (event: React.MouseEvent<HTMLButtonElement>) : void => {
    const { name } = event.currentTarget;
    if (name === tierQuestions[questionIndex].answer) {
      calculateScore();
      questionIndex === tierQuestions.length - 1 ? tierChange() : setRenderFeedback(true);
      setRenderQuestions(false);
      setIsCorrect(true);
    } else {
      wrongAnswer();
    }
  }
  
  const handleFeedbackButton = () : void => {
    if (isCorrect) {
      setQuestionIndex(questionIndex + 1);
      rightAnswer();
    }

    if (!isCorrect) {
      setTier(0);
      setQuestionIndex(0);
      dispatch(addPoint(0));
      navigate('/config');
    }
  }

  const handleNewTierButton = () : void => {
    setTier(tier + 1);
    setQuestionIndex(0);
    setNewTier(false);
    rightAnswer();
  }

  const handleTimeTick = (timeRemaining: number) : void => {
    setTimeRemaining(timeRemaining);
  }

  const handleClearButton = () : void => {
    setTier(0);
    setQuestionIndex(0);
    dispatch(addPoint(0));
    setClear(false);
    sendScore();
    navigate('/config');
  }

  return (
  <>
    { renderQuestions && (
      <>
       {renderQuestions && (
        <section>
          <Timer onTimeUp={wrongAnswer} onTick={handleTimeTick} />
        </section>
      )}
        <section className='form'>
          <h2>{ tierQuestions[questionIndex].question }</h2>
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
    )}
    { renderFeedback && (
      <>
        <section className="feedback">
          <h2>{ isCorrect ? 'Acertou!' : 'Errou!' }</h2>
          <p>{ isCorrect ? `Você ganhou ${questionPoints} pontos!` : 'Você não ganhou pontos!' }</p>
          <p>{ isCorrect ? `Seu total de pontos é ${score}!` : `Sua pontuação final foi ${score}!` }</p>
          <button className='question-btn' type="button" onClick={handleFeedbackButton}>{ feedbackButton }</button>
        </section>
      </>
    )}
    { newTier && (
      <>
        <section className="advance-tier">
          <h1 className="congrats">Parabéns!</h1>
          <h4>Você passou para o proximo nível</h4>
          <p>Até agora voce conseguiu {score} pontos!</p>
          <button className='question-btn' type="button" onClick={handleNewTierButton}>Próxima fase</button>
        </section>
      </>
    )}
    { clear && (
      <>
        <section className="win">
          <h1 className="congrats" >Parabéns!</h1>
          <h4>Você conseguiu finalizar o jogo!</h4>
          <p>Marcou {score} pontos!</p>
          <button className='question-btn win-btn' type="button" onClick={handleClearButton}>Início</button>
        </section>
      </>
    )}
  </>
  )
}

export default Questions;