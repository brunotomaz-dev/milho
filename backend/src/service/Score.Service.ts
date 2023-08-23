import * as errors from 'restify-errors';
import ScoreODM from '../database/model/Score.ODM';
import Score from '../domains/Score';
import IScore from '../interface/IScore';

class ScoreService {
  private _scoreModel: ScoreODM;

  constructor(private scoreModel?: ScoreODM) {
    this._scoreModel = scoreModel || new ScoreODM();
  }

  private static createScoreDomain(score: IScore): Score {
    return new Score(score);
  }

  public async create(score: IScore): Promise<Score> {
    const scoreCreated = await this._scoreModel.create(score);
    if (!scoreCreated) throw new errors.BadRequestError('Score not created');
    const newScore = ScoreService.createScoreDomain(scoreCreated);
    return newScore;
  }

  public async readAll(): Promise<IScore[]> {
    const scores = await this._scoreModel.readAll();
    if (!scores) throw new errors.NotFoundError('Scores not found');
    return scores;
  }

  public async read(name: string): Promise<IScore | null> {
    const score = await this._scoreModel.read(name);
    if (!score) throw new errors.NotFoundError('Score not found');
    return score;
  }
}

export default ScoreService;
