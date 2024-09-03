import React, { useRef, useCallback, useState } from 'react';
import Webcam from 'react-webcam';
import jsPDF from 'jspdf';

const Scanner = () => {
  const webcamRef = useRef(null);
  const [images, setImages] = useState([]);
  const [facingMode, setFacingMode] = useState('environment'); // Start with back camera

  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: facingMode, // Use the state value for facingMode
  };

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImages((prevImages) => [...prevImages, imageSrc]);
  }, [webcamRef]);

  const generatePDF = async () => {
    const pdf = new jsPDF('p', 'mm', 'a4');
    const pageWidth = 210; // A4 page width in mm
    const pageHeight = 297; // A4 page height in mm
  
    for (let i = 0; i < images.length; i++) {
      const imgData = images[i];
      const img = new Image();
      img.src = imgData;
  
      // Wait for the image to load to get the natural dimensions
      await new Promise((resolve) => {
        img.onload = () => {
          const imgWidth = img.width;
          const imgHeight = img.height;
  
          // Calculate the ratio of the image dimensions to the PDF page dimensions
          const widthRatio = pageWidth / imgWidth;
          const heightRatio = pageHeight / imgHeight;
          const bestRatio = Math.min(widthRatio, heightRatio);
  
          // Calculate new dimensions to fit the image inside the page
          const newWidth = imgWidth * bestRatio;
          const newHeight = imgHeight * bestRatio;
  
          // Center the image on the page
          const xOffset = (pageWidth - newWidth) / 2;
          const yOffset = (pageHeight - newHeight) / 2;
  
          if (i !== 0) pdf.addPage();
          pdf.addImage(imgData, 'JPEG', xOffset, yOffset, newWidth, newHeight);
          resolve();
        };
      });
    }
    pdf.save('scanned.pdf');
  };
  

  const toggleCamera = () => {
    setFacingMode((prevMode) => (prevMode === 'user' ? 'environment' : 'user'));
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
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
        <button 
          onClick={capture} 
          style={{ padding: '10px 20px', fontSize: '16px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
        >
          Capture Photo
        </button>
        <button
          onClick={toggleCamera}
          style={{ padding: '10px 20px', fontSize: '16px', backgroundColor: '#ffc107', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
        >
          Switch Camera
        </button>
      </div>

      <div style={{ marginTop: '30px', textAlign: 'center' }}>
        <h2>Captured Images</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px' }}>
          {images.map((src, index) => (
            <img 
              key={index} 
              src={src} 
              alt={`Captured ${index + 1}`} 
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
