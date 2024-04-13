import { NextFunction, Request, Response } from 'express';

export const errorHandler = async (res: Response, statusCode=500, message = "Internal Server Error") => {
    return res.status(statusCode).json({
        success: false,
        message
    });
}

export const asyncErrorHandler = (passedFunc: Function) => async (req: Request, res: Response, next: NextFunction) => {
    try {
        await passedFunc(req, res, next);        
    } catch (error: any) {
        console.error("Async Error Handler", error);
        return errorHandler(res);
    }
}