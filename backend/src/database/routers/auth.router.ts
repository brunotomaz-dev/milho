import { Router } from 'express';
import NewUserController from '../controller/NewUser.controller';

const authRouter = Router();

authRouter.post('/signup', (req, res, next) => new NewUserController(req, res, next).create());

export default authRouter;
