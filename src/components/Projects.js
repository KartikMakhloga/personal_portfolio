import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.jpg";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.jpeg";
import projImg7 from "../assets/img/project-img7.png";
import projImg8 from "../assets/img/project-img8.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "YouTube Lite",
      description: "#React #redux-toolkit #tailwind",
      imgUrl: projImg8,
      view:"https://you-tube-app-two.vercel.app/",
      git:"https://github.com/KartikMakhloga/YouTube-app"
    },
    {
      title: "SpreadSheet Clone",
      description: "#HTML #CSS #JavaScript",
      imgUrl: projImg1,
      view:"https://spreadsheet2.netlify.app/",
      git:"https://github.com/KartikMakhloga/spreadsheet_clone"
    },
    {
      title: "Reels/Tiktok App",
      description: "#React #Hooks #Routes #Firebase",
      imgUrl: projImg2,
      view:"https://github.com/KartikMakhloga/Reels_App-using-react",
      git:"https://github.com/KartikMakhloga/Reels_App-using-react"
    },
    {
      title: "Blog App",
      description: "#React #AppWrite #redux-toolkit #tailwind",
      imgUrl: projImg7,
      view:"https://github.com/KartikMakhloga/blog-app",
      git:"https://github.com/KartikMakhloga/Camera-App"
    },
    {
      title: "jira ticket clone",
      description: "#HTML #CSS #JavaScript",
      imgUrl: projImg4,
      view:"https://jira-app.netlify.app/",
      git:"https://github.com/KartikMakhloga/jira_app"
    },
    {
      title: "movie app",
      description: "#React #Routes #StateManagement #API",
      imgUrl: projImg5,
      view:"https://movies-app121.netlify.app/",
      git:"https://github.com/KartikMakhloga/movies_App"
    },
    {
      title: "Tshirt AI app",
      description: "#React #tailwind #OpenAI API #ThreeJS",
      imgUrl: projImg3,
      view:"https://aishirtprint.netlify.app/",
      git:"https://github.com/KartikMakhloga/tshirtAI"
    },
    {
      title: "Online Camera App",
      description: "#HTML #CSS #JavaScript",
      imgUrl: projImg6,
      view:"https://online-camera-1.netlify.app/",
      git:"https://github.com/KartikMakhloga/Camera-App"
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
                <h2>Projects</h2>
                <p>My portfolio is a dynamic tapestry of innovation, woven together by threads of code and creativity. Within its digital realm, you'll find a constellation of projects, each a testament to my prowess in unraveling intricate real-world enigmas. These creations are more than mere code; they're living entities, bridging the gap between ambition and execution. Step into my realm and witness firsthand how I've orchestrated technology, tamed complexity, and sculpted solutions that dance harmoniously with the ever-changing rhythms of the digital universe.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
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
                      <p>coming soon</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Coming soon</p>
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
