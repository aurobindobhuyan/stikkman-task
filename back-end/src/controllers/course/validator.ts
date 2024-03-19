import { Request, Response, NextFunction } from "express";

import Joi from "joi";
import JoiObjectId from "joi-objectid";
import { ValidationError } from "../../utils/errorHandler";

const JoiMongoObjectId = JoiObjectId(Joi);

export const getCourseByAuthor = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const paramSchema = Joi.object().keys({
    author: Joi.string().required().trim(),
  });

  const { error } = paramSchema.validate(req.query);
  if (error) {
    throw new ValidationError(
      `Kindly check your query: ${error?.details[0]?.message}`
    );
  }
  next();
};

export const createCourse = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const bodyValidation = Joi.object()
    .keys({
      thumbnail: Joi.string().required().trim(),
      name: Joi.string().required().trim(),
      author: Joi.string().required().trim(),
      description: Joi.string().trim().allow("").empty(false),
    })
    .unknown(false);

  const { error } = bodyValidation.validate(req.body);

  if (error) {
    throw new ValidationError(
      `Kindly check your body: ${error?.details[0]?.message}`
    );
  }
  next();
};

export const getOneCourse = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const schema = Joi.object().keys({
    courseId: JoiMongoObjectId().required(),
  });
  const { error } = schema.validate(req.params);
  if (error) {
    throw new ValidationError(
      `Kindly check your params: ${error?.details[0]?.message}`
    );
  }
  next();
};

export const updateCourse = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const paramsSchema = Joi.object().keys({
    courseId: JoiMongoObjectId().required(),
  });

  const bodySchema = Joi.object()
    .keys({
      _id: JoiMongoObjectId().required(),
      thumbnail: Joi.string(),
      name: Joi.string(),
      author: Joi.string(),
      description: Joi.string().trim().allow("").empty(false),
    })
    .unknown(false);

  const { error: paramsError } = paramsSchema.validate(req.params);
  const { error: bodyError } = bodySchema.validate(req.body);
  if (paramsError) {
    throw new ValidationError(
      `Kindly check your params: ${paramsError?.details[0]?.message}`
    );
  }

  if (bodyError) {
    throw new ValidationError(
      `Kindly check your params: ${bodyError?.details[0]?.message}`
    );
  }
  next();
};

export const deleteCourse = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const schema = Joi.object().keys({
    courseId: JoiMongoObjectId().required(),
  });
  const { error } = schema.validate(req.params);
  if (error) {
    throw new ValidationError(
      `Kindly check your params: ${error?.details[0]?.message}`
    );
  }
  next();
};
