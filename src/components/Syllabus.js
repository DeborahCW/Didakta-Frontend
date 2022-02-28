import { useContext } from "react";
import { Link } from "react-router-dom";
import { ApiContext } from "../Context";

const Syllabus = () => {
  const [lessons, setLessons] = useContext(ApiContext);

  // !loading && console.log(lessons.__html);

  return (
    <>
      <h1>Syllabus</h1>
      {lessons.__html.map((lesson) => {
        return (
          <div>
            {lesson.number}. {lesson.title}
            {lesson.chapters.map((chapter) => {
              return (
                <div>
                  {lesson.number}.{chapter.number}.
                  <Link to={`/course/${lesson._id}/${chapter._id}`}>
                    {chapter.title}
                  </Link>
                </div>
              );
            })}
          </div>
        );
      })}
    </>
  );
};

export default Syllabus;
