import { Router } from 'express';
import authRouter from './auth.router';
import scoreRouter from './score.router';
import userRouter from './user.router';

const router = Router();

router.use('/auth', authRouter);
router.use('/user', userRouter);
router.use('/score', scoreRouter);

export default router;
