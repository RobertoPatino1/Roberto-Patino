import { Col } from "react-bootstrap";

export const ProjectCard = ({
  title,
  description,
  imgUrl,
  deployedUrl,
  repositoryUrl,
}) => {
  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="projectImg" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <br />
          {deployedUrl && (
            <>
              <a
                className="projectLink"
                href={deployedUrl}
                target="_blank"
                rel="noreferrer"
              >
                Deployed Project
              </a>
              <br />
            </>
          )}
          {repositoryUrl && (
            <a
              className="projectLink"
              href={repositoryUrl}
              target="_blank"
              rel="noreferrer"
            >
              Project Repository
            </a>
          )}
        </div>
      </div>
    </Col>
  );
};
