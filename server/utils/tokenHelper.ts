import { sign, verify } from 'jsonwebtoken';
import { tokenKey } from './config';
import { Request, Response, NextFunction } from 'express';

/**
 * creating token
 */
export const createToken = async (data) => {
  return await sign(data, tokenKey, { expiresIn: '8h' });
}

/**
 * verify token
 */
export const checkToken = async (token: string) => {
  return new Promise((res, rej) => {
    verify(token, tokenKey, (err, decode) => {
      err ? rej(err) : res(decode);
    });
  })
};

export const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (!req.get('token')) {
      return res.status(403).send('bad request');
    }
    await checkToken(req.get('token') as string);
    next();
  } catch (error) {
    /* when token expires
       either you can end session or refresh the token and
       send
    */
    if (error.name === 'TokenExpiredError') {
      return res.status(401).send('token expired');
    }
    res.status(403).send('bad request!!');
  }
}