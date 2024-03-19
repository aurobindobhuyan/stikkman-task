import { Link } from "react-router-dom";
import { ICourse } from "../../interface";
import "./listingCourse.css";

interface Props {
  course: ICourse;
}

const ListingCourse: React.FC<Props> = ({ course }) => {
  return (
    <div className="course-item">
      <div className="img-container">
        <div className="img-section">
          <img src={course.thumbnail} alt={course.name} />
        </div>
      </div>
      <h1>Name: {course.name}</h1>
      <p className="description">Description: {course.description}</p>
      <p>Created By: {course.author}</p>
      <p className="description">
        {new Date(course.createdAt).toDateString() +
          " " +
          new Date(course.createdAt).toLocaleTimeString()}
      </p>
      <Link to={`/course/${course._id}`}>
        <button className="read-more">Read more</button>
      </Link>
    </div>
  );
};

export default ListingCourse;
