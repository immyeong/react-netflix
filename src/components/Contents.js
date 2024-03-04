import React, { useState, useEffect } from 'react'
import './Contents.css'
import axios from '../api/axios'
import MovieModal from './MovieModal/MovieModal'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Contents({ title, id, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [selectMovie, setSelectMovie] = useState({});

    useEffect(() => {
        fetchMovieData();
    }, [])

    const fetchMovieData = async () => {
        const request = await axios.get(fetchUrl);

        const movieData = request.data.results;
        
        setMovies(movieData);
    }

    const fetchSelectMovieVideo = async (movie) => {
        const { data } = await axios.get(`movie/${movie.id}`, {
            params: { append_to_response: "videos" },
        });

        return data;
    }


    const ClickOpenModal = async (movie) => {
        setOpenModal(true);
        const movieVideo = await fetchSelectMovieVideo(movie);
        setSelectMovie(movieVideo);
    }
    
    const $ = {};

    $.getId = (sel) => document.getElementById(sel);

    $.pageScrollR = (el, number) => el.scrollLeft += window.innerWidth - number;

    $.pageScrollL = (el, number) => el.scrollLeft -= window.innerWidth - number;

    return (
        <section className="row">
            <h2>{title}</h2>
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={10}
                navigation
                loop={true}
                pagination={{ clickable: true }}
                breakpoints={{
                    1378 : {
                        slidesPerView : 6,
                        slidesPerGroup : 6,
                    },
                    968 : {
                        slidesPerView : 5,
                        slidesPerGroup : 5,
                    },
                    625 : {
                        slidesPerView : 4,
                        slidesPerGroup : 4,
                    },
                    0 : {
                        slidesPerView : 3,
                        slidesPerGroup : 3,
                    }
                }}

            >
                <div className='slider'>
                    <div id={id} key={id} className="row__posters">
                        {movies.map((movie) => (
                            <SwiperSlide>
                                <img
                                    key={movie.id}
                                    className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                                    src={`https://image.tmdb.org/t/p/original/${isLargeRow ? movie.poster_path : movie.backdrop_path} `}
                                    alt={movie.name}
                                    onClick={() => ClickOpenModal(movie)}
                                />
                            </SwiperSlide>
                        ))}
                    </div>
                </div>
            </Swiper >
            {
                openModal && (
                    <MovieModal 
                    {...selectMovie}
                    setOpenModal={setOpenModal} />
                )
            }
        </section >
    )
}