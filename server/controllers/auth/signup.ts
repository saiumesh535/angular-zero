import { validate } from 'js-validation-check';
import { Response } from 'express';

import { encryptPassword } from '../../utils/passwordHelper';
// import { IUser } from '../../../shared/Types';
import { userConfig } from '../../utils/config';
import { usersModel } from '../../models';


/**
 * adding admin signUp
 */
export const signUp = async (req, res: Response) => {
  // first validate iuser input
  const { username, password, email } = req.body;
  const errors = validate({ username, password, email }, userConfig);
  if (errors.length !== 0) return res.status(401).json({
    status: false,
    errors
  });
  // first check user exists or not
  const userExists = await usersModel.find({ username });
  if (userExists.length > 0) return res.json({
    status: false,
    message: 'user aleady exists'
  });
  const hashPassword = await encryptPassword(password);
  const signUpData = await usersModel.insertMany([{ username, hashPassword , email }]);
  res.json(signUpData);
};
