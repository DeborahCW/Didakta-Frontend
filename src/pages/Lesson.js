import { useState, useEffect } from "react";
import axios from "axios";

const Lesson = () => {
  const [lessons, setLessons] = useState();
  const [loading, setLoading] = useState(true);

  const lessonsUrl = `http://localhost:4000/lesson/`;

  const fetchAllLessons = async () => {
    try {
      const { data } = await axios.get(lessonsUrl);
      setLessons({ __html: data.data });
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchAllLessons();
  }, []);

  !loading && console.log(lessons.__html);

  return (
    <>
      <h1>Lessons</h1>
      {!loading &&
        lessons.__html.map((lesson) => {
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
        })}
    </>
  );
};

export default Lesson;
