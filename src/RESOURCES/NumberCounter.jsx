import React, { useEffect, useState } from "react";

const Counter = ({ targetNumber, duration }) => {
  const [currentNumber, setCurrentNumber] = useState(0);

  useEffect(() => {
    const increment = targetNumber / duration;
    const interval = setInterval(() => {
      setCurrentNumber((prev) => {
        if (prev + increment >= targetNumber) {
          clearInterval(interval);
          return targetNumber;
        }
        return prev + increment;
      });
    }, 1);

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [targetNumber, duration]);

  return <div className="counter"roj>{Math.floor(currentNumber)}</div>;
};

export default Counter;
