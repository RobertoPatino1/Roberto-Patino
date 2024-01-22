import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import meter1 from "../assets/img/offsec_meter.svg";
import meter2 from "../assets/img/front_end.svg";
import meter3 from "../assets/img/ds.svg";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>
                From Software Development all the way to Cyber Security and
                Operative Systems, my skill set is a fusion of creativity and
                precision. I'm proficient in crafting elegant code for frontend
                and backend applications, while also dominating the complexities
                of low-level programming and other Computer Science related
                fields.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                classNmae="skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt="Skill-Image1"></img>
                  <h5>Offensive Cyber-Security</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Skill-Image1"></img>
                  <h5>Front-end Development</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Skill-Image2"></img>
                  <h5>Back-end Development</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Skill-Image3"></img>
                  <h5>Data Science</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Skill-Image3"></img>
                  <h5>AI/ML</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Skill-Image3"></img>
                  <h5>Game Development</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
