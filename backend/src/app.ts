import express from 'express';
import 'express-async-errors';
import errorMiddleware from './middleware/error.middleware';
import router from './routers/router';

class App {
  public app: express.Express;

  constructor(private connectToDatabase: () => Promise<void>) {
    this.app = express();
    this.setConfig();
    this.app.get('/', (req, res) => res.json({ message: 'Hello World' }));
  }

  private setConfig(): void {
    const accessControl: express.RequestHandler = (req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, PATCH, OPTIONS');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(express.json());
    this.app.use(accessControl);
    this.app.use(router);
    this.app.use(errorMiddleware);
  }

  public start(PORT: string | number): Promise<void> {
    return this.connectToDatabase()
      .then(() => new Promise<void>((resolve) => {
        this.app.listen(PORT, () => {
          console.log(`Server running on port ${PORT}`);
          resolve();
        });
      }))
      .catch((err) => {
        console.error('Connection with database generated an error:\r\n');
        console.error(err);
        console.error('\r\n Exiting process... initialization failed');
        process.exit(1);
      });
  }
}

export default App;
