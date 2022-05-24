import React from "react";
import Logo from "./Logo.png";
import Avat from "./avat.jpg";
import { Link } from "react-router-dom";
import { MdSearch } from "react-icons/md";
import { motion } from "framer-motion";
import CourseContainer from "./CourseContainer";

import "../App.css";
import AccountMenu from "./AccountMenu";

const Menu = (props) => {
  const handleChange = (e) => {
    props.setSearch(e.target.value);
  };

  return (
    <>
      <nav className="navbar color-black navbar-expand-md pt-0 pb-0  fixed-top border shadow navbarColor">
        <a className="navbar-brand pt-0 pb-0" href="/">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 20 }}
            whileTap={{
              scale: 0.8,
              rotate: -20,
              borderRadius: "5%",
            }}
          >
            <img
              src={Logo}
              width="50"
              height="50"
              alt="logo"
              className="d-inline-block ms-4 me-1 mb-0"
            />
          </motion.div>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainmenu"
          aria-expanded="false"
          aria-controls="mainmenu"
          aria-label="przełacznik nawigacji"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mainmenu">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 mr-auto color-black">
            <div className="col-xl-12">
              {props.visible !== true ? (
                <div className="input-group ">
                  <input
                    className="form-control border-end border rounded-pill border-dark pp"
                    type="text"
                    id="example-search-input"
                    onChange={handleChange}
                  />
                </div>
              ) : (
                <></>
              )}
            </div>
          </ul>
          <div className="nav-item mr-auto">
            <Link to="/" className="nav-link text-black">
              Kursy
            </Link>
          </div>
          <div className="nav-item mr-2">
            <Link to="/teachingPage" className="nav-link text-black">
              Tryb nauczyciela
            </Link>
          </div>
          <AccountMenu nick={props.nick} />
        </div>
      </nav>
    </>
  );
};
export default Menu;
