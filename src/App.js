import axios from "axios";
import { Redirect } from "react-router-dom";
import React from "react";
import { Route, Switch } from "react-router-dom";

//import motion
import { AnimatePresence } from "framer-motion/dist/framer-motion";

//imports components
import Register from "./components/Pages/RegisterPage";
import HomePage from "./components/Pages/HomePage";
import TeachingPage from "./components/Pages/TeachingPage";
import QuizPage from "./components/Pages/QuizPage";
import newCourse from "./components/Pages/NewCoursePage";
import CourseLessonPage from "./components/Pages/CourseLessonPage";
import RichtextEditorPage from "./components/Pages/RichtextEditorPage";
import Course from "./components/Pages/CoursePage";
import Login from "./components/Pages/LoginPage";
import NewCoursePage from "./components/Pages/NewCoursePage";
import LogoutPage from "./components/atoms/LogoutPage";

//import styles
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      user: null,
      isLogged: false,
    };
  }

  onLogin = (login, haslo) => {
    let text = { login, haslo };
    console.log(text);
    axios
      .post("http://localhost/api/getLogin.php", text)
      .then((result) => {
        console.log(JSON.stringify(result.data));
        if (result.data.is_logged) {
          window.sessionStorage.setItem("is_logged", true);
          window.sessionStorage.setItem("user", JSON.stringify(result.data));
          // window.sessionStorage.setItem("is_admin", result.data.is_admin);

          this.setState({
            user: JSON.stringify(result.data),
            isLogged: true,
          });
          window.location.href = "/";
        } else {
          // setSubmitting(false);
          // setErrors({ password: "Niepoprawny login lub haslo" });
        }
      })
      .catch((error) => {
        // const errorMsg = error?.response?.data?.msg;
        // setErrors({ login: errorMsg });
      })
      .then(() => {
        // setSubmitting(false);
      });
  };

  onLogout = () => {
    this.setState({ isLogged: false, user: null });
  };

  isUserLogged() {
    return window.sessionStorage.getItem("is_logged") ? true : false;
  }

  getUser() {
    return window.sessionStorage.getItem("is_logged")
      ? JSON.parse(window.sessionStorage.getItem("user"))
      : null;
  }
  getId() {
    return window.sessionStorage.getItem("is_logged")
      ? JSON.parse(window.sessionStorage.getItem("user")).id
      : null;
  }

  getNick() {
    return window.sessionStorage.getItem("is_logged")
      ? JSON.parse(window.sessionStorage.getItem("user")).name +
          " " +
          JSON.parse(window.sessionStorage.getItem("user")).surname
      : null;
  }
  getType() {
    return window.sessionStorage.getItem("is_logged")
      ? JSON.parse(window.sessionStorage.getItem("user")).type
      : null;
  }

  render() {
    const isLogged = this.isUserLogged();
    const user = this.getUser();
    const nick = this.getNick();
    const idd = this.getId();
    const type = this.getType();
    if (!isLogged) {
      return (
        <>
          <AnimatePresence>
            <div className="App">
              <Switch>
                <Route
                  exact
                  path="/login"
                  component={(props) => <Login onLogin={this.onLogin} />}
                />
                <Route exact path="/register" component={Register} />
                <Route
                  exact
                  path="/"
                  component={(props) => (
                    <HomePage user={user} isLogged={isLogged} />
                  )}
                />
                <Redirect exact from="*" to="/" />
              </Switch>
            </div>
          </AnimatePresence>
        </>
      );
    }

    return (
      <>
        <AnimatePresence>
          <div className="App">
            <Switch>
              <Route
                exact
                path="/"
                component={(props) => (
                  <HomePage nick={nick} user={user} type={type} id={idd} />
                )}
              />
              <Route
                exact
                path="/teachingPage"
                component={(props) => <TeachingPage nick={nick} />}
              />
              <Route
                exact
                path="/newCourse"
                component={(props) => <NewCoursePage nick={nick} id={idd} />}
              />
              <Route
                exact
                path="/showCourse/:id"
                component={(props) => (
                  <CourseLessonPage courseId={props.match.params.id} nick={nick} />
                )}
              />
              <Route
                exact
                path="/showCourse/:id_course/lesson/:id"
                component={(props) => (
                  <RichtextEditorPage
                    lessonId={props.match.params.id}
                    nick={nick}
                    courseId={props.match.params.id_course}
                  />
                )}
              />
              <Route
                exact
                path="/quiz/:id/lesson/:lessonid"
                component={(props) => (
                  <QuizPage lessonId={props.match.params.lessonid} nick={nick} />
                )}
              />
              <Route exact path="/newCourse" component={newCourse} />
              <Route
                exact
                path="/Course/:id/:lessonid"
                component={(props) => (
                  <Course
                    courseId={props.match.params.id}
                    nick={nick}
                    lessonId={props.match.params.lessonid}
                    id_user={idd}
                    type={type}
                  />
                )}
              />
              <Route exact path="/logout">
                <LogoutPage onLogout={this.onLogout} />
              </Route>
            </Switch>
          </div>
        </AnimatePresence>
      </>
    );
  }
}

export default App;
