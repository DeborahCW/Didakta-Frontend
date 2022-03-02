import "../styles/course.css";
import { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ApiContext } from "../Context";
import Syllabus from "../components/Syllabus";
import {
  showTitle,
  showTable,
  showTable_1,
  showVideo,
  showAudioText,
  showAudio,
  showQuestionText,
  showImg,
  showAlignmentText,
  showAlignment,
  showFootnotes,
} from "../functions/lessonFunctions";

const Lesson = () => {
  const { lessonId, chapterId } = useParams();
  const [lessons, setLessons] = useContext(ApiContext);

  const thisLesson = lessons.__html.filter((lesson) => lesson._id === lessonId);
  const thisChapter = thisLesson[0].chapters.filter(
    (chapter) => chapter._id === chapterId
  )[0];

  const [selectedAnswer, setSelectedAnswer] = useState(
    thisChapter.questions[0] && thisChapter.questions[0].answers[0]
  );
  const [selectedAnswer_1, setSelectedAnswer_1] = useState(
    thisChapter.questions[0] && thisChapter.questions[0].answers_1[0]
  );
  console.log(thisChapter);

  const showQuestions = (chapter) => {
    if (chapter.questions) {
      return chapter.questions.map((question) => {
        if (question.tags == "dropDown") {
          if (question.answers_1) {
            return (
              // rendering the text of each question inside chapter + answers (Drop Down)
              <div>
                <p className="chapterText">{question.text[0]}</p>
                <form
                  onSubmit={(event) => {
                    event.preventDefault();

                    if (
                      question.answers[question.correctAnswer] ==
                        selectedAnswer &&
                      question.answers_1[question.correctAnswer_1] ==
                        selectedAnswer_1
                    ) {
                      document.getElementById("submitButton").style.display =
                        "none";
                      document.getElementById("correctSubmitted").innerHTML =
                        "Correct!";
                      document.getElementById("answerExplanation").innerHTML =
                        question.explanation ? question.explanation : "";
                    } else {
                      document.getElementById("submitButton").style.display =
                        "none";
                      document.getElementById("incorrectSubmitted").innerHTML =
                        "Incorrect!";
                      document.getElementById("answerExplanation").innerHTML =
                        question.explanation ? question.explanation : "";
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
                  <input id="submitButton" type="submit" value="Go!" />
                </form>
                {question.hint && (
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById("hint").innerHTML = question.hint;
                    }}
                  >
                    Hint
                  </button>
                )}
                <div id="hint"></div>
                <div id="correctSubmitted"></div>
                <div id="incorrectSubmitted"></div>
                <div id="answerExplanation"></div>
              </div>
            );
          } else {
            return (
              <form>
                <select id="questionDropDown" name="questionDropDown">
                  {question.answers.map((answer) => {
                    return <option value={answer}>{answer}</option>;
                  })}
                </select>
              </form>
            );
          }
        } else {
          <form>
            {question.answers.map((answer) => {
              return (
                <label>
                  {answer}
                  <input
                    type="radio"
                    className="multipleChoices"
                    name={question.tags}
                    value={answer}
                  />
                </label>
              );
            })}
          </form>;
        }
      });
    }
  };

  return (
    <div className="courseContainer">
      <div className="syllabusContainer">
        <Syllabus />
      </div>
      <div className="chapterContainer">
        {showTitle(thisChapter)}

        {/* SHOW TEXT */}
        {thisChapter.text[0] &&
          thisChapter.text.map((paragraph) => (
            <p
              className="chapterText"
              dangerouslySetInnerHTML={{ __html: paragraph }}
            />
          ))}

        {showAudioText(thisChapter)}
        {showAudio(thisChapter)}
        {showTable(thisChapter)}

        {/* SHOW TEXT_1 */}
        {thisChapter.text_1[0] &&
          thisChapter.text_1.map((paragraph) => (
            <p
              className="chapterText"
              dangerouslySetInnerHTML={{ __html: paragraph }}
            />
          ))}

        {showTable_1(thisChapter)}
        {showVideo(thisChapter)}
        {showQuestionText(thisChapter)}
        {showQuestions(thisChapter)}
        {showImg(thisChapter)}
        {showAlignmentText(thisChapter)}
        {showAlignment(thisChapter)}
        {showFootnotes(thisChapter)}
      </div>
    </div>
  );
};

export default Lesson;
