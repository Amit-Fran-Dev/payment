import React, { useEffect } from "react";

const ArrivalTime = ({
  activeBox,
  activeState,
  setactiveState,
  setActiveBox,
}) => {
  const handleClick = (n) => {
    if (activeState >= n) {
      setActiveBox(n);
    } else {
      setactiveState(3);
      setActiveBox(n);
    }
  };

  return (
    <div className="container-xs">
      <h3>Arrival Time Page</h3>
      <button className="cordelaBtn" onClick={() => handleClick(3)}>
        Next
      </button>
    </div>
  );
};

export default ArrivalTime;
