import { SafetyCheck } from "@mui/icons-material";
import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Radio } from "@material-ui/core";
import axios from "axios";

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
    //console.log("test: " + JSON.stringify(result.data.q));
  };

  useEffect(() => {
    loadLesson();
  }, [lessonId]);

  //console.log("test: " + test);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < lessonList2.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div>
      <div className="question-box mb-5">
        <div className="questionchange">
          <h1>
            Question. {currentQuestion + 1}. {test && <p>{test[0].question}</p>}
          </h1>
          <br />
          <hr />
          <p className="questiontext">
            <sup>2</sup>
          </p>
          <br />
          <div>
            <input
              type="radio"
              className="option"
              color="primary"
              value="option1"
            />
            <span>{test && test[0].A}</span>
          </div>
        </div>
        <br />
        <div className="buttons">
          <Button
            variant="contained"
            color="success"
            className="button button1"
            onClick={(event) => [handleAnswerOptionClick()]}
          >
            Dalej
          </Button>
        </div>
      </div>
    </div>
  );
};

export default QuizComponent;
