import React from 'react'
import {trendingtv, AiringToday, TopratedTv, popularTv, Onair } from '../../Constants/urls'
import Banner from './Banner/Banner'
import RowPost from './RowPost/RowPost'

function Tv() {
    return (
        <div>
            <Banner url={trendingtv}/>
            <RowPost url={trendingtv} title='Trending Now' />
            <RowPost url={TopratedTv} title='Top Rated' isSmall/>
            <RowPost url={AiringToday} title='Airing Today' isSmall/>
            <RowPost url={Onair} title='On Air' isSmall/>
            <RowPost url={popularTv} title='Popular' isSmall/>
            
        </div>
    )
}

export default Tv
