import { Avatar } from '@material-ui/core'
import React from 'react'
import './ChannelRow.css'
import CheckCircleOutlineOutlinedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';
function ChannelRow({image,channel,verified,subs,noOfVideos,description}) {
    return (
        <div className='channelRow'>
             <Avatar className='channelRow_logo' src={image} alt={channel}/>
             <div className="channelRow_text">
                 <h4>{channel} {verified && <CheckCircleOutlineOutlinedIcon />}</h4>
                 <p>{subs} Subscribers •  {noOfVideos} Videos</p>
                 <p>{description}</p>
             </div>
        </div>
    )
}

export default ChannelRow

