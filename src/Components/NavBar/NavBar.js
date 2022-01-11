import React from 'react'
import './NavBar.css'
import {Link} from 'react-router-dom';

function NavBar() {
    return (
        <div className='navbar'>
            
            <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="" />
            <div className="navtitles">
            <Link className='navtitle' to={'../'} activeClassName="active">Home</Link>
            <Link className='navtitle' to={'../movies'} activeClassName="active">Movies</Link>
            <Link className='navtitle' to={'../tv'} activeClassName="active">TV Shows</Link>
            <Link className='navtitle' to={'../'} activeClassName="active">Recently Added</Link>
            <Link className='navtitle' to={'../'} activeClassName="active">My List</Link>
            </div>
            
            <div className="navright">
            <i class="bi bi-search"></i>&nbsp;
            <a href ="" className='navtitle'>KIDS</a>&nbsp;
            <a href ="" className='navtitle'>DVD</a>&nbsp;
            <i className='caret' class="bi bi-caret-down-fill"></i>
            </div>
            <img className='avatar' src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="" />
            
        </div>

    )
}

export default NavBar
