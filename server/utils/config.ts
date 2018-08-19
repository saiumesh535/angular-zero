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