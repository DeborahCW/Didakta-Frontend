export const showQuizTitle = (quiz) => {
  if (quiz.title) {
    return <h1 className="quizTitle">Quiz: {quiz.title}</h1>;
  }
};

export const showQuizText = (quiz) => {
  if (quiz.text) {
    quiz.text.map((paragraph) => {
      return <p className="quizText">{paragraph}</p>;
    });
  }
};

export const showQuestionTitle = (question) => {
  if (question.title) {
    return <h2 className="questionTitle">{question.title}</h2>;
  }
};

export const showQuestionTable = (question) => {
  if (question.table) {
    return (
      <table className="questionTable">
        {question.table.map((row) => {
          return (
            <tr>
              {row.map((e) => {
                return <td>{e}</td>;
              })}
            </tr>
          );
        })}
      </table>
    );
  }
};

export const showQuestionAlignment = (question) => {
  if (question.alignment) {
    return (
      <div className="alignmentContainer">
        <iframe
          className="alignment"
          frameBorder="0"
          seamless="seamless"
          allowtransparency="true"
          src={question.alignment}
          title="Ugarit | iAligner"
          scrolling="no"
        ></iframe>
      </div>
    );
  }
};
