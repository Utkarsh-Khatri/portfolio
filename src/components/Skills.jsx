import React from 'react';
import { FaPython, FaReact, FaDatabase, FaGit } from 'react-icons/fa';

function Skills() {
  return (
    <div className="bg-gray-900 p-10 rounded-lg shadow-xl max-w-2xl mx-auto text-gray-200">
      <h1 className="text-5xl font-bold text-purple-500 text-center mb-6">My Skills</h1>
      <div className="grid grid-cols-1 gap-4 text-center">
        <div>
          <FaPython className="text-4xl mx-auto text-purple-400" />
          <h2 className="text-2xl font-semibold mt-2">Python</h2>
          <div className="w-full bg-gray-800 rounded-full h-2.5 mb-4">
            <div className="bg-purple-600 h-2.5 rounded-full" style={{ width: '85%' }}></div>
          </div>
        </div>
        <div>
          <FaReact className="text-4xl mx-auto text-purple-400" />
          <h2 className="text-2xl font-semibold mt-2">React</h2>
          <div className="w-full bg-gray-800 rounded-full h-2.5 mb-4">
            <div className="bg-purple-600 h-2.5 rounded-full" style={{ width: '90%' }}></div>
          </div>
        </div>
        <div>
          <FaDatabase className="text-4xl mx-auto text-purple-400" />
          <h2 className="text-2xl font-semibold mt-2">Databases</h2>
          <div className="w-full bg-gray-800 rounded-full h-2.5 mb-4">
            <div className="bg-purple-600 h-2.5 rounded-full" style={{ width: '80%' }}></div>
          </div>
        </div>
        <div>
          <FaGit className="text-4xl mx-auto text-purple-400" />
          <h2 className="text-2xl font-semibold mt-2">Git & Version Control</h2>
          <div className="w-full bg-gray-800 rounded-full h-2.5 mb-4">
            <div className="bg-purple-600 h-2.5 rounded-full" style={{ width: '75%' }}></div>
          </div>
        </div>
      </div>
      <h2 className="text-3xl font-bold mt-8 text-purple-400">Soft Skills</h2>
      <ul className="list-disc space-y-2 pl-6 mt-4 text-gray-300">
        <li className="text-lg">Effective Communication</li>
        <li className="text-lg">Team Collaboration</li>
        <li className="text-lg">Problem Solving</li>
        <li className="text-lg">Adaptability</li>
      </ul>
    </div>
  );
}

export default Skills;
