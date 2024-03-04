import axios from "../api/axios"
import React, { useEffect, useState } from "react"
import requests from '../api/request'
import "./Banner.css";
import { useNavigate } from "react-router-dom"
import PlayVideo from '../components/PlayVideo/index'

export default function Banner() {
    const [movie, setMovie] = useState([]);
    const [isClicked, setIsClicked] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        // 현재 상영중인 영화 정보를 가져오기(여러 영화)
        const request = await axios.get(requests.fetchNowPlaying);

        const movieId = request.data.results[
            Math.floor(Math.random() * request.data.results.length)].id;

        const { data } = await axios.get(`movie/${movieId}`, {
            params: { append_to_response: "videos" },
        });

        setMovie(data);
    }

    if(!isClicked){
        
        return (
            //이미지, 버튼2개, Desc, title
            <header className="banner"
                style={{
                    backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
                    backgroundPosition: "top center",
                    backgroundSize: "cover",
                }}
            >
                <div className="banner__contents">
                    <h1 className="banner__title">{movie.title}</h1>
                    <div className="banner__btns">
                        <button className="banner__btn play"
                        onClick={()=> setIsClicked(true)}
                        >Play</button>
                        <button className="banner__btn info"
                        onClick={() => navigate(`/${movie.id}`)}
                        >More Information</button>
                    </div>
                    <p className="banner__description">{movie.overview}</p>
                </div>
                <div className="banner__fadeBottom"></div>
            </header>
        )
    }else {
        return (
            <div>{PlayVideo(movie.videos)}</div>
        )
    }
}