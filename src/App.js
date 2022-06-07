import "./App.css";
import Login from "./components/Login";
import React from "react";
import Register from "./components/Register";
import Home from "./components/Home";
import Menu from "./components/Menu";
import TeachingPage from "./components/TeachingPage";
import Quiz from "./components/Quiz";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";
import newCourse from "./components/NewCourse";
import ShowCourse from "./components/ShowCourse";
import RichtextEditor from "./components/RichtextEditor";
import Course from "./components/Course";
import CourseContent from "./components/CourseContent";
import axios from "axios";
import { Navigate, useNavigate, Redirect } from "react-router-dom";
import NewCourse from "./components/NewCourse";
import LogoutPage from "./components/LogoutPage";

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

  render() {
    const isLogged = this.isUserLogged();
    const user = this.getUser();
    const nick = this.getNick();
    const id = this.getId();
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
                  component={(props) => <Home user={user} />}
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
                component={(props) => <Home nick={nick} user={user} />}
              />
              <Route
                exact
                path="/teachingPage"
                component={(props) => <TeachingPage nick={nick} />}
              />
              <Route
                exact
                path="/newCourse"
                component={(props) => <NewCourse nick={nick} id={id} />}
              />
              <Route
                exact
                path="/showCourse/:id"
                component={(props) => (
                  <ShowCourse courseId={props.match.params.id} nick={nick} />
                )}
              />
              <Route
                exact
                path="/showCourse/:id/lesson/:id"
                component={(props) => (
                  <RichtextEditor
                    lessonId={props.match.params.id}
                    nick={nick}
                  />
                )}
              />
              <Route
                exact
                path="/quiz/:id/lesson/:id"
                component={(props) => (
                  <Quiz lessonId={props.match.params.id} nick={nick} />
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
                  />
                )}
              />
              {/* <Route
                exact
                path="/Course/:courseId/:id"
                component={(props) => (
                  <CourseContent
                    courseId={props.match.params.courseId}
                    lessonId={props.match.params.id}
                  />
                )}
              /> */}
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
