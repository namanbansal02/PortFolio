// import React from 'react';
import './App.css';
import resumePDF from './Naman_Bansal_Resume.pdf';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>Data Science Portfolio</h1>
//       </header>
//       <nav>
//         <ul>
//           <li>Home</li>
//           <li>About</li>
//           <li>Projects</li>
//         </ul>
//       </nav>
//       <main>
//         <section id="home">
//           <h2>Home</h2>
//           <p>
//             Welcome to my data science portfolio. I am passionate about leveraging data to derive meaningful insights.
//           </p>
//         </section>
//         <section id="about">
//           <h2>About Me</h2>
//           <p>
//             I am a dedicated data scientist with expertise in machine learning and data analysis. My goal is to make
//             data-driven decisions that lead to positive outcomes.
//           </p>
//         </section>
//         <section id="projects">
//           <h2>Projects</h2>
//           <ul>
//             <li>
//               <strong>Project 1:</strong> Predictive Analytics for Sales Forecasting
//               <p>Implemented machine learning models to forecast sales trends, resulting in a 20% improvement in accuracy.</p>
//             </li>
//             <li>
//               <strong>Project 2:</strong> Sentiment Analysis on Social Media Data
//               <p>Developed a sentiment analysis model to analyze social media data and understand user opinions.</p>
//             </li>
//             {/* Add more projects as needed */}
//           </ul>
//         </section>
//         <section id="resume">
//           <h2>Resume</h2>
//           <iframe title="Resume" src={resumePDF} width="100%" height="600px" />
//         </section>
//       </main>
//       <aside>
//         <h2>Skills</h2>
//         <ul>
//           <li>Data Analysis</li>
//           <li>Machine Learning</li>
//           <li>Python</li>
//           <li>SQL</li>
//           {/* Add more skills as needed */}
//         </ul>
//         <h2>Connect with Me</h2>
//         <div className="social-icons">
//           <a href="https://linkedin.com/in/namanbansal02" target="_blank" rel="noopener noreferrer">
//             <img src="linkedin-icon.png" alt="LinkedIn" />
//           </a>
//           <a href="https://github.com/namanbansal02" target="_blank" rel="noopener noreferrer">
//             <img src="github-icon.png" alt="GitHub" />
//           </a>
//           {/* Add more social icons and links as needed */}
//         </div>
//       </aside>
//       <footer>
//         <p>&copy; 2024 Data Science Portfolio</p>
//       </footer>
//     </div>
//   );
// }

// export default App;
import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';


const Home = () => (
  <section>
    <h2>Home</h2>
    <p>Welcome to my data science portfolio. I am passionate about leveraging data to derive meaningful insights.</p>
    <aside>
            <div className="social-icons">
             <a href="https://linkedin.com/in/namanbansal02" target="_blank" rel="noopener noreferrer">
               <img src="linkedin-icon.png" alt="LinkedIn" />
             </a>
             <a href="https://github.com/namanbansal02" target="_blank" rel="noopener noreferrer">
               <img src="github-icon.png" alt="GitHub" />
             </a>
             {/* Add more social icons and links as needed */}
           </div>
      </aside>
  </section>
          
);

const About = () => (
  <section>
    <h2>About Me</h2>
    <p>I am a dedicated data scientist with expertise in machine learning and data analysis. My goal is to make data-driven decisions that lead to positive outcomes.</p>
  </section>
);

const Projects = () => (
  <section>
    <h2>Projects</h2>
    <ul>
      <li>
        <strong>Project 1:</strong> Predictive Analytics for Sales Forecasting
        <p>Implemented machine learning models to forecast sales trends, resulting in a 20% improvement in accuracy.</p>
      </li>
      <li>
        <strong>Project 2:</strong> Sentiment Analysis on Social Media Data
        <p>Developed a sentiment analysis model to analyze social media data and understand user opinions.</p>
      </li>
      {/* Add more projects as needed */}
    </ul>
  </section>
);

const Resume = () => (
  <section>
    <h2>Resume</h2>
    <iframe title="Resume" src={resumePDF} width="100%" height="600px" />
  </section>
);

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Data Science Portfolio</h1>
        </header>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/resume">Resume</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
        <footer>
          <p>&copy; 2024 Data Science Portfolio</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
