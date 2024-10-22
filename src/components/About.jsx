import React from 'react';
// import profileImage from '../images/profile.jpg'; // Profile image

function About() {
  return (
    <div className="bg-gray-900 p-10 rounded-lg shadow-xl max-w-2xl mx-auto text-gray-200">
      <div className="text-center">
        <img
          src="utkarsh.jpg"
          alt="Profile"
          className="w-40 h-40 rounded-full mx-auto mb-6 border-4 border-purple-800 shadow-md"
        />
        <h1 className="text-5xl font-bold text-purple-500 mb-4">Utkarsh Khatri</h1>
        <p className="text-lg leading-relaxed mb-6">
          I'm a passionate full-stack developer with experience in React, Django, and data engineering. I focus on building clean, efficient, and scalable web applications. 
          I have a strong interest in artificial intelligence, and I’m always excited to learn new technologies and best practices.
        </p>
        <blockquote className="text-xl font-light italic text-gray-400 mb-6">
          "Code is like humor. When you have to explain it, it's bad." - Cory House
        </blockquote>
        <div className="flex justify-center space-x-4 mb-6">
          <a href="https://linkedin.com/in/utkarshkhatri" className="text-purple-400 hover:text-purple-500">LinkedIn</a>
          <a href="https://github.com/utkarsh-khatri" className="text-purple-400 hover:text-purple-500">GitHub</a>
          <a href="https://twitter.com/utkarshkhatri03" className="text-purple-400 hover:text-purple-500">Twitter</a>
        </div>
        <div className="mt-8 text-lg">
          <h2 className="text-3xl font-bold mb-4 text-purple-400">Interests & Hobbies</h2>
          <p>
            When I’m not coding, I enjoy hiking, photography, and exploring new tech trends. I'm also a big fan of sci-fi movies and books!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
