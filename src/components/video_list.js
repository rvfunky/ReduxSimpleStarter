import React, {Component} from 'react';
import VideoListItem from './video_list_item';

const videoList = (props) => {
  var videoItems = props.videos.map(
    (video) => {
      return (
        <VideoListItem
        key = {video.id.videoId}
        video = {video}
        onVideoSelect = {props.onVideoSelect}
    />)
  });
  return (
    <ul className = "col-md-4 list-group">
      {videoItems}
    </ul>
  )
};

export default videoList;
