import 'dotenv/config';
import App from './app';

const APP_PORT: number = process.env.PORT as unknown as number;

new App().start(APP_PORT);
