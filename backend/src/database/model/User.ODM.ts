import { Model, Schema, UpdateQuery, isValidObjectId, model, models } from 'mongoose';
import IUser from '../interface/IUser';
import IUserODM from '../interface/IUser.ODM';
import HttpException, { StatusCodes } from '../utils/httpException';

class UserODM implements IUserODM {
  protected _model: Model<IUser>;
  protected _schema: Schema;

  constructor() {
    this._schema = new Schema({
      name: { type: String, required: true },
      email: { type: String, required: true, unique: true },
      password: { type: String, required: true },
      role: { type: String, required: true },
    });
    this._model = models.User || model<IUser>('User', this._schema);
  }

  public async create(user: IUser): Promise<IUser> {
    return this._model.create({ ...user });
  }

  public async read(email: string): Promise<IUser | null> {
    return this._model.findOne({ email });
  }

  public async update(id: number, user: IUser): Promise<IUser | null> {
    if (isValidObjectId(id)) {
      return this._model.findByIdAndUpdate(
        id,
        { ...user } as UpdateQuery<IUser>,
        { new: true },
      );
    }
    throw new HttpException(StatusCodes.UNPROCESSED_ENTITY, 'Invalid ObjectId');
  }

  public async delete(id: number): Promise<IUser | null> {
    if (isValidObjectId(id)) {
      return this._model.findByIdAndDelete(id);
    }
    throw new HttpException(StatusCodes.UNPROCESSED_ENTITY, 'Invalid ObjectId');
  }
}

export default UserODM;
