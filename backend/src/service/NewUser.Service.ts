import bcrypt from 'bcrypt';
import * as errors from 'restify-errors';
import UserODM from '../database/model/User.ODM';
import User from '../domains/User';
import IUser from '../interface/IUser';
import { createToken } from '../jwt/jwt.utils';
import { userValidation } from '../utils/validations';

class NewUserService {
  private _userModel: UserODM;

  constructor(private userModel?: UserODM) {
    this._userModel = userModel || new UserODM();
  }

  private static createUserDomain(user: IUser): User {
    return new User(user);
  }

  private static async userValidation(user: IUser): Promise<IUser> {
    const isValidUser = userValidation(user);
    if (isValidUser.error) throw new errors.BadRequestError(isValidUser.error.message);
    return user;
  }

  private static async passwordHash(password: string): Promise<string> {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
  }

  public async create(user: IUser): Promise<string> {
    await NewUserService.userValidation(user);

    const hashedPassword = await NewUserService.passwordHash(user.password);

    const userFound = await this._userModel.read(user.email);
    if (userFound) throw new errors.ConflictError('User already exists');

    const userCreated = await this._userModel.create({ ...user, password: hashedPassword });

    const newUser = NewUserService.createUserDomain(userCreated);

    return createToken(newUser as unknown as IUser);
  }
}

export default NewUserService;
