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
  const [inputList, setInputList] = useState([]);
  const [i, setI] = useState(1);
  console.log(stateParam);

  const { quizek, setQuizek } = useState([]);

  const OneQuiz = (props) => (
    <>
      <TextField
        id="standard-basic"
        label={`Pytanie ${i}`}
        sx={{ mb: 3, width: "100%", mt: 3 }}
        name="Question"
      />

      <div className="row  justify-content-center">
        <Paper
          // component="form"
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
            // inputProps={{ "aria-label": "search google maps" }}
            name="A"
          />
          <Checkbox color="success" name="correctA" />
        </Paper>

        <Paper
          // component="form"
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
          <InputBase sx={{ ml: 1, flex: 1 }} placeholder="" name="B" />
          <Checkbox color="success" name="correctB" />
        </Paper>

        <Paper
          // component="form"
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
          <InputBase sx={{ ml: 1, flex: 1 }} placeholder="" name="C" />
          <Checkbox color="success" name="correctC" />
        </Paper>

        <Paper
          // component="form"
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
          ></InputBase>
          <Checkbox color="success" name="correctD" />
        </Paper>
      </div>
    </>
  );

  const handleClick = () => {
    setInputList(inputList.concat(<OneQuiz key={inputList.length} />));
    setI(i + 1);
    console.log(inputList);
  };

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
                <form
                  method="POST"
                  action="http://localhost/api/test.php"
                  onSubmit={(e) => e.preventDefault}
                >
                  {inputList.length > 0 ? (
                    <div className="float-end">
                      <BsHeadphones size={20} />
                      <Switch {...label} defaultChecked color="secondary" />
                      <BiTask size={20} />
                      <Switch {...label} defaultChecked color="warning" />
                      <FaRegEye size={20} />
                      <Switch {...label} defaultChecked color="success" />
                    </div>
                  ) : (
                    <></>
                  )}
                  {inputList}
                  <input type="hidden" name="lessonId" value={props.lessonId} />
                  {inputList.length > 0 ? (
                    <Button
                      className="mt-2"
                      variant="contained"
                      type="submit"
                      color="success"
                      onClick={(e) => e.preventDefault}
                    >
                      Zapisz
                    </Button>
                  ) : (
                    <></>
                  )}
                </form>
              </div>
            </div>
            <div className="d-flex align-items-end justify-content-end">
              <div>
                <Fab variant="contained" color="primary" onClick={handleClick}>
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
