import "./App.css";
import React, { useState } from "react";

export default function App() {
  const [tipedInText, setTipedInText] = useState([]);
  const [textArray, setTextArray] = useState([]);

  function textHandler() {
    setTextArray((prevList) => [...prevList, tipedInText]);
    setTipedInText("");
  }

  return (
    <div className="App">
      <header className="App-header">
        <input
          type="text"
          placeholder="Put some text here"
          value={tipedInText}
          onChange={(e) => setTipedInText(e.target.value)}
        />
        <button onClick={textHandler}>Submit</button>
        <div>{textArray}</div>
      </header>
    </div>
  );
}
