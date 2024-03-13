import { NextFunction, Request, Response } from 'express';
import { IQuestion } from '../interface/IQuestions';
import AuthService from '../service/Auth.Service';
import QuestionsService from '../service/Questions.Service';

class QuestionsController {
  private _questionsService: QuestionsService;
  private _authService: AuthService;
  private req: Request;
  private res: Response;
  private next: NextFunction;

  constructor(
    req: Request,
    res: Response,
    next: NextFunction,
    questionsService?: QuestionsService,
  ) {
    this._questionsService = questionsService || new QuestionsService();
    this._authService = new AuthService();
    this.req = req;
    this.res = res;
    this.next = next;
  }

  public async read(): Promise<void> {
    const { tier } = this.req.params;
    const questions = await this._questionsService.read(tier);
    this.res.status(200).json({ data: questions });
  }

  public async addQuestion(): Promise<void> {
    const user = await this._authService.validateUser(this.req.headers.authorization as string);
    const { tier } = this.req.params;
    const question = this.req.body as IQuestion;
    const newQuestion = await this._questionsService.addQuestion(user.role, tier, question);
    this.res.status(201).json({ ...newQuestion });
  }
}

export default QuestionsController;
