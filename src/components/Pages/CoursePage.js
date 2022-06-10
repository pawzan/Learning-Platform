import React, { useEffect, useState } from "react";
import Menu from "../molecules/Menu";
import CourseContent from "../molecules/CourseContent";
import CourseNav from "../molecules/CourseNav";
import QuizComponent from "../molecules/QuizComponent";
import axios from "axios";

function CoursePage({ nick, courseId, lessonId, id_user, type }) {
  return (
    <>
      <div className="container-fluid">
        <header className=" bg-dark d-block">
          <Menu visible={true} nick={nick} type={type} id={id_user} />
        </header>

        <div className="row">
          <div className=" float-start col-1 mt-5 ml-2 h-auto">
            <CourseNav courseId={courseId} nick={nick} />
          </div>

          <div className="content-box ">
            <CourseContent lessonId={lessonId} id_user={id_user} courseId={courseId} />
          </div>

          <QuizComponent lessonId={lessonId} />
        </div>
      </div>
    </>
  );
}

export default CoursePage;
