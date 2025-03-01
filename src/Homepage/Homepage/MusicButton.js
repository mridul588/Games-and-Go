import React, { useRef, useState } from "react";
import styled from "styled-components";
import { MdMusicOff, MdMusicNote } from "react-icons/md";
import music1 from "../Homepage/music1.mp3";

export default function MusicButton() {
  const [isPlaying, setIsPlaying] = useState(false);

  const audioref = useRef();
  const playMusic = () => {
    audioref.current.play();
  };
  const pauseMusic = () => {
    audioref.current.pause();
  };

  const toggleMusic = () => {
    if (isPlaying) pauseMusic();
    else playMusic();

    setIsPlaying(!isPlaying);
  };
  return (
    <>
      <audio ref={audioref} loop autoPlay>
        <source src={music1} type="audio/mp3" />
      </audio>
      <Wrapper2>
        <div className="music-button" onClick={toggleMusic}>
          {isPlaying ? <MdMusicNote /> : <MdMusicOff />}
        </div>
      </Wrapper2>
    </>
  );
}

const Wrapper2 = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  .music-button {
    font-size: 2.4rem;
    width: 4rem;
    height: 4rem;
    color: #fff;
    background-color: black;
    box-shadow: rgba(255, 255, 255, 0.2) 0px 0px 15px 5px;
    border-radius: 50%;
    position: fixed;
    bottom: 3rem;
    left: 3rem;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: white;
  }

  @media (max-width: 768px) {
    .music-button {
      bottom: 2rem;
      left: 2rem;
    }
  }
`;
