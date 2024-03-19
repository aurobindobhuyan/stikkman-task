import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams, useNavigate } from "react-router-dom";

import EditCourse from "../Add-Edit/EditCourse";
import {
  getCourseById,
  startDeleteCourse,
  startGetCourse,
} from "../../../redux/courseSlice";
import { RootState } from "../../../redux/store";
import "./courseDetails.css";

const CourseDetails = () => {
  const [editing, setEditing] = useState(false);
  const params = useParams();
  const course = useSelector((state: RootState) =>
    getCourseById(state, params.id)
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleEdit = () => setEditing(!editing);

  useEffect(() => {
    dispatch<any>(startGetCourse());
  }, []);

  const handleDelete = async () => {
    const confirmation = window.confirm("Are you sure to delete this?");
    if (confirmation) {
      try {
        const response = await dispatch<any>(startDeleteCourse(course?._id));
        if (response.payload.status === true) {
          navigate("/");
        }
      } catch (error) {
        console.log("error", error);
      }
    }
  };

  return (
    <div className="course-details-container">
      <div>
        <>
          {course ? (
            <>
              {editing ? (
                <EditCourse course={course} handleCancel={handleEdit} />
              ) : (
                <div className="course-details-card">
                  <Link to="/">
                    <button style={{ backgroundColor: "black" }}>
                      &#x2190;
                    </button>
                  </Link>
                  <div className="img-container">
                    <div className="img-section">
                      <img src={course.thumbnail} alt={course.name} />
                    </div>
                  </div>
                  <h1>{course?.name}</h1>
                  <p>Created By: {course?.author}</p>
                  <p>
                    Created At: {new Date(course?.createdAt).toLocaleString()}
                  </p>
                  <p>
                    Last update: {new Date(course?.updatedAt).toLocaleString()}
                  </p>
                  <p>Description: {course?.description}</p>
                  <button className="edit" onClick={handleEdit}>
                    Edit
                  </button>
                  <button className="delete" onClick={handleDelete}>
                    Delete
                  </button>
                </div>
              )}
            </>
          ) : (
            <h1>Course not found with id: {params.id}</h1>
          )}
        </>
      </div>
    </div>
  );
};

export default CourseDetails;
