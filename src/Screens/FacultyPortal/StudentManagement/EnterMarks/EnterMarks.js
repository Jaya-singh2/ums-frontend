import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LayoutWrapper from '../../../../Component/LayoutWrapper/PortalLayoutWrapper.js';

const EnterMarks = () => {
  let Navigate = useNavigate();
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
    alert("marks successfully saved !!")
    console.log('Marks saved:', marksData);
  };

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
                className='btn-light-background'
                onClick={()=>Navigate('/faculty/view-sheet-pdfs')}
              >
                View Sheet Pdfs
              </button>
            </div>

            {marksData?.students?.length > 0 && (
              <div className="table-responsive row col-md-12">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th className='table-head-background'>Roll Number</th>
                      <th className='table-head-background'>Student Name</th>
                      <th className='table-head-background'>Subject Name</th>
                      <th className='table-head-background'>Total Theory Marks</th>
                      <th className='table-head-background'>Total Practical Marks</th>
                      <th className='table-head-background'>Theory Marks</th>
                      <th className='table-head-background'>Practical Marks</th>
                    </tr>
                  </thead>
                  <tbody>
                    {marksData?.students?.map((student, index) => (
                      <tr key={student.rollNumber}>
                        <td>{student.rollNumber}</td>
                        <td>{student.name}</td>
                        <td>{student.subject}</td>
                        <td>{student.maxTheoryMarks} </td>
                        <td>{student.maxPracticalMarks}</td>
                        <td>
                          <input
                            type="number"
                            value={student.theoryMarks}
                            onChange={(e) => handleMarksChange(index, 'theoryMarks', e.target.value)}
                            min="0"
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            value={student.practicalMarks}
                            onChange={(e) => handleMarksChange(index, 'practicalMarks', e.target.value)}
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
