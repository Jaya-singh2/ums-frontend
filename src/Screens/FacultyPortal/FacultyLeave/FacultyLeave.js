import React, { useState } from "react";
import PortalLayoutWrapper from "../../../Component/LayoutWrapper/PortalLayoutWrapper";

const FacultyLeave = () => {
  const [selectedSection, setSelectedSection] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  const sections = ["Section A", "Section B", "Section C"]; // Replace with actual sections
  const courses = ["Mathematics", "Physics", "Chemistry"]; // Replace with actual courses

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!selectedSection || !selectedCourse || !selectedDate) {
      alert("Please fill in all the fields before submitting.");
      return;
    }

    // Handle the leave application submission
    const leaveData = {
      section: selectedSection,
      course: selectedCourse,
      date: selectedDate,
    };

    // Typically, you would send this data to your server here
    console.log("Leave Data Submitted:", leaveData);

    // Reset the form
    setSelectedSection("");
    setSelectedCourse("");
    setSelectedDate("");
  };

  return (
    <PortalLayoutWrapper>
      <section className="content-section">
        <h5>Faculty Leave Application</h5>
          {/* Section Selection */}
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

          {/* Course Selection */}
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

          {/* Date Selection */}
          <div className="form-group">
            <label htmlFor="date">Select Date:</label>
            <input
              type="date"
              id="date"
              className="form-control"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
            />
          </div>

          {/* Submit Button */}
          <div className="center-content">
          <button  className="btn btn-primary" onClick={handleSubmit}>
            Submit Leave Application
          </button>
          </div>
      </section>
    </PortalLayoutWrapper>
  );
};

export default FacultyLeave;
