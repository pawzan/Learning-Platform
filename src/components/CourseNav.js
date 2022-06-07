import { useEffect, useState } from "react";
import * as React from "react";
import Menu from "@mui/material/Menu";
import Course from "./Course";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { AppBar, Button, Drawer, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ClassNames } from "@emotion/react";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { MenuItem } from "@mui/material";
import { Paper } from "@mui/material";
import { Toolbar } from "@mui/material";
import CourseView from "./CourseView";



const CourseNav = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [lessonList, setLessonList] = useState([]);
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

  return (
    <div>
      <CourseView lessons={lessonList} courseId={props.courseId} />
      {/* <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon size={44} />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "20ch",
          },
        }}
      >
        {lessonList.map((lesson) => (
          <MenuItem key={lesson} onClick={handleClose}>
            <NavLink to={`/Course/${props.courseId}/${lesson.id}`}>
              <Button style={{ width: "18ch" }} variant="contained">
                {lesson.tittle}
              </Button>
            </NavLink>
          </MenuItem>
        ))}
      </Menu> */}
    </div>
  );
};

export default CourseNav;
