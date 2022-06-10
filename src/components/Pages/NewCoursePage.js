 import React, {useState} from "react";
import NewCourseHeader from "../molecules/NewCourseHeader";
import FormTitleDetails from "../molecules/newCourseForm/FormTitleDetails";
import FormDescription from "../molecules/newCourseForm/FormDescription";
import SetPassword from "../molecules/newCourseForm/SetPassword";
import SetTypeForm from "../molecules/newCourseForm/SetTypeForm";
import SuccessAlertCourse from "../atoms/SuccessAlertCourse";
import TeachingPageMenu from "../molecules/TeachingPageMenu";
import { Alert } from "@mui/material";
import Stack from "@mui/material/Stack";


 const NewCoursePage = (props) =>{

   const [state, setState] = useState({
     step: 1,
     id: props.id,
     title: " ",
     description: " ",
     password: " ",
     fileTrack: " ",
     author: props.nick,
     showAlertSuccess: false,
   })

  const nextStep = () => {
    setState((prevState) =>  {return {
        ...state, step: prevState.step + 1
    }});
  };
  const prevStep = () => {
      setState((prevState) =>  {return {
          ...state, step: prevState.step - 1
      }});
  };
  const handleChange = (e) => {
      setState({...state, [e.target.name]: e.target.value});
  };
  // const onFileChange = (e) => {
  //     setState( {...state, fileTrack: e.target.files[0]});
  // };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost/api/json.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(state),
    }).then(() => {
      setState({...state, showAlertSuccess: true });
      setTimeout(() => {
        window.location.href = "http://localhost:3001/teachingPage";
      }, 1500);
    });
  };

    switch (state.step) {
      default:
      case 1:
        return (
          <div className="container-fluid">
            <div className="row fill">
              <TeachingPageMenu nick={props.nick} />
              <div className="col">
                <NewCourseHeader progressWidth="20" />
                <FormTitleDetails
                  nextStep={nextStep}
                  values={state}
                  handleChange={handleChange}
                />
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <>
            <div className="container-fluid">
              <div className="row fill">
                <TeachingPageMenu nick={props.nick} />
                <div className="col">
                  <NewCourseHeader progressWidth="40" />
                  <FormDescription
                    nextStep={nextStep}
                    prevStep={prevStep}
                    values={state}
                    handleChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </>
        );
      case 3:
        return (
          <>
            <div className="container-fluid">
              <div className="row fill">
                <TeachingPageMenu nick={props.nick} />
                <div className="col">
                  <NewCourseHeader progressWidth="60" />
                  <SetPassword
                    nextStep={nextStep}
                    prevStep={prevStep}
                    values={state}
                    handleChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </>
        );
      case 4:
        return (
          <>
            <div className="container-fluid">
              <div className="row fill">
                <TeachingPageMenu nick={props.nick} />
                <div className="col">
                  <NewCourseHeader progressWidth="90" />
                  <SetTypeForm
                    nextStep={nextStep}
                    prevStep={prevStep}
                    handleChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </>
        );
      case 5:
        return (
          <>
            {state.showAlertSuccess && (
              <Stack
                sx={{ width: "20%", marginTop: "1px" }}
                spacing={2}
                className="position-absolute top-0 start-50 translate-middle-x"
              >
                <Alert severity="success" variant="filled">
                  Udało się stworzyć kurs 🥳
                </Alert>
              </Stack>
            )}
            <div className="container-fluid">
              <div className="row fill">
                <TeachingPageMenu nick={props.nick} />
                <div className="col">
                  <NewCourseHeader progressWidth="100" />

                  <SuccessAlertCourse handleSubmit={handleSubmit} />
                </div>
              </div>
            </div>
          </>
        );
    }

}

export default NewCoursePage;
