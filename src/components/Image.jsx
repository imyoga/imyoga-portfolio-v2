import React from 'react';

const Image = (props) => {
  const imageName = props.imageName;

  return (
    <div>
      <img src={imageName} alt={`${imageName}-logo`} loading="lazy" />
    </div>
  );
};

export default Image;
