import React, { useState } from "react";

import mainLogo from "../assets/Logo.png";

import { Link } from "react-router-dom";
import axios from "axios";
import QuestionnairePage from "./QuestionnairePage";

const RegisterPage = () => {
  const [errors, setErrors] = useState("");
  const [formData, setFormData] = useState({
    login: "",
    email: "",
    password: "",
    name: "",
    surname: "",
    passwordCheck: "",
    questionnaire: "",
  });
  const [step, setStep] = useState(1);

  const onInputChange = async (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const { login, email, name, surname, password, passwordCheck } = formData;

  const Login = "/";
  console.log(formData);

  const nextStep = () => {
    setStep(step + 1);
  };
  const prevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.questionnaire === "") {
      alert("Musisz wypełnic ankiete, aby się zarejestrować !");
    } else {
      axios
        .post("http://localhost/api/register.php", formData)
        .then((result) => {
          console.log(JSON.stringify(result.data));
          window.location.href("http://localhost:3001/");
        })
        .catch((error) => {
          const errorMsg = JSON.stringify(error.data);
          setErrors(errorMsg);
        })
        .then(() => {
          // setSubmitting(false);
        });
    }
  };
  switch (step) {
    default:
    case 1:
      return (
        <>
          <section className="h-100 gradient-form">
            <div className="container py-5 ">
              <div className="row d-flex justify-content-center align-items-center ">
                <div className="col-xl-6">
                  <div className="card rounded-3 text-black">
                    <div className="row g-0">
                      <div className="col-lg-12">
                        <div className="card-body p-md-5 mx-md-4">
                          {errors}
                          <div className="text-center">
                            <img
                              src={mainLogo}
                              width="85"
                              height="85"
                              alt="logo"
                            />
                          </div>
                          <div className="container">
                            <div className="nextContainer">
                              <form onSubmit={handleSubmit}>
                                <div className="text-center">
                                  <p>Zarejestruj się</p>
                                </div>

                                <div className="form-outline mb-4">
                                  <input
                                    type="text"
                                    name="login"
                                    value={login}
                                    className="form-control"
                                    placeholder="Podaj login"
                                    onChange={(e) => onInputChange(e)}
                                    required
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
                                    name="name"
                                    value={name}
                                    className="form-control"
                                    placeholder="Podaj imie"
                                    onChange={(e) => onInputChange(e)}
                                    required
                                  />
                                  <label
                                    className="form-label"
                                    for="form2Example11"
                                  >
                                    Imię
                                  </label>
                                </div>
                                <div className="form-outline mb-4">
                                  <input
                                    type="text"
                                    name="surname"
                                    value={surname}
                                    className="form-control"
                                    placeholder="Podaj nazwisko"
                                    onChange={(e) => onInputChange(e)}
                                    required
                                  />
                                  <label
                                    className="form-label"
                                    for="form2Example11"
                                  >
                                    Nazwisko
                                  </label>
                                </div>

                                <div className="form-outline mb-4">
                                  <input
                                    type="email"
                                    name="email"
                                    value={email}
                                    className="form-control"
                                    placeholder="Podaj email"
                                    onChange={(e) => onInputChange(e)}
                                    required
                                  />
                                  <label
                                    className="form-label"
                                    for="form2Example11"
                                  >
                                    E-mail uzytkownika
                                  </label>
                                </div>

                                <div className="form-outline mb-4">
                                  <input
                                    type="password"
                                    name="password"
                                    value={password}
                                    className="form-control"
                                    placeholder="Podaj haslo"
                                    onChange={(e) => onInputChange(e)}
                                    required
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
                                    name="passwordCheck"
                                    value={passwordCheck}
                                    className="form-control"
                                    placeholder="Powtórz haslo"
                                    onChange={(e) => onInputChange(e)}
                                    required
                                  />
                                  <label
                                    className="form-label"
                                    for="form2Example22"
                                  >
                                    Powtórz Haslo
                                  </label>
                                </div>
                                {formData.questionnaire === "" ? (
                                  <h1
                                    className="text-danger"
                                    onClick={nextStep}
                                  >
                                    <h2>
                                      Wypełnij ankietę, aby się zarejstrować
                                    </h2>
                                  </h1>
                                ) : (
                                  <></>
                                )}

                                <div className="text-center pt-1 mb-5 pb-1 mt-5 button">
                                  <input
                                    className="btn btn-info btn-block fa-lg gradient-custom-2 mb-3"
                                    type="submit"
                                    value="Zarejestruj sie"
                                  />
                                </div>
                              </form>
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
        </>
      );
    case 2:
      return (
        <>
          <QuestionnairePage
            prevStep={prevStep}
            formData={formData}
            setFormData={setFormData}
          />
        </>
      );
  }
};

export default RegisterPage;
