import bcrypt from 'bcrypt';
import * as errors from 'restify-errors';
import UserODM from '../database/model/User.ODM';
import IUser from '../interface/IUser';
import IUserAuth from '../interface/IUserAuth';
import { createToken, verifyToken } from '../jwt/jwt.utils';
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

  public async login(user: IUserAuth): Promise<string> {
    const userFound = await this.authUser(user.email, user.password);
    const token = createToken(userFound);
    return token;
  }

  public async validateUser(token: string): Promise<{ name: string, role: string }> {
    if (!token) throw new errors.NotFoundError('token not found');
    const user = verifyToken(token);
    const userFound = await this._userModel.read(user.email);
    if (!userFound) throw new errors.NotFoundError('User not found');
    return { name: userFound.name, role: userFound.role };
  }
}
export default AuthService;
