import { useDispatch } from "react-redux";
import { startCreateCourse } from "../../../redux/courseSlice";
import Form from "./Form";

interface ICreateCourse {
  handleCancel: () => void;
}

const CreateCourse = ({ handleCancel }: ICreateCourse) => {
  const dispatch = useDispatch();

  const handleSubmit = async (value: any) => {
    try {
      const response = await dispatch<any>(startCreateCourse(value));
      if (response.payload.status === true) {
        handleCancel();
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <>
      <Form handleCancel={handleCancel} handleSubmit={handleSubmit} />
    </>
  );
};

export default CreateCourse;
