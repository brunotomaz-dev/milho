import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import React from "react";
import { IScoreData } from "../interfaces/IScore";

interface IPersonalScoreProps {
  data: IScoreData[];
}


const PersonalScore: React.FC<IPersonalScoreProps> = ({ data }) => {
  const name = localStorage.getItem('name');

 return (
   <>
    <section>
      <h2>{name}</h2>
      <div className="score-list">
      <h2>Lista de Pontos</h2>
      <ul>
        {data.map(score => (
          <li key={score._id} className="score-item">
            <span className="score-name">{score.name}</span>
            <span className="score-value">{score.score}</span>
            <span className="score-date">
              {format(new Date(score.date), 'MMM/yy', { locale: ptBR })}
            </span>
          </li>
        ))}
      </ul>
    </div>
    </section>
   </>
  );
}

export default PersonalScore;