import React from 'react'

const VideoCard = ({info}) => {
  if (!info || !info.snippet) {
    return null; // Return null or a placeholder if info is not available
  }
    // console.log(info);
    const {snippet}=info;
    const {channelTitle,title,thumbnails} = snippet;

  return (
    <div  className='p-2 m-2 w-72 shadow-lg'>
       <img className='rounded-lg' alt="thumbnails" src={thumbnails?.medium?.url}/>
      <ul>
        <li className='font-bold py-2'>{title}</li>
        <li>{channelTitle}</li>
      </ul> 
    </div>
  )
}

export default VideoCard
