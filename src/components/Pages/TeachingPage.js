import TeachingPageMenu from "../molecules/TeachingPageMenu";
import TeachingPageHeader from "../molecules/TeachingPageHeader";

import CourseViewComponent from "../molecules/CourseViewComponent";
import React, { useEffect, useState } from "react";

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
          <TeachingPageMenu nick={props.nick} />
          <div className="col p-3 fs">
            <TeachingPageHeader setSearch={setFilterBy} />
            {isLoading && (
              <div className="container my-5 mt-5 fv">Ładuje...</div>
            )}
            <div className="container my-5 mt-2 fv">
              {course && (
                <CourseViewComponent
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
