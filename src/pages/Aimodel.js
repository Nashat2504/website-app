import React from 'react';
import "./CSS/Ai.css";

const Aimodel = () => {
  // Function to handle file input change
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Handle the uploaded image (e.g., display it, upload it, etc.)
      console.log("Selected file:", file);
    }
  };

  return (
    <div className='body'>
      <div className="overlay">
        <h1>Search for an outfit by taking a photo or uploading an image</h1>
        
        {/* Hidden input for taking a photo */}
        <input 
          type="file" 
          accept="image/*" 
          capture="environment" // Use "environment" for back camera, "user" for front camera
          id="take-photo" 
          style={{ display: 'none' }} 
          onChange={handleFileChange} 
        />
        <button 
          className="take-photo" 
          onClick={() => document.getElementById('take-photo').click()}
        >
          Take a Photo
        </button>
        
        {/* Hidden input for uploading an image */}
        <input 
          type="file" 
          accept="image/*" 
          id="upload-image" 
          style={{ display: 'none' }} 
          onChange={handleFileChange} 
        />
        
        <button 
          className="upload-image" 
          onClick={() => document.getElementById('upload-image').click()}
        >
          Upload an Image
        </button>
      </div>
    </div>
  );
}

export default Aimodel;