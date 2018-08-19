import { Request, NextFunction, Response, ErrorRequestHandler } from "express";

/**
 * handling all the errors at one place
 */
export const wrapper = (fn): any => {
    return (req: Request, res: Response, next: NextFunction) => {
        fn(req, res).catch((error: Error) => next(error));
    }
}

/**
 * express error handler
 */
export const errorHandler = (err, req, res, next) => {
    res.status(500);
    if (process.env.NODE_ENV === 'development') {
        console.log(err);
        return res.json({
            status: false,
            err: err.stack
        })
    }
    res.send('something went wrong');
}

/**
 * handling 404 errors
 */
export const handle404Error = (req: Request, res: any) => {
    res.status(404).json({ status: false, code: 404, message: 'please check URL' });
}