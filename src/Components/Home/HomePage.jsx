import React from 'react'
import {trendingall, originals} from '../../Constants/urls'
import Banner from './Banner/Banner'
import RowPost from './RowPost/RowPost'

function HomePage() {
    return (
        <div>
            <Banner url={trendingall}/>
            <RowPost url={trendingall} title='Trending Now' />
            <RowPost url={originals} title='Netflix Originals' isSmall/>
        </div>
    )
}

export default HomePage
