import React from 'react';

interface ProjectProps {
  title: string;
  description: string;
  imageUrl?: string;
  demoUrl?: string;
  githubUrl?: string;
}

const Project1: React.FC<ProjectProps> = ({
  title,
  description,
  imageUrl,
  demoUrl,
  githubUrl,
}) => {
  return (
    <div className="project">
      <h3>{title}</h3>
      <p>{description}</p>
      {imageUrl && <img src={imageUrl} alt={title} />}
      {demoUrl && (
        <a href={demoUrl} target="_blank" rel="noopener noreferrer">
          Demo
        </a>
      )}
      {githubUrl && (
        <a href={githubUrl} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      )}
    </div>
  );
};

export default Project1;
