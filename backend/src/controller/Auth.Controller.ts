import { Request, Response } from 'express';
import AuthService from '../service/Auth.Service';

class AuthUser {
  private _authService: AuthService;
  private req: Request;
  private res: Response;

  constructor(req: Request, res: Response, authService?: AuthService) {
    this._authService = authService || new AuthService();
    this.req = req;
    this.res = res;
  }

  public async login(): Promise<void> {
    const user = this.req.body;
    const token = await this._authService.login(user);
    this.res.status(200).json({ token });
  }

  public async validate(): Promise<void> {
    const token = this.req.headers.authorization;
    const userData = await this._authService.validateUser(token as string);
    this.res.status(200).json(userData);
  }
}

export default AuthUser;
