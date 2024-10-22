import React, { useState } from 'react';

function Contact() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !message) {
      setError("All fields are required.");
      return;
    }
    setError('');
    alert(`Message sent by ${email}: ${message}`);
  };

  return (
    <div className="bg-gray-900 p-10 rounded-lg shadow-xl max-w-2xl mx-auto text-gray-200">
      <h1 className="text-5xl font-bold text-purple-500 text-center mb-6">Contact Me</h1>
      {error && <p className="text-red-400 text-center mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 bg-gray-800 text-gray-200 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <textarea
          placeholder="Your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full px-4 py-2 bg-gray-800 text-gray-200 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <button
          type="submit"
          className="bg-purple-800 text-white px-4 py-2 rounded-lg hover:bg-purple-900 w-full"
        >
          Send Message
        </button>
      </form>
      <div className="mt-6 text-center space-y-10 space-x-3">
        <a href="https://linkedin.com/in/utkarshkhatri" className="text-purple-400 hover:text-purple-500">LinkedIn</a>
        <a href="https://github.com/utkarsh-khatri" className="text-purple-400 hover:text-purple-500">GitHub</a>
        <a href="https://twitter.com/utkarshkhatri03" className="text-purple-400 hover:text-purple-500">Twitter</a>
      </div>
    </div>
  );
}

export default Contact;
