import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import React from "react";
import { IPersonalScoreProps } from "../interfaces/IScore";

const PersonalScore: React.FC<IPersonalScoreProps> = ({ data }) => {
  const top7 = data.slice(0, 7);

 return (
   <>
    <section className="score-list">
      <h2>Seus 7 Melhores</h2>
      <ul>
        {top7.map(score => (
          <li key={score._id} className="score-item">
            <span className="score-name">{score.name}</span>
            <span className="score-value">{score.score}</span>
            <span className="score-date">
              {format(new Date(score.date), 'MMM/yy', { locale: ptBR })}
            </span>
          </li>
        ))}
      </ul>
    </section>
   </>
  );
}

export default PersonalScore;