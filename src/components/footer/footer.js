import React from 'react'

export default const Footer (props) => {
  return (
    <div className="footer">
      <div className="footer-text">
        {props.text}
      </div>
    </div>
  );
}
