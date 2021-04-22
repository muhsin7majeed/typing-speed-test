import React, { useState } from "react";
import "./style.css";
import { paragraph } from "./text";
import { shuffle } from "./utils";

const text = shuffle(paragraph.split(" "));

export default function App() {
  const [words, setWords] = useState(text);
  const [input, setInput] = useState("");
  const [currectWords, setCurrectWords] = useState([]);
  const [wrongWords, setWrongWords] = useState([]);

  const handleKeyUp = ({ keyCode, code, ...rest }) => {
    if (keyCode === 32) {
      if (input.trim("") == words[0]) setCurrectWords([...currectWords, input]);
      else setWrongWords([...wrongWords, input]);

      const prevWords = [...words];
      prevWords.shift();
      setWords(prevWords);

      setInput("");
    }
  };

  return (
    <div>
      <h1>Typing Speed Test</h1>

      <div>
        <span style={{ color: "green" }}>
          Currect Words: {currectWords.length}
        </span>
        <br />
        <span style={{ color: "red" }}>Wrong Words: {wrongWords.length}</span>
      </div>

      <div
        style={{
          marginTop: 10,
          marginBottom: 10,
          height: 50,
          overflow: "hidden",
          fontSize: 22
        }}
      >
        {words.map(w => w + " ")}
      </div>

      <input
        onChange={({ target }) => setInput(target.value)}
        onKeyUp={event => handleKeyUp(event)}
        style={{ width: "80%", padding: 10, margin: "10px 0" }}
        autoFocus
        value={input}
      />
    </div>
  );
}
