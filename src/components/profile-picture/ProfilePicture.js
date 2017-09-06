import React from 'react'

export const ProfilePicture = ({url, alt}) => {
  return (
    <div className="profile-pic">
      <img
      className="pic"
      src={url}
      alt={alt}
      />
    </div>
  );
}
