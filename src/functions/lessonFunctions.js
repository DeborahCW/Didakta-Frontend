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
      return <p className="chapterText">{paragraph}</p>;
    });
  }
};

export const showImg = (chapter) => {
  if (chapter.img) {
    return <img className="chapterImg" src={chapter.img} alt="chapterImage" />;
  }
};

export const showAlignmentText = (chapter) => {
  if (chapter.alignmentText) {
    return chapter.alignmentText.map((paragraph) => {
      return <p className="chapterText">{paragraph}</p>;
    });
  }
};

export const showAlignment = (chapter) => {
  if (chapter.alignment) {
    return (
      <iframe
        style={{ height: "200px", overflow: "scroll", width: "100%" }}
        frameborder="0"
        seamless="seamless"
        scrolling="no"
        allowtransparency="true"
        marginheight="1"
        marginwidth="1"
        src={chapter.alignment}
        title="Ugarit | iAligner"
        scroll="noscroll"
      ></iframe>
    );
  }
};

export const showFootnotes = (chapter) => {
  if (chapter.footnotes) {
    return (
      <div className="footnotes">
        <hr />
        {chapter.footnotes.map((footnote) => {
          return <p className="footnote">{footnote}</p>;
        })}
      </div>
    );
  }
};
