import React from "react";
import { NavLink } from "react-router-dom";

//imports icons
import { BsFillArrowRightCircleFill } from "react-icons/bs";

//mui imports
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const CourseNavButton = ({ lessons, courseId }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <IconButton
        style={{
          position: "fixed",
          left: "10px",
          top: "50%",
        }}
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <BsFillArrowRightCircleFill size={60} />
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
            height: "100%",
            width: "30ch",
            backgroundColor: "white",
          },
        }}
      >
        {lessons.map((lesson) => (
          <NavLink
            to={`/Course/${courseId}/${lesson.id}`}
            style={{ textDecoration: "none" }}
            onClick={handleClose}
          >
            <MenuItem
              key={lesson}
              style={{
                color: "black",
                marginTop: "2px",
                fontSize: "20px",
                justifyContent: "center",
              }}
            >
              {lesson.tittle}
            </MenuItem>
            <hr />
          </NavLink>
        ))}
      </Menu>
    </>
  );
};

export default CourseNavButton;
