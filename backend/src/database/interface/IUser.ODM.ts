import IUser from './IUser';

interface IUserODM {
  create: (user: IUser) => Promise<IUser>;
  read: (name: string) => Promise<IUser | null>;
  update: (id: number, user: IUser) => Promise<IUser | null>;
  delete: (id: number) => Promise<IUser | null>;
}

export default IUserODM;
