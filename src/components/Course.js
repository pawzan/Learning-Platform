import React, { Component, useEffect, useState, useRef } from "react";
import Menu from "./Menu";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import ReactHtmlParser from "react-html-parser";
import axios from "axios";
import { Link } from "react-router-dom";
import CourseContent from "./CourseContent";
import { BrowserRouter, Route, Router } from "react-router-dom";
import CourseNav from "./CourseNav";
import QuizComponent from "./QuizComponent";

function Course({ nick, courseId, lessonId, id_user }) {
  return (
    <>
      {/* <Menu visible={true} nick={nick} />

      <div className="mt-5 fv float-start border border-dark">
        <CourseNav courseId={courseId} nick={nick} />
      </div>
      <div className="mt-5 fv border border-dark mx-1">
        <CourseContent lessonId={lessonId} />
      </div> */}
      <div className="container-fluid">
        <header className=" bg-dark d-block">
          <Menu visible={true} nick={nick} />
        </header>

        <div className="row">
          <div className=" float-start col-1 mt-5 ml-2 h-auto">
            <CourseNav courseId={courseId} nick={nick} />
          </div>

          <div
            style={{ padding: "50px" }}
            className=" float-end col-11 mt-5 h-auto position-relative"
          >
            <CourseContent lessonId={lessonId} id_user={id_user} />
            <QuizComponent lessonId={lessonId} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Course;
