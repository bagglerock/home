import React from 'react';

export const Card: React.FC<CardProps> = props => {
  const { name, img, githubLink, projectLink, description } = props;

  return (
    <>
      <div className="card-header">
        <h5>{name}</h5>
      </div>

      {img !== null && <Image img={img} />}

      {projectLink != null && githubLink != null && <Links projectLink={projectLink} githubLink={githubLink} />}

      <div className="card-description">
        <p>{description}</p>
      </div>
    </>
  );
};

interface CardProps {
  name: string;
  img: any;
  githubLink?: string;
  projectLink?: string;
  description?: string;
}

const Image: React.FC<{ img: string }> = ({ img }) => (
  <div className="card-image">
    <img src={img} alt={img} />
  </div>
);

const Links: React.FC<{ projectLink: string; githubLink: string }> = ({ projectLink, githubLink }) => (
  <div className="card-links">
    <div>
      <a href={projectLink} target="_blank" rel="noopener noreferrer">
        Website
      </a>
    </div>
    <div>
      <a href={githubLink} target="_blank" rel="noopener noreferrer">
        Github
      </a>
    </div>
  </div>
);
