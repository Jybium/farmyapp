import React from 'react';

const DateTimeDisplay = ({ value, type, isDanger }) => {
  return (
    <div className={'countdown'}>
      <span>{value}</span>
      <span>    </span>
      <span>{type}</span>
    </div>
  );
};

export default DateTimeDisplay;
