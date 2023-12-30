import { Col } from "react-bootstrap";
import eye from "../assets/img/eye.svg";
import github from "../assets/img/github.svg";

export const ProjectCard = ({ title, description, imgUrl, view ,git}) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <p>{description}</p>
          <div className="social-icon">
                <a href={view} target="_blank">
                  <img src={eye} alt="" />
                </a>

                <a href={git} target="_blank">
                  <img src={github} alt="" />
                </a>
              </div>
        </div>
      </div>
    </Col>
  );
};
