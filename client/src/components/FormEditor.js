// FormEditor.js

import React, { useState } from "react";
import QuestionTypeCategorize from "./QuestionTypeCategorize";
import QuestionTypeCloze from "./QuestionTypeCloze";
import QuestionTypeComprehension from "./QuestionTypeComprehension";

function FormEditor({ onAddQuestion }) {
  const [questionType, setQuestionType] = useState("");

  const handleAddQuestion = (question) => {
    onAddQuestion(question);
  };

  return (
    <div>
      <button onClick={() => setQuestionType("categorize")}>
        Add Categorize Question
      </button>
      <button onClick={() => setQuestionType("cloze")}>
        Add Cloze Question
      </button>
      <button onClick={() => setQuestionType("comprehension")}>
        Add Comprehension Question
      </button>

      {questionType === "categorize" && (
        <QuestionTypeCategorize onAddQuestion={handleAddQuestion} />
      )}
      {questionType === "cloze" && (
        <QuestionTypeCloze onAddQuestion={handleAddQuestion} />
      )}
      {questionType === "comprehension" && (
        <QuestionTypeComprehension onAddQuestion={handleAddQuestion} />
      )}
    </div>
  );
}

export default FormEditor;
