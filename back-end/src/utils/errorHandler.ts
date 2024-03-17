import { Request, Response, NextFunction } from "express";

export class OperationalError extends Error {
  statusCode: number;
  message: string;
  status: string;

  constructor(statusCode: number = 500, message: string = "Server error") {
    super(message);

    Object.setPrototypeOf(this, OperationalError.prototype);
    Error.captureStackTrace(this, this.constructor);

    this.statusCode = statusCode;
    this.message = message;
    this.status = statusCode >= 400 && statusCode < 500 ? "Failed" : "Error";
  }
}

const CastErrorHandler = (err: any) => {
  const message = `Invalid value: ${err.value} for field ${err.path}`;
  return new OperationalError(400, message);
};

export class RouteNotFound extends Error {
  statusCode: number = 404;
  message: string;
  status: string;

  constructor(message: string) {
    super(message);

    Object.setPrototypeOf(this, RouteNotFound.prototype);
    Error.captureStackTrace(this, this.constructor);

    this.status = this.status;
    this.name = this.constructor.name;
    this.message = message;
  }
}

export class ValidationError extends Error {
  statusCode: number = 400;
  status: string = "failed";

  constructor(message: string) {
    super(message);

    Object.setPrototypeOf(this, ValidationError.prototype);
    Error.captureStackTrace(this, this.constructor);
    this.message = message;
  }
}

export const globalErrorhandler = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  error.statusCode = error.statusCode || 500;
  error.status = error.status || "Failed";

  if (error.name === "CastError") {
    error = CastErrorHandler(error);
  }

  return res.status(error.statusCode).json({
    status: error.status,
    statusCode: error.statusCode,
    message: error.message,
    stackTrace: error.stack,
    error,
  });
};
