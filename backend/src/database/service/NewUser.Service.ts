import bcrypt from 'bcrypt';
import * as errors from 'restify-errors';
import User from '../domains/User';
import IUser from '../interface/IUser';
import UserODM from '../model/User.ODM';
import { userValidation } from '../utils/validations';

class NewUserService {
  private _userModel: UserODM;

  constructor(private userModel?: UserODM) {
    this._userModel = userModel || new UserODM();
  }

  private static createUserDomain(user: IUser): User {
    return new User(user);
  }

  public async create(user: IUser): Promise<User> {
    const isValidUser = userValidation(user);
    if (isValidUser.error) throw new errors.BadRequestError(isValidUser.error.message);

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(user.password, salt);

    const userCreated = await this._userModel.create({ ...user, password: hashedPassword });
    if (!userCreated) throw new errors.BadRequestError('User not created');
    return NewUserService.createUserDomain(userCreated);
  }
}

export default NewUserService;
