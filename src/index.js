import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar.js';
import VideoList from './components/video_list.js';
import VideoDetail from './components/video_detail.js';
import YTSearch from 'youtube-api-search';

const API_KEY = "AIzaSyBuMJxbbMHIbsueYnpbqtOPdP-jEuSHePU";

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      videos: [],
      selectedVideo : null
    };

    this.videoSearch('servicenow');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY,term: term}, videos => {
      this.setState({videos:videos, selectedVideo:videos[0]});
      console.log(this.state.videos);
    });
  }

  render(){
    return (
      <div>
        <div col-md-12>
          <SearchBar onSearchTermChange={term => this.videoSearch(term)}/>
        </div>
        <VideoDetail video = {this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos = {this.state.videos}/>
      </div>
    );
  }
}

ReactDOM.render(<App/>,document.querySelector('.container'));
