import 'dotenv/config';
import { connect } from 'mongoose';

const options = {
  dbName: process.env.MONGO_DBNAME,
};

const connectToDatabase = () => connect(process.env.MONGO_URL as string, options)
  .then(() => console.log('Database connected'))
  .catch((err) => console.log(err));

export default connectToDatabase;
