import {IConfig } from 'js-validation-check';

/**
 * mongodb config
 */

const mongoDBHost = process.env.mHost || "localhost";
const mongoDB = process.env.mDB || "angular-zero";
export const mongoDBURL = `mongodb://${mongoDBHost}/${mongoDB}`;

/**
 * token config
 */
export const tokenKey = process.env.tokenKey || 'thisisgreatsecret';
export const saltRounds: number = Number(process.env.saltRounds) || 13;

/**
 * signup config
 */
export const userConfig: IConfig = {
  email: {
    min: 1,
    max: 999,
    type: 'email'
  },
  username: {
    min: 3,
    max: 999,
  },
  password: {
    min: 3,
    max: 999,
  }
}