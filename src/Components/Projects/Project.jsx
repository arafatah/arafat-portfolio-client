import React from 'react';

const Project = ({ project }) => {
  const { name, img, description, live, code, technologies } = project;

  return (
    <div className="card bg-base-100 shadow-xl p-2 rounded-lg">
      <figure>
        <img src={img} alt={name} className="w-full h-40 object-cover mb-4 rounded-md" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-xl font-bold mb-2">{name}</h2>
        <p className="text-base text-base-content opacity-80 mb-4">{description}</p>
        <div className="flex space-x-4">
          <a href={live} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Live
          </a>
          <a href={code} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
            Code
          </a>
        </div>
        <div className="mt-4 flex space-x-2">
          {technologies.map((tech, index) => (
            <span key={index} className="badge badge-outline">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;