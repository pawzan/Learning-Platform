import React from "react";
import { MdQuiz, MdGrading } from "react-icons/md";

function Modal(props) {
  return (
    <div
      className="modal fade"
      id="staticBackdrop"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
      data-bs-dismiss="modal"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content ">
          <div className="modal-body ">
            <div class="container to">
              <div className="row ">
                <div className="col-sm-6 col-md-6 col-lg-12">
                  {/* <Link to={showLesson}> */}
                  <div
                    className="float-start border border-4 border-light mb-2 d-flex justify-content-center align-items-center"
                    style={{ width: "230px", height: "200px" }}
                    onClick={(index) => {
                      console.log(props.index);
                    }}
                  >
                    <MdGrading size={100} />
                  </div>
                  {/* </Link> */}
                  <div
                    className="float-end border border-4 border-light d-flex justify-content-center align-items-center"
                    style={{ width: "230px", height: "200px" }}
                    onClick={console.log("bcd")}
                  >
                    <MdQuiz size={100} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
