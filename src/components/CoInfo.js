import React from 'react';

const CoInfo = ({ chart, list }) => {
  return (
    <div className="CoInfo">
      <div className="inner">
        <div className="Chart">{chart}</div>
        <div className="List">{list}</div>
      </div>
    </div>
  );
};

export default CoInfo;
