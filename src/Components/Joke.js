import React from "react";
function Joke(props) {
  return (
    <div className="Jokes">
      <h2
        className="question"
        style={{ color: !props.joke.answer && "#FF00FF" }}
      >
        Joke: {props.joke.question}
      </h2>
      <h2
        className="answer"
        style={{ display: props.joke.answer ? "block" : "none" }}
      >
        The answer is : {props.joke.answer}
      </h2>
      <hr />
    </div>
  );
}

export default Joke;
