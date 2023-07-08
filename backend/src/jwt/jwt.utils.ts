import 'dotenv/config';
import * as jwt from 'jsonwebtoken';
import * as errors from 'restify-errors';
import IUser from '../interface/IUser';

export const createToken = (user: IUser): string => {
  const jwtKey = process.env.JWT_SECRET;
  const token = jwt.sign(
    {
      email: user.email,
      name: user.name,
      role: user.role,
    },
    jwtKey as string,
    {
      expiresIn: '28d',
      algorithm: 'HS256',
    },
  );
  return token;
};

export const verifyToken = (token: string): IUser => {
  const jwtKey = process.env.JWT_SECRET;
  try {
    const decoded = jwt.verify(token, jwtKey as string);
    return decoded as IUser;
  } catch (error) {
    throw new errors.UnauthorizedError('Invalid token');
  }
};
