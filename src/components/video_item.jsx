import React from "react";

const VideoItemlist = props => {
  console.log(props.video);
  const ImageUrl = props.video.snippet.thumbnails.default.url;
  return (
    <li className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={ImageUrl} />
        </div>
        <div className="media-body">
          <div className="media-heading">{props.video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
};
export default VideoItemlist;