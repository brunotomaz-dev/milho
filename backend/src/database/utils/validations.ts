import * as joi from 'joi';
import IUser from '../interface/IUser';
import IUserAuth from '../interface/IUserAuth';

export const userValidation = (user: IUser) => {
  const schema = joi.object({
    email: joi.string().email().required(),
    name: joi.string().required(),
    password: joi.string().required(),
    role: joi.string().valid('admin', 'user').required(),
  });

  return schema.validate(user);
};

export const userLoginValidation = (user: IUserAuth) => {
  const schema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().required(),
  });

  return schema.validate(user);
};
