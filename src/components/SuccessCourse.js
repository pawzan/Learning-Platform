import React from "react";
import { Link } from "react-router-dom";

class SuccessCourse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      progressWidth: " ",
    };
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <>
        <div>
          <h1 className="foncik fw-bold mt-5">Gratulacje stworzyleś kurs</h1>
          <p className="foncik fs-6">
            Przejdź do panelu głównego trybu nauczyciela, aby dodać nową lekcje
          </p>
        </div>
        <footer>
          <button onClick={handleSubmit} className="btn btn-primary mt-5">
            Potwierdź
          </button>
        </footer>
      </>
    );
  }
}

export default SuccessCourse;
