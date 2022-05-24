import React from "react";

class SetPassword extends React.Component {
  continue = (e) => {
    // e.preventDefault();
    this.props.nextStep();
  };
  prev = (e) => {
    // e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const { handleChange } = this.props;
    return (
      <>
        <div>
          <h1 className="foncik fw-bold mt-5">Ustaw hasło</h1>
          <p className="foncik fs-6">Ustaw haslo dla swojego kursu</p>
        </div>
        <input
          style={{ width: "350px" }}
          onChange={handleChange}
          name="password"
        ></input>
        <footer>
          <button onClick={this.prev} className="btn btn-danger mt-5 me-2">
            Cofnij
          </button>
          <button onClick={this.continue} className="btn btn-primary mt-5">
            Dalej
          </button>
        </footer>
      </>
    );
  }
}

export default SetPassword;
