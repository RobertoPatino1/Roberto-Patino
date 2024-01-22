import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import { useState, useEffect } from "react";

import headerImg from "../assets/img/banner-img.svg";

import "animate.css";
import TrackVisibility from "react-on-screen";

//TODO: MAKE CONNECT BUTTON WORK

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  //TODO: Add new words!!!
  const toRotate = [
    "Pentester",
    "Full Stack Developer",
    "Software Engineer",
    "Game Developer",
  ];
  const [text, setText] = useState("");

  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">
                    Welcome to my Developer Portfolio
                  </span>
                  <h1>
                    {"Hi I'm Roberto!"}
                    <br></br>
                    {"A passionate"}
                    <br></br>
                    <span id="cli">~$ </span>
                    <span className="wrap">{text}</span>
                  </h1>
                  <p>
                    I'm a visionary and dedicated forward thinking Computer
                    Science student fueled by an unwavering enthusiasm on
                    Offensive Cyber Security and Software Engineering.
                  </p>
                  <button onClick={() => console.log("connect")}>
                    Let's connect!
                    <ArrowRightCircle size={25} />
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Header Img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
