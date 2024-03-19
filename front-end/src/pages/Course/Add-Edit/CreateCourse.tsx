import { useDispatch } from "react-redux";
import { startCreateCourse, startAddMany } from "../../../redux/courseSlice";
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

  const handleAddDemo = async () => {
    try {
      const confirmation = window.confirm("Are you sure to add demo records");
      if (confirmation) {
        const response = await dispatch<any>(startAddMany());
        if (response.payload.status === true) {
          handleCancel();
        }
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <>
      <Form
        handleCancel={handleCancel}
        handleSubmit={handleSubmit}
        handleAddDemo={handleAddDemo}
      />
    </>
  );
};

export default CreateCourse;
