import React from 'react'
import "./Globe.css"
const Globe: React.FC = () => {
  return (
    <div className="section-banner mt-24">
      {[...Array(7)].map((_, index) => (
        <div key={index} className={`star-${index + 1}`}>
          <div className="curved-corner-star">
            <div className="curved-corner-bottomright" />
            <div className="curved-corner-bottomleft" />
          </div>
          <div className="curved-corner-star">
            <div className="curved-corner-topright" />
            <div className="curved-corner-topleft" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Globe;
