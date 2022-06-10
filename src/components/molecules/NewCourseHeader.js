import React from "react";
import { motion } from "framer-motion";

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

class NewCourseHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      progressWidth: " ",
    };
  }

  render() {
    const prog = this.props.progressWidth;
    return (
      <>
        <motion.div
          initial="out"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={pageTransition}
        >
          <div className="col-sm p-3 min-vh-20">
            <div className="text-start">
              <h2>Stwórz nowy kurs</h2>
            </div>

            <div className="progress" style={{ height: "2px" }}>
              <div
                className="progress-bar"
                style={{ width: prog + "%" }}
                role="progressbar"
                aria-valuenow="25"
                aria-valuemin="25"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
        </motion.div>
      </>
    );
  }
}

export default NewCourseHeader;
