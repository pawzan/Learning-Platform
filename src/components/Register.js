import React from "react";
import mainLogo from "./Logo.png";
import { IoMdSchool, IoIosCreate, IoIosList } from "react-icons/io";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

class Register extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const Login = "/";
    const frameVariants = {
      hover: { scale: 1.05 },
    };
    return (
      <section className="h-100 gradient-form">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-xl-10">
              <div className="card rounded-3 text-black">
                <div className="row g-0">
                  <div className="col-lg-6">
                    <div className="card-body p-md-5 mx-md-4">
                      <div className="text-center">
                        <img src={mainLogo} width="85" height="85" alt="logo" />
                      </div>
                      <div className="container">
                        <div className="nextContainer">
                          <form action="#">
                            <div className="text-center">
                              <p>Zarejestruj się</p>
                            </div>

                            <div className="form-outline mb-4">
                              <input
                                type="text"
                                name="login"
                                className="form-control"
                                placeholder="Podaj login"
                              />
                              <label
                                className="form-label"
                                for="form2Example11"
                              >
                                Nazwa uzytkownika
                              </label>
                            </div>

                            <div className="form-outline mb-4">
                              <input
                                type="text"
                                name="email"
                                className="form-control"
                                placeholder="Podaj email"
                              />
                              <label
                                className="form-label"
                                for="form2Example11"
                              >
                                Nazwa uzytkownika
                              </label>
                            </div>

                            <div className="form-outline mb-4">
                              <input
                                type="password"
                                name="haslo"
                                className="form-control"
                                placeholder="Podaj haslo"
                              />
                              <label
                                className="form-label"
                                for="form2Example22"
                              >
                                Haslo
                              </label>
                            </div>

                            <div className="form-outline mb-4">
                              <input
                                type="password"
                                name="hasloCheck"
                                className="form-control"
                                placeholder="Powtórz haslo"
                              />
                              <label
                                className="form-label"
                                for="form2Example22"
                              >
                                Powtórz Haslo
                              </label>
                            </div>

                            <div className="text-center pt-1 mb-5 pb-1 button">
                              <input
                                className="btn btn-info btn-block fa-lg gradient-custom-2 mb-3"
                                type="submit"
                                value="Zarejestruj sie"
                              />
                            </div>
                            <div className="errorText"></div>
                            <div className="d-flex align-items-center justify-content-center pb-4">
                              <p className="mb-0 me-2">Masz juz konto ?</p>
                              <Link
                                to={Login}
                                className="btn btn-outline-danger"
                              >
                                Zaloguj sie
                              </Link>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                    <div className="text-black px-3 py-4 p-md-5 mx-md-4">
                      <div className="d-grid gap-3">
                        <div className="p-4">
                          <motion.div
                            variants={frameVariants}
                            whileHover="hover"
                          >
                            <IoMdSchool size={65} color="#2F4F4F" />
                            <div className="fs-6 float-sm-end my-4">
                              Ucz się z wybranych kursów
                            </div>
                          </motion.div>
                        </div>
                        <div className="p-4">
                          <motion.div
                            variants={frameVariants}
                            whileHover="hover"
                          >
                            <IoIosCreate size={65} color="#2F4F4F" />
                            <div className="fs-6 float-sm-end my-4">
                              Twórz kursy
                            </div>
                          </motion.div>
                        </div>
                        <div className="p-4">
                          <motion.div
                            variants={frameVariants}
                            whileHover="hover"
                          >
                            <IoIosList size={65} color="#2F4F4F" />
                            <div className="fs-6 float-sm-end my-4 ml-1 text-sm-start">
                              Sprawdz swoją wiedze
                            </div>
                          </motion.div>
                        </div>
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
  }
}

export default Register;
