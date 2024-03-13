import mongoose from 'mongoose';
import connectToDatabase from '../config/connection';
import SeedQuestions from './questionsSeed';
import SeedUser from './userSeed';

const seedUser = new SeedUser();
const seedQuestions = new SeedQuestions();
connectToDatabase();

seedQuestions.seedMany();
seedUser.seedMany()
  .then(() => {
    mongoose.connection.close()
      .then(() => console.log('Database disconnected'))
      .catch((err) => console.log(err));
  });
