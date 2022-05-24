import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";
import TeachingMenu from "./TeachingMenu";
import CourseMaker from "./CourseMaker";
import NewCourse from "./NewCourse";
import CourseContainer from "./CourseContainer";
import React, { useEffect, useState } from "react";
import ShowCourse from "./ShowCourse";
import RichtextEditor from "./RichtextEditor";
import { propTypes } from "react-bootstrap/esm/Image";

const TeachingPage = (props) => {
  const [course, setCourse] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [filterBy, setFilterBy] = useState("");

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost/api/courses.php")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setCourse(data);
          setIsLoading(false);
        });
    }, 500);
  }, []);

  return (
    <>
      <div className="container-fluid">
        <div className="row fill">
          <TeachingMenu nick={props.nick} />
          <div className="col p-3 fs">
            <CourseMaker setSearch={setFilterBy} />
            {isLoading && (
              <div className="container my-5 mt-5 fv">Ładuje...</div>
            )}
            <div className="container my-5 mt-2 fv">
              {course && (
                <CourseContainer
                  course={course}
                  filter={filterBy}
                  filterAuthor={true}
                  nick={props.nick}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeachingPage;
