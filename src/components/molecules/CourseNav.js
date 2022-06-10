import { useEffect, useState } from "react";
import * as React from "react";
import axios from "axios";

//import components
import CourseNavButton from "../atoms/CourseNavButton";

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

  return (
    <div style={{ position: "absolute", left: "10px", top: "50%" }}>
      <CourseNavButton lessons={lessonList} courseId={props.courseId} />
    </div>
  );
};

export default CourseNav;
