import React, { useState, useEffect } from 'react';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const PDFViewer = () => {
  const pdfFiles = [
    '/ums-frontend/PDFS/frmCourseSyllabus.aspx',
    '/ums-frontend/PDFS/bill.pdf',
    '/ums-frontend/PDFS/frmCourseSyllabus.aspx',
  ];

  const metadata = [
    { studentName: 'John Doe', rollNo: '123456', course: 'Computer Science', subject: 'Algorithms', questions: 5 },
    { studentName: 'Jane Smith', rollNo: '654321', course: 'Mechanical Engineering', subject: 'Thermodynamics', questions: 8 },
    { studentName: 'Alice Johnson', rollNo: '789012', course: 'Electrical Engineering', subject: 'Circuits', questions: 10 },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [marks, setMarks] = useState(Array(metadata[currentIndex].questions).fill(''));
  const [showModal, setShowModal] = useState(false);

  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  useEffect(() => {
    setIsReady(true);
    setMarks(Array(metadata[currentIndex].questions).fill(''));
  }, [currentIndex]);

  const handleNext = () => {
    if (currentIndex < pdfFiles.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setIsReady(false);
      setTimeout(() => setIsReady(true), 100);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setIsReady(false);
      setTimeout(() => setIsReady(true), 100);
    }
  };

  const handleMarksChange = (index, value) => {
    const newMarks = [...marks];
    newMarks[index] = value;
    setMarks(newMarks);
  };

  const toggleModal = () => setShowModal(!showModal);

  return (
    <div className='container-fluid p-3'>
      <div className="row">
        <div className="col-12 col-md-3 order-md-2 order-1">
          <div className="metadata-container p-2 bg-light rounded mb-3 text-center">
            <div className="d-flex justify-content-between">
              <p className="mb-1 mr-5" ><strong>Roll No:</strong></p>
              <p className="mb-1" onClick={toggleModal} style={{ cursor: 'pointer', textDecoration: 'underline', color: 'blue' }}>{metadata[currentIndex].rollNo}</p>
            </div>
            {showModal && (
              <table className="table table-sm table-borderless mb-0">
                <tbody>
                  <tr>
                    <th scope="row" style={{ width: '50%' }}>Name:</th>
                    <td>{metadata[currentIndex].studentName}</td>
                  </tr>
                  <tr>
                    <th scope="row">Roll No:</th>
                    <td>{metadata[currentIndex].rollNo}</td>
                  </tr>
                  <tr>
                    <th scope="row">Course:</th>
                    <td>{metadata[currentIndex].course}</td>
                  </tr>
                  <tr>
                    <th scope="row">Subject:</th>
                    <td>{metadata[currentIndex].subject}</td>
                  </tr>
                  <tr>
                    <th scope="row">Questions:</th>
                    <td>{metadata[currentIndex].questions}</td>
                  </tr>
                </tbody>
              </table>
            )}
          </div>

          <div className="marks-container p-3 bg-light rounded mb-3">
            <h5 className="text-center mb-3">Enter Marks</h5>
            <div className="row">
              {marks.map((mark, index) => (
                <div key={index} className="col-xs-3 mb-2">
                  <label>Q{index + 1}:</label>
                  <input
                    type="number"
                    className="form-control"
                    value={mark}
                    onChange={(e) => handleMarksChange(index, e.target.value)}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="d-flex justify-content-between mt-10 mb-10">
            <button
              className="btn btn-dark-background mr-5"
              onClick={handlePrevious}
              disabled={currentIndex === 0}
            >
              Previous
            </button>
            <button
              className="btn btn-dark-background mr-5"
              onClick={handleNext}
              disabled={currentIndex === pdfFiles.length - 1}
            >
              Next
            </button>
            <button
              className="btn btn-primary"
            >
              Submit
            </button>
          </div>
        </div>
        <div className="col-12 col-md-9 order-md-1 order-2 mb-3 pr-0 pl-0">
          <div style={{ height: '680px', border: '1px ridge', borderRadius: '5px', overflow: 'hidden' }}>
            {isReady && (
              <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
                <Viewer
                  fileUrl={pdfFiles[currentIndex]}
                  plugins={[defaultLayoutPluginInstance]}
                />
              </Worker>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PDFViewer;
