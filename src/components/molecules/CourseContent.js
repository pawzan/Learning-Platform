import React, { useEffect, useState } from "react";
import ReactHtmlParser from "react-html-parser";
import axios from "axios";

function CourseContent({ lessonId, courseId, id_user }) {
  const [lessonList, setLessonList] = useState(null);

  const loadLesson = async () => {
    const result = await axios.get(
      `http://localhost/api/courseLesson.php?id=${id_user}&lesson=${lessonId}`
    );
    console.log("iddddd  " + id_user);
    setLessonList(result.data.lessonData);
    console.log("test: " + JSON.stringify(result.data.lessonData));
  };

  useEffect(() => {
    loadLesson();
  }, [lessonId]);

  const Tresc = ({ lesson }) => <>{ReactHtmlParser(lesson.content)}</>;

  const Items = ({ lessonList }) => {
    return lessonList.map((lesson, index) => (
      <Tresc key={lesson.id} lesson={lesson} courseId={courseId} />
    ));
  };

  return <div className="border mt-4 shadow-sm p-3 mb-5 bg-body rounded">{lessonList && <Items lessonList={lessonList} />}</div>;
}

export default CourseContent;
