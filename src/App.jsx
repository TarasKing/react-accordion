import { useState } from "react";
import data from "./data";
import Questions from "./Questions";

function App() {
  const [questions, setQuestions] = useState(data);

  return (
    <main>
      <h2>Accordion Starter</h2>
      <Questions questions={questions} />
    </main>
  );
}

export default App;
