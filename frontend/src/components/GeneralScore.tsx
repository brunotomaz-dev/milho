import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import React from 'react';
import { IGeneralScoreProps } from '../interfaces/IScore';

const GeneralScore: React.FC<IGeneralScoreProps> = ({ generalScore, playerScore }) => {
  const bestScore = playerScore.length > 0 ? playerScore[0].score : 0;

  return (
    <>
      <section className="score-list">
        <h2>Seu Melhor Placar</h2>
        <ul>
          <li className="score-item">
            <span className="score-name">{playerScore.length > 0 ? playerScore[0].name : "N/A"}</span>
            <span className="score-value">{bestScore}</span>
            <span className="score-date">{playerScore.length > 0 ? format(new Date(playerScore[0].date), "MMM/yy", {locale: ptBR}) : "N/A"}</span>
          </li>
        </ul>
      </section>
      <section className="score-list">
        <h2>Os 5 Melhores</h2>
        <ul>
          {generalScore.map(score => (
            <li key={score._id} className="score-item">
              <span className="score-name">{score.name}</span>
              <span className="score-value">{score.score}</span>
              <span className="score-date">{format(new Date(score.date), "MMM/yy", {locale: ptBR})}</span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default GeneralScore;