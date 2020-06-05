import React from 'react';
import './VideoItem';

const VideoItem = ({video, onVideoSelect}) => {
    return(
        <div key={video.id.videoId} className="video-item item" onClick={()=> onVideoSelect(video)}>
            <img alt={video.snippet.title} className="ui image" src={video.snippet.thumbnails.medium.url} />
            <div className="content">
                <div className="header">{video.snippet.title}</div> 
            </div>
        </div>
    )
}

export default VideoItem;