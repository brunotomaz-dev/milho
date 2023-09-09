import IUser from '../../interface/IUser';
import UserODM from '../model/User.ODM';

let data: IUser[];

class SeedUser extends UserODM {
  public async seedMany(): Promise<void> {
    await this._model.insertMany(data);
  }
}

data = [
  {
    name: 'Admin',
    email: 'admin@admin.game',
    password: '$2a$10$JMEiL6cG2/CkoYvAPFmGk.UMoOTX8CKsh3vuh6dJpv4WvjDvtQ4Vi', // 'Admin2023',
    role: 'admin',
  },
  {
    name: 'Guest',
    email: 'guest@guest.game',
    password: '$2a$10$qGQkHRQpKvQSJew.RjEf4Oo1flt196x7L1NwXoPET1oyf826lPMbS', // 'Guest2023',
    role: 'user',
  },
];

export default SeedUser;
