import { Col, Container, Row } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-item-center">
          <Col sm={6}>
            <img src={logo} alt="Logo"></img>
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/roberto-andres-patino/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={navIcon1} alt="socials1" />
              </a>
              <a
                href="https://github.com/RobertoPatino1"
                target="_blank"
                rel="noreferrer"
              >
                <img src={navIcon2} alt="socials2" />
              </a>
            </div>
            <p>CopyRight 2024. All Rights Reserverd</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
