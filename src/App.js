import React from "react";
import Joke from "./Components/Joke";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Joke
        joke={{
          question: "Why did Adele cross the road?",
          answer: "To say hello from the other side",
        }}
      />
      <Joke
        joke={{
          question: "What kind of concert only costs 45 cents?",
          answer: "A 50 Cent concert featuring Nickelback.",
        }}
      />
      <Joke
        joke={{
          question: "Can February March?",
          answer: "No, but April May.",
        }}
      />
      <Joke
        joke={{
          question: "Why was Dumbo sad?",
          answer: "He felt irrelephant.",
        }}
      />
      <Joke
        joke={{
          question: "Need an ark to save two of every animal?",
          answer: "I noah guy",
        }}
      />
      <Joke
        joke={{
          question:
            " I don’t trust stairs because they’re always up to something.",
        }}
      />
    </div>
  );
}

export default App;
