import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import {useDebound} from '../../hooks/useDebound'
import axios from '../../api/axios'
import './SearchPage.css'

export default function SearchPage() {
    const [searchResult, setSearchResult] = useState([]);
    const navigate = useNavigate();
    const useQuery = () => {
        return new URLSearchParams(useLocation().search);
    }

    const query = useQuery();
    const searchTarget = query.get("q");
    const Debounded = useDebound(searchTarget, 400);

    useEffect(() => {
        if (Debounded) {
            fetchSearchMovie(Debounded);
        }

    }, [Debounded]);

    const fetchSearchMovie = async (Debounded) => {
        try {
            const request = await axios.get(`search/multi?include-adult=false&query=${Debounded}`);
            setSearchResult(request.data.results);
        } catch (error) {
            console.log('error', error);
        }
    }

    const renderingPage = () => {
        return searchResult.length > 0 ? (
            <section className="search-container">
                {searchResult.map(movie => {
                    if (movie.backdrop_path !== null && movie.media_type !== "person") {
                        const movieImageURL = 'https://image.tmdb.org/t/p/w500' + movie.backdrop_path;
                        return (
                            <div className="movie" key={movie.id}>
                                <div className="movie__column-poster" onClick={() => {
                                    if(movie.backdrop_path){
                                        navigate(`/${movie.id}`)}        
                                    }
                                }>
                                    <img
                                        className="movie__poster"
                                        src={movieImageURL}
                                        alt="movie"
                                    />
                                </div>
                            </div>
                        )
                    }
                })}

            </section>
        ) : (
            <section className="no-results">
                <div className="no-results__text">
                    <p> 찾고자하는 검색어 "{searchTarget}"가 없습니다.</p>
                </div>
            </section>
        )
    }

    return (
        renderingPage()
    )
}
