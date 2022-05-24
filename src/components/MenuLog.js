import React from "react";
import Logo from "./Logo.png";
import Avat from "./avat.jpg";
import { Link } from "react-router-dom";
import { MdSearch } from "react-icons/md";
import { motion } from "framer-motion";

import "../App.css";
import Login from "./Login";

const MenuLog = (props) => {
  const handleChange = (e) => {
    props.setSearch(e.target.value);
  };

  return (
    <header>
      <div>
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
                className="d-inline-block ms-4 me-1"
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 mr-auto">
              <div className="col-xl-12 col-xs-4">
                <div className="input-group  ">
                  <input
                    className="form-control border-end border rounded-pill border-dark pp"
                    type="text"
                    id="example-search-input"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </ul>

            <div>
              <Link
                to="/login"
                className="btn p-1  bg-white text-dark border m "
                // data-bs-toggle="modal"
                // data-bs-target="#staticBackdrop2"
              >
                Zaloguj się
              </Link>
              <Link
                to="/Register"
                className="btn p-1  bg-dark text-light border mx-2"
              >
                Zarejestruj
              </Link>
            </div>
          </div>
        </nav>
      </div>
      {/* <div
        className="modal fade modal-xl"
        id="staticBackdrop2"
        // data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-xl">
          <div className="modal-content modal-xl">
            <div className="modal-body modal-xl">
              <Login />
            </div>
          </div>
        </div>
      </div> */}
    </header>
  );
};
export default MenuLog;
