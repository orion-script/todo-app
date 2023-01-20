import React, { useState, useEffect } from "react";

const TimeOut = () => {
  let prevTime = new Date().toLocaleTimeString();
  const [time, setTime] = useState(prevTime);

  useEffect(() => {
    setInterval(() => {
      setTime(() => new Date().toLocaleTimeString());
    }, 1000);
  }, []);

  return (
    <div className="border-solid border-2 border-sky-200 dark:border-sky-500 rounded-lg h-8 text-center w-2/6 md:w-1/12 m-auto text-gray-800 dark:text-slate-100 mt-10 md:mt-0 ">
      <h1>{time}</h1>
    </div>
  );
};

export default TimeOut;
