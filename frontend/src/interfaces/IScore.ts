export interface IScoreData {
  _id: string;
  name: string;
  score: number;
  date: Date;
}

export interface IScore {
  score: IScoreData[];
}

export interface IPersonalScoreProps {
  data: IScoreData[];
}

export interface IGeneralScoreProps {
  playerScore: IScoreData[];
  generalScore: IScoreData[];
}
