import React, { useEffect, useState } from "react";
import CourseViewComponent from "../molecules/CourseViewComponent";
import Menu from "../molecules/Menu";
import MenuLog from "../molecules/MenuLog";

const HomePage = (props) => {
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
    <div>
      {props.user ? (
        <Menu
          setSearch={setFilterBy}
          user={props.user}
          nick={props.nick}
          type={props.type}
          id={props.id}
        />
      ) : (
        <MenuLog setSearch={setFilterBy} />
      )}

      {isLoading && (
        <div className="container my-5 mt-5 fv">
          <div className="spinner-border" role="status">
            <span className="sr-only"></span>
          </div>
        </div>
      )}
      <div className="container my-5 mt-5 fv">
        {course && (
          <CourseViewComponent
            isLogged={props.isLogged}
            course={course}
            filter={filterBy}
            menu={true}
          />
        )}
      </div>
    </div>
  );
};

export default HomePage;
