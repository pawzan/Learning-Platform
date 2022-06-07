import React, { Component, useEffect, useState, useRef } from "react";
import { TiDelete, TiEdit, TiEye } from "react-icons/ti";
import { Link, Redirect } from "react-router-dom";
import RichtextEditor from "./RichtextEditor";
import { MdQuiz, MdGrading } from "react-icons/md";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import AddIcon from "@mui/icons-material/Add";
import Modal from "./Modal";
import axios from "axios";
import TeachingMenu from "./TeachingMenu";
import Fab from "@mui/material/Fab";

const ShowCourse = (props) => {
  const [lessonList, setLessonList] = useState(null);

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

  const handleLessonAdd = async () => {
    const id = props.courseId;
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
        <div className="card">
          <h5 className="card-header ">
            <div className="float-start">
              <input
                style={{
                  backgroundColor: "#f7f7f7",
                  border: 0,
                  minWidth: "100px",
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
                  pathname: `/quiz/${props.courseId}/lesson/${lesson.id}`,
                  state: {
                    stateParam: lesson.content,
                    stateParam1: lesson.tittle,
                  },
                }}
              >
                <a className="text-success">
                  <MdQuiz />
                </a>
              </Link>

              <Link
                to={{
                  pathname: `/showCourse/${props.courseId}/lesson/${lesson.id}`,
                  state: {
                    stateParam: lesson.content,
                    stateParam1: lesson.tittle,
                  },
                }}
              >
                <a className="text-success">
                  <MdGrading />
                </a>
              </Link>
              <a
                className="text-danger"
                onClick={() => handleLessonDelete(lesson.id)}
              >
                <TiDelete />
              </a>
            </div>
          </h5>
        </div>
      </div>
    );
  };

  const List = (props) =>
    lessonList.map((lesson, index) => (
      <div key={`item-${index}`}>
        <CompList lesson={lesson} />
      </div>
    ));

  return (
    <>
      <div className="container-fluid">
        <div className="row fill">
          <TeachingMenu nick={props.nick} />
          <div className="col">
            <h1 className="p1 mt-2">Dodaj lekcje</h1>
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

export default ShowCourse;
