import React, { useState } from "react";
import PortalLayoutWrapper from "../../../Component/LayoutWrapper/PortalLayoutWrapper";
const StudentAttendance = () => {
  const [selectedTerm, setSelectedTerm] = useState("");
  const terms = [
    { id: "2023F", name: "Fall 2023" },
    { id: "2024S", name: "Spring 2024" },
  ];

  const attendanceData = [
    {
      courseName: "CSE111 :: ORIENTATION TO COMPUTING-I",
      totalClasses: 30,
      attendedClasses: 28,
      percentage: "93.33%",
    },
    {
      courseName: "CSE326 :: INTERNET PROGRAMMING LABORATORY",
      totalClasses: 25,
      attendedClasses: 22,
      percentage: "88.00%",
    },
    {
      courseName: "INT108 :: PYTHON PROGRAMMING",
      totalClasses: 40,
      attendedClasses: 35,
      percentage: "87.50%",
    },
    {
      courseName: "MEC136 :: ENGINEERING GRAPHICS AND DIGITAL FABRICATION",
      totalClasses: 20,
      attendedClasses: 18,
      percentage: "90.00%",
    },
  ];

  const handleTermChange = (e) => {
    setSelectedTerm(e.target.value);
  };

  return (
    <PortalLayoutWrapper>
      <h5 className="text-center">Student Attendance</h5>
      <div className="form-group d-flex align-items-center">
        <label
          htmlFor="termSelect"
          className="mr-2"
          style={{ marginRight: "10px" }}
        >
          Select Term:
        </label>
        <select
          id="termSelect"
          className="form-control"
          value={selectedTerm}
          onChange={handleTermChange}
          style={{ display: "inline-block", width: "auto" }}
        >
          <option value="">Select Term</option>
          {terms.map((term) => (
            <option key={term.id} value={term.id}>
              {term.name}
            </option>
          ))}
        </select>
      </div>
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead className="thead-dark">
            <tr>
              <th className="table-head-background">Course Name</th>
              <th className="table-head-background">Total Classes</th>
              <th className="table-head-background">Attended Classes</th>
              <th className="table-head-background">Attendance Percentage</th>
            </tr>
          </thead>
          <tbody>
            {attendanceData.map((attendance, index) => (
              <tr key={index}>
                <td>{attendance.courseName}</td>
                <td>{attendance.totalClasses}</td>
                <td>{attendance.attendedClasses}</td>
                <td>{attendance.percentage}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </PortalLayoutWrapper>
  );
};

export default StudentAttendance;
