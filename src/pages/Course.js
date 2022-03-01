import { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { ApiContext } from "../Context";
import {
  showTitle,
  showTable,
  showTable_1,
  showVideo,
  showAudioText,
  showAudio,
  showQuestionText,
  showQuestions,
} from "../functions/lessonFunctions";

const Lesson = () => {
  const { lessonId, chapterId } = useParams();
  const [lessons, setLessons] = useContext(ApiContext);

  const thisLesson = lessons.__html.filter((lesson) => lesson._id === lessonId);
  const thisChapter = thisLesson[0].chapters.filter(
    (chapter) => chapter._id === chapterId
  )[0];

  console.log(thisChapter);

  return (
    <>
      <div>
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

        {/* QUESTION */}
        {showQuestions(thisChapter)}

        {/* {thisChapter.questions?.text?.map((paragraph) => {
          return <p className="chapterQuestionText">{paragraph}</p>;
        })}
        {thisChapter.questions && thisChapter.questions.tags[0] === "dropDown" ? (
          thisChapter.questions.answers_1 ? (
            <form>
              <select id="questionDropDown" name="questionDropDown">
                {thisChapter.questions.answers.map((answer) => {
                  return <option value={answer}>{answer}</option>;
                })}
              </select>
              <select id="questionDropDown_1" name="questionDropDown_1">
                {thisChapter.questions.answers_1.map((answer_1) => {
                  return <option value={answer_1}>{answer_1}</option>;
                })}
              </select>
              <input type="submit" />
            </form>
          ) : (
            <form>
              <select id="questionDropDown" name="questionDropDown">
                {thisChapter.questions.answers.map((answer) => {
                  return <option value={answer}>{answer}</option>;
                })}
              </select>
            </form>
          )
        ) : (
          ""
        )} */}
      </div>
    </>
  );
};

export default Lesson;
