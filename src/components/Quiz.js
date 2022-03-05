import { useState, useContext, useEffect, useRef } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { ApiContext } from "../LessonsContext";

///////////////// IMPORTING QUIZ FUNCTIONS /////////////////
import {
  showQuestionTitle,
  showQuestionTable,
  showQuestionAlignment,
  filterThisLesson,
  filterThisQuestion,
  findNextQuestionIndex,
  handleDualDropdownSubmit,
  handleSingleDropdownSubmit,
  handleMultipleChoiceSubmit,
} from "../functions/quizFunctions";

const Quiz = () => {
  ///////////////// STATES & REFERENCES /////////////////
  const [correction, setCorrection] = useState("");
  const [goButton, setGoButton] = useState(true);
  const [hintToggle, setHintToggle] = useState(false);
  const [showNext, setShowNext] = useState(false);
  const [showFinishQuiz, setShowFinishQuiz] = useState(false);
  const score = useRef(0);
  const averageScore = useRef(0);
  const userAnswers = useRef([]);

  ///////////////// URL PARAMS & CONTEXT /////////////////
  const { lessonId, questionId } = useParams();
  const [lessons, setLessons] = useContext(ApiContext);
  const navigate = useNavigate();
  const location = useLocation();

  ///////////////// FILTERING CONTEXT FOR QUESTION RELATED DATA /////////////////
  const thisLesson = filterThisLesson(lessons, lessonId);
  const thisQuiz = thisLesson.quiz;
  const thisQuestion = filterThisQuestion(thisLesson, questionId);

  // average calculation & storage /////////////////
  averageScore.current = (score.current / thisQuiz.questions.length) * 100;
  localStorage.setItem("averageScore", averageScore.current);

  // only for when tags == "dropDown" /////////////////
  const [selectedAnswer, setSelectedAnswer] = useState(
    thisQuiz.questions[0] && thisQuiz.questions[0].answers[0]
  );
  const [selectedAnswer_1, setSelectedAnswer_1] = useState(
    thisQuiz.questions[0] && thisQuiz.questions[0].answers_1[0]
  );

  // only for when tags == "multipleChoice" /////////////////
  const [chosen, setChosen] = useState(() => {
    if (thisQuiz.questions[0] && thisQuestion.tags[0] === "multipleChoice") {
      return thisQuestion.answers[0];
    }
  });

  ///////////////// USE THE EFFECT FOR HANDLING BUTTONS ETC. /////////////////
  console.log(thisQuestion);
  useEffect(() => {
    setCorrection("");
    setGoButton(true);
    setShowNext(false);
    setShowFinishQuiz(false);
  }, [location]);
  useEffect(() => {
    const nextQuestionIndex = findNextQuestionIndex(thisLesson, questionId);
    if (!thisQuiz.questions[nextQuestionIndex] && goButton === false) {
      setShowNext(false);
      setShowFinishQuiz(true);
    } else {
      setShowFinishQuiz(false);
    }
  }, [goButton]);

  ///////////////// HANDLING NEXT BUTTON /////////////////
  const handleNext = () => {
    const nextQuestionIndex = findNextQuestionIndex(thisLesson, questionId);
    navigate(`/quiz/${lessonId}/${thisQuiz.questions[nextQuestionIndex]._id}`);
  };

  console.log(score);
  console.log(averageScore);

  ///////////////// RENDERING THE QUESTION /////////////////
  const showQuestion = (question) => {
    if (question.tags == "dropDown") {
      if (question.answers_1[0]) {
        return (
          <div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleDualDropdownSubmit(
                  question,
                  selectedAnswer,
                  selectedAnswer_1,
                  setCorrection,
                  setGoButton,
                  setShowNext,
                  score,
                  userAnswers
                );
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
                onClick={() => {
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
              onSubmit={(e) => {
                e.preventDefault();
                handleSingleDropdownSubmit(
                  question,
                  selectedAnswer,
                  setCorrection,
                  setGoButton,
                  setShowNext,
                  score,
                  userAnswers
                );
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
                correction === "Incorrect!"
                  ? { display: "block" }
                  : { display: "none" }
              }
            >
              {question.explanation}
            </div>
          </div>
        );
      }
    } else {
      // if tags === "multipleChoice"
      return (
        <div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleMultipleChoiceSubmit(
                question,
                chosen,
                setCorrection,
                setGoButton,
                setShowNext,
                score,
                userAnswers
              );
            }}
          >
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
                    onChange={(e) => setChosen(e.target.value)}
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

      {/************ SHOW QUESTION TEXT ************/}
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

      {/************ NEXT BUTTON  ************/}
      <button
        style={showNext ? { display: "inline" } : { display: "none" }}
        onClick={handleNext}
      >
        Next
      </button>

      <button
        style={showFinishQuiz ? { display: "inline" } : { display: "none" }}
        onClick={() => {
          navigate("/quiz/result");
        }}
      >
        Submit quiz result!
      </button>
    </div>
  );
};

export default Quiz;
