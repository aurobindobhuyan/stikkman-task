import { model, Schema } from "mongoose";

export interface ICourseSchema {
  thumbnail: string;
  name: string;
  author: string;
  description?: string;
}

const courseSchema = new Schema<ICourseSchema>(
  {
    thumbnail: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
  },
  { timestamps: true }
);

const Course = model<ICourseSchema>("Course", courseSchema);

export default Course;
