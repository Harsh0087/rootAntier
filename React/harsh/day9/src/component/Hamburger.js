import React, { useState } from "react";

const App = () => {
  const [sidebar, setSidebar] = useState(false);
  const toggleSidebar = () => {
    setSidebar(!sidebar);
  };
};
export default function Hamburger() {
  return (
    <>
      <div className="App">
        <button className="hamburger" onClick={toggleSidebar}>
          &#9776;
        </button>
        <div className={sidebar ? "sidebar active" : "sidebar"}>
          <button className="close-btn" onClick={toggleSidebar}>
            &times;
          </button>
        </div>
        <ul>
          <li>option1</li>
          <li>option2</li>
          <li>option3</li>
        </ul>
      </div>
      <div className="content">
        <h1>Welcome to App!</h1>
        <p>Click on Hamburger Icon.</p>
      </div>
    </>
  );
}
