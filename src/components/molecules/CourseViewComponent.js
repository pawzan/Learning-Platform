import * as React from "react";
import { motion } from "framer-motion";
import obrazek from "../assets/kurs.jpg";
import { BsHeadphones } from "react-icons/bs";
import { FaRegEye } from "react-icons/fa";
import { BiTask } from "react-icons/bi";
import { Link } from "react-router-dom";
import { FaHandPaper } from "react-icons/fa";
import axios from "axios";
import {useEffect, useState} from "react";

const CourseViewComponent = (props) => {
  const frameVariants = {
    hover: { scale: 1.005 },
  };
const [lesson_id, setLesson_id]= useState("")

  console.log("sd: " + lesson_id)
  const firstLessonID = async () => {
    const result = await axios.get(
        `http://localhost/api/select.php?json=${props.courseId}`
    );
    setLesson_id(result.data.lessonData);
    console.log(result.data.lessonData);
  };

  useEffect(() => {
    firstLessonID();
  }, []);


  let { course, filter, menu, filterAuthor } = props;

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
        {props.isLogged === false ? (
          <></>
        ) : menu === true ? (
          <Link to={`Course/${courses.id}/*`}>
            <div className="btn text-white bg-dark bg-gradient">Wejdź</div>
          </Link>
        ) : (
          <Link to={`showCourse/${courses.id}`}>
            <div className="btn text-white bg-dark bg-gradient">Wejdź</div>
          </Link>
        )}
      </div>
    );

    return (
      <>
        <div key={`item-${index}`}>
          <div className="row mb-3">
            <div className="col-12 col-md-12 col-lg-12 col-xxl-10">
              <motion.div variants={frameVariants} whileHover="hover">
                <div className="card">
                  <div className="card-horizontal">
                    <div className="img-square-wrapper">
                      <img
                        alt="obrazek"
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
                      <FaHandPaper size={20} />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </>
    );
  });
};
export default CourseViewComponent;
