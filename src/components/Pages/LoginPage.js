import React, { useState } from "react";
import { Link } from "react-router-dom";

// logo
import mainLogo from "../assets/Logo.png";

//motion
import { motion } from "framer-motion";

//mui imports
import { Button } from "@mui/material";

const LoginPage = (props) => {
  const [login, setLogin] = useState("");
  const [haslo, setHaslo] = useState("");
  const Register = "/Register";
  const frameVariants = {
    hover: { scale: 1.05 },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onLogin(login, haslo);
  };

  return (
    <section className="gradient-form">
      <div className="container py-5 ">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-xl-6">
            <div className="card rounded-3 text-black">
              <div className="col-lg-12">
                <div className="card-body p-md-5 mx-md-4">
                  <div className="text-center">
                    <img src={mainLogo} width="85" height="85" alt="logo" />
                  </div>
                  <div className="container">
                    <div className="nextContainer">
                      <form onSubmit={handleSubmit}>
                        <div className="text-center">
                          <p>Zaloguj się</p>
                        </div>

                        <div className="form-outline mb-4">
                          <input
                            type="text"
                            placeholder="Login"
                            name="login"
                            className="form-control"
                            onChange={(e) => setLogin(e.target.value)}
                          />
                          <label className="form-label" for="form2Example11">
                            Login
                          </label>
                        </div>

                        <div className="form-outline mb-4">
                          <input
                            type="password"
                            name="haslo"
                            id="form2Example22"
                            className="form-control"
                            placeholder="Podaj haslo"
                            onChange={(e) => setHaslo(e.target.value)}
                          />
                          <label className="form-label" for="form2Example22">
                            Haslo
                          </label>
                        </div>

                        <div className="text-center pt-1 mb-5 pb-1 button">
                          <motion.div
                            variants={frameVariants}
                            whileHover="hover"
                          >
                            <Button
                              className="btn btn-info btn-block fa-lg gradient-custom-2 mb-3"
                              type="submit"
                            >
                              Zaloguj
                            </Button>
                          </motion.div>
                        </div>
                        <div className="errorText"></div>
                        <div className="d-flex align-items-center justify-content-center pb-4">
                          <p className="mb-0 me-2">Nie masz jeszcze konta ?</p>
                          <motion.div
                            variants={frameVariants}
                            whileHover="hover"
                          >
                            <Link
                              to={Register}
                              className="btn btn-outline-danger"
                            >
                              Zarejestruj się
                            </Link>
                          </motion.div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
