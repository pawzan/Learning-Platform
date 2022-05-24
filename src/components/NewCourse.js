import React from "react";
import NewCourseHeader from "./NewCourseHeader";
import FormTitleDetails from "./FormTitleDetails";
import FormDescriptionDetails from "./FormDescriptionDetails";
import SetPassword from "./SetPassword";
import SetTypeForm from "./SetTypeForm";
import SuccessCourse from "./SuccessCourse";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import TeachingMenu from "./TeachingMenu";
const pageVariants = {
  in: {
    opacity: 1,
    x: 0,
  },
  out: {
    opacity: 0,
    x: "60vw",
  },
};

const pageTransition = {
  type: "tween",
  ease: "linear",
};

class NewCourse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      id: this.props.id,
      title: " ",
      description: " ",
      password: " ",
      singup: false,
      fileTrack: " ",
      author: this.props.nick,
    };
  }

  nextStep = () => {
    const step = this.state.step;
    this.setState({
      step: step + 1,
    });
  };
  prevStep = () => {
    const step = this.state.step;
    this.setState({
      step: step - 1,
    });
  };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onFileChange = (event) => {
    this.setState({ fileTrack: event.target.files[0] });
  };

  navigate = (e) => {
    const navigate = useNavigate();
    navigate(e);
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const {
      id,
      title,
      description,
      password,
      singup,
      fileTrack,
      author,
    } = this.state;
    const values = {
      id,
      title,
      description,
      password,
      singup,
      fileTrack,
      author,
    };
    console.log(values);

    fetch("http://localhost/api/json.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    }).then(() => {
      console.log("add");
    });
  };

  render() {
    const { title, description, password, fileTrack } = this.state;
    const values = { title, description, password, fileTrack };

    console.log(this.state);

    switch (this.state.step) {
      case 1:
        return (
          <>
            <div className="container-fluid">
              <div className="row fill">
                <TeachingMenu nick={this.props.nick} />
                <div className="col">
                  <NewCourseHeader progressWidth="20" />
                  <FormTitleDetails
                    nextStep={this.nextStep}
                    values={values}
                    handleChange={this.handleChange}
                  />
                </div>
              </div>
            </div>
          </>
        );
      case 2:
        return (
          <>
            <div className="container-fluid">
              <div className="row fill">
                <TeachingMenu nick={this.props.nick} />
                <div className="col">
                  <NewCourseHeader progressWidth="40" />
                  <FormDescriptionDetails
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    values={values}
                    handleChange={this.handleChange}
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
                <TeachingMenu nick={this.props.nick} />
                <div className="col">
                  <NewCourseHeader progressWidth="60" />
                  <SetPassword
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    values={values}
                    handleChange={this.handleChange}
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
                <TeachingMenu nick={this.props.nick} />
                <div className="col">
                  <NewCourseHeader progressWidth="90" />
                  <SetTypeForm
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                  />
                </div>
              </div>
            </div>
          </>
        );
      case 5:
        return (
          <>
            <div className="container-fluid">
              <div className="row fill">
                <TeachingMenu nick={this.props.nick} />
                <div className="col">
                  <NewCourseHeader progressWidth="100" />
                  <SuccessCourse handleSubmit={this.handleSubmit} />
                </div>
              </div>
            </div>
          </>
        );
    }
  }
}

export default NewCourse;
