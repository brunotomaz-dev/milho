import express from 'express';
import 'express-async-errors';
import errorMiddleware from './database/middleware/error.middleware';
import router from './database/routers/router';

class App {
  public app: express.Express;

  constructor() {
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

  public start(PORT: string | number): void {
    this.app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  }
}

export default App;
