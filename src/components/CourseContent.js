import React, { Component, useEffect, useState, useRef } from "react";
import ReactHtmlParser from "react-html-parser";
import axios from "axios";

function CourseContent(props) {
  const [lessonList, setLessonList] = useState([]);

  const loadLesson = async () => {
    const result = await axios.get(
      `http://localhost/api/courseLesson.php?json=${props.lessonId}`
    );
    setLessonList(result.data.lessonData);
    console.log(result.data.lessonData);
  };

  useEffect(() => {
    loadLesson();
  }, []);

  const Tresc = ({ lesson }) => <>{ReactHtmlParser(lesson.content)}</>;

  const Items = lessonList.map((lesson, index) => (
    <Tresc key={lesson.id} lesson={lesson} courseId={props.courseId} />
  ));

  //   {ReactHtmlParser(lesson.content)}
  console.log("lesson " + lessonList);

  return <>{Items}</>;
}

export default CourseContent;
