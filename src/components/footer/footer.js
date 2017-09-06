import React from 'react'

export const Footer = ({footerText}) => {
  return (
    <div className="footer">
      <div className="footer-text">
        {footerText}
      </div>
    </div>
  );
}
