// src/components/AssignmentPage.js

import React, { useState } from "react";
import "./StudentAssignmentUploadDownload.css"; // Import the CSS file for custom styling
import PortalLayoutWrapper from "../../../Component/LayoutWrapper/PortalLayoutWrapper";

const StudentAssignmentUploadDownload = () => {
  const [file, setFile] = useState(null);
  const [assignments, setAssignments] = useState([]);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (file) {
      const newAssignment = {
        name: file.name,
        url: URL.createObjectURL(file), // Simulating a URL for demo purposes
      };
      setAssignments([...assignments, newAssignment]);
      setFile(null);
    }
  };

  return (
    <PortalLayoutWrapper>
      <div className="assignment-page">
        <div className="upload-section">
          <h5>Upload Assignment</h5>
          <input type="file" onChange={handleFileChange} />
          <button onClick={handleUpload}>Upload</button>
        </div>
        <div className="download-section">
          <h5>Download Assignments</h5>
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead className="thead-dark">
                <tr>
                  <th className="table-head-background">Assignment Name</th>
                  <th className="table-head-background">Download</th>
                </tr>
              </thead>
              <tbody>
                {assignments.map((assignment, index) => (
                  <tr key={index}>
                    <td>{assignment.name}</td>
                    <td>
                      <a href={assignment.url} download={assignment.name}>
                        Download
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </PortalLayoutWrapper>
  );
};

export default StudentAssignmentUploadDownload;
