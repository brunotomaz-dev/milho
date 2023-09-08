import { Router } from 'express';
import UserController from '../controller/User.controller';

const userRouter = Router();

userRouter.post('/new', (req, res, next) => new UserController(req, res, next).create());
userRouter.get('/', (req, res, next) => new UserController(req, res, next).readAll());

export default userRouter;
