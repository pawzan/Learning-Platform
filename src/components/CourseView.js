import { Button } from "@mui/material";
import React from "react";
import { MenuItem } from "@mui/material";
import { NavLink } from "react-router-dom";

const CourseView = ({ lessons, courseId }) => {
  return (
    <>
      {lessons.map((lesson) => (
        <MenuItem key={lessons.id}>
          <NavLink to={`/Course/${courseId}/${lesson.id}`}>
            <Button style={{ width: "18ch" }} variant="contained">
              {lesson.tittle}
            </Button>
          </NavLink>
        </MenuItem>
      ))}
    </>
  );
};

export default CourseView;
