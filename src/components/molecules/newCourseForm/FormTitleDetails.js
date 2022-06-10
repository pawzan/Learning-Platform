import React from "react";

class FormTitleDetails extends React.Component {
  continue = (e) => {
    // e.preventDefault();
    this.props.nextStep();
  };
  render() {
    const { values } = this.props;
    return (
      <>
        <div>
          <h1 className="foncik fw-bold mt-5">Wybierz tytuł</h1>
          <p className="foncik fs-6">
            Tytuł powinien zawierać słowa kluczowe.{" "}
          </p>
        </div>
        <input
          name="title"
          onChange={this.props.handleChange}
          style={{ width: "350px" }}
          defaultValue={values.title}
        ></input>
        <footer>
          <button onClick={this.continue} className="btn btn-primary mt-5">
            Dalej
          </button>
        </footer>
      </>
    );
  }
}

export default FormTitleDetails;
