import React from 'react';
import LayoutWrapper from '../../../Component/LayoutWrapper/PortalLayoutWrapper.js';
import './FeeManagement.css';

const feeRecords = [
  { id: 1, name: 'John Doe', course: 'Computer Science', amount: '$5000', status: 'Paid' },
  { id: 2, name: 'Jane Smith', course: 'Business Administration', amount: '$4500', status: 'Pending' },
  { id: 3, name: 'Alice Johnson', course: 'Engineering', amount: '$6000', status: 'Paid' },
  // Add more records as needed
];

const FeeManagement = () => {
  return (
    <LayoutWrapper>
      <div className="main-content bg-lighter">
        <section className="content-section">
          <div className="single-service w-100">
            <h5 className='text-left'>Fee Management</h5>
            <div className='text-right'>
              <button className="btn btn-success" data-toggle="modal"
                data-target="#addFeeModal">Add Fee Structure</button>
            </div>
            
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Course</th>
                    <th>Amount</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {feeRecords.map((record) => (
                    <tr key={record.id}>
                      <td>{record.id}</td>
                      <td>{record.name}</td>
                      <td>{record.course}</td>
                      <td>{record.amount}</td>
                      <td>{record.status}</td>
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
          id="addFeeModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="addFeeModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="addFeeModalLabel">
                  Add Fee Structure
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
                    <label htmlFor="studentName">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="studentName"
                      placeholder="Enter student name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="courseName">Course</label>
                    <input
                      type="text"
                      className="form-control"
                      id="courseName"
                      placeholder="Enter course name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="feeAmount">Fee Amount</label>
                    <input
                      type="number"
                      className="form-control"
                      id="feeAmount"
                      placeholder="Enter fee amount"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="paymentStatus">Payment Status</label>
                    <select className='form-control'>
                      <option>Paid</option>
                      <option>Pending</option>
                    </select>
                  </div>
                  <button className="btn btn-primary">
                    Add Fee Structure
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

export default FeeManagement;
