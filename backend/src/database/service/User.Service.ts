import User from '../domains/User';
import IUser from '../interface/IUser';
import UserODM from '../model/User.ODM';

class UserService {
  private _userModel: UserODM;

  constructor(private userModel?: UserODM) {
    this._userModel = userModel || new UserODM();
  }

  private static createUserDomain(user: IUser): User {
    return new User(user);
  }

  public async create(user: IUser): Promise<User> {
    const userCreated = await this._userModel.create(user);
    if (!userCreated) throw new Error('User not created');
    return UserService.createUserDomain(userCreated);
  }

  public async read(name: string): Promise<User | null> {
    const user = await this._userModel.read(name);
    if (!user) return null;
    return UserService.createUserDomain(user);
  }

  public async update(id: number, user: IUser): Promise<User | null> {
    const userUpdated = await this._userModel.update(id, user);
    if (!userUpdated) return null;
    return UserService.createUserDomain(userUpdated);
  }

  public async delete(id: number): Promise<User | null> {
    const userDeleted = await this._userModel.delete(id);
    if (!userDeleted) return null;
    return UserService.createUserDomain(userDeleted);
  }
}

export default UserService;
