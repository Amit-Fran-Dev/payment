import React, { useEffect } from "react";

const TravelInfo = ({ active, activeState, setactiveState, setActiveBox }) => {
  const handleClick = (n) => {
    if (activeState >= n) {
      setActiveBox(n);
    } else {
      setactiveState(2);
      setActiveBox(n);
    }
  };

  return (
    <div className="container-xs">
      <h3 className="text-lg">Travel Info</h3>

      <button className="cordelaBtn" onClick={() => handleClick(2)}>
        Next
      </button>
    </div>
  );
};

export default TravelInfo;
