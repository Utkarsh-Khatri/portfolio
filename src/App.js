import React from "react";
import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Blog from "./components/Blog";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
// import U from './assets/images/U.jpg'; // Import your logo here

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-purple-900 to-indigo-900 text-gray-200 min-h-100vh">
        <nav className="bg-purple-950 p-4 shadow-md flex items-center justify-between">
          <div className="flex items-center ml-8">
            <img src="U.jpg" alt="Logo" className="h-10 w-10 rounded-full mr-3" /> {/* Logo here */}
            
          </div>
          <ul className="flex justify-center space-x-8">
            <li>
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `text-lg px-3 py-2 rounded-md font-semibold ${isActive ? 'bg-purple-700' : 'hover:bg-purple-800'}`
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `text-lg px-3 py-2 rounded-md font-semibold ${isActive ? 'bg-purple-700' : 'hover:bg-purple-800'}`
                }
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/skills"
                className={({ isActive }) =>
                  `text-lg px-3 py-2 rounded-md font-semibold ${isActive ? 'bg-purple-700' : 'hover:bg-purple-800'}`
                }
              >
                Skills
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  `text-lg px-3 py-2 rounded-md font-semibold ${isActive ? 'bg-purple-700' : 'hover:bg-purple-800'}`
                }
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  `text-lg px-3 py-2 rounded-md font-semibold ${isActive ? 'bg-purple-700' : 'hover:bg-purple-800'}`
                }
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/resume"
                className={({ isActive }) =>
                  `text-lg px-3 py-2 rounded-md font-semibold ${isActive ? 'bg-purple-700' : 'hover:bg-purple-800'}`
                }
              >
                Resume
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className="p-8">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </div>

        
      </div>
      <Footer />
    </Router>
  );
}

export default App;
