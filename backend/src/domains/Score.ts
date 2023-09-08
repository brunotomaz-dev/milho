import IScore from '../interface/IScore';

class Score {
  protected id: string | undefined;
  protected name: string;
  protected score: number;
  protected date: Date;
  constructor(score: IScore) {
    this.id = score.id;
    this.name = score.name;
    this.score = score.score;
    this.date = score.date;
  }
}

export default Score;
