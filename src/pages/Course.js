import { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { ApiContext } from "../Context";

const Lesson = () => {
  const { lessonId, chapterId } = useParams();

  const [lessons, setLessons] = useContext(ApiContext);
  // const [chapterId, setChapterId] = useState(id);

  // const thisChapter = lessons.__html[lessonId].chapters[chapterId];

  const thisLesson = lessons.__html.filter((lesson) => lesson._id == lessonId);
  const thisChapter = thisLesson[0].chapters.filter(
    (chapter) => chapter._id == chapterId
  );

  // lessons[lessonId]._html.chapters.filter(
  //   (chapter) => chapter._id == chapterId
  // );
  console.log(thisLesson);
  console.log(thisChapter);

  // console.log(thisChapter);

  return (
    <>
      {/* <div>
        {thisChapter.title && <h2>{thisChapter.title}</h2>}
        {thisChapter.text[0] && thisChapter.text.map((paragraph) => <p></p>)}
      </div> */}
      {/* <h1>Lessons</h1>
      {lessons.__html.map((lesson) => {
        return (
          <div>
            {lesson.chapters.map((chapter) => {
              return (
                <div>
                  {chapter.text.map((p, index) => {
                    return (
                      <div
                        key={index}
                        dangerouslySetInnerHTML={{ __html: p }}
                      />
                    );
                  })}
                </div>
              );
            })}
          </div>
        );
      })} */}
    </>
  );
};

export default Lesson;
