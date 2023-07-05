import bcrypt from 'bcrypt';
import * as errors from 'restify-errors';
import IUser from '../interface/IUser';
import { createToken, verifyToken } from '../jwt/jwt.utils';
import UserODM from '../model/User.ODM';
import { userLoginValidation } from '../utils/validations';

class AuthService {
  private _userModel: UserODM;

  constructor(private userModel?: UserODM) {
    this._userModel = userModel || new UserODM();
  }

  static async validatePassword(password: string, hashedPassword: string): Promise<boolean> {
    return bcrypt.compare(password, hashedPassword);
  }

  private async authUser(email: string, password: string): Promise<IUser> {
    const validate = userLoginValidation({ email, password });
    if (validate.error) throw new errors.BadRequestError(validate.error.message);

    const user = await this._userModel.read(email);
    if (!user) throw new errors.NotFoundError('User not found');

    const validatePassword = await AuthService.validatePassword(password, user.password);
    if (!validatePassword) throw new errors.UnauthorizedError('Invalid password');

    return user;
  }

  public async login(email: string, password: string): Promise<string> {
    const user = await this.authUser(email, password);

    return createToken(user);
  }

  public async validateUser(token: string): Promise<IUser> {
    const user = verifyToken(token);
    const userFound = await this._userModel.read(user.email);
    return userFound as IUser;
  }
}
export default AuthService;
