import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg2 from "../assets/img/project-img2.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg2 from "../assets/img/project-img2.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Oi, eu sou a Nina!",
      description: "Conheça minha história",
      imgUrl: projImg2,
    },
    {
      title: "Oi, eu sou o Thor!",
      description: "Conheça minha história",
      imgUrl: projImg2,
    },
    {
      title: "Oi, eu sou o Haroldo!",
      description: "Conehça minha história",
      imgUrl: projImg2,
    },
    {
      title: "Oi, eu sou a bela!",
      description: "Conheça minha história",
      imgUrl: projImg2,
    },
    {
      title: "Oi, eu sou o Mike!",
      description: "Conehça minha história",
      imgUrl: projImg2,
    },
    {
      title: "Oi, eu sou a Luna",
      description: "Conehça minha história",
      imgUrl: projImg2,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Adote</h2>
                <p>Procura-se um amigo para toda a vida</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      {/* <Nav.Link eventKey="first">Tab 1</Nav.Link> */}
                    </Nav.Item>
                    <Nav.Item>
                      {/* <Nav.Link eventKey="second">Tab 2</Nav.Link> */}
                    </Nav.Item>
                    <Nav.Item>
                      {/* <Nav.Link eventKey="third">Tab 3</Nav.Link> */}
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
