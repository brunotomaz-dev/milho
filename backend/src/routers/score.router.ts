import { Router } from 'express';
import ScoreController from '../controller/Score.Controller';

const scoreRouter = Router();

scoreRouter.post('/', (req, res, next) => new ScoreController(req, res, next).create());
scoreRouter.get('/', (req, res, next) => new ScoreController(req, res, next).readAll());
scoreRouter.get('/:name', (req, res, next) => new ScoreController(req, res, next).read());

export default scoreRouter;
