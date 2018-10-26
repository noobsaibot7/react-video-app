import React from 'react';

const Videolistitem = ({vid, onClickVideo}) =>{
    //in the proops we have VID and VALUE, so we destructure value out
    const imgUrl = vid.snippet.thumbnails.default.url;
    const imgTitle = vid.snippet.title;
    console.log(vid)

    return (
        <li  onClick={()=>onClickVideo(vid)} className='list-group-item'> 
            <div className='video-list media'>
                <div className='mr-2 media-left'>
                <img className='media-object' src={imgUrl} alt={vid.id} />
                </div>

                <div className='media-body'>
                    <div className="media-heading">{imgTitle}</div>
                </div>
            </div>
        </li>
    );
   
}

export default Videolistitem;