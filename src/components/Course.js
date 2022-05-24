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

function Course(props) {
  return (
    <>
      <Menu visible={true} />

      <div className="mt-5 fv float-start">
        <CourseNav courseId={props.courseId} nick={props.nick} />
      </div>
      <div className="mt-5 fv">sad</div>
    </>
  );
}

export default Course;
