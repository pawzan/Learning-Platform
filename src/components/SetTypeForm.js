import React from "react";

class SetTypeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      progressWidth: " ",
    };
  }
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
          <h1 className="foncik fw-bold mt-5">Wybierz zdjęcie</h1>
          <p className="foncik fs-6">Dodaj miniaturke do swojego kursu.</p>
        </div>
        <div className="file-input d-flex justify-content-center">
          <input
            name="fileTrack"
            onChange={handleChange}
            type="file"
            id="file"
            className="file"
          />
          <label htmlFor="file">Wybierz zdjecie</label>
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

export default SetTypeForm;
