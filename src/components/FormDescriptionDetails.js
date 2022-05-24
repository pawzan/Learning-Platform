import React from "react";

class FormDescriptionDetails extends React.Component {
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
          <h1 className="foncik fw-bold mt-5">Wybierz opis</h1>
          <p className="foncik fs-6">Opisz swój kurs w kilku słowach</p>
        </div>
        <div className="form-outline form-dark d-flex justify-content-center">
          <textarea
            className="form-control"
            id="textAreaExample"
            rows="2"
            style={{ width: "450px" }}
            name="description"
            onChange={handleChange}
          ></textarea>
        </div>
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

export default FormDescriptionDetails;
