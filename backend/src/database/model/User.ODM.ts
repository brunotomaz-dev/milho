import { Model, Schema, isValidObjectId, model } from 'mongoose';
import IUser from '../interface/IUser';
import IUserODM from '../interface/IUser.ODM';

class UserODM implements IUserODM {
  protected _model: Model<IUser>;
  protected _schema: Schema;

  constructor() {
    this._schema = new Schema({
      id: { type: Number, required: true, unique: true },
      name: { type: String, required: true },
      email: { type: String, required: true, unique: true },
      password: { type: String, required: true },
      role: { type: String, required: true },
    });
    this._model = model<IUser>('User', this._schema);
  }

  public async create(user: IUser): Promise<IUser> {
    return this._model.create({ ...user });
  }

  public async read(name: string): Promise<IUser | null> {
    return this._model.findOne({ name });
  }

  public async update(id: number, user: IUser): Promise<IUser | null> {
    if (isValidObjectId(id)) {
      return this._model.findByIdAndUpdate(id, { ...user });
    }
    throw new Error('Invalid ObjectId');
  }

  public async delete(id: number): Promise<IUser | null> {
    if (isValidObjectId(id)) {
      return this._model.findByIdAndDelete(id);
    }
    throw new Error('Invalid ObjectId');
  }
}

export default UserODM;
