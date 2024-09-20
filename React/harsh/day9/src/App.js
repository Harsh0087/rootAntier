import "./App.css";
import React, { useState } from "react";

// import { ImAidKit } from "react-icons/im";
// import { ImAmazon } from "react-icons/im";
// import { ImAppleinc } from "react-icons/im";
// import { AiFillCamera } from "react-icons/ai";
// import { AiFillGithub } from "react-icons/ai";
// import { BiAccessibility } from "react-icons/bi";
// import { BsAirplaneEngines } from "react-icons/bs";
// import { BiAnchor } from "react-icons/bi";
// import { BsAlipay } from "react-icons/bs";
// import { GiAbstract001 } from "react-icons/gi"; 
// import { GiAngelWings } from "react-icons/gi";


function App() {
  const [sidebar, setSidebar] = useState(false);
  const toggleSidebar = () => {
    setSidebar(!sidebar);
  };
  return (
    <>
      {/* <div className="container">
        <div className="App">
          1 <ImAidKit />
          2 <ImAmazon />
          3 <ImAppleinc />
        </div>
        <div>
          4 <AiFillCamera />
          5 <AiFillGithub />
        </div>
        <div>
          6<BiAccessibility />
          7<BiAnchor />
        </div>
        <div>
          8<BsAirplaneEngines />
          9<BsAlipay />
        </div>
        <div>
          10
          <GiAbstract001 />
          11
          <GiAngelWings />
        </div>
      </div> */}

      <div className="App">
        <button className="hamburger" onClick={toggleSidebar}>
          &#9776;
        </button>
        <div className={sidebar ? "sidebar active" : "sidebar"}>
          <button className="close-btn" onClick={toggleSidebar}>
            &times;
          </button>
        <ul>
          <li>option1</li>
          <li>option2</li>
          <li>option3</li>
        </ul>
        </div>
      </div>
      <div className="content">
        <h1>Welcome to App!</h1>
        <p>Click on Hamburger Icon.</p>
      </div>
    </>
  );
}

export default App;
