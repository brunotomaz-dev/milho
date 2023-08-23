import { Router } from 'express';
import AuthUser from '../controller/Auth.Controller';

const authRouter = Router();

authRouter.post('/', (req, res) => new AuthUser(req, res).login());
authRouter.get('/validate', (req, res) => new AuthUser(req, res).validate());

export default authRouter;
