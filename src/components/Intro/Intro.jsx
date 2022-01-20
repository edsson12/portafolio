import {useEffect, useRef} from "react";
import { init } from 'ityped'

import "./Intro.scss";

const Intro = () => {
    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, { 
            showCursor: true, 
            backDelay:1500,
            strings: ['Front-End','Back-End', 'FullStack' ] })
    }, [])
  return (
    <div className="o-intro" id="intro">
      <div className="introLeft">
        <div className="imgContainer">
          <img src="assets/fotonofondo2-min.png" alt="" />
        </div>
      </div>
      <div className="introRight">
        <div className="wrapperIntro">
          <h2>Hola, soy</h2>
          <h1>Edsson Cortes</h1>
          <h3>
            Desarrollador <span ref={textRef}> </span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down-arrow.png" alt="" />
        </a>
      </div>
    </div>
  );
};

export default Intro;
