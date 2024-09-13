import React, { useState } from "react";

const DemoButton: React.FC = () => {
  const [isOn, setIsOn] = useState(false);

  const handleClick = () => {
    setIsOn(!isOn);
  };

  return <button onClick={handleClick}>{isOn ? "ON" : "OFF"}</button>;
};

export default DemoButton;
