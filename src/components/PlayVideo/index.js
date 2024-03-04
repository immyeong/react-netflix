import React from 'react'
import styled from 'styled-components';

export default function PlayVideo(videos) {

    return(
        <Container>
                <HomeContainer>
                    <Iframe
                    src = {`https://www.youtube.com/embed/${videos.results[0]?.key}?controls=0&autoplay=1&loop=1&mute=1&playlist=${videos.results[0]?.key}`}
                    title = "Youtube video player"
                    framborder = "0"
                    allow ="autoplay : fullscreen"
                    >
                    </Iframe>
                </HomeContainer>
            </Container>
    )
    
}

const Iframe = styled.iframe`
    width: 100%;
    height: 100%;
    z-index: -1;
    border: none;

    &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    width: 100%;
    height: 100vh;
`;

const HomeContainer = styled.div`
    width: 100%;
    height: 100%;
`;