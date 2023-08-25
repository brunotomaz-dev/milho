export interface IScoreData {
  _id: string;
  name: string;
  score: number;
  date: Date;
}

export interface IScore {
  score: IScoreData[];
}


