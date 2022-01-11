import React from 'react'
import {Trendingmovie, Nowplayingmovie, Topratedmovie, Upcoming} from '../../Constants/urls'
import Banner from './Banner/Banner'
import RowPost from './RowPost/RowPost'

function Movies() {
    return (
        <div>
            <Banner url={Trendingmovie}/>
            <RowPost url={Trendingmovie} title='Trending Now' />
            {/* <RowPost url={Nowplayingmovie} title='Now Playing' isSmall/> */}
            <RowPost url={Topratedmovie} title='Top Rated' isSmall/>
            <RowPost url={Upcoming} title='Upcoming' isSmall/>
        </div>
    )
}

export default Movies
