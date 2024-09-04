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

  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const defaultZoomLevel = 1.5;

  useEffect(() => {
    setIsReady(true);
  }, []);

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

  return (
    <div className='container-fluid d-flex ml-0 mr-0 pl-0 pr-0' >
      <div className="col-12 col-md-9 ml-0 mr-0 pl-0 pr-0" style={{marginRight: '20px' }}>
        <div style={{ height: '680px', border: '1px ridge' }}>
          {isReady && (
            <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
              <Viewer
                fileUrl={pdfFiles[currentIndex]}
                plugins={[defaultLayoutPluginInstance]}
                defaultScale={defaultZoomLevel}
              />
            </Worker>
          )}
        </div>
        <div style={{ marginTop: '10px', marginBottom: '10px', textAlign: 'center' }}>
          <button
            className="btn-dark-background"
            onClick={handlePrevious}
            disabled={currentIndex === 0}
          >
            Previous
          </button>
          <span style={{ margin: '0 20px' }}>{`PDF ${currentIndex + 1} of ${pdfFiles.length}`}</span>
          <button
            className="btn-dark-background"
            onClick={handleNext}
            disabled={currentIndex === pdfFiles.length - 1}
          >
            Next
          </button>
        </div>
      </div>
      <div  className="col-12 col-md-3">
        <h3>Metadata</h3>
        <p><strong>Student Name:</strong> {metadata[currentIndex].studentName}</p>
        <p><strong>Roll No:</strong> {metadata[currentIndex].rollNo}</p>
        <p><strong>Course:</strong> {metadata[currentIndex].course}</p>
        <p><strong>Subject:</strong> {metadata[currentIndex].subject}</p>
        <p><strong>No. of Questions:</strong> {metadata[currentIndex].questions}</p>
      </div>
    </div>
  );
};

export default PDFViewer;
