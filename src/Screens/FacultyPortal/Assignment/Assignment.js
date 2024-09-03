import React, { useState } from "react";
import PortalLayoutWrapper from "../../../Component/LayoutWrapper/PortalLayoutWrapper";
import './Assignment.css'

const Assignment = () => {
  const [selectedSection, setSelectedSection] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");
  const [assignmentFile, setAssignmentFile] = useState(null);

  const sections = ["Section A", "Section B", "Section C"]; // Replace with actual sections
  const courses = ["Mathematics", "Physics", "Chemistry"]; // Replace with actual courses

  const handleFileChange = (event) => {
    setAssignmentFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!selectedSection || !selectedCourse || !assignmentFile) {
      alert("Please select a section, course, and file before submitting.");
      return;
    }

    // Handle the file upload and data submission
    const formData = new FormData();
    formData.append("section", selectedSection);
    formData.append("course", selectedCourse);
    formData.append("assignment", assignmentFile);

    // You would typically send this data to your server here
    console.log("Form Data Submitted:", selectedSection, selectedCourse, assignmentFile);

    // Reset the form
    setSelectedSection("");
    setSelectedCourse("");
    setAssignmentFile(null);
  };

  return (
    <PortalLayoutWrapper>
      <section className="content-section">
        <h5>Upload Assignment</h5>
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

          {/* File Upload */}
          <div className="form-group">
            <label htmlFor="assignment">Upload Assignment:</label>
            <input
              type="file"
              id="assignment"
              className="form-control"
              onChange={handleFileChange}
            />
          </div>

          {/* Submit Button */}
          <div className="center-content">
          <button className="btn btn-primary " onClick={handleSubmit}>
            Submit Assignment
          </button>
          </div>
      </section>
    </PortalLayoutWrapper>
  );
};

export default Assignment;
