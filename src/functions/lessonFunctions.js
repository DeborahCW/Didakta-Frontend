export const showTitle = (chapter) => {
  if (chapter.title) {
    return <h1 className="chapterTitle">{chapter.title}</h1>;
  }
};

export const showTable = (chapter) => {
  if (chapter.table) {
    return (
      <table className="chapterTable">
        {chapter.table.map((row) => {
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

export const showTable_1 = (chapter) => {
  if (chapter.table_1) {
    return (
      <table className="chapterTable">
        {chapter.table_1.map((row) => {
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

export const showVideo = (chapter) => {
  if (chapter.youtube) {
    return (
      <iframe
        className="videoPlayer"
        width="560"
        height="315"
        src={chapter.youtube}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    );
  }
};

export const showAudioText = (chapter) => {
  if (chapter.audioText) {
    return <span className="audioText">{chapter.audioText}</span>;
  }
};

export const showAudio = (chapter) => {
  if (chapter.audio) {
    return (
      <iframe
        className="audioPlayer"
        width="200"
        height="50"
        src={chapter.audio}
        frameborder="0"
        title="Audio Player"
        scrolling="no"
      ></iframe>
    );
  }
};

export const showQuestionText = (chapter) => {
  if (chapter.questionText) {
    return chapter.questionText.map((paragraph) => {
      return <p className="chapterQuestionText">{paragraph}</p>;
    });
  }
};

export const showQuestions = (chapter) => {
  if (chapter.questions) {
    return chapter.questions.map((question) => {
      if (question.tags == "dropDown") {
        if (question.answers_1) {
          return (
            <form>
              <select id="questionDropDown" name="questionDropDown">
                {question.answers.map((answer) => {
                  return <option value={answer}>{answer}</option>;
                })}
              </select>
              <select id="questionDropDown_1" name="questionDropDown_1">
                {question.answers_1.map((answer_1) => {
                  return <option value={answer_1}>{answer_1}</option>;
                })}
              </select>
              <input type="submit" />
            </form>
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
