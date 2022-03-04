import { useState, useContext, useEffect } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { ApiContext } from "../Context";

import {
  showQuestionTitle,
  showQuestionTable,
  showQuestionAlignment,
} from "../functions/quizFunctions";

const Quiz = () => {
  const [correction, setCorrection] = useState("");
  const [goButton, setGoButton] = useState(true);
  const [hintToggle, setHintToggle] = useState(false);
  const [showNext, setShowNext] = useState(false);
  const [showFinish, setShowFinish] = useState(false);

  const { lessonId, questionId } = useParams();
  const [lessons, setLessons] = useContext(ApiContext);
  const navigate = useNavigate();
  const location = useLocation();

  const thisLesson = lessons.__html.filter(
    (lesson) => lesson._id === lessonId
  )[0];
  const thisQuiz = thisLesson.quiz;
  const thisQuestion = thisQuiz.questions.filter(
    (question) => question._id == questionId
  )[0];

  const [selectedAnswer, setSelectedAnswer] = useState(
    thisQuiz.questions[0] && thisQuiz.questions[0].answers[0]
  );
  const [selectedAnswer_1, setSelectedAnswer_1] = useState(
    thisQuiz.questions[0] && thisQuiz.questions[0].answers_1[0]
  );

  console.log(thisQuestion);
  console.log(thisQuiz.questions);
  useEffect(() => {
    setCorrection("");
    setGoButton(true);
  }, [location]);

  const handleNext = () => {
    let thisQuestionIndex = thisQuiz.questions.findIndex(
      (question) => question._id == questionId
    );
    let nextQuestionIndex = thisQuestionIndex + 1;
    console.log(nextQuestionIndex);
    navigate(`/quiz/${lessonId}/${thisQuiz.questions[nextQuestionIndex]._id}`);
  };

  const showQuestion = (question) => {
    if (question.tags == "dropDown") {
      if (question.answers_1[0]) {
        return (
          <div>
            <form
              onSubmit={(event) => {
                event.preventDefault();
                if (
                  question.answers[question.correctAnswer] == selectedAnswer &&
                  question.answers_1[question.correctAnswer_1] ==
                    selectedAnswer_1
                ) {
                  setCorrection("Correct!");
                  setGoButton(false);
                  setShowNext(true);
                } else {
                  setCorrection("Incorrect!");
                  setGoButton(false);
                  setShowNext(true);
                }
              }}
            >
              <select
                id="questionDropDown"
                name="questionDropDown"
                onChange={(e) => setSelectedAnswer(e.target.value)}
              >
                {question.answers.map((answer) => {
                  return <option value={answer}>{answer}</option>;
                })}
              </select>
              <select
                id="questionDropDown_1"
                name="questionDropDown_1"
                onChange={(e) => setSelectedAnswer_1(e.target.value)}
              >
                {question.answers_1.map((answer_1) => {
                  return <option value={answer_1}>{answer_1}</option>;
                })}
              </select>
              <input
                style={
                  goButton ? { display: "inline-block" } : { display: "none" }
                }
                id="submitButton"
                type="submit"
                value="Go!"
              />
            </form>
            {question.hint && (
              <button
                onClick={(e) => {
                  setHintToggle(hintToggle ? false : true);
                }}
              >
                Hint
              </button>
            )}
            <div id="hint">{hintToggle ? question.hint : ""}</div>
            <div id="correction">{correction}</div>
            <div
              id="answerExplanation"
              style={
                correction == "Incorrect!"
                  ? { display: "block" }
                  : { display: "none" }
              }
            >
              {question.explanation}
            </div>
          </div>
        );
      } else {
        // if tags === "dropDown" && !answers_1
        return (
          <div>
            <form
              onSubmit={(event) => {
                event.preventDefault();
                if (
                  question.answers[question.correctAnswer] == selectedAnswer
                ) {
                  setCorrection("Correct!");
                  setGoButton(false);
                } else {
                  setCorrection("Incorrect!");
                  setGoButton(false);
                }
              }}
            >
              <select id="questionDropDown" name="questionDropDown">
                {question.answers.map((answer) => {
                  return <option value={answer}>{answer}</option>;
                })}
              </select>
              <input
                style={
                  goButton ? { display: "inline-block" } : { display: "none" }
                }
                id="submitButton"
                type="submit"
                value="Go!"
              />
            </form>
            {question.hint && (
              <button
                onClick={(e) => {
                  setHintToggle(hintToggle ? false : true);
                }}
              >
                Hint
              </button>
            )}
            <div id="hint">{hintToggle ? question.hint : ""}</div>
            <div id="correction">{correction}</div>
            <div
              id="answerExplanation"
              style={
                correction == "Incorrect!"
                  ? { display: "block" }
                  : { display: "none" }
              }
            >
              {question.explanation}
            </div>
          </div>
        );
      }
    } else if (question.tags == "multipleChoice") {
      // if tags === "multipleChoice"
      return (
        <div>
          <form>
            {question.answers.map((answer) => {
              return (
                <label>
                  {answer}
                  <input
                    type="radio"
                    id={answer}
                    className="multipleChoice"
                    name={question.tags[0]}
                    value={answer}
                    onChange={(e) => setSelectedAnswer(e.target.value)}
                  />
                </label>
              );
            })}
            <input
              style={
                goButton ? { display: "inline-block" } : { display: "none" }
              }
              id="submitButton"
              type="submit"
              value="Go!"
            />
          </form>
          {question.hint && (
            <button
              onClick={(e) => {
                e.preventDefault();
                setHintToggle(hintToggle ? false : true);
              }}
            >
              Hint
            </button>
          )}
          <div id="hint">{hintToggle ? question.hint : ""}</div>
          <div id="correction">{correction}</div>
          <div
            id="answerExplanation"
            style={
              correction == "Incorrect!"
                ? { display: "block" }
                : { display: "none" }
            }
          >
            {question.explanation}
          </div>
        </div>
      );
    }
  };

  return (
    <div>
      {showQuestionTitle(thisQuestion)}

      {/* SHOW QUESTION TEXT */}
      {thisQuestion.text[0] &&
        thisQuestion.text.map((paragraph) => {
          return <p className="questionText">{paragraph}</p>;
        })}
      {showQuestionTable(thisQuestion)}

      {thisQuestion.text_1[0] &&
        thisQuestion.text_1.map((paragraph) => {
          return <p className="questionText">{paragraph}</p>;
        })}

      {showQuestion(thisQuestion)}
      {showQuestionAlignment(thisQuestion)}

      {/* NEXT BUTTON  */}
      <button
        style={showNext ? { display: "inline" } : { display: "none" }}
        onClick={handleNext}
      >
        Next
      </button>
      {/* <button
        style={showGoQuiz ? { display: "inline" } : { display: "none" }}
        onClick={handleGoQuiz}
      >
        Check your knowledge with a quiz
      </button> */}
    </div>
  );
};

export default Quiz;
