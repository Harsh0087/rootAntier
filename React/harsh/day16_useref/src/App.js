import React, { useRef } from 'react';
import "./App.css";

function TextBoxFocus() {
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const focusTextBox2 = () => {
    if (inputRef2.current) {
      inputRef2.current.focus();
    }
  };
}
function App() {
  return (
    <div>
      <h2>UseRef Example</h2>
      <div>
        <label>TextBox 1: </label>
        <input type="text" ref={inputRef1} placeholder="Enter text here" />
      </div>
      <div style={{ marginTop: "10px" }}>
        <label>TextBox 2: </label>
        <input type="text" ref={inputRef2} placeholder="Enter text here" />
      </div>
      <div style={{ marginTop: "20px" }}>
        <button onClick={focusTextBox2}>Focus</button>
      </div>
    </div>
  );
}

export default App;
