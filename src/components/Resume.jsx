import React from 'react';

function Resume() {
  const pdfFile = "/resume.pdf"; // Assuming you have a resume PDF in your public folder

  return (
    <div className="bg-gray-900 p-10 rounded-lg shadow-xl max-w-xl mx-auto text-gray-200">
      <h1 className="text-5xl font-bold text-purple-500 text-center mb-6">Resume</h1>
      <p className="text-lg text-gray-400">
        Download my resume below to learn more about my work experience, skills, and education.
      </p>
      <a
        href={pdfFile}
        download
        className="block text-center bg-purple-800 text-white px-4 py-2 rounded-lg hover:bg-purple-900 mt-4"
      >
        Download Resume
      </a>

      <div className="mt-6">
        <h2 className="text-2xl font-semibold text-purple-400">Education</h2>
        <p className="text-lg text-gray-300 mt-2">B.Sc. in Artificial Intelligence - University Name</p>
        <p className="text-sm text-gray-500 mt-2">2022 - Present</p>

        <h2 className="text-2xl font-semibold text-purple-400 mt-6">Experience</h2>
        <p className="text-lg text-gray-300 mt-2">Executive Assistant at XYZ</p>
        <p className="text-sm text-gray-500 mt-2">2024 - Present</p>
      </div>
    </div>
  );
}

export default Resume;
