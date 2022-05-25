import React, { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
import TeachingMenu from "./TeachingMenu";
import TextField from "@mui/material/TextField";
import { Button, Checkbox, Switch } from "@mui/material";
import { BsHeadphones } from "react-icons/bs";
import { BiTask } from "react-icons/bi";
import { FaRegEye } from "react-icons/fa";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import FormLabel from "@mui/material/FormLabel";

const Quiz = (props) => {
  const { stateParam, stateParam1 } = useLocation().state;
  const [lessonID, setLessonId] = useState(props.lessonId);
  const [form, setForm] = useState([]);

  const handleAddForm = (e) => {
    const inputState = {
      lesson_id: lessonID,
      Question: "",
      A: "",
      B: "",
      C: "",
      D: "",
      correctA: false,
      correctB: false,
      correctC: false,
      correctD: false,
    };

    setForm((prev) => [...prev, inputState]);
  };

  const handleRemove = (e, index) => {
    e.preventDefault();

    setForm((prev) => prev.filter((item) => item !== prev[index]));
  };

  console.log(form);

  const onChange = (index, event) => {
    event.preventDefault();
    event.persist();
    setForm((prev) => {
      return prev.map((item, i) => {
        if (i !== index) {
          return item;
        }

        return {
          ...item,
          [event.target.name]: event.target.value,
        };
      });
    });
  };

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

  const handleChange = (index, event) => {
    event.preventDefault();
    event.persist();
    setForm((prev) => {
      return prev.map((item, i) => {
        if (i !== index) {
          return item;
        }

        return {
          ...item,
          [event.target.name]: event.target.checked,
        };
      });
    });
  };

  const DelButton = (props) => (
    <Button
      variant="outlined"
      color="warning"
      onClick={(e) => handleRemove(e, props.index)}
    >
      X
    </Button>
  );

  const label = { inputProps: { "aria-label": "Switch demo" } };
  return (
    <>
      <div className="container-fluid">
        <div className="row fill">
          <TeachingMenu nick={props.nick} />
          <div className="col mt-5">
            <h1 className="p1">Quiz do lekcji</h1>
            <div className="container my-5 ">
              <div>
                <form onSubmit={handleSubmit}>
                  {form.map((item, index) => (
                    <div key={`item-${index}`}>
                      <div>
                        <TextField
                          id="standard-basic"
                          label={`Pytanie ${index + 1}`}
                          sx={{ mb: 3, width: "100%", mt: 3 }}
                          name="Question"
                          value={item.Question}
                          InputProps={{
                            endAdornment: <DelButton index={index} />,
                          }}
                          onChange={(e) => onChange(index, e)}
                        ></TextField>

                        <div className="row  justify-content-center">
                          <Paper
                            sx={{
                              p: "2px 4px",
                              display: "flex",
                              alignItems: "center",
                              width: "80%",
                              mb: 1,
                            }}
                          >
                            <IconButton sx={{ p: "10px" }} aria-label="menu">
                              A
                            </IconButton>
                            <InputBase
                              sx={{ ml: 1, flex: 1 }}
                              placeholder=""
                              name="A"
                              onChange={(e) => onChange(index, e)}
                            />
                            <Checkbox
                              color="success"
                              name="correctA"
                              checked={item.name}
                              onChange={(e) => handleChange(index, e)}
                            />
                          </Paper>

                          <Paper
                            sx={{
                              p: "2px 4px",
                              display: "flex",
                              alignItems: "center",
                              width: "80%",
                              mb: 1,
                            }}
                          >
                            <IconButton sx={{ p: "10px" }} aria-label="menu">
                              B
                            </IconButton>
                            <InputBase
                              sx={{ ml: 1, flex: 1 }}
                              placeholder=""
                              name="B"
                              onChange={(e) => onChange(index, e)}
                            />
                            <Checkbox
                              color="success"
                              name="correctB"
                              checked={item.name}
                              onChange={(e) => handleChange(index, e)}
                            />
                          </Paper>

                          <Paper
                            sx={{
                              p: "2px 4px",
                              display: "flex",
                              alignItems: "center",
                              width: "80%",
                              mb: 1,
                            }}
                          >
                            <IconButton sx={{ p: "10px" }} aria-label="menu">
                              C
                            </IconButton>
                            <InputBase
                              sx={{ ml: 1, flex: 1 }}
                              placeholder=""
                              name="C"
                              onChange={(e) => onChange(index, e)}
                            />
                            <Checkbox
                              color="success"
                              name="correctC"
                              checked={item.name}
                              onChange={(e) => handleChange(index, e)}
                            />
                          </Paper>

                          <Paper
                            sx={{
                              p: "2px 4px",
                              display: "flex",
                              alignItems: "center",
                              width: "80%",
                            }}
                          >
                            <IconButton sx={{ p: "10px" }} aria-label="menu">
                              D
                            </IconButton>
                            <InputBase
                              sx={{ ml: 1, flex: 1 }}
                              placeholder=""
                              name="D"
                              onChange={(e) => onChange(index, e)}
                            ></InputBase>
                            <Checkbox
                              color="success"
                              name="correctD"
                              checked={item.name}
                              onChange={(e) => handleChange(index, e)}
                            />
                          </Paper>
                        </div>
                      </div>
                    </div>
                  ))}
                  <Button
                    className="mt-2"
                    variant="contained"
                    type="submit"
                    color="success"
                    onClick={handleAddForm}
                  >
                    Zapisz
                  </Button>
                </form>
              </div>
            </div>
            <div className="d-flex align-items-end justify-content-end">
              <div>
                <Fab
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
    </>
  );
};

export default Quiz;
