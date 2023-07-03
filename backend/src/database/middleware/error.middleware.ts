import { NextFunction, Request, Response } from 'express';
import { RestError } from 'restify-errors';

const errorMiddleware = (error: RestError, _req: Request, res: Response, _next: NextFunction) => {
  const status = error.statusCode || 500;
  res.status(status);
  res.json({
    error: error.name,
    message: error.message,
  });
};

export default errorMiddleware;
