import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { ApiContext } from "../LessonsContext";

const Syllabus = ({ lessonId, chapterId }) => {
  const [lessons, setLessons] = useContext(ApiContext);
  return (
    <>
      <h1>Syllabus</h1>
      {lessons.__html.map((lesson) => {
        return (
          <div>
            <div>
              {lesson.number}. {lesson.title}
              {lesson.chapters.map((chapter) => {
                return (
                  <div>
                    {lesson.number}.{chapter.number}.{" "}
                    <Link
                      style={
                        chapterId === chapter._id
                          ? { color: "black" }
                          : { color: "red" }
                      }
                      to={`/course/${lesson._id}/${chapter._id}`}
                    >
                      {chapter.title}
                    </Link>
                  </div>
                );
              })}
            </div>
            {lesson.quiz && (
              <div>
                {lesson.number}.{" "}
                <Link
                  to={`/quiz/${lesson._id}/${lesson.quiz.questions[0]._id}`}
                >
                  Quiz: {lesson.quiz.title}
                </Link>
              </div>
            )}
          </div>
        );
      })}
    </>
  );
};

export default Syllabus;
