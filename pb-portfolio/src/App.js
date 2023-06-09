import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Paloma Baker</h1>
        <nav>
          <ul>
            <li><a href="#about">About Me</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#resume">Resume</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="about-me-section">
          <h2>About Me</h2>
          <img src="avatar.jpg" alt="My Avatar" />
        </section>
        <div id="about-me-content">
          <h2>About Me</h2>
          <p>
            Hi, I'm Paloma Baker, a passionate full-stack developer. I recently completed the UCDavis Full Stack coding bootcamp, where I obtained my certification. At 23 years old, I am enthusiastic about leveraging my skills and knowledge to create innovative web applications.
          </p>
          <p>
            I have a particular love for JavaScript and enjoy working with its dynamic nature and versatility. It fascinates me how JavaScript empowers developers to build interactive and responsive web experiences.
          </p>
          <p>
            Beyond coding, I have a deep passion for outdoor adventures. You can often find me exploring the great outdoors through hiking, backpacking, and running. I believe that a healthy body fuels a healthy mind, so I also enjoy hitting the gym and staying active.
          </p>
          <p>
            One of my strongest traits is my ability to take initiative. I am not afraid to dive into new technologies and continuously seek ways to expand my skill set. I embrace challenges and persevere through obstacles, always striving for growth and improvement. Adaptability and flexibility are also essential qualities that allow me to thrive in dynamic and fast-paced environments.
          </p>
          <p>
            I am excited to connect with like-minded individuals, collaborate on projects, and contribute to the web development community. Let's create something remarkable together!
          </p>
        </div>


        <section id="portfolio">
          <h2>Portfolio</h2>
          {/* Titled images and links to applications and corresponding GitHub repos */}
        </section>

        <section id="contact">
          <h2>Contact</h2>
          <form>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" required />

            <label htmlFor="message">Message:</label>
            <textarea id="message" required></textarea>

            <button type="submit">Send</button>
          </form>
        </section>

        <section id="resume">
          <h2>Resume</h2>
          <a href="resume.pdf" download>Download Resume</a>
          <ul>
            <li>Proficiency 1</li>
            <li>Proficiency 2</li>
            <li>Proficiency 3</li>
            {/* Add more proficiencies as needed */}
          </ul>
        </section>
      </main>

      <footer>
        <ul>
          <li><a href="https://github.com">GitHub</a></li>
          <li><a href="https://linkedin.com">LinkedIn</a></li>
          <li><a href="https://stackoverflow.com">Stack Overflow</a></li>
          {/* Add links to other platforms as needed */}
        </ul>
      </footer>
    </div>
  );
}

export default App;
