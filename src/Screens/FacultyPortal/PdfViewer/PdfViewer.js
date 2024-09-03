import React, { useState, useEffect } from 'react';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const PDFViewer = () => {
  const pdfFiles = [
    '/PDFS/frmCourseSyllabus.aspx',
    '/PDFS/bill.pdf',
    '/PDFS/frmCourseSyllabus.aspx',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isReady, setIsReady] = useState(false);

  // Initialize the default layout plugin
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const defaultZoomLevel = 1.5;

  useEffect(() => {
    // Simulate a delay or ensure all necessary setup is complete
    setIsReady(true);
  }, []);

  const handleNext = () => {
    if (currentIndex < pdfFiles.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setIsReady(false); // Temporarily set isReady to false to trigger re-render
      setTimeout(() => setIsReady(true), 100); // Re-enable after a brief delay
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
    <div>
      <div style={{ height: '680px', border: '1px solid #000' }}>
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
  );
};

export default PDFViewer;
