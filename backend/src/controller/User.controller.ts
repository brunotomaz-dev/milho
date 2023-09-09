import { NextFunction, Request, Response } from 'express';
import IUser from '../interface/IUser';
import AuthService from '../service/Auth.Service';
import UserService from '../service/User.Service';

class UserController {
  private _userService: UserService;
  private _authService: AuthService;
  private req: Request;
  private res: Response;
  private next: NextFunction;

  constructor(req: Request, res: Response, next: NextFunction, userService?: UserService) {
    this._userService = userService || new UserService();
    this._authService = new AuthService();
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
    const token = await this._userService.create(user);
    this.res.status(201).json({ token });
  }

  public async readAll(): Promise<void> {
    const token = this.req.headers.authorization;
    const user = await this._authService.validateUser(token as string);
    const users = await this._userService.readAll(user.role);
    this.res.status(200).json({ users });
  }
}

export default UserController;
