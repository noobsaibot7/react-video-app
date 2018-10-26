import React from 'react';
import Spinner from './spinner.gif';

const Videodetail = ({ video }) => {
  if (!video) {
    return (
      <img
        src={Spinner}
        alt="Loading"
        style={{ width: '200px', margin: '40px auto', display: 'block' }}
      />
    );
  }

  const vidId = video.id.videoId;
  const vidURL = `https://www.youtube.com/embed/${vidId}`;

  return (
    <div className="video-detail col-md-8 mb-2">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe
          className="embed-responsive-item"
          title={video.id.kind}
          src={vidURL}
        />
      </div>
      <div className="details">
        <div className="font-weight-bold">{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default Videodetail;
