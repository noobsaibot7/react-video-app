import React, { Component} from 'react';
import _ from 'lodash';
import Searchbar from './components/Search_bar';
import YTsearch from 'youtube-api-search';
import Videolist from './components/Video_list';
import Videodetail from "./components/Video_detail";
import './style/style.css';

const api_key = 'AIzaSyAyEQ7BSwRjcUh0KHUF3b9_RXIQdp15oVc';


// since the value of the term will be changing, we change the app to class based component
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            video: [],
            selectedVideo: null
        };
        this.videosearch('term');

    }

    videosearch(term) {
        YTsearch({ key: api_key, term: term }, video => this.setState({
            video: video,
            selectedVideo: video[0]
        }));
    }

    render() {
        const videosearch = _.debounce(term => this.videosearch(term), 1000);
        return (
            <div className="container">
                <Searchbar onSearch={videosearch} />
                
                <div className="row">
                    <Videodetail video={this.state.selectedVideo} />
                    <Videolist
                        onSelectVideo={selectedVideo => this.setState({ selectedVideo })} //{selectedVideo:selectedVideo}
                        vide={this.state.video}
                    />
                </div>
               

            </div>
        );
    }
}

export default App;