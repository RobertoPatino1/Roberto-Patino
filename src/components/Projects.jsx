import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { dev_projects } from "../assets/js/projects";
import { low_level_projects } from "../assets/js/projects";
import { ds_projects } from "../assets/js/projects";
import { game_projects } from "../assets/js/projects";
import { desktop_projects } from "../assets/js/projects";

export const Projects = () => {
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    These are some of my most remarkable projects, spanning
                    various domains including software development, CLI tools,
                    Data Science, Game Development and some Desktop
                    Applications. Each one represents not only my technical
                    proficiency but also my passionate approach to
                    problem-solving and innovation.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Web Development</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">
                          CLI Tools/Low Level
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Data Science/ML</Nav.Link>
                      </Nav.Item>
                      {/* Nuevas Pestañas */}
                      <Nav.Item>
                        <Nav.Link eventKey="fourth">Game Development</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="fifth">
                          Desktop Applications
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__fadeIn" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {dev_projects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {low_level_projects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {ds_projects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="fourth">
                        <Row>
                          {game_projects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>{" "}
                      </Tab.Pane>
                      <Tab.Pane eventKey="fifth">
                        <Row>
                          {desktop_projects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>{" "}
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
