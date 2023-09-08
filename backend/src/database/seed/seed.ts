import mongoose from 'mongoose';
import IUser from '../../interface/IUser';
import connectToDatabase from '../config/connection';
import UserODM from '../model/User.ODM';
import dataUser from './userSeed';

class Seed extends UserODM {
  public async seedMany(data: IUser[]): Promise<void> {
    await this._model.insertMany(data);
  }
}

const seed = new Seed();
connectToDatabase();
seed.seedMany(dataUser).then(() => {
  mongoose.connection.close()
    .then(() => console.log('Database disconnected'))
    .catch((err) => console.log(err));
});
