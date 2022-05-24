import React, { useEffect, useState } from "react";
import Course from "./Course";
import axios from "axios";
import { NavLink } from "react-router-dom";

const CourseNav = (props) => {
  const [lessonList, setLessonList] = useState([]);

  const loadLesson = async () => {
    const result = await axios.get(
      `http://localhost/api/lessonsd.php?json=${props.courseId}`
    );
    setLessonList(result.data.lessonData);
    console.log(result.data.lessonData);
  };

  useEffect(() => {
    loadLesson();
  }, []);

  const menu = lessonList.map((lesson) => (
    <li key={lesson.id}>
      <NavLink to={`/Course/${props.courseId}/${lesson.id}`}>
        {lesson.tittle}
      </NavLink>
    </li>
  ));
  return (
    <nav>
      <ul>{menu}</ul>
    </nav>
  );
};

export default CourseNav;
