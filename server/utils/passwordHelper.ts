import { genSalt, hash, compare } from 'bcryptjs';
import { saltRounds } from './config';

/**
 * encrypt password
 * @param plainPassword
 */
export const encryptPassword = async (plainPassword: string) => {
  return new Promise((resolve, reject) => {
    genSalt(saltRounds, (err, salt) => {
      if (err) return reject(err);
      hash(plainPassword, salt, (err, hash) => {
        (err ? reject(err) : (resolve(hash)));
      });
    });
  });
}

export const checkPassword = async (plainPassword: string, hash: string) => {
  return new Promise((resolve, reject) => {
    compare(plainPassword, hash, (err, res) => {
      (err ? reject('username/ password wrong') : resolve(res));
    });
  });
}