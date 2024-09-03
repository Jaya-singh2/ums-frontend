import React, { useState } from 'react';
import LayoutWrapper from '../../../../Component/LayoutWrapper/PortalLayoutWrapper.js';

const MarksheetReport = () => {
  const [activeSection, setActiveSection] = useState('subjectWise');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedRollNumber, setSelectedRollNumber] = useState('');
  const [students] = useState([
    { rollNumber: '101', name: 'John Doe', course: 'Course 1', semYear: '1st Year', subject: 'Subject 1', totalMarks: 100, marksObtained: 85 },
    { rollNumber: '102', name: 'Jane Smith', course: 'Course 2', semYear: '2nd Year', subject: 'Subject 2', totalMarks: 100, marksObtained: 90 },
    { rollNumber: '103', name: 'Alice Johnson', course: 'Course 1', semYear: '1st Year', subject: 'Subject 1', totalMarks: 100, marksObtained: 78 },
    { rollNumber: '104', name: 'Bob Brown', course: 'Course 2', semYear: '2nd Year', subject: 'Subject 2', totalMarks: 100, marksObtained: 82 }
  ]);
  
  //const [resultsDeclared, setResultsDeclared] = useState(false);

  const handleSectionChange = (section) => {
    setActiveSection(section);
    setSelectedSubject('')
    setSelectedRollNumber('')
  };

  // const handleDeclareResult = () => {
  //   setResultsDeclared(true);
  // };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'subject') setSelectedSubject(value);
    if (name === 'rollNumber') setSelectedRollNumber(value);
  };

  const filteredStudents = students.filter(student =>
    (selectedSubject ? student.subject === selectedSubject : true) &&
    (selectedRollNumber ? student.rollNumber === selectedRollNumber : true)
  );

  return (
    <LayoutWrapper>
      <div className="main-content bg-lighter">
        <section className="content-section">
          <div className="single-service w-100">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h5 className="text-left">Marksheet Report</h5>
            </div>

            <div className="mb-3 text-right">
              {/* <button
                className={`btn ${activeSection === 'declareResult' ? 'btn-dark-background' : 'btn-light-background'}`}
                onClick={() => handleSectionChange('declareResult')}
              >
                Declare Result
              </button> */}
              <button
                className={`btn ${activeSection === 'subjectWise' ? 'btn-dark-background' : 'btn-light-background'}`}
                onClick={() => handleSectionChange('subjectWise')}
              >
                Subject Wise
              </button>
              <button
                className={`btn ${activeSection === 'studentWise' ? 'btn-dark-background' : 'btn-light-background'}`}
                onClick={() => handleSectionChange('studentWise')}
              >
                Student Wise
              </button>
              <button
                className={`btn ${activeSection === 'classWise' ? 'btn-dark-background' : 'btn-light-background'}`}
                onClick={() => handleSectionChange('classWise')}
              >
                Class Wise
              </button>
            </div>

            {/* Declare Result Section */}
            {/* {activeSection === 'declareResult' && (
            <div>
              <div className='row'>
                <div className="form-group col-md-4">
                  <label htmlFor="course">Course</label>
                  <select
                    id="course"
                    name="course"
                    className="form-control"
                    value={selectedCourse}
                    onChange={handleChange}
                  >
                    <option value="" disabled>Select Course</option>
                    <option value="Course 1">Course 1</option>
                    <option value="Course 2">Course 2</option>
                  </select>
                </div>
                <div className="form-group col-md-4 mt-20 d-flex justify-content-between align-items-center">
                <button className="btn btn-light-background" onClick={handleDeclareResult}>
                  Fetch Result
                </button>
                </div>
                </div>
                {resultsDeclared && (
                  <div className="table-responsive mt-3 col-md-12">
                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th className='table-head-background'>Course Code</th>
                          <th className='table-head-background'>Sem/Year</th>
                          <th className='table-head-background'>Course Name</th>
                          <th className='table-head-background'>Declare Result</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredStudents.map((student) => (
                          <tr key={student.rollNumber}>
                            <td>{student.course}</td>
                            <td>{student.semYear}</td>
                            <td>{student.subject}</td>
                            <td>
                              <input type="radio" name="declareResult" value={student.rollNumber} />
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            )} */}

            {/* Subject Wise Section */}
            {activeSection === 'subjectWise' && (
              <div>
                {/* <div className="form-group col-md-3">
                  <label htmlFor="course">Course</label>
                  <select
                    id="course"
                    name="course"
                    className="form-control"
                    value={selectedCourse}
                    onChange={handleChange}
                  >
                    <option value="" disabled>Select Course</option>
                    <option value="Course 1">Course 1</option>
                    <option value="Course 2">Course 2</option>
                  </select>
                </div>

                <div className="form-group col-md-3">
                  <label htmlFor="semYear">Sem/Year</label>
                  <select
                    id="semYear"
                    name="semYear"
                    className="form-control"
                    value={selectedSemYear}
                    onChange={handleChange}
                  >
                    <option value="" disabled>Select Sem/Year</option>
                    <option value="1st Year">1st Year</option>
                    <option value="2nd Year">2nd Year</option>
                  </select>
                </div> */}

                <div className="form-group col-md-3">
                  <label htmlFor="subject">Subject</label>
                  <select
                    id="subject"
                    name="subject"
                    className="form-control"
                    value={selectedSubject}
                    onChange={handleChange}
                  >
                    <option value="" disabled>Select Subject</option>
                    <option value="Subject 1">Subject 1</option>
                    <option value="Subject 2">Subject 2</option>
                  </select>
                </div>
                {/* <div className="form-group col-md-3 mt-20 d-flex justify-content-between align-items-center">
                <button className="btn btn-light-background mt-3">
                  Fetch Details
                </button>
                </div> */}

                <div className="table-responsive mt-3 col-md-12">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th className='table-head-background'>Roll Number</th>
                        <th className='table-head-background'>Student Name</th>
                        <th className='table-head-background'>Class</th>
                        <th className='table-head-background'>Subject</th>
                        <th className='table-head-background'>Total Marks</th>
                        <th className='table-head-background'>Marks Obtained</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredStudents.map((student) => (
                        <tr key={student.rollNumber}>
                          <td>{student.rollNumber}</td>
                          <td>{student.name}</td>
                          <td>{student.course}</td>
                          <td>{student.subject}</td>
                          <td>{student.totalMarks}</td>
                          <td>{student.marksObtained}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Student Wise Section */}
            {activeSection === 'studentWise' && (
              <div>
                {/* <div className="form-group col-md-3">
                  <label htmlFor="course">Course</label>
                  <select
                    id="course"
                    name="course"
                    className="form-control"
                    value={selectedCourse}
                    onChange={handleChange}
                  >
                    <option value="" disabled>Select Course</option>
                    <option value="Course 1">Course 1</option>
                    <option value="Course 2">Course 2</option>
                  </select>
                </div>

                <div className="form-group col-md-3">
                  <label htmlFor="semYear">Sem/Year</label>
                  <select
                    id="semYear"
                    name="semYear"
                    className="form-control"
                    value={selectedSemYear}
                    onChange={handleChange}
                  >
                    <option value="" disabled>Select Sem/Year</option>
                    <option value="1st Year">1st Year</option>
                    <option value="2nd Year">2nd Year</option>
                  </select>
                </div> */}

                <div className="form-group col-md-3">
                  <label htmlFor="rollNumber">Roll Number</label>
                  <input
                    type="text"
                    id="rollNumber"
                    name="rollNumber"
                    className="form-control"
                    value={selectedRollNumber}
                    onChange={handleChange}
                  />
                </div>

                {/* <div className="form-group col-md-3 mt-20 d-flex justify-content-between align-items-center">
                <button className="btn btn-light-background mt-3">
                  Fetch Details
                </button>
                </div> */}

                <div className="table-responsive mt-3 col-md-12">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th className='table-head-background'>Roll Number</th>
                        <th className='table-head-background'>Student Name</th>
                        <th className='table-head-background'>Class</th>
                        <th className='table-head-background'>Subject</th>
                        <th className='table-head-background'>Total Marks</th>
                        <th className='table-head-background'>Marks Obtained</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredStudents.map((student) => (
                        <tr key={student.rollNumber}>
                          <td>{student.rollNumber}</td>
                          <td>{student.name}</td>
                          <td>{student.course}</td>
                          <td>{student.subject}</td>
                          <td>{student.totalMarks}</td>
                          <td>{student.marksObtained}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Class Wise Section */}
            {activeSection === 'classWise' && (
              <div>
                {/* <div className="form-group col-md-4">
                  <label htmlFor="course">Course</label>
                  <select
                    id="course"
                    name="course"
                    className="form-control"
                    value={selectedCourse}
                    onChange={handleChange}
                  >
                    <option value="" disabled>Select Course</option>
                    <option value="Course 1">Course 1</option>
                    <option value="Course 2">Course 2</option>
                  </select>
                </div>

                <div className="form-group col-md-4">
                  <label htmlFor="semYear">Sem/Year</label>
                  <select
                    id="semYear"
                    name="semYear"
                    className="form-control"
                    value={selectedSemYear}
                    onChange={handleChange}
                  >
                    <option value="" disabled>Select Sem/Year</option>
                    <option value="1st Year">1st Year</option>
                    <option value="2nd Year">2nd Year</option>
                  </select>
                </div>

                <div className="form-group col-md-3 mt-20 d-flex justify-content-between align-items-center">
                <button className="btn btn-light-background mt-3">
                  Fetch Details
                </button>
                </div> */}

                <div className="table-responsive mt-3 col-md-12">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th className='table-head-background'>Roll Number</th>
                        <th className='table-head-background'>Student Name</th>
                        <th className='table-head-background'>Class</th>
                        <th className='table-head-background'>Subject (All)</th>
                        <th className='table-head-background'>Total Marks</th>
                        <th className='table-head-background'>Marks Obtained</th>
                      </tr>
                    </thead>
                    <tbody>
                      {students?.map((student) => (
                        <tr key={student.rollNumber}>
                          <td>{student.rollNumber}</td>
                          <td>{student.name}</td>
                          <td>{student.course}</td>
                          <td>{student.subject}</td>
                          <td>{student.totalMarks}</td>
                          <td>{student.marksObtained}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </LayoutWrapper>
  );
};

export default MarksheetReport;
