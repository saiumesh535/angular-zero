import { Request, Response, NextFunction } from "express";
import mongoose from 'mongoose';
import { mongoDBURL as url } from "../utils/config";

/**
 * connecting mongodb
 */
export const connectDB = (req: Request, res: Response, next: NextFunction) => {
    /* check if mongodb already connected or not */
    if (mongoose.connection.readyState === 1) return next();
    /* Get Mongoose to use the global promise library */
    mongoose.Promise = global.Promise;
    /* connecting to MongoDB */
    mongoose.connect(url);
    const db = mongoose.connection;
    // Bind connection to error event (to get notification of connection errors)
    db.on('error', (error) => { next(error); });
    db.on('open', () => {
        next();
    });
}