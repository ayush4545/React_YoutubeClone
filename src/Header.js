import React, { useState } from 'react'
import './Header.css'
import MenuIcon from '@material-ui/icons/Menu';
import AppsIcon from '@material-ui/icons/Apps';
import SearchSharpIcon from '@material-ui/icons/SearchSharp';
import VideoCallSharpIcon from '@material-ui/icons/VideoCallSharp';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar'
import {Link} from 'react-router-dom'
function Header() {
    const [inputSearch,setInputSearch]=useState('');

    return (
        <div className="header">
           <div className="header_left">
           <MenuIcon />
           <Link to='/'>
             <img className='header_logo'
             src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/300px-YouTube_Logo_2017.svg.png" alt=""/>
           </Link>
           
           </div>
            
            <div className="header_input">
            <input value={inputSearch} type="text" placeholder='Search' onChange={(e)=>setInputSearch(e.target.value)}/>
            <Link to={`/search/${inputSearch}`}>
                <SearchSharpIcon className="header_inputButton" />
            </Link>
            
            </div>
            
            <div className="header_icons">
             <VideoCallSharpIcon  className="header_icon"/>
             <AppsIcon  className="header_icon"/>
             <NotificationsIcon className="header_icon"/>
             <Avatar alt='ayush mishra' src="https://yt3.ggpht.com/yti/ANoDKi6llFjwCyixdteDFs9hESvR-whk6b3dm1EN7p2W=s88-c-k-c0x00ffffff-no-rj-mo"/>
             
            </div>

            
        </div>

    )
}

export default Header
