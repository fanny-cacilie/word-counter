import React, { useState, useEffect } from "react";

import './App.css';
import { CodeLink } from "./components/CodeLink";
import TextForm from "./components/TextForm";
import { WordCount } from "./components/WordCount";

function App() {

  const [word_count, setwordCount] = useState([])

  useEffect(() => {
    fetch('/texts/1').then(response =>
      response.json().then(data=> {
        setwordCount(data.word_count);
      })
    );
  }, []);

  return (
    <div className="App">
      <h1> WORD COUNTER </h1>
      <TextForm />
      <WordCount word_count={ word_count } />
      <CodeLink />
    </div>
  );
}

export default App;
