import React from 'react'
import Contents from '../../components/Contents'
import Banner from '../../components/Banner'
import requests from '../../api/request'

export default function MainPage() {
    return (
        <div>
            <Banner />

            <Contents
                title="Top Rated"
                id="TR"
                fetchUrl={requests.fetchTopRated}
                isLargeRow
            />

            <Contents
                title="NETFLIX ORIGINAL"
                id="NO"
                fetchUrl={requests.fetchNetflixOriginals}
            />

            <Contents
                title="Action Movies"
                id="AM"
                fetchUrl={requests.fetchActionMovies}
            />

            <Contents
                title="Trending"
                id="TD"
                fetchUrl={requests.fetchTrending}
                isLargeRow
            />

            <Contents
                title="Comedy Movies"
                id="CM"
                fetchUrl={requests.fetchComedyMovies}
            />


            <Contents
                title="Horror Movies"
                id="HM"
                fetchUrl={requests.fetchHorrorMovies}
            />
        </div>
    )
}
