import Course, { ICourseSchema } from "../../models/Course";
import { demoRecords } from "./courses";
import { OperationalError } from "../../utils/errorHandler";

export const getAllCourse = async () => {
  const courses = await Course.find({}).lean().exec();

  return { status: true, data: courses };
};

export const addManyCourse = async (courses: ICourseSchema[]) => {
  if (Object.keys(courses).length === 0) {
    courses = demoRecords;
  }
  const response = await Course.insertMany(courses);

  if (!response) throw new OperationalError(400, `Something went wrong`);

  return { status: true, data: response };
};

export const createCourse = async ({
  thumbnail,
  name,
  author,
  description,
}) => {
  const createdCouse = await Course.create({
    thumbnail,
    name,
    author,
    description,
  });

  if (!createdCouse) throw new OperationalError(400, "Failed to create Course");

  return { status: true, data: createdCouse };
};

export const getOneCourse = async ({ courseId }) => {
  const course = await Course.findOne({ _id: courseId }).lean().exec();

  if (!course) {
    throw new OperationalError(400, "Course not found with id " + courseId);
  }

  return { status: true, data: course };
};

export const getCourseByAuthor = async (author) => {
  const courses = await Course.find({
    author: { $regex: author, $options: "i" },
  })
    .lean()
    .exec();

  if (!courses) {
    throw new OperationalError(400, "Couldn't find author with name " + author);
  }

  return { status: true, data: courses };
};

export const updateCourse = async ({
  id,
  thumbnail,
  name,
  author,
  description,
}) => {
  const updatedCourse = await Course.findByIdAndUpdate(
    id,
    {
      thumbnail,
      name,
      author,
      description,
    },
    { new: true, runValidators: true }
  );

  if (!updatedCourse) {
    throw new OperationalError(400, "Failed to update Course with id " + id);
  }

  return { status: true, data: updatedCourse };
};

export const deleteCourse = async ({ id }) => {
  const deletedCourse = await Course.findByIdAndDelete(id, {
    new: true,
    runValidators: true,
  });

  if (!deletedCourse) {
    throw new OperationalError(400, "Failed to delete Course with id " + id);
  }

  return { status: true, data: deletedCourse };
};
