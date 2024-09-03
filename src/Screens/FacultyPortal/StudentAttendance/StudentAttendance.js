import React, { useState, useEffect } from "react";
import PortalLayoutWrapper from "../../../Component/LayoutWrapper/PortalLayoutWrapper";

const StudentAttendance = () => {
  const [attendanceData, setAttendanceData] = useState([]);
  const [selectedSection, setSelectedSection] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");

  const sections = ["Section A", "Section B", "Section C"]; // Replace with actual sections
  const courses = ["Mathematics", "Physics", "Chemistry"]; // Replace with actual courses

  useEffect(() => {
    // Fetch attendance data for the selected section and course
    const fetchAttendanceData = async () => {
      // Replace with your data fetching logic
      const data = [
        { studentName: "John Doe", course: "Mathematics", date: "2024-08-09", status: "Present" },
        { studentName: "Jane Smith", course: "Physics", date: "2024-08-09", status: "Absent" },
        // More data...
      ];
      setAttendanceData(data);
    };

    if (selectedSection && selectedCourse) {
      fetchAttendanceData();
    }
  }, [selectedSection, selectedCourse]);

  const handleAttendanceChange = (index, status) => {
    const updatedAttendanceData = [...attendanceData];
    updatedAttendanceData[index].status = status;
    setAttendanceData(updatedAttendanceData);
  };

  const handleSaveAttendance = () => {
    // Implement the logic to save the attendance data
    console.log("Attendance saved", attendanceData);
  };

  return (
    <PortalLayoutWrapper>
      <section className="content-section">
        <h5>Student Attendance</h5>

        {/* Section and Course Selection */}
        <div className="form-group">
          <label htmlFor="section">Select Section:</label>
          <select
            id="section"
            className="form-control"
            value={selectedSection}
            onChange={(e) => setSelectedSection(e.target.value)}
          >
            <option value="">-- Select Section --</option>
            {sections.map((section, index) => (
              <option key={index} value={section}>
                {section}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="course">Select Course:</label>
          <select
            id="course"
            className="form-control"
            value={selectedCourse}
            onChange={(e) => setSelectedCourse(e.target.value)}
          >
            <option value="">-- Select Course --</option>
            {courses.map((course, index) => (
              <option key={index} value={course}>
                {course}
              </option>
            ))}
          </select>
        </div>

        {/* Attendance Table */}
        {selectedSection && selectedCourse && (
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Student Name</th>
                <th>Course</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {attendanceData.map((record, index) => (
                <tr
                  key={index}
                  className={record.status === "Present" ? "table-success" : "table-danger"}
                >
                  <td>{record.studentName}</td>
                  <td>{record.course}</td>
                  <td>{record.date}</td>
                  <td>
                    <select
                      value={record.status}
                      onChange={(e) =>
                        handleAttendanceChange(index, e.target.value)
                      }
                    >
                      <option value="Present">Present</option>
                      <option value="Absent">Absent</option>
                      <option value="Late">Late</option>
                      <option value="Excused">Excused</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {/* Save Attendance Button */}
        {selectedSection && selectedCourse && (
          <button className="btn btn-primary" onClick={handleSaveAttendance}>
            Save Attendance
          </button>
        )}
      </section>
    </PortalLayoutWrapper>
  );
};

export default StudentAttendance;
