import React from 'react'

export default const Header (props) => {
  return (
    <div className="header">
      <h1>{props.name}</h1>
    </div>
  );
}
