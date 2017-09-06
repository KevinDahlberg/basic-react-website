import React from 'react'

export const AboutText = ({title, paragraphOne, paragraphTwo}) => {
  return (
    <div className="about">
      <h2>{title}</h2>
      <p>{paragraphOne}</p>
      <p>{paragraphTwo}</p>
    </div>
  );
}
