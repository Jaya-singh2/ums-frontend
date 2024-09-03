import React, { useState } from 'react';
import LayoutWrapper from '../../../../Component/LayoutWrapper/PortalLayoutWrapper.js';

const AssignSubject = () => {
  const [faculty, setFaculty] = useState([
    { id: 'F001', name: 'Dr. Alice Johnson', class: 'A', semYear: '1', subject: 'Basic Math', position: 'Professor' , qualification:" Master in CSE", experience:'5 Years'},
    { id: 'F002', name: 'Prof. Bob Smith', class: 'B', semYear: '2', subject: 'C++', position: 'Professor',qualification:" Master in CSE", experience:'5 Years' },
    // Add more faculty members as needed
  ]);

  const [selectedFaculty, setSelectedFaculty] = useState(null);
  const [assignment, setAssignment] = useState({
    courseName: '',
    semYear: '',
    subject: '',
    position: ''
  });

  const handleViewFaculty = (faculty) => {
    setSelectedFaculty(faculty);
    setAssignment({
      courseName: '',
      semYear: '',
      subject: '',
      position: ''
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAssignment(prevAssignment => ({
      ...prevAssignment,
      [name]: value
    }));
  };

  const handleAssignSubject = () => {
    setFaculty(faculty.map(f => 
      f.id === selectedFaculty.id
        ? { ...f, ...assignment }
        : f
    ));
    setSelectedFaculty(null);
  };

  return (
    <LayoutWrapper>
      <div className="main-content bg-lighter">
        <section className="content-section">
          <div className="single-service w-100">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h5 className="text-left">Assign Subject</h5>
            </div>

            <div className="table-responsive">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th className='table-head-background'>Faculty ID</th>
                    <th className='table-head-background'>Faculty Name</th>
                    <th className='table-head-background'>Class</th>
                    <th className='table-head-background'>Sem/Year</th>
                    <th className='table-head-background'>Subject</th>
                    <th className='table-head-background'>Position</th>
                  </tr>
                </thead>

                <tbody>
                  {faculty.map((f) => (
                    <tr
                      key={f.id}
                      className='hover-table-row'
                      onClick={() => handleViewFaculty(f)}
                      data-toggle="modal"
                      data-target="#assignSubjectModal"
                    >
                      <td>{f.id}</td>
                      <td>{f.name}</td>
                      <td>{f.class}</td>
                      <td>{f.semYear}</td>
                      <td>{f.subject}</td>
                      <td>{f.position}</td>
                    </tr>
                  ))}
                </tbody>

              </table>
            </div>
          </div>
        </section>
      </div>

      {/* Modal for Assigning Subject */}
      <div
        className="modal fade"
        id="assignSubjectModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="assignSubjectModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="assignSubjectModalLabel">Assign Subject</h5>
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
              {selectedFaculty && (
                 <div className="row">
                 <div className="col-md-4">
                   <img src={`/Assests/images/portfolio/s8.jpg`} alt={selectedFaculty.name} className="img-fluid" />
                 </div>
                 <div className="col-md-8">
                   <table className="table table-bordered">
                     <tbody>
                       <tr>
                         <td><strong>Faculty Name :</strong></td>
                         <td>
                           {selectedFaculty.name}
                         </td>
                       
                       </tr>
                       <tr>
                       <td><strong>Faculty Id:</strong></td>
                         <td>
                         {selectedFaculty.id}
                         </td>
                       </tr>
                       <tr>
                         <td><strong>Qualification:</strong></td>
                         <td>
                         {selectedFaculty.qualification}
                         </td>
                      </tr>
                      <tr>
                         <td><strong>Experience:</strong></td>
                         <td>
                         {selectedFaculty.experience}
                         </td>
                       </tr>
                     </tbody>
                   </table>
                 </div>

               </div>
                // <div className="d-flex">
                //   <img src={selectedFaculty.photo || 'default-photo.jpg'} alt={selectedFaculty.name} className="faculty-photo" />
                //   <div className="faculty-details ml-3">
                //     <p><strong>Name:</strong> {selectedFaculty.name}</p>
                //     <p><strong>ID:</strong> {selectedFaculty.id}</p>
                //     <p><strong>Qualification:</strong> {selectedFaculty.qualification}</p>
                //     <p><strong>Experience:</strong> {selectedFaculty.experience}</p>
                //   </div>
                // </div>
              )}
{/* 
              <form>
                <div className="form-group">
                  <label htmlFor="courseName">Course Name</label>
                  <select
                    type="text"
                    id="courseName"
                    name="courseName"
                    className="form-control"
                    value={assignment.courseName}
                    onChange={handleChange}
                    placeholder="Enter Course Name"
                  >
                    <option value=''>select course</option>
                    <option value='Btech CSE'>Btech CSE</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="semYear">Sem/Year</label>
                  <input
                    type="text"
                    id="semYear"
                    name="semYear"
                    className="form-control"
                    value={assignment.semYear}
                    onChange={handleChange}
                    placeholder="Enter Sem/Year"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="form-control"
                    value={assignment.subject}
                    onChange={handleChange}
                    placeholder="Enter Subject"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="position">Position</label>
                  <input
                    type="text"
                    id="position"
                    name="position"
                    className="form-control"
                    value={assignment.position}
                    onChange={handleChange}
                    placeholder="Enter Position"
                  />
                </div>

                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleAssignSubject}
                  data-dismiss="modal"
                >
                  Assign
                </button>
              </form> */}
            </div>
          </div>
        </div>
      </div>
    </LayoutWrapper>
  );
};

export default AssignSubject;
