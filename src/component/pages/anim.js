import React from 'react';
import animGif from './anim1.gif'; // Adjust the path if the GIF is in a different folder

export default function Anim() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',   // Center horizontally
        alignItems: 'center',       // Center vertically
        height: '30vh',            // Full viewport height
        zIndex:'1000',         // Padding around the image
      }}
    >
      <img 
        src={animGif} 
        alt="Animated GIF"
        style={{
          width: '400px',           // Adjust width as needed
          height: 'auto',            // Maintain aspect ratio
          borderRadius: '10px',      // Rounded corners
          padding: '1px',  
          zIndex:'1000',  
        }}
      />
    </div>
  );
}
