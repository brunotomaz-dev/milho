import IUserAuth from './IUserAuth';

interface IUser extends IUserAuth {
  id?: string;
  name: string;
  role: 'admin' | 'user';
}

export default IUser;
