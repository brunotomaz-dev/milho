import 'dotenv/config';
import App from './app';

const APP_PORT: string | number = process.env.PORT as string | number;

new App().start(APP_PORT);
