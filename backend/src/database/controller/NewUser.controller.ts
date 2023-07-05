import { NextFunction, Request, Response } from 'express';
import IUser from '../interface/IUser';
import NewUserService from '../service/NewUser.Service';

class NewUserController {
  private _newUserService: NewUserService;
  private req: Request;
  private res: Response;
  private next: NextFunction;

  constructor(req: Request, res: Response, next: NextFunction, newUserService?: NewUserService) {
    this._newUserService = newUserService || new NewUserService();
    this.req = req;
    this.res = res;
    this.next = next;
  }

  public async create(): Promise<void> {
    const user: IUser = {
      name: this.req.body.name,
      email: this.req.body.email,
      password: this.req.body.password,
      role: this.req.body.role || 'user',
    };
    const token = await this._newUserService.create(user);
    this.res.status(201).json({ token });
  }
}

export default NewUserController;
