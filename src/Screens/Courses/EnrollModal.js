// src/EnrollModal.js
import React from "react";
import "./EnrollModal.css"; // Optional: For custom styling

const EnrollModal = () => {
  return (
    <div
      className="modal fade"
      id="enrollModal"
      tabIndex="-1"
      aria-labelledby="enrollModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h3 className="modal-title text-center" id="enrollModalLabel">
              Enroll Now
            </h3>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form
              id="appointment_form"
              name="appointment_form"
              className="form-transparent mt-30"
              method="post"
              action="#"
            >
              <div className="row">
                <div className="col-sm-12">
                  <div className="form-group mb-10">
                    <label for="form_name">Name</label>
                    <input
                      id="form_name"
                      name="form_name"
                      className="form-control"
                      type="text"
                      required=""
                      placeholder="Enter Name"
                      aria-required="true"
                    />
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="form-group mb-10">
                    <label for="form_email">Email</label>
                    <input
                      id="form_email"
                      name="form_email"
                      className="form-control required email"
                      type="email"
                      placeholder="Enter Email"
                      aria-required="true"
                    />
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="form-group mb-10">
                    <label for="form_phone">Phone</label>
                    <input
                      id="form_phone"
                      name="form_phone"
                      className="form-control required"
                      type="text"
                      placeholder="Enter Phone"
                      aria-required="true"
                    />
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="form-group mb-10">
                    <label for="form_appontment_date">
                      Appointment Date & Time
                    </label>
                    <input
                      id="form_appontment_date"
                      name="form_appontment_date"
                      className="form-control required datetime-picker"
                      type="text"
                      placeholder="Appointment Date & Time"
                      aria-required="true"
                    />
                  </div>
                </div>
              </div>
              <div className="form-group mb-10">
                <label for="form_message">Message</label>
                <textarea
                  id="form_message"
                  name="form_message"
                  className="form-control required"
                  placeholder="Enter Message"
                  rows={5}
                  aria-required="true"
                  defaultValue={""}
                />
              </div>
              <div className="form-group mb-0 mt-20">
                <input
                  id="form_botcheck"
                  name="form_botcheck"
                  className="form-control"
                  type="hidden"
                  defaultValue=""
                />
                <button
                  className="btn btn-dark btn-theme-colored"
                  data-loading-text="Please wait..."
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnrollModal;
