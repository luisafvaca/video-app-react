import React from  'react';
import SearchBar from './SearchBar';
import youtube from '../api/youtube';
import comments from '../api/comments';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import Comment from './Comment';

const KEY = 'AIzaSyBtI6BiQpU6eZO1R3u8GBuywIANrra-OnA';

class App extends React.Component {
    state = {
        videos: [],
        selectedVideo: null,
        comments: []
    }

    comments = () => {
        comments.get("/comments").then((response) => {
            this.setState({comments: response});
        })
    }

    onTermSubmit = async term => {
        this.comments();
        const response = await youtube.get("/search", {
            params: {
              q: term,
              part: "snippet",
              maxResults: 25,
              key: KEY
            }
        })
        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        })

    }

    onVideoSelect = video => {
        this.comments();
        this.setState({selectedVideo: video})
    }

    render(){
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit}/>
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo}/>
                            <Comment comments={this.state.comments.data}/>
                        </div>
                        <div className="five wide column">
                            <VideoList 
                                videos={this.state.videos}
                                onVideoSelect={this.onVideoSelect}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;