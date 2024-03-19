import { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import CourseContainer from "./pages/Course/CourseContainer";
import CourseDetails from "./pages/Course/Details/CourseDetails";

const App = () => {
  const [radio, setRadio] = useState(false);

  const toggleRadio = () => setRadio(!radio);

  return (
    <>
      <Routes>
        <Route path="/course" element={<CourseContainer radio={radio} toggleRadio={toggleRadio} />} />
        <Route path="/course/:id" element={<CourseDetails />} />

        <Route path="/" element={<Navigate to="/course" replace />} />
      </Routes>
    </>
  );
};

export default App;
