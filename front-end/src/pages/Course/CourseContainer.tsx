import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import ListingCourse from "./List/ListView/ListingCourse";
import CreateCourse from "./Add-Edit/CreateCourse";
import ContainerHeader from "./ContainerHeader";
import ListingTable from "./List/TableView/ListingTable";
import ErrorBoundary from "../../ErrorBoundary";

import { startGetCourse, allCourses } from "../../redux/courseSlice";
import { ICourse } from "./interface";
import "./container.css";

interface ICourseContainerProps {
  radio: boolean;
  toggleRadio: () => void;
}

const CourseContainer: React.FC<ICourseContainerProps> = ({
  radio,
  toggleRadio,
}) => {
  const courses = useSelector(allCourses);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [searchUser, setSearchUser] = useState("");
  const [filteredUser, setFilteredUser] = useState<ICourse[]>([]);

  // Fetching the courses on the first render
  useEffect(() => {
    const getData = async () => {
      const response = await dispatch<any>(startGetCourse());
      setFilteredUser(response.payload.data);
    };
    getData();
  }, []);

  // Handling search results;
  useEffect(() => {
    const result = courses.filter((course: ICourse) => {
      return course.author.toLowerCase().includes(searchUser.toLowerCase());
    });
    setFilteredUser(result);
  }, [searchUser, courses]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchUser(e.target.value);
  };
  const handleCreateCourse = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <div>
      <ErrorBoundary>
        <ContainerHeader
          search={searchUser}
          handleSearch={handleSearch}
          handleCreateCourse={handleCreateCourse}
          value={radio}
          toggleRadio={toggleRadio}
        />
        {showModal && (
          <div className="modal-backdrop">
            <div className="modal-container">
              <div className="modal-content">
                <CreateCourse handleCancel={handleCloseModal} />
              </div>
            </div>
          </div>
        )}
        {courses.length === 0 ? (
          <div className="listing-container">
            <h1>No Courses there</h1>
          </div>
        ) : (
          <>
            {radio ? (
              <ListingTable courses={filteredUser} />
            ) : !filteredUser.length ? (
              <div className="listing-container">
                <h1>No Courses found with name: {searchUser}</h1>
              </div>
            ) : (
              <div className="listing-container">
                {filteredUser.map((course: ICourse) => (
                  <ListingCourse course={course} key={course._id} />
                ))}
              </div>
            )}
          </>
        )}
      </ErrorBoundary>
    </div>
  );
};

export default CourseContainer;
