import React, { useState } from 'react';
import LayoutWrapper from '../../../../Component/LayoutWrapper/PortalLayoutWrapper.js';

const EnterMarks = () => {
  const [activeTab, setActiveTab] = useState('theory');
  const [selectedCourse, setSelectedCourse] = useState('');
  const [selectedSemYear, setSelectedSemYear] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [marksData, setMarksData] = useState({
    course: '',
    semYear: '',
    subject: '',
    students: [
      { rollNumber: '101', name: 'John Doe', course: 'Course 1', semYear: '1st Year', subject: 'Subject 1', maxTheoryMarks: 100, theoryMarks: 0, maxPracticalMarks: 50, practicalMarks: 0 },
      { rollNumber: '102', name: 'Jane Smith', course: 'Course 2', semYear: '2nd Year', subject: 'Subject 2', maxTheoryMarks: 100, theoryMarks: 0, maxPracticalMarks: 50, practicalMarks: 0 },
      { rollNumber: '103', name: 'Alice Johnson', course: 'Course 1', semYear: '1st Year', subject: 'Subject 1', maxTheoryMarks: 100, theoryMarks: 0, maxPracticalMarks: 50, practicalMarks: 0 },
      { rollNumber: '104', name: 'Bob Brown', course: 'Course 2', semYear: '2nd Year', subject: 'Subject 2', maxTheoryMarks: 100, theoryMarks: 0, maxPracticalMarks: 50, practicalMarks: 0 }
    ],
  });

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'course') setSelectedCourse(value);
    if (name === 'semYear') setSelectedSemYear(value);
    if (name === 'subject') setSelectedSubject(value);

    setMarksData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleMarksChange = (index, field, value) => {
    const updatedStudents = [...marksData.students];
    updatedStudents[index][field] = value;
    setMarksData((prev) => ({
      ...prev,
      students: updatedStudents,
    }));
  };

  const saveMarks = () => {
    // Logic to save marks
    console.log('Marks saved:', marksData);
  };

  const filteredStudents = marksData.students.filter(student =>
    (selectedCourse ? student.course === selectedCourse : true) &&
    (selectedSemYear ? student.semYear === selectedSemYear : true) &&
    (selectedSubject ? student.subject === selectedSubject : true)
  );

  return (
    <LayoutWrapper>
      <div className="main-content bg-lighter">
        <section className="content-section">
          <div className="single-service w-100">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h5 className="text-left">Enter Marks</h5>
            </div>

            <div className="mb-3">
              <button
                className={`btn ${activeTab === 'theory' ? 'btn-dark-background' : 'btn-light-background'}`}
                onClick={() => handleTabChange('theory')}
              >
                Theory Marks
              </button>
              <button
                className={`btn ${activeTab === 'practical' ? 'btn-dark-background' : 'btn-light-background'}`}
                onClick={() => handleTabChange('practical')}
              >
                Practical Marks
              </button>
            </div>

            <form className="mb-3">
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
                  <option value="1st Sem">1st Semester</option>
                  <option value="2nd Sem">2nd Semester</option>
                  <option value="1st Year">1st Year</option>
                  <option value="2nd Year">2nd Year</option>
                </select>
              </div>

              <div className="form-group col-md-4">
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
            </form>

            {filteredStudents.length > 0 && (
              <div className="table-responsive row col-md-12">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th className='table-head-background'>Roll Number</th>
                      <th className='table-head-background'>Student Name</th>
                      <th className='table-head-background'>Subject Name</th>
                      <th className='table-head-background'>Max {activeTab === 'theory' ? 'Theory' : 'Practical'} Marks</th>
                      <th className='table-head-background'>{activeTab === 'theory' ? 'Theory' : 'Practical'} Marks</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredStudents.map((student, index) => (
                      <tr key={student.rollNumber}>
                        <td>{student.rollNumber}</td>
                        <td>{student.name}</td>
                        <td>{student.subject}</td>
                        <td>{activeTab === 'theory' ? student.maxTheoryMarks : student.maxPracticalMarks}</td>
                        <td>
                          <input
                            type="number"
                            value={activeTab === 'theory' ? student.theoryMarks : student.practicalMarks}
                            onChange={(e) => handleMarksChange(index, activeTab === 'theory' ? 'theoryMarks' : 'practicalMarks', e.target.value)}
                            min="0"
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className='text-right'>
                <button className="btn btn-light-background  mt-3" onClick={saveMarks}>
                  Submit Marks
                </button>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </LayoutWrapper>
  );
};

export default EnterMarks;
