import React from "react";
import { useDispatch } from "react-redux";

import { startUpdateCourse } from "../../../redux/courseSlice";
import { ICourse } from "../interface";
import Form from "./Form";

interface Props {
  course: ICourse;
  handleCancel: () => void;
}

const EditCourse: React.FC<Props> = ({ course, handleCancel }) => {
  const dispatch = useDispatch();

  const handleSubmit = async (value: any) => {
    try {
      const response = await dispatch<any>(startUpdateCourse(value));
      if (response.payload?.status === true) {
        handleCancel();
      }
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <Form
      course={course}
      handleSubmit={handleSubmit}
      handleCancel={handleCancel}
    />
  );
};

export default EditCourse;
