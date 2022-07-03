import { NextFunction, Request, Response } from 'express';
import HttpException from '../common/http-exception';

export const handle404 = (req: Request, res: Response, next: NextFunction) => {
  const message = '404 - Route not found';

  res.status(404).json({ message });
};

// Must match Express error-handling signature even when not using some of the parameters.

export const handleError = (
  err: HttpException,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const status = err.statusCode || 500;

  res.status(status).json({ message: err.message });
};
