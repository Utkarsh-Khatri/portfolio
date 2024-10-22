import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-10">
      <div className="max-w-6xl mx-auto px-4">
        {/* Footer Navigation */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Navigation Links */}
          <nav className="mb-6 md:mb-0">
            <ul className="flex space-x-6 text-lg">
              <li>
                <NavLink
                  to="/"
                  className="hover:text-purple-400 transition-colors"
                >
                  Home
                </NavLink>
              </li>
             
              <li>
                <NavLink
                  to="/projects"
                  className="hover:text-purple-400 transition-colors"
                >
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blog"
                  className="hover:text-purple-400 transition-colors"
                >
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className="hover:text-purple-400 transition-colors"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a
              href="https://linkedin.com/in/utkarshkhatri"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-500 text-2xl"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/utkarsh-khatri"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-500 text-2xl"
            >
              <FaGithub />
            </a>
            <a
              href="https://x.com/UtkarshKhatri03"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-500 text-2xl"
            >
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Divider Line */}
        <div className="border-t border-gray-700 my-6"></div>

        {/* Copyright Notice */}
        <p className="text-center text-gray-400 text-sm">
          © 2024 Utkarsh Khatri. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
