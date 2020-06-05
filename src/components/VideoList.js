import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({videos, onVideoSelect}) => {
    const video = videos.map((video)=>{ 
        return (
            <div className="ui relax divided list">
                <VideoItem 
                    video={video}
                    onVideoSelect={onVideoSelect}
                />
            </div>
        )
    });

    return <div>{video}</div>;
};

export default VideoList;