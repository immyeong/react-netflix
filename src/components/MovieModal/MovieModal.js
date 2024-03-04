import React, {useRef, useState} from 'react'
import "./MovieModal.css"
import useClickOutside from '../../hooks/useClickOutside'
import PlayVideo from '../PlayVideo/index'

export default function MovieModal({
    backdrop_path,
    title,
    overview,
    name,
    release_date,
    first_air_date,
    vote_average,
    videos,
    setOpenModal,
}) {
    const [isClicked, setIsClicked] = useState(false);

    const ref = useRef();
    useClickOutside(ref, () => setOpenModal(false));

    const handlePlayVideo = () => {
        setIsClicked(true);
    }
    if(!isClicked){

        return (
            <div className="modal__container">
                <div className="modal__contents">
                    <div className="modal" ref={ref}>
                        <span
                            onClick={() => setOpenModal(false)}
                            className="modal__close">X</span>
                        <div className="modal__img">
                            <img
                                className="modal__poster"
                                src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
                                alt="modal__poster"
                            />
                            <button className="modal__btn" onClick={handlePlayVideo}>재생</button>
                        </div>
    
                        <div className="modal__content">
                            <p className="modal__details">
                                <span className="modal__user_perc">100% for you </span>
                                {release_date ? release_date : first_air_date}
                            </p>
    
                            <h2 className="modal__title">{title ? title : name}</h2>
                            <p className="modal__overview">평점 : {vote_average}</p>
                            <p className="modla__overview">{overview}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="modal__container">
                <div className="modal__contents">
                    <div className="modal" ref={ref}>
                        <span
                            onClick={() => setOpenModal(false)}
                            className="modal__close">X</span>
                        <div className="modal__img">
                            {PlayVideo(videos)}
                        </div>
    
                        <div className="modal__content">
                            <p className="modal__details">
                                <span className="modal__user_perc">100% for you </span>
                                {release_date ? release_date : first_air_date}
                            </p>
    
                            <h2 className="modal__title">{title ? title : name}</h2>
                            <p className="modal__overview">평점 : {vote_average}</p>
                            <p className="modla__overview">{overview}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
