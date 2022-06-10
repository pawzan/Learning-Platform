import React, { useEffect, useState, useRef } from "react";
import JoditEditor from "jodit-react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import TeachingPageMenu from "../molecules/TeachingPageMenu";
import TextField from "@mui/material/TextField";
import { Button, Switch } from "@mui/material";
import { BsHeadphones } from "react-icons/bs";
import { BiTask } from "react-icons/bi";
import { FaRegEye } from "react-icons/fa";

import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

const RichtextEditorPage = ({ lessonId, nick, courseId }) => {
  const { stateParam1 } = useLocation().state;

  const [form, setForm] = useState(null);

  const loadLesson = async () => {
    const result = await axios.get(
      `http://localhost/api/content.php?json=${lessonId}`
    );

    setForm(result.data.lessonData);
  };

  useEffect(() => {
    loadLesson();
  }, []);

  const handleRemove = (id) => {
    axios.delete(`http://localhost/api/contentDelete.php?id=${id}`).then(() => {
      loadLesson();
    });
  };

  const handleAddForm = async () => {
    const inputState = {
      lesson_id: lessonId,
      course_id: courseId,
      content: " ",
      v: true,
      a: true,
      r: true,
      c: true,
    };
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(inputState),
    };
    await fetch(`http://localhost/api/componentAdd.php`, requestOptions)
      .then((response) => console.log(JSON.stringify(response)))
      .then((result) => {
        loadLesson();
        setForm((prev) => [...prev, inputState]);
      })
      .catch((error) => console.log(error));
  };

  const config = {
    readonly: false,
    minHeight: 500,
    maxHeight: 700,
    maxWidth: 2000,
  };

  const Editor = ({ index, item }) => {
    const editor = useRef(null);
    const [content, setContent] = useState("");
    const [auditory, setAuditory] = useState(item.auditory);
    const [writing, setWriting] = useState(item.writing);
    const [visual, setVisual] = useState(item.visual);
    const [kinestetic, setKinestetic] = useState(item.kinestetic);
    const id = item.id;

    const text = { content, id, auditory, writing, visual, kinestetic, courseId };
    const handleSubmit = (e) => {
      fetch("http://localhost/api/textUpdate.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(text),
      }).then(() => {
        console.log("add : " + JSON.stringify(text));
      });
    };
    useEffect(() => {
      handleSubmit();
    }, [text]);

    return (
      <form onChange={handleSubmit}>
        <div className="mt-2">
          <div>
            <BsHeadphones size={20} />
            <Switch
              {...label}
              checked={auditory == 1 ? true : false}
              // checked={false}
              color="secondary"
              name="auditory"
              onChange={(e) => {
                setAuditory(e.target.checked === false ? 0 : 1);
              }}
            />
            <BiTask size={20} />
            <Switch
              checked={writing == 1 ? true : false}
              color="warning"
              name="writing"
              onChange={(e) => setWriting(e.target.checked === false ? 0 : 1)}
            />
            <FaRegEye size={20} />
            <Switch
              checked={visual == 1 ? true : false}
              color="success"
              name="visual"
              onChange={(e) => setVisual(e.target.checked === false ? 0 : 1)}
            />
            <FaRegEye size={20} />
            <Switch
              checked={kinestetic == 1 ? true : false}
              color="success"
              name="kinestetic"
              onChange={(e) =>
                setKinestetic(e.target.checked === false ? 0 : 1)
              }
            />

            <div className="float-end">
              <Button
                variant="outlined"
                color="error"
                onClick={(e) => handleRemove(item.id)}
              >
                X
              </Button>
            </div>
          </div>
          <JoditEditor
            name="content"
            ref={editor}
            value={item.content}
            config={config}
            tabIndex={1}
            onBlur={(newContent) => setContent(newContent)}
            onChange={(newContent) => setContent(newContent)}
          />
        </div>
      </form>
    );
  };

  const List = ({ form }) =>
    form.map((item, index) => (
      <div key={`item-${index}`}>
        <Editor item={item} index={index} />
      </div>
    ));

  const label = { inputProps: { "aria-label": "Switch demo" } };
  return (
    <div className="container-fluid">
      <div className="row fill">
        <TeachingPageMenu nick={nick} />
        <div className="col mt-5">
          <h1 className="p1">Lekcja z treścią</h1>
          <div className="container my-5 ">
            <div>
              <TextField
                disabled
                id="standard-basic"
                label="Tytuł"
                sx={{ mb: 3, width: "100%" }}
                name="title"
                value={stateParam1}
              ></TextField>

              {form && <List form={form} />}
            </div>
          </div>
          <div className="d-flex align-items-end justify-content-end">
            <div>
              <Fab
                style={{ position: "fixed", bottom: "50px", right: "50px" }}
                variant="contained"
                color="primary"
                onClick={handleAddForm}
              >
                <AddIcon />
              </Fab>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RichtextEditorPage;
