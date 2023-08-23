import { NextFunction, Request, Response } from 'express';
import IScore from '../interface/IScore';
import ScoreService from '../service/Score.Service';

class ScoreController {
  private _scoreService: ScoreService;
  private req: Request;
  private res: Response;
  private next: NextFunction;

  constructor(req: Request, res: Response, next: NextFunction, scoreService?: ScoreService) {
    this._scoreService = scoreService || new ScoreService();
    this.req = req;
    this.res = res;
    this.next = next;
  }

  public async create(): Promise<void> {
    const score: IScore = {
      name: this.req.body.name,
      score: this.req.body.score,
      date: new Date(),
    };
    const newScore = await this._scoreService.create(score);
    this.res.status(201).json({ newScore });
  }

  public async readAll(): Promise<void> {
    const scores = await this._scoreService.readAll();
    this.res.status(200).json({ scores });
  }

  public async read(): Promise<void> {
    const { name } = this.req.params;
    const score = await this._scoreService.read(name);
    this.res.status(200).json({ score });
  }
}

export default ScoreController;
