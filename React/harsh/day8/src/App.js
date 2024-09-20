import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [logMessages, setlogMessages] = useState([]);

  const updateLog = (message) => {
    setlogMessages((prevMessages) => [...prevMessages, message]);
  };



  // useEffect(() => {
  //   updateLog("component mounted");
  //   return () => {
  //     updateLog("compomnent will unmount");
  //   };
  // }, []);



  // useEffect(() => {
  //   updateLog("conscsc reder");
  //   return () => {
  //     updateLog("cleanssfssfdsf");
  //   };
  // });


  useEffect(() => {
    updateLog(`count changed to :${count}`);
  }, [count]);
  return (
    <>
      <p>count:{count}</p>
      <button onClick={() => setCount(count + 1)}> increase count</button>
      <h2>logMessages:</h2>
      <ul>
        {logMessages.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
    </>
  );
}

export default App;