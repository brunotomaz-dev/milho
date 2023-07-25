import 'dotenv/config';
import App from './app';
import connectToDatabase from './database/config/connection';

const APP_PORT: string | number = process.env.PORT as string | number;

new App(connectToDatabase).start(APP_PORT);
