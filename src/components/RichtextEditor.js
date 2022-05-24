import React, { Component, useEffect, useState, useRef } from "react";
import JoditEditor from "jodit-react";
import { useLocation, useParamsś } from "react-router-dom";
import axios from "axios";
import TeachingMenu from "./TeachingMenu";
import TextField from "@mui/material/TextField";
import { Button, Switch } from "@mui/material";
import { BsHeadphones } from "react-icons/bs";
import { BiTask } from "react-icons/bi";
import { FaRegEye } from "react-icons/fa";
import Box from "@mui/material/Box";

const RichtextEditor = (props) => {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const { stateParam, stateParam1 } = useLocation().state;
  const [value, setValue] = React.useState(stateParam1);
  const [lessonID, setLessonId] = useState(props.lessonId);
  console.log(stateParam);

  console.log(props.lessonId);

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = { content, value, lessonID };

    fetch("http://localhost/api/lessonUpdate.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(text),
    }).then(() => {
      console.log("add");
    });
  };

  const config = {
    readonly: false,
    minHeight: 500,
    maxHeight: 700,
    maxWidth: 2000,
  };
  const label = { inputProps: { "aria-label": "Switch demo" } };
  return (
    <div className="container-fluid">
      <div className="row fill">
        <TeachingMenu nick={props.nick} />
        <div className="col mt-5">
          <h1 className="p1">Lekcja z treścią</h1>
          <div className="container my-5 ">
            <div>
              <form onSubmit={handleSubmit}>
                <TextField
                  id="standard-basic"
                  label="Tytuł"
                  sx={{ mb: 3, width: "100%" }}
                  name="title"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                ></TextField>
                <Box>
                  <div>
                    <BsHeadphones size={20} />
                    <Switch {...label} defaultChecked color="secondary" />
                    <BiTask size={20} />
                    <Switch {...label} defaultChecked color="warning" />
                    <FaRegEye size={20} />
                    <Switch {...label} defaultChecked color="success" />
                  </div>
                </Box>
                {/* <input type="hidden" name="text" value={content} /> */}

                <input type="hidden" name="lessonId" value={props.lessonId} />

                <JoditEditor
                  ref={editor}
                  value={stateParam}
                  config={config}
                  tabIndex={1}
                  onBlur={(newContent) => setContent(newContent)}
                  onChange={() => {}}
                />
                <Button
                  className="mt-2"
                  variant="contained"
                  type="submit"
                  color="success"
                >
                  Zapisz
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RichtextEditor;
