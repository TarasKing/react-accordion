import React from "react";
import Question from "./Question";

const Questions = ({ questions, activeId, toggleQuestion }) => {
  return (
    <section className="info">
      <h1>Questions</h1>
      {questions.map((question) => {
        return (
          <Question
            key={question.id}
            {...question}
            activeId={activeId}
            toggleQuestion={toggleQuestion}
          />
        );
      })}
    </section>
  );
};

export default Questions;
