import React, { useState } from 'react';
import { Bot } from 'lucide-react';
import "./CSS/Ai.css";

const Aimodel = () => {
  const [aiVisible, setAiVisible] = useState(false);
  const [aiMessage, setAiMessage] = useState("");

  // Function to handle AI icon click
  const handleAiClick = () => {
    if (aiVisible) {
      setAiVisible(false);
      setAiMessage("");
    } else {
      setAiVisible(true);
      setAiMessage("1111111111111111");
    }

    // 📌 هنا مكان الـ API لو حبيت تربطه
    /*
    try {
      const response = await fetch("YOUR_API_ENDPOINT", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: "your data" }),
      });
      const data = await response.json();
      setAiMessage(data.message);
    } catch (error) {
      setAiMessage("Something went wrong.");
    }
    */
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log("Selected file:", file);
    }
  };

  return (
    <div className='body'>

      {/* AI icon */}
      <div className="ai-icon-wrapper">
        <button className="ai-icon" onClick={handleAiClick}>
          <Bot size={18} />
        </button>
        {aiVisible && <p className="ai-message">{aiMessage}</p>}
      </div>

      <div className="overlay">
        <h1>Search for an outfit by taking a photo or uploading an image</h1>
        
        <input 
          type="file" 
          accept="image/*" 
          capture="environment" 
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
};

export default Aimodel;
