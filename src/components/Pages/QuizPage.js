import React, { useEffect, useState } from "react";
import axios from "axios";
import TeachingPageMenu from "../molecules/TeachingPageMenu";
import TextField from "@mui/material/TextField";
import { Button, Checkbox } from "@mui/material";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

const QuizPage = ({ lessonId, nick }) => {
  const [lessonID] = useState(lessonId);
  const [form, setForm] = useState(null);
  const [count, setCount] = useState(0);

  const loadQuiz = async () => {
    const result = await axios.get(
      `http://localhost/api/contentQuiz.php?json=${lessonId}`
    );

    setForm(result.data.lessonData);
  };

  useEffect(() => {
    loadQuiz();
  }, []);

  const handleRemove = (id) => {
    axios
      .delete(`http://localhost/api/quizDelete.php?id=${id}`)
      .then((result) => {
        loadQuiz();
      });
  };

  const DelButton = ({ id }) => (
    <Button variant="outlined" color="warning" onClick={() => handleRemove(id)}>
      X
    </Button>
  );

  const handleAddForm = async () => {
    const inputState = {
      lesson_id: lessonID,
      question: "",
      A: "",
      B: "",
      C: "",
      D: "",
      correctA: "0",
      correctB: "0",
      correctC: "0",
      correctD: "0",
    };
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(inputState),
    };
    await fetch(`http://localhost/api/quiz.php`, requestOptions)
      .then((response) => console.log(JSON.stringify(response)))
      .then((result) => {
        loadQuiz();
        setCount(count + 1);
        setForm((prev) => [...prev, inputState]);
      })
      .catch((error) => console.log(error));
  };

  const QuizList = ({ item, index }) => {
    const [quizQuestion, setQuizQuestion] = useState(item.question);
    const [A, setA] = useState(item.A);
    const [B, setB] = useState(item.B);
    const [C, setC] = useState(item.C);
    const [D, setD] = useState(item.D);
    const [correctA, setCorrectA] = useState(item.correctA);
    const [correctB, setCorrectB] = useState(item.correctB);
    const [correctC, setCorrectC] = useState(item.correctC);
    const [correctD, setCorrectD] = useState(item.correctD);
    console.log(A);
    const id = item.id;

    const quiz = {
      quizQuestion,
      A,
      B,
      C,
      D,
      correctA,
      correctB,
      correctC,
      correctD,
      id,
    };
    const handleSubmit = (e) => {
      fetch("http://localhost/api/quizUpdate.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(quiz),
      }).then(() => {
        console.log("add : " + JSON.stringify(quiz));
      });
    };
    useEffect(() => {
      handleSubmit();
    }, [quiz]);

    return (
      <div>
        <div>
          <form onChange={handleSubmit}>
            <TextField
              id="standard-basic"
              label={`Pytanie ${index + 1}`}
              sx={{ mb: 3, width: "100%", mt: 3 }}
              name="Question"
              value={quizQuestion}
              InputProps={{
                endAdornment: <DelButton index={index} id={id} />,
              }}
              onChange={(e) => {
                setQuizQuestion(e.target.value);
              }}
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
                  value={A}
                  name="A"
                  onChange={(e) => {
                    setA(e.target.value);
                  }}
                />
                <Checkbox
                  color="success"
                  name="correctA"
                  value="correctA"
                  checked={correctA === 1 ? true : false}
                  onClick={(e) => {
                    setCorrectA(e.target.checked === false ? 0 : 1);
                  }}
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
                  value={B}
                  name="B"
                  onChange={(e) => {
                    setB(e.target.value);
                  }}
                />
                <Checkbox
                  color="success"
                  name="correctB"
                  checked={correctB === 1 ? true : false}
                  onClick={(e) => {
                    setCorrectB(e.target.checked === false ? 0 : 1);
                  }}
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
                  value={C}
                  name="C"
                  onChange={(e) => {
                    setC(e.target.value);
                  }}
                />
                <Checkbox
                  color="success"
                  name="correctC"
                  checked={correctC === 1 ? true : false}
                  onClick={(e) => {
                    setCorrectC(e.target.checked === false ? 0 : 1);
                  }}
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
                  value={D}
                  name="D"
                  onChange={(e) => {
                    setD(e.target.value);
                  }}
                ></InputBase>
                <Checkbox
                  color="success"
                  name="correctD"
                  checked={correctD === 1 ? true : false}
                  onClick={(e) => {
                    setCorrectD(e.target.checked === false ? 0 : 1);
                  }}
                />
              </Paper>
            </div>
          </form>
        </div>
      </div>
    );
  };

  const List = ({ form }) =>
    form.map((item, index) => (
      <div key={`item-${index}`}>
        <QuizList item={item} index={index} />
      </div>
    ));

  return (
    <>
      <div className="container-fluid">
        <div className="row fill">
          <TeachingPageMenu nick={nick} />
          <div className="col mt-5">
            <h1 className="p1">Quiz do lekcji</h1>
            <div className="container my-5 ">
              {form && <List form={form} />}
            </div>
            <div className="d-flex align-items-end justify-content-end">
              <div>
                <Fab
                  style={{
                    position: "fixed",
                    bottom: "50px",
                    right: "50px",
                  }}
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

export default QuizPage;
