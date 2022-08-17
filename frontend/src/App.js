import React, { useState } from "react";

import "./App.css";
import { CodeLink } from "./components/CodeLink";
import TextForm from "./components/TextForm";
import { WordCount } from "./components/WordCount";

export default function App() {
  const [word_count, setwordCount] = useState();

  const onNewCount = async () => {
    const res = await fetch("/texts/1");
    const json = await res.json();
    setwordCount(json.word_count);
  };

  return (
    <div className="App">
      <h1> WORD COUNTER </h1>
      <TextForm onNewCount={onNewCount} />
      {!word_count && <p> Text input is required!</p>}
      {word_count && <WordCount word_count={word_count} />}
      <CodeLink />
    </div>
  );
}
