import React, { useState } from 'react';
import LayoutWrapper from '../../../../Component/LayoutWrapper/PortalLayoutWrapper.js';

const MarkAttendance = () => {
  const [attendanceData, setAttendanceData] = useState([]);
  const [filters, setFilters] = useState({
    date: '',
    course: '',
    semYear: '',
    subject: ''
  });

  const handleChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };


  const handleAttendanceChange = (index) => {
    const updatedData = [...attendanceData];
    updatedData[index].attendance = !updatedData[index].attendance;
    setAttendanceData(updatedData);
  };

  const handleMarkAll = () => {
    const updatedData = attendanceData.map((data) => ({
      ...data,
      attendance: true,
    }));
    setAttendanceData(updatedData);
  };

  const handleSubmit = () => {
    // Logic to submit attendance data
    console.log('Attendance submitted:', attendanceData);
    alert('Attendance submitted successfully');
  };

  return (
    <LayoutWrapper>
      <div className="main-content bg-lighter">
        <section className="content-section">
          <div className="single-service w-100">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h5 className="text-left">Mark Attendance</h5>
            </div>

            <div className="row mb-3">
              <div className="col-md-3">
                <label>Select Date</label>
                <input 
                  type="date" 
                  name="date" 
                  className="form-control" 
                  value={filters.date} 
                  onChange={handleChange} 
                />
              </div>
              {/* <div className="col-md-3">
                <label>Select Course</label>
                <select 
                  name="course" 
                  className="form-control" 
                  value={filters.course} 
                  onChange={handleChange}
                >
                  <option value="" disabled>Select Course</option>
                  <option value="CS">Computer Science</option>
                  <option value="Math">Mathematics</option>
                
                </select>
              </div>

              <div className="col-md-3">
                <label>Select Sem/Year</label>
                <select 
                  name="semYear" 
                  className="form-control" 
                  value={filters.semYear} 
                  onChange={handleChange}
                >
                  <option value="" disabled>Select Sem/Year</option>
                  <option value="1st Year">1st Year</option>
                  <option value="2nd Year">2nd Year</option>
                
                </select>
              </div>
              <div className="col-md-3">
                <label>Select Subject</label>
                <select 
                  name="subject" 
                  className="form-control" 
                  value={filters.subject} 
                  onChange={handleChange}
                >
                  <option value="" disabled>Select Subject</option>
                  <option value="CS101">CS101</option>
                  <option value="Math101">Math101</option>
                </select>
              </div>
              <div className="col-md-3 text-left mt-5">
            <button 
              className="btn btn-light-background mb-3" 
              onClick={fetchAttendanceData}
            >
              Fetch Details
            </button>
          
            </div> */}
            </div>
          

            {attendanceData.length > 0 && (
              <div className="table-responsive col-md-12">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th className='table-head-background'>Roll Number</th>
                      <th className='table-head-background'>Student Name</th>
                      <th className='table-head-background'>Subject Code</th>
                      <th className='table-head-background'>Course Code</th>
                      <th className='table-head-background'>Sem/Year</th>
                      <th className='table-head-background'>Attendance Date</th>
                      <th className='table-head-background'>
                        <span 
                          className="btn-link text-white" 
                          onClick={handleMarkAll}
                        >
                          Mark All
                        </span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {attendanceData.map((data, index) => (
                      <tr key={index}>
                        <td>{data.rollNumber}</td>
                        <td>{data.studentName}</td>
                        <td>{data.subjectCode}</td>
                        <td>{data.courseCode}</td>
                        <td>{data.semYear}</td>
                        <td>{data.attendanceDate}</td>
                        <td>
                          <input 
                            type="checkbox" 
                            checked={data.attendance} 
                            onChange={() => handleAttendanceChange(index)} 
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {attendanceData.length > 0 && (
              <div className="text-right">
                <button 
                  className="btn btn-success" 
                  onClick={handleSubmit}
                >
                  Submit Attendance
                </button>
              </div>
            )}
          </div>
        </section>
      </div>
    </LayoutWrapper>
  );
};

export default MarkAttendance;
