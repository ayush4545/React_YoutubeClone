import React from 'react'
import './SearchPage.css'
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import ChannelRow from './ChannelRow'
import VideoRow from './VideoRow'
function SearchPage() {
    return (
        <div className='searchPage'>
            <div className="searchpage_filter">
               <TuneOutlinedIcon />
               <h2>FILTER</h2>
            </div>
            <hr/>
            <ChannelRow 
            image='https://yt3.ggpht.com/yti/ANoDKi6llFjwCyixdteDFs9hESvR-whk6b3dm1EN7p2W=s88-c-k-c0x00ffffff-no-rj-mo'
            channel='Ayush mishra'
            verified
            subs='659K'
            noOfVideos={382}
            description='you can learn web developement here'
            />
            <hr/>
            <VideoRow 
                views='1.4M'
                subs='659K'
                description='do you want a free one hour training'
                timestamp='59 Seconds ago'
                channel='Ayush Mishra'
                title='Build the Youtube Clone'
                image='https://i.ytimg.com/vi/NT299zIk2JY/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBV8F8lciYfqvqqejRzPIFjS6PpUQ'
            />
            <VideoRow 
                views='1.4M'
                subs='659K'
                description='do you want a free one hour training'
                timestamp='59 Seconds ago'
                channel='Ayush Mishra'
                title='Build the Youtube Clone'
                image='https://i.ytimg.com/vi/NT299zIk2JY/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBV8F8lciYfqvqqejRzPIFjS6PpUQ'
            />
            <VideoRow 
                views='1.4M'
                subs='659K'
                description='do you want a free one hour training'
                timestamp='59 Seconds ago'
                channel='Ayush Mishra'
                title='Build the Youtube Clone'
                image='https://i.ytimg.com/vi/NT299zIk2JY/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBV8F8lciYfqvqqejRzPIFjS6PpUQ'
            />
            <VideoRow 
                views='1.4M'
                subs='659K'
                description='do you want a free one hour training'
                timestamp='59 Seconds ago'
                channel='Ayush Mishra'
                title='Build the Youtube Clone'
                image='https://i.ytimg.com/vi/NT299zIk2JY/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBV8F8lciYfqvqqejRzPIFjS6PpUQ'
            />
        </div>
    )
}

export default SearchPage
