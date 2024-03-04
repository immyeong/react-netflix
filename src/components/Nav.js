import React, {useState, useEffect} from 'react'
import './Nav.css'
import { useNavigate } from 'react-router-dom';

export default function Nav() {
    const [show, setShow] = useState(false);
    const [searchValue, setSearchValue] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                setShow(true);
            }else {
                setShow(false);
            }
        })
        return () => {
            window.removeEventListener('scroll', () => { });
        }
    }, [])

    const handleChange = (e) => {
        setSearchValue(e.target.value);
        navigate(`/search?q=${e.target.value}`);
    };
    
    return (
        <section className={`nav ${show && "nav__black"}`}>
            <div className="nav__container">
                <img className="nav__logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                    alt="netflix logo"
                    onClick={() => navigate('/')}
                />
                <input className="nav__input " type="text" placeholder='검색어를 입력하세요.' value={searchValue} onChange={handleChange}/>
                <img className="nav__avatar"
                    src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                    alt="user avater"
                />
            </div>
        </section>
    )
}
