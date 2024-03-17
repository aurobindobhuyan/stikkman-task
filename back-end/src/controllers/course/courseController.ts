import { Request, Response } from "express";
import { asyncHandler } from "../../utils/asyncHandler";
import * as services from "./services";

export const getAllCourse = asyncHandler(
  async (req: Request, res: Response) => {
    const result = await services.getAllCourse();

    res.json(result);
  }
);

export const getCourseByAuthor = asyncHandler(
  async (req: Request, res: Response) => {
    const { author } = req.query;
    const response = await services.getCourseByAuthor(author);

    res.json(response);
  }
);

export const createCourse = asyncHandler(
  async (req: Request, res: Response) => {
    const { thumbnail, name, author, description } = req.body;

    const response = await services.createCourse({
      thumbnail,
      name,
      author,
      description,
    });

    res.json(response);
  }
);

export const getOneCourse = asyncHandler(
  async (req: Request, res: Response) => {
    const { courseId } = req.params;

    const response = await services.getOneCourse({ courseId });

    res.json(response);
  }
);

export const updateCourse = asyncHandler(
  async (req: Request, res: Response) => {
    const { courseId } = req.params;
    const { thumbnail, name, author, description } = req.body;

    const response = await services.updateCourse({
      thumbnail,
      id: courseId,
      name,
      author,
      description,
    });

    res.json(response);
  }
);

export const deleteCourse = asyncHandler(
  async (req: Request, res: Response) => {
    const { courseId } = req.params;

    const result = await services.deleteCourse({ id: courseId });

    res.json(result);
  }
);
