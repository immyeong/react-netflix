import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from '../../api/axios'
import './DetailPage.css'

export default function DetailPage() {
    const { movieId } = useParams();
    const [movies, setMovies] = useState({});

    const fetchData = async () => {
        try {
            const request = await axios.get(`/movie/${movieId}`, {
                params: { append_to_response: "videos" },
            });
            setMovies(request.data);
        } catch (error) {
            console.error("Error fetching Data", error);
        }
    }

    useEffect(() => {
        fetchData();
    }, [movieId])

    if (!movies) return <div>No More Movie</div>

    return (
        <section>
            <div className="detail__container">
                <img
                    className="detail__movie-img"
                    src={`https://image.tmdb.org/t/p/original/${movies.backdrop_path}`}
                    alt="detail__movie-img"
                />
                <div className="details__contents">
                    <p className="details__title">{movies.title}</p>
                    <p className="details__user-perc">평점 : {movies.vote_average}</p>
                    <p className="details__desc">{movies.overview}</p>
                </div>
            </div>
        </section>
    )
}
