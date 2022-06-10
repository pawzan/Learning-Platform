import React, { useEffect, useState } from "react";
import axios from "axios";
import TakeQuiz from "../TakeQuiz";

const QuizComponent = ({ lessonId }) => {
  const [lessonList2, setLessonList2] = useState(null);
  let test = JSON.stringify(lessonList2, null, 4);

  console.log("test: " + test);
  const loadLesson = async () => {
    const result = await axios.get(
      `http://localhost/api/getQuiz.php?json=${lessonId}`
    );
    setLessonList2(result.data);
    console.log("aaa:" + lessonList2);
  };

  useEffect(() => {
    loadLesson()
  }, [lessonId]);

  return (
    <div
      className="row"
      style={{ width: "100%", justifyContent: "center", display: "flex" }}
    >
      <div className="col-sm-12 col-md-6">
        <form method={"POST"} action={"http://localhost/api/test.php"}>
          <input type="hidden" name="lesson" value={lessonId} />
          {lessonList2 && lessonList2.map((quiz) => <TakeQuiz quiz={quiz} />)}
          {lessonList2 !== "" ? <button type="submit">Send</button> : <></>}
        </form>
      </div>
    </div>
  );
};

export default QuizComponent;
