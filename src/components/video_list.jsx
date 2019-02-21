import React from "react";
import VideoListItem from "./video_item";
import style from "../style/style.css";

const VideoList = props => {
  console.log(props.videoes);
  const videoItem = props.videoes.map(video => {
    return (
      <VideoListItem
        key={video.etag}
        video={video}
        onVideoSelect={props.onVideoSelect}
      />
    );
  });

  return <ul className="col-md-4 list-group">{videoItem}</ul>;
};
export default VideoList;
