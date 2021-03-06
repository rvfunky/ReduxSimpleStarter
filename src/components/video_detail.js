import React from 'react';

const videoDetail = (props) => {
  if(!props.video){
    return <h1>loading</h1>;
  }
  const video = props.video;
  const videoId= props.video.id.videoId;
  const url = 'https://www.youtube.com/embed/' + videoId;

  return (
    <div className = "video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}></iframe>
      </div>
      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  )
};

export default videoDetail;
