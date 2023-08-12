import { Router } from 'express';
import AuthUser from '../controller/Auth.Controller';
import NewUserController from '../controller/NewUser.controller';

const authRouter = Router();

authRouter.post('/new', (req, res, next) => new NewUserController(req, res, next).create());
authRouter.post('/', (req, res) => new AuthUser(req, res).login());
authRouter.get('/validate', (req, res) => new AuthUser(req, res).validate());

export default authRouter;
