import IUser from '../interface/IUser';

class User {
  private _id: number;
  private _name: string;
  private _email: string;
  private _password: string;
  private _role: 'admin' | 'user';
  constructor(user: IUser) {
    this._id = user.id;
    this._name = user.name;
    this._email = user.email;
    this._password = user.password;
    this._role = user.role;
  }
}

export default User;
