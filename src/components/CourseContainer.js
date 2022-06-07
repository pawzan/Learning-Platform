import * as React from "react";
import { motion } from "framer-motion";
import obrazek from "./kurs.jpg";
import { BsHeadphones } from "react-icons/bs";
import { FaRegEye } from "react-icons/fa";
import { BiTask } from "react-icons/bi";
import { Link, Redirect } from "react-router-dom";
import { useReducedMotion } from "framer-motion/dist/framer-motion";

const CourseContainer = (props) => {
  const [getInputValue, setGetInputValue] = React.useState("");

  const frameVariants = {
    hover: { scale: 1.005 },
  };

  const handleChange = (e) => {
    setGetInputValue(e.target.value);
  };

  let { course, filter, menu, filterAuthor } = props;
  const showCourse = "/showCourse/";
  if (filter !== "") {
    course = course.filter(
      (courses) =>
        courses.author.toLowerCase().includes(filter.toLowerCase()) ||
        courses.title.toLowerCase().includes(filter.toLowerCase())
    );
  }
  if (filterAuthor) {
    course = course.filter((courses) => courses.author.includes(props.nick));
  }

  return course.map((courses, index) => {
    let buttons;
    buttons = (
      <div className="float-end">
        {courses.singup === false ? (
          <a
            className="btn text-white bg-dark bg-gradient"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            Zapisz się
          </a>
        ) : menu === true ? (
          <Link to={`Course/${courses.id}/*`}>
            <a className="btn text-white bg-dark bg-gradient">Wejdź</a>
          </Link>
        ) : (
          <Link to={`showCourse/${courses.id}`}>
            <a className="btn text-white bg-dark bg-gradient">Wejdź</a>
          </Link>
        )}
      </div>
    );

    return (
      <>
        <div key={courses.id}>
          <div className="row mb-3">
            <div className="col-12 col-md-12 col-lg-12 col-xxl-10">
              <motion.div variants={frameVariants} whileHover="hover">
                <div className="card">
                  <div className="card-horizontal">
                    <div className="img-square-wrapper">
                      <img
                        className=""
                        src={obrazek}
                        width="150"
                        height="100"
                      />
                    </div>
                    <div className="card-body">
                      <div className="float-start">
                        <h4 className="card-title margin">{courses.title}</h4>
                        <p className="card-text">{courses.description}</p>
                      </div>
                      {buttons}
                    </div>
                  </div>

                  <div className="card-footer">
                    <div className="float-start">
                      <small className="text-muted c">
                        Autor: {courses.author}
                      </small>
                    </div>
                    <div className="float-end text-black">
                      <BsHeadphones size={20} />
                      <BiTask size={20} />
                      <FaRegEye size={20} />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="staticBackdrop"
          // data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabindex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body">
                Podaj kod dostępu* :{" "}
                <input className="modalInput" onChange={handleChange}></input>
              </div>

              <div className="modal-footer">
                <small>
                  *kod dostępu jest udostępniany przez nauczyciela
                  {courses.password}
                </small>
                <button
                  type="button"
                  className="btn btn-secondary buttonMargin"
                  data-bs-dismiss="modal"
                >
                  Zamknij
                </button>

                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => {
                    if (courses.password === getInputValue) {
                      console.log("yes");
                    } else {
                      console.log("no");
                    }
                  }}
                >
                  Dołącz
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  });
};
export default CourseContainer;
