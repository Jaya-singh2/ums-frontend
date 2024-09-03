import React, { useState } from 'react';
import LayoutWrapper from '../../../../Component/LayoutWrapper/PortalLayoutWrapper.js';

const initialFaculty = [
  { id: 'F001', name: 'Dr. Alice Johnson', state: 'California', city: 'Los Angeles', email: 'alice.johnson@example.com', contact: '123-456-7890', qualification: 'PhD in Computer Science', experience: '10 years', dob: '1978-05-21', gender: 'Female', photo: '' },
  { id: 'F002', name: 'Prof. Robert Brown', state: 'New York', city: 'New York City', email: 'robert.brown@example.com', contact: '987-654-3210', qualification: 'MSc in Mathematics', experience: '8 years', dob: '1982-11-03', gender: 'Male', photo: '' },
  // Add more faculty members as needed
];



const Faculty = () => {
  const [faculty, setFaculty] = useState(initialFaculty);
  const [viewMode, setViewMode] = useState('table');
  const [selectedFaculty, setSelectedFaculty] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [newFaculty, setNewFaculty] = useState({
    id: '',
    name: '',
    state: '',
    city: '',
    email: '',
    contact: '',
    qualification: '',
    experience: '',
    dob: '',
    gender: '',
    photo: ''
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewFaculty({
      ...newFaculty,
      [name]: value
    });
  };
  const handleAddFaculty = () => {
    setFaculty([...faculty, newFaculty]);
    setNewFaculty({
      id: '',
      name: '',
      state: '',
      city: '',
      email: '',
      contact: '',
      qualification: '',
      experience: '',
      dob: '',
      gender: '',
      photo: ''
    });

  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSelectedFaculty({ ...selectedFaculty, [name]: value });
  };

  const handleSave = () => {
    setIsEditing(false);
    // onSave(selectedFaculty); 
  };

  const handleViewPhoto = () => {
    setViewMode(viewMode === 'table' ? 'photo' : 'table');
  };

  const handleViewfaculty = (faculty) => {
    setSelectedFaculty(faculty);
  };

  return (
    <LayoutWrapper>
      <div className="main-content bg-lighter">
        <section className="content-section">
          <div className="single-service w-100">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h5 className="text-left">Faculty</h5>
              <div>
                <button className="btn btn-light-background mr-2" onClick={handleViewPhoto}>
                  {viewMode === 'table' ? 'View Photos' : 'View Table'}
                </button>
                <button
                  className="btn btn-light-background ml-2"
                  data-toggle="modal"
                  data-target="#addFacultyModal"
                >
                  Add Faculty
                </button>
              </div>
            </div>

            {viewMode === 'table' ? (
              <div className="table-responsive">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th className='table-head-background'>faculty ID</th>
                      <th className='table-head-background'>faculty Name</th>
                      <th className='table-head-background'>Email ID</th>
                      <th className='table-head-background'>Qualification</th>
                      <th className='table-head-background'>Experience</th>
                    </tr>
                  </thead>

                  <tbody>
                    {faculty.map((faculty) => (
                      <tr
                        key={faculty.id}
                        className='hover-table-row'
                        onClick={() => handleViewfaculty(faculty)}
                        data-toggle="modal"
                        data-target="#facultyDetailsModal"
                      >
                        <td>{faculty.id}</td>
                        <td>{faculty.name}</td>
                        <td>{faculty.email}</td>
                        <td>{faculty.qualification}</td>
                        <td>{faculty.experience}</td>
                      </tr>
                    ))}
                  </tbody>

                </table>
              </div>
            ) : (
              <div className="photo-grid row">
                {/* Render faculty photos */}
                {faculty.map((faculty) => (
                  <div key={faculty.id} className="faculty-photo col-md-3">
                    <img src={`/Assests/images/portfolio/s8.jpg`} alt={faculty.name} />
                    <p>{faculty.name}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Faculty Details Modal */}
        {selectedFaculty && (
          <div
            className="modal fade"
            id="facultyDetailsModal"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="facultyDetailsModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-lg" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="facultyDetailsModalLabel">
                    Faculty Details
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
                  <div className="mt-3">
                    <button className="btn btn-light-background mr-2">Marksheet</button>
                    <button className="btn btn-light-background mb-3" onClick={() => setIsEditing(!isEditing)}>
                      {isEditing ? 'Cancel' : 'Edit Details'}
                    </button>
                    {isEditing ? (
                      <button className="btn btn-light-background mb-3 ml-2" onClick={handleSave}>
                        Save
                      </button>
                    ) : null}
                  </div>
                  <div className="row">
                    <div className="col-md-4">
                      <img src={`/Assests/images/portfolio/s8.jpg`} alt={selectedFaculty.name} className="img-fluid" />
                    </div>
                    <div className="col-md-8">


                      <table className="table table-bordered">
                        <tbody>
                          <tr>
                            <td><strong>Roll Number:</strong></td>
                            <td>
                              {isEditing ? (
                                <input
                                  type="text"
                                  className="form-control"
                                  name="rollNumber"
                                  value={selectedFaculty.rollNumber}
                                  onChange={handleInputChange}
                                />
                              ) : (
                                selectedFaculty.rollNumber
                              )}
                            </td>
                            <td><strong>Name:</strong></td>
                            <td>
                              {isEditing ? (
                                <input
                                  type="text"
                                  className="form-control"
                                  name="name"
                                  value={selectedFaculty.name}
                                  onChange={handleInputChange}
                                />
                              ) : (
                                selectedFaculty.name
                              )}
                            </td>
                          </tr>
                          <tr>
                            <td><strong>Address:</strong></td>
                            <td>
                              {isEditing ? (
                                <input
                                  type="text"
                                  className="form-control"
                                  name="address"
                                  value={selectedFaculty.address}
                                  onChange={handleInputChange}
                                />
                              ) : (
                                selectedFaculty.address
                              )}
                            </td>
                            <td><strong>DOB:</strong></td>
                            <td>
                              {isEditing ? (
                                <input
                                  type="date"
                                  className="form-control"
                                  name="dob"
                                  value={selectedFaculty.dob}
                                  onChange={handleInputChange}
                                />
                              ) : (
                                selectedFaculty.dob
                              )}
                            </td>
                          </tr>
                          <tr>
                            <td><strong>Email ID:</strong></td>
                            <td>
                              {isEditing ? (
                                <input
                                  type="email"
                                  className="form-control"
                                  name="email"
                                  value={selectedFaculty.email}
                                  onChange={handleInputChange}
                                />
                              ) : (
                                selectedFaculty.email
                              )}
                            </td>
                            <td><strong>Contact No:</strong></td>
                            <td>
                              {isEditing ? (
                                <input
                                  type="text"
                                  className="form-control"
                                  name="contact"
                                  value={selectedFaculty.contact}
                                  onChange={handleInputChange}
                                />
                              ) : (
                                selectedFaculty.contact
                              )}
                            </td>
                          </tr>
                          <tr>
                            <td><strong>Course:</strong></td>
                            <td>
                              {isEditing ? (
                                <input
                                  type="text"
                                  className="form-control"
                                  name="course"
                                  value={selectedFaculty.course}
                                  onChange={handleInputChange}
                                />
                              ) : (
                                selectedFaculty.course
                              )}
                            </td>
                            <td><strong>Sem/Year:</strong></td>
                            <td>
                              {isEditing ? (
                                <input
                                  type="text"
                                  className="form-control"
                                  name="semYear"
                                  value={selectedFaculty.semYear}
                                  onChange={handleInputChange}
                                />
                              ) : (
                                selectedFaculty.semYear
                              )}
                            </td>
                          </tr>
                          <tr>
                            <td><strong>Father's Name:</strong></td>
                            <td>
                              {isEditing ? (
                                <input
                                  type="text"
                                  className="form-control"
                                  name="fatherName"
                                  value={selectedFaculty.fatherName}
                                  onChange={handleInputChange}
                                />
                              ) : (
                                selectedFaculty.fatherName
                              )}
                            </td>
                            <td><strong>Father's Occupation:</strong></td>
                            <td>
                              {isEditing ? (
                                <input
                                  type="text"
                                  className="form-control"
                                  name="fatherOccupation"
                                  value={selectedFaculty.fatherOccupation}
                                  onChange={handleInputChange}
                                />
                              ) : (
                                selectedFaculty.fatherOccupation
                              )}
                            </td>
                          </tr>
                          <tr>
                            <td><strong>Mother's Name:</strong></td>
                            <td>
                              {isEditing ? (
                                <input
                                  type="text"
                                  className="form-control"
                                  name="motherName"
                                  value={selectedFaculty.motherName}
                                  onChange={handleInputChange}
                                />
                              ) : (
                                selectedFaculty.motherName
                              )}
                            </td>
                            <td><strong>Mother's Occupation:</strong></td>
                            <td>
                              {isEditing ? (
                                <input
                                  type="text"
                                  className="form-control"
                                  name="motherOccupation"
                                  value={selectedFaculty.motherOccupation}
                                  onChange={handleInputChange}
                                />
                              ) : (
                                selectedFaculty.motherOccupation
                              )}
                            </td>
                          </tr>
                          <tr>
                            <td><strong>Admission Date:</strong></td>
                            <td>
                              {isEditing ? (
                                <input
                                  type="date"
                                  className="form-control"
                                  name="admissionDate"
                                  value={selectedFaculty.admissionDate}
                                  onChange={handleInputChange}
                                />
                              ) : (
                                selectedFaculty.admissionDate
                              )}
                            </td>
                            <td><strong>Password:</strong></td>
                            <td>
                              {isEditing ? (
                                <input
                                  type="password"
                                  className="form-control"
                                  name="password"
                                  value={selectedFaculty.password}
                                  onChange={handleInputChange}
                                />
                              ) : (
                                selectedFaculty.password
                              )}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                  </div>

                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* add Faculty modal */}
      <div
        className="modal fade"
        id="addFacultyModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="addFacultyModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="addFacultyModalLabel">
                Add Faculty
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
                <div className="form-group col-md-6">
                  <label htmlFor="facultyId">Faculty ID</label>
                  <input
                    type="text"
                    id="id"
                    name="id"
                    className="form-control"
                    value={newFaculty.id}
                    onChange={handleChange}
                    placeholder="Enter Faculty ID"
                  />
                </div>

                <div className="form-group col-md-6">
                  <label htmlFor="facultyName">Faculty Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                    value={newFaculty.name}
                    onChange={handleChange}
                    placeholder="Enter Faculty Name"
                  />
                </div>

                <div className="form-group col-md-6">
                  <label htmlFor="email">Email ID</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    value={newFaculty.email}
                    onChange={handleChange}
                    placeholder="Enter Email ID"
                  />
                </div>

                <div className="form-group col-md-6">
                  <label htmlFor="contact">Contact Number</label>
                  <input
                    type="text"
                    id="contact"
                    name="contact"
                    className="form-control"
                    value={newFaculty.contact}
                    onChange={handleChange}
                    placeholder="Enter Contact Number"
                  />
                </div>

                <div className="form-group col-md-6">
                  <label htmlFor="qualification">Qualification</label>
                  <input
                    type="text"
                    id="qualification"
                    name="qualification"
                    className="form-control"
                    value={newFaculty.qualification}
                    onChange={handleChange}
                    placeholder="Enter Qualification"
                  />
                </div>

                <div className="form-group col-md-6">
                  <label htmlFor="experience">Experience</label>
                  <input
                    type="text"
                    id="experience"
                    name="experience"
                    className="form-control"
                    value={newFaculty.experience}
                    onChange={handleChange}
                    placeholder="Enter Experience"
                  />
                </div>

                <div className="form-group col-md-6">
                  <label htmlFor="dob">DOB</label>
                  <input
                    type="date"
                    id="dob"
                    name="dob"
                    className="form-control"
                    value={newFaculty.dob}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group col-md-6">
                  <label htmlFor="gender">Gender</label>
                  <select
                    id="gender"
                    name="gender"
                    className="form-control"
                    value={newFaculty.gender}
                    onChange={handleChange}
                  >
                    <option value="" disabled>Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="form-group col-md-6">
                  <label htmlFor="state">State</label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    className="form-control"
                    value={newFaculty.state}
                    onChange={handleChange}
                    placeholder="Enter State"
                  />
                </div>

                <div className="form-group col-md-6">
                  <label htmlFor="city">City</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    className="form-control"
                    value={newFaculty.city}
                    onChange={handleChange}
                    placeholder="Enter City"
                  />
                </div>

                <div className="form-group col-md-12">
                  <label htmlFor="photo">Photo</label>
                  <input
                    type="file"
                    id="photo"
                    name="photo"
                    className="form-control"
                    onChange={(e) => setNewFaculty({
                      ...newFaculty,
                      photo: e.target.files[0]
                    })}
                  />
                </div>

                <button
                  type="button"
                  className="btn btn-light-background"
                  onClick={handleAddFaculty}
                  data-dismiss="modal"
                >
                  Add Faculty
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

    </LayoutWrapper>

  );
};

export default Faculty;