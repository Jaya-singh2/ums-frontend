import React from 'react';
import LayoutWrapper from '../../../Component/LayoutWrapper/PortalLayoutWrapper.js';
import './AdmissionManagement.css';

const applications = [
  { id: 1, applicantName: 'John Doe', status: 'Under Review', communication: 'Email Sent' },
  { id: 2, applicantName: 'Jane Smith', status: 'Documents Verified', communication: 'Pending' },
  { id: 3, applicantName: 'Alice Johnson', status: 'Merit Listed', communication: 'Final Notification Sent' },
  // Add more applications as needed
];

const AdmissionManagement = () => {
  return (
    <LayoutWrapper>
      <div className="main-content bg-lighter">
        <section className="content-section">
          <div className="single-service w-100">
            <h5 className='text-left'>Admission Management</h5>
            <div className='text-right'>
              <button className="btn btn-success" data-toggle="modal"
                data-target="#addApplicationModal">Add New Application</button>
            </div>
            
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Applicant Name</th>
                    <th>Status</th>
                    <th>Communication</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {applications.map((application) => (
                    <tr key={application.id}>
                      <td>{application.id}</td>
                      <td>{application.applicantName}</td>
                      <td>{application.status}</td>
                      <td>{application.communication}</td>
                      <td>
                        <button className="btn btn-primary btn-sm">Edit</button>
                        <button className="btn btn-danger btn-sm ml-2">Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
          </div>
        </section>

        <div
          className="modal fade"
          id="addApplicationModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="addApplicationModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="addApplicationModalLabel">
                  Add New Application
                </h5>
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
                <form>
                  <div className="form-group">
                    <label htmlFor="applicantName">Applicant Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="applicantName"
                      placeholder="Enter applicant name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="applicationStatus">Status</label>
                    <select className='form-control'>
                      <option>Under Review</option>
                      <option>Documents Verified</option>
                      <option>Merit Listed</option>
                      <option>Rejected</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="communicationStatus">Communication</label>
                    <input
                      type="text"
                      className="form-control"
                      id="communicationStatus"
                      placeholder="Enter communication status"
                    />
                  </div>
                  <button className="btn btn-primary">
                    Add Application
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutWrapper>
  );
};

export default AdmissionManagement;
