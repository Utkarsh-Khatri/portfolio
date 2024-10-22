import React from 'react';

function Projects() {
  const projects = [
    {
      title: "Stroke Prediction Model",
      description: "A machine learning model to predict stroke likelihood using various health indicators and lifestyle choices.",
      techStack: "Python, Scikit-Learn, Pandas",
      image: "/stroke.jpg", // Correct path
      link: "https://github.com/Utkarsh-Khatri/Stroke-prediction"
    },
    {
      title: "Django Venue Booking Website",
      description: "An website built using Django for a seamless online venue booking experience.",
      techStack: "Django, JavaScript, HTML/CSS",
      image: "/bmv_logo.png", // Correct path
      link: "https://github.com/Utkarsh-Khatri/bmv"
    },
  ];

  return (
    <div className="bg-gray-900 p-10 rounded-lg shadow-xl max-w-4xl mx-auto text-gray-200">
      <h1 className="text-5xl font-bold text-purple-500 text-center mb-8">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <img src={project.image} alt={project.title} className="w-full h-40 object-cover mb-4 rounded-lg" />
            <h2 className="text-2xl font-semibold text-purple-400">{project.title}</h2>
            <p className="text-lg text-gray-300 mt-2">{project.description}</p>
            <p className="text-sm text-gray-500 mt-2">{project.techStack}</p>
            <a
              href={project.link}
              className="block text-center bg-purple-800 text-white px-4 py-2 rounded-lg hover:bg-purple-900 mt-4"
            >
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
