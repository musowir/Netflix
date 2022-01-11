import React, {useEffect, useState} from 'react'
import {API_KEY, simageUrl, pimageUrl} from '../../../Constants/constants'
import YouTube from 'react-youtube'
import './RowPost.css'
import axios from '../../../axios'


function RowPost(props) {
const [movies, setMovies] = useState([])
const [Yid, setYid] = useState('')
const [movsel, setMovesel] = useState({})
    useEffect(() => {
        axios.get(props.url).then((Response)=>{
            setMovies(Response.data.results)
        }).catch(err=>{
            alert('Network Error!')
        })

    }, [])
    const opts = {
        height: '300',
        width: '450',
        playerVars: {
          autoplay: 0,
        }};
        const thisMovie = (id)=>{
            axios.get(`/movie/${id}?api_key=${API_KEY}&language=en-US`).then((Response)=>{
                console.log(Response.data);
                setMovesel(Response.data);
                console.log(movsel);
            })
        }
        const handleMovie = (id)=>{
            axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((Response)=>{
                setYid(Response.data.results[0].key)
            })
        }
    return (
        
        <div className='row'>
            <h3>{props.title}</h3>
            <div className="posters">
                {movies.map((obj)=>
                <img onClick={()=>{handleMovie(obj.id);thisMovie(obj.id)}} className={props.isSmall? 'small_poster' : 'poster'} src={`${simageUrl+obj.backdrop_path}`} alt="" />
            )}
            </div>
            
            {(movsel.title || movsel.name) &&
            <div className="details">
                <div className="post">
                    <img className='postimg' src={`${pimageUrl}${movsel.poster_path}`} alt="" />
                </div>
                <div className='det'>
                    
                    <h2>{movsel.title}</h2>
                    {movsel.original_name===movsel.name ? <h2>{movsel.name}</h2> :<h2>{movsel.name}({movsel.original_name})</h2> }
                    <p><i>{movsel.tagline}</i></p><br />
                    <p style={{color : 'yellow'}}>{movsel.release_date} | vote average : {movsel.vote_average}</p>
                    <br/><p>{movsel.overview}</p>
                </div>
                <div className="video"> {Yid &&<YouTube videoId={Yid} opts={opts} />}</div>
            </div>}
        </div>
    )
}

export default RowPost
