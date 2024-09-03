import React, { useRef, useCallback, useState } from 'react';
import Webcam from 'react-webcam';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: 'user',
};

const Scanner = () => {
  const webcamRef = useRef(null);
  const [images, setImages] = useState([]);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImages((prevImages) => [...prevImages, imageSrc]);
  }, [webcamRef]);

  const generatePDF = async () => {
    const pdf = new jsPDF('p', 'mm', 'a4');
    for (let i = 0; i < images.length; i++) {
      const imgData = images[i];
      const imgWidth = 210; // A4 width in mm
      const imgHeight = (210 / 1280) * 720; // Maintain image aspect ratio

      if (i !== 0) pdf.addPage();
      pdf.addImage(imgData, 'JPEG', 0, 0, imgWidth, imgHeight);
    }
    pdf.save('scanned.pdf');
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center' }}>A4 Document Scanner</h1>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          videoConstraints={videoConstraints}
          style={{ width: '100%', maxWidth: '600px', borderRadius: '10px', border: '2px solid #ccc' }}
        />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button 
          onClick={capture} 
          style={{ padding: '10px 20px', fontSize: '16px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
        >
          Capture Photo
        </button>
      </div>

      <div style={{ marginTop: '30px', textAlign: 'center' }}>
        <h2>Captured Images</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px' }}>
          {images.map((src, index) => (
            <img 
              key={index} 
              src={src} 
              alt={`Captured image ${index + 1}`} 
              style={{ width: '150px', height: 'auto', borderRadius: '10px', border: '2px solid #ccc' }} 
            />
          ))}
        </div>
      </div>

      {images.length > 0 && (
        <div style={{ marginTop: '30px', textAlign: 'center' }}>
          <button 
            onClick={generatePDF} 
            style={{ padding: '10px 20px', fontSize: '16px', backgroundColor: '#28a745', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
          >
            Generate PDF & Download
          </button>
        </div>
      )}
    </div>
  );
};

export default Scanner;
