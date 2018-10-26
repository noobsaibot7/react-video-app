import React from 'react';
import Videolistitem from './Video_list_item';

const Videolist = ({vide, onSelectVideo})=>{
    // const {vide} = props;
    const videoItem = vide.map((video, i)=>(
        <Videolistitem
         vid={video}
         key={video.etag} 
         onClickVideo = {onSelectVideo}
          />)
    );
    return(
        <ul className="col-md-4 list-group">
            {videoItem}
        </ul>
    );
}

export default Videolist;