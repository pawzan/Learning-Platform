import React, { useEffect, useState } from "react";
import CourseContainer from "./CourseContainer";
import Menu from "./Menu";
import MenuLog from "./MenuLog";
import teachingMode from "./TeachingMenu";
import courseApi from "../api/coursApi";
import useFetchAPI from "../api/coursApi";
import { useReducedMotion } from "framer-motion/dist/framer-motion";

const Home = (props) => {
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
  console.log("to Filter " + filterBy);

  return (
    <div>
      {props.user ? (
        <Menu setSearch={setFilterBy} user={props.user} nick={props.nick} />
      ) : (
        <MenuLog setSearch={setFilterBy} />
      )}

      {isLoading && (
        <div className="container my-5 mt-5 fv">
          <div class="spinner-border" role="status">
            <span class="sr-only"></span>
          </div>
        </div>
      )}
      <div className="container my-5 mt-5 fv">
        {course && (
          <CourseContainer course={course} filter={filterBy} menu={true} />
        )}
      </div>
    </div>
  );
};

export default Home;
