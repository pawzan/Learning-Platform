import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

//icons import
import { TiDelete } from "react-icons/ti";
import { MdQuiz, MdGrading } from "react-icons/md";

//mui import
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";

import TeachingPageMenu from "../molecules/TeachingPageMenu";

const CourseLessonPage = ({ courseId, nick }) => {
  const [lessonList, setLessonList] = useState(null);

  const loadLesson = async () => {
    const result = await axios.get(
      `http://localhost/api/lessonsd.php?json=${courseId}`
    );
    setLessonList(result.data.lessonData);
    console.log(result.data.lessonData);
  };

  useEffect(() => {
    loadLesson();
  }, []);

  const handleLessonAdd = async () => {
    const id = courseId;
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: id, title: "Lekcja" }),
    };
    await fetch(`http://localhost/api/lessonAdd.php`, requestOptions)
      .then((response) => console.log(JSON.stringify(response)))
      .then((result) => {
        loadLesson();
      })
      .catch((error) => console.log(error));
  };

  const handleLessonDelete = (id) => {
    axios
      .delete(`http://localhost/api/lessonDelete.php?id=${id}`)
      .then((result) => {
        loadLesson();
      });
  };

  const CompList = ({ lesson }) => {
    const [lessonTitle, setLessonTitle] = useState(lesson.tittle);

    const handleLessonChange = (lesson, e) => {
      const value = e.target.value;
      const text = { value, lesson };

      fetch("http://localhost/api/updateTitle.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(text),
      }).then(() => {
        console.log("add");
        setLessonTitle(value);
      });
    };
    console.log(lesson.tittle);

    return (
      <div className="mt-2 shadow">
        <div className="card" style={{ border: "0" }}>
          <h5 className="card-header ">
            <div className="float-start">
              <input
                style={{
                  backgroundColor: "#f7f7f7",
                  border: 0,
                  minWidth: "100px",
                  fontSize: "27px",
                }}
                name="title"
                value={lessonTitle}
                onBlur={(e) => handleLessonChange(lesson.id, e)}
                onChange={(e) => handleLessonChange(lesson.id, e)}
              ></input>
            </div>
            <div className="float-end">
              <Link
                to={{
                  pathname: `/quiz/${courseId}/lesson/${lesson.id}`,
                  state: {
                    stateParam: lesson.content,
                    stateParam1: lesson.tittle,

                  },
                }}
              >
                <MdQuiz
                  size={35}
                  style={{ color: "#575151", float: "start" }}
                />
              </Link>

              <Link
                to={{
                  pathname: `/showCourse/${courseId}/lesson/${lesson.id}`,
                  state: {
                    stateParam: lesson.content,
                    stateParam1: lesson.tittle,
                  },
                }}
              >
                <MdGrading
                  size={35}
                  style={{ color: "#575151", float: "start" }}
                />
              </Link>

              <TiDelete
                size={35}
                style={{ color: "#b52f2f", float: "start" }}
                onClick={() => handleLessonDelete(lesson.id)}
              />
            </div>
          </h5>
        </div>
      </div>
    );
  };

  const List = () =>
    lessonList.map((lesson, index) => (
      <div key={`item-${index}`}>
        <CompList lesson={lesson} />
      </div>
    ));

  return (
    <>
      <div className="container-fluid">
        <div className="row fill">
          <TeachingPageMenu nick={nick} />
          <div className="col">
            <h1 className="p1 mt-2">PANEL LEKCJI</h1>
            <div className="container my-3 mt-3">
              {lessonList && <List lessonList={lessonList} />}
            </div>
            <Fab variant="contained" color="success" onClick={handleLessonAdd}>
              <AddIcon />
            </Fab>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseLessonPage;
