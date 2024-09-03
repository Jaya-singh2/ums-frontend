import React, { useState } from 'react';
import LayoutWrapper from '../../../../Component/LayoutWrapper/PortalLayoutWrapper.js';

const initialStudents = [
  { id: 1, class: 'A', rollNumber: '101', name: 'John Doe', course: 'Computer Science', semYear: '1st Year' },
  { id: 2, class: 'B', rollNumber: '102', name: 'Jane Smith', course: 'Mathematics', semYear: '2nd Year' },
  // Add more students as needed
];

const Student = () => {
  const [students, setStudents] = useState(initialStudents);
  const [viewMode, setViewMode] = useState('table');
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [filterDetails, setFilterDetails] = useState({
    course: "",
    semYear: "",
    rollNumber: ""
  })
  const [isEditing, setIsEditing] = useState(false);
  const [newStudent, setNewStudent] = useState({
    course: '',
    class:'C',
    semYear: '',
    rollNumber: '',
    name:'',
    email: '',
    contact: '',
    dob: '',
    gender: '',
    state: '',
    city: '',
    fatherName: '',
    fatherOccupation: '',
    motherName: '',
    motherOccupation: '',
    profileImage: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewStudent({
      ...newStudent,
      [name]: value
    });
  };
  const handleAddStudent = () => {
    setStudents([...students, newStudent]);
    setNewStudent({
      course: '',
      class:'D',
      semYear: '',
      rollNumber: '',
      firstName: '',
      lastName: '',
      email: '',
      contact: '',
      dob: '',
      gender: '',
      state: '',
      city: '',
      fatherName: '',
      fatherOccupation: '',
      motherName: '',
      motherOccupation: '',
      profileImage: ''
    });

  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSelectedStudent({ ...selectedStudent, [name]: value });
  };

  const handleSave = () => {
    setIsEditing(false);
    // onSave(selectedStudent); 
  };

  const handleViewPhoto = () => {
    setViewMode(viewMode === 'table' ? 'photo' : 'table');
  };

  const handleViewStudent = (student) => {
    setSelectedStudent(student);
  };

  const filterStudentDetails = ({ rollNumber, course, semYear }) => {
    let data = students.filter((item) => item.rollNumber === filterDetails.rollNumber && item.course === filterDetails.course && item.semYear === filterDetails.semYear)

    handleViewStudent(data.length > 0 ? data[0] : {})
    setFilterDetails(
      {
        course: "",
        semYear: "",
        rollNumber: ""
      }
    )
  }

  return (
    <LayoutWrapper>
      <div className="main-content bg-lighter">
        <section className="content-section">
          <div className="single-service w-100">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h5 className="text-left">Students</h5>
              <div>
                <button className="btn btn-light-background mr-2" onClick={handleViewPhoto}>
                  {viewMode === 'table' ? 'View Photos' : 'View Table'}
                </button>
                <button
                  className="btn btn-light-background"
                  data-toggle="modal"
                  data-target="#viewStudentModal"
                >
                  View Student
                </button>
                <button
                  className="btn btn-light-background ml-2"
                  data-toggle="modal"
                  data-target="#addStudentModal"
                >
                  Add Student
                </button>
              </div>
            </div>

            {viewMode === 'table' ? (
              <div className="table-responsive">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th className='table-head-background'>Class</th>
                      <th className='table-head-background'>Roll Number</th>
                      <th className='table-head-background'>Student Name</th>
                      <th className='table-head-background'>Course Name</th>
                      <th className='table-head-background'>Sem/Year</th>
                    </tr>
                  </thead>
                  <tbody>
                    {students.map((student) => (
                      <tr key={student.id}
                        className='hover-table-row'
                        onClick={() => handleViewStudent(student)}
                        data-toggle="modal"
                        data-target="#studentDetailsModal">
                        <td>{student.class}</td>
                        <td>{student.rollNumber}</td>
                        <td>{student.name}</td>
                        <td>{student.course}</td>
                        <td>{student.semYear}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="photo-grid row">
                {/* Render student photos */}
                {students.map((student) => (
                  <div key={student.id} className="student-photo col-md-3">
                    <img src={`/Assests/images/portfolio/s8.jpg`} alt={student.name} />
                    <p>{student.name}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* View Student Modal */}
        <div
          className="modal fade"
          id="viewStudentModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="viewStudentModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="viewStudentModalLabel">
                  View Student
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
                    <label htmlFor="viewCourse">Course</label>
                    <select id="viewCourse" className="form-control" value={filterDetails?.course} onChange={(e) => setFilterDetails({ ...filterDetails, "course": e.target.value })}>
                      <option value="" disabled>Select Course</option>
                      <option value="Computer Science">Computer Science</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="viewSemYear">Sem/Year</label>
                    <select id="viewSemYear" className="form-control" value={filterDetails?.semYear} onChange={(e) => setFilterDetails({ ...filterDetails, "semYear": e.target.value })}>
                      <option value="" disabled>Select Sem/Year</option>
                      <option value="1st Year">1st Year</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="viewRollNumber">Roll Number</label>
                    <input type="text" id="viewRollNumber" value={filterDetails?.rollNumber} onChange={(e) => setFilterDetails({ ...filterDetails, "rollNumber": e.target.value })} className="form-control" placeholder="Enter Roll Number" />
                  </div>
                  <button type="button" className="btn btn-light-background" data-dismiss="modal" data-toggle="modal"
                    data-target="#studentDetailsModal" onClick={filterStudentDetails}>
                    View Details
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Student Details Modal */}
        {selectedStudent && (
          <div
            className="modal fade"
            id="studentDetailsModal"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="studentDetailsModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-lg" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="studentDetailsModalLabel">
                    Student Details
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
                      <img src={`/Assests/images/portfolio/s8.jpg`} alt={selectedStudent.name} className="img-fluid" />
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
                                  value={selectedStudent.rollNumber}
                                  onChange={handleInputChange}
                                />
                              ) : (
                                selectedStudent.rollNumber
                              )}
                            </td>
                            <td><strong>Name:</strong></td>
                            <td>
                              {isEditing ? (
                                <input
                                  type="text"
                                  className="form-control"
                                  name="name"
                                  value={selectedStudent.name}
                                  onChange={handleInputChange}
                                />
                              ) : (
                                selectedStudent.name
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
                                  value={selectedStudent.address}
                                  onChange={handleInputChange}
                                />
                              ) : (
                                selectedStudent.address
                              )}
                            </td>
                            <td><strong>DOB:</strong></td>
                            <td>
                              {isEditing ? (
                                <input
                                  type="date"
                                  className="form-control"
                                  name="dob"
                                  value={selectedStudent.dob}
                                  onChange={handleInputChange}
                                />
                              ) : (
                                selectedStudent.dob
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
                                  value={selectedStudent.email}
                                  onChange={handleInputChange}
                                />
                              ) : (
                                selectedStudent.email
                              )}
                            </td>
                            <td><strong>Contact No:</strong></td>
                            <td>
                              {isEditing ? (
                                <input
                                  type="text"
                                  className="form-control"
                                  name="contact"
                                  value={selectedStudent.contact}
                                  onChange={handleInputChange}
                                />
                              ) : (
                                selectedStudent.contact
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
                                  value={selectedStudent.course}
                                  onChange={handleInputChange}
                                />
                              ) : (
                                selectedStudent.course
                              )}
                            </td>
                            <td><strong>Sem/Year:</strong></td>
                            <td>
                              {isEditing ? (
                                <input
                                  type="text"
                                  className="form-control"
                                  name="semYear"
                                  value={selectedStudent.semYear}
                                  onChange={handleInputChange}
                                />
                              ) : (
                                selectedStudent.semYear
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
                                  value={selectedStudent.fatherName}
                                  onChange={handleInputChange}
                                />
                              ) : (
                                selectedStudent.fatherName
                              )}
                            </td>
                            <td><strong>Father's Occupation:</strong></td>
                            <td>
                              {isEditing ? (
                                <input
                                  type="text"
                                  className="form-control"
                                  name="fatherOccupation"
                                  value={selectedStudent.fatherOccupation}
                                  onChange={handleInputChange}
                                />
                              ) : (
                                selectedStudent.fatherOccupation
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
                                  value={selectedStudent.motherName}
                                  onChange={handleInputChange}
                                />
                              ) : (
                                selectedStudent.motherName
                              )}
                            </td>
                            <td><strong>Mother's Occupation:</strong></td>
                            <td>
                              {isEditing ? (
                                <input
                                  type="text"
                                  className="form-control"
                                  name="motherOccupation"
                                  value={selectedStudent.motherOccupation}
                                  onChange={handleInputChange}
                                />
                              ) : (
                                selectedStudent.motherOccupation
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
                                  value={selectedStudent.admissionDate}
                                  onChange={handleInputChange}
                                />
                              ) : (
                                selectedStudent.admissionDate
                              )}
                            </td>
                            <td><strong>Password:</strong></td>
                            <td>
                              {isEditing ? (
                                <input
                                  type="password"
                                  className="form-control"
                                  name="password"
                                  value={selectedStudent.password}
                                  onChange={handleInputChange}
                                />
                              ) : (
                                selectedStudent.password
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

      {/* add Student modal */}
      <div
        className="modal fade"
        id="addStudentModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="addStudentModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="addStudentModalLabel">
                Add Student
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
                  <label htmlFor="course">Course</label>
                  <select
                    id="course"
                    name="course"
                    className="form-control"
                    value={newStudent.course}
                    onChange={handleChange}
                  >
                    <option value="" disabled>Select Course</option>
                    {/* Populate with courses */}
                    <option value="Course 1">Course 1</option>
                    <option value="Course 2">Course 2</option>
                  </select>
                </div>

                <div className="form-group col-md-6">
                  <label htmlFor="semYear">Sem/Year</label>
                  <select
                    id="semYear"
                    name="semYear"
                    className="form-control"
                    value={newStudent.semYear}
                    onChange={handleChange}
                  >
                    <option value="" disabled>Select Sem/Year</option>
                    {/* Populate with semester/year options */}
                    <option value="1st Sem">1st Semester</option>
                    <option value="2nd Sem">2nd Semester</option>
                    <option value="1st Year">1st Year</option>
                    <option value="2nd Year">2nd Year</option>
                  </select>
                </div>

                <div className="form-group col-md-6">
                  <label htmlFor="rollNumber">Roll Number</label>
                  <input
                    type="text"
                    id="rollNumber"
                    name="rollNumber"
                    className="form-control"
                    value={newStudent.rollNumber}
                    onChange={handleChange}
                    placeholder="Enter Roll Number"
                  />
                </div>

                <div className="form-group col-md-6">
                  <label htmlFor="studentName">Student Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                    value={newStudent.name}
                    onChange={handleChange}
                    placeholder="Enter Student Name"
                  />
                </div>

                <div className="form-group col-md-6">
                  <label htmlFor="email">Email ID</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    value={newStudent.email}
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
                    value={newStudent.contact}
                    onChange={handleChange}
                    placeholder="Enter Contact Number"
                  />
                </div>

                <div className="form-group col-md-6">
                  <label htmlFor="dob">DOB</label>
                  <input
                    type="date"
                    id="dob"
                    name="dob"
                    className="form-control"
                    value={newStudent.dob}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group col-md-6">
                  <label htmlFor="gender">Gender</label>
                  <select
                    id="gender"
                    name="gender"
                    className="form-control"
                    value={newStudent.gender}
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
                    value={newStudent.state}
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
                    value={newStudent.city}
                    onChange={handleChange}
                    placeholder="Enter City"
                  />
                </div>

                <div className="form-group col-md-6">
                  <label htmlFor="fatherName">Father's Name</label>
                  <input
                    type="text"
                    id="fatherName"
                    name="fatherName"
                    className="form-control"
                    value={newStudent.fatherName}
                    onChange={handleChange}
                    placeholder="Enter Father's Name"
                  />
                </div>

                <div className="form-group col-md-6">
                  <label htmlFor="fatherOccupation">Father's Occupation</label>
                  <input
                    type="text"
                    id="fatherOccupation"
                    name="fatherOccupation"
                    className="form-control"
                    value={newStudent.fatherOccupation}
                    onChange={handleChange}
                    placeholder="Enter Father's Occupation"
                  />
                </div>

                <div className="form-group col-md-6">
                  <label htmlFor="motherName">Mother's Name</label>
                  <input
                    type="text"
                    id="motherName"
                    name="motherName"
                    className="form-control"
                    value={newStudent.motherName}
                    onChange={handleChange}
                    placeholder="Enter Mother's Name"
                  />
                </div>

                <div className="form-group col-md-6">
                  <label htmlFor="motherOccupation">Mother's Occupation</label>
                  <input
                    type="text"
                    id="motherOccupation"
                    name="motherOccupation"
                    className="form-control"
                    value={newStudent.motherOccupation}
                    onChange={handleChange}
                    placeholder="Enter Mother's Occupation"
                  />
                </div>

                <div className="form-group col-md-12">
                  <label htmlFor="profileImage">Profile Image</label>
                  <input
                    type="file"
                    id="profileImage"
                    name="profileImage"
                    className="form-control"
                    onChange={(e) => setNewStudent({
                      ...newStudent,
                      profileImage: e.target.files[0]
                    })}
                  />
                </div>

                <button
                  type="button"
                  className="btn btn-light-background"
                  onClick={handleAddStudent}
                  data-dismiss="modal"
                >
                  Add Student
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </LayoutWrapper>

  );
};

export default Student;