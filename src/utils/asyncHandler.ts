import { NextFunction, Request, Response } from "express";

interface CustomError extends Error {
  code?: number;
}

const asyncHandler = (requestHandler: any) => {
  (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};
/* 
const asyncHandler =
  () => async (req: Request, res: Response, next: NextFunction) => {
    try {
    } catch (err) {
      const error = err as CustomError;
      res.status(error.code || 500).json({
        success: false,
        message: error.message || "Internal Server Error Async Handler",
      });
    }
  };

 */
export { asyncHandler };
