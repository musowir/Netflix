import React,{useEffect, useState} from 'react'
import './Banner.css'
import axios from '../../axios'
import {imageUrl} from '../../Constants/constants'

function Banner(props) {
    
    const [movie, setMovie] = useState({})
  
    useEffect(() => {
    

        axios.get(props.url).then((response)=>{
            setMovie(response.data.results[1])
            
        })
        
    }, [])
    return (
        <div 
        // style={{backgroundImage: `url(${movie ? imageUrl+movie.backdrop_path : ""})`}}
        style={{background: `linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, 1)), url(${movie ? imageUrl+movie.backdrop_path : ""})`}}
        className='banner'>

            <div className='content'>
                <h1 className="title">{movie.title}</h1>
                <div className="banner_buttons">
                    <button className="button"><i className='caret' class="bi bi-play-fill"></i>Play</button>
                    <button className="button"><i className='caret' class="bi bi-plus"></i>My List</button>
                </div>
                <h1 className="description">{movie.overview}</h1>
            </div>
            <div className="fade_bottom"></div>
        </div>
    )
}

export default Banner
