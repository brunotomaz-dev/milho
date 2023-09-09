import { Router } from 'express';
import QuestionsController from '../controller/Questions.Controller';

const questionsRouter = Router();

questionsRouter.get('/:tier', (req, res, next) => new QuestionsController(req, res, next).read());
questionsRouter.post(
  '/:tier',
  (req, res, next) => new QuestionsController(req, res, next).addQuestion(),
);

export default questionsRouter;
