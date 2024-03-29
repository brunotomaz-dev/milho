/* eslint-disable @typescript-eslint/naming-convention */
import * as joi from 'joi';
import IUser from '../interface/IUser';
import IUserAuth from '../interface/IUserAuth';

export const userValidation = (user: IUser) => {
  const schema = joi.object({
    email: joi.string().email().required(),
    name: joi.string().required(),
    password: joi.string().min(8).required(),
    role: joi.string().valid('admin', 'user').required(),
  });
  return schema.validate(user);
};

export const userLoginValidation = (user: IUserAuth) => {
  const schema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().min(8).required().messages({
      'string.empty': '"password" is not allowed to be empty',
      'string.min': '"password" length must be at least 8 characters long',
    }),
  });

  return schema.validate(user);
};
