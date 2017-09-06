import React from 'react'

export const AboutText = ({paragraphOne, paragraphTwo}) => {
  return (
    <div className="about">
      <p>{paragraphOne}</p>
      <p>{paragraphTwo}</p>
    </div>
  );
}
