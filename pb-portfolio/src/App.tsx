import React from 'react';
import Header from './components/Header';

const App = () => {
  return (
    <div>
      <Header />

      <main>
        <section id="projects">
          <h2>Projects</h2>
          <Project // - update with project info 
            title="Project 1"
            description="Description of Project 1"
            // Add any other relevant props for the project component
          />
          <Project
            title="Project 2"
            description="Description of Project 2"
            // Add any other relevant props for the project component
          />
          <Project
            title="Project 3"
            description="Description of Project 3"
            // Add any other relevant props for the project component
          />
        </section>

        <section id="contact">
          <h2>Contact</h2>
          <form>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
            <button type="submit">Send</button>
          </form>
        </section>
      </main>

      <footer>
        <ul>
          <li><a href="https://www.linkedin.com">LinkedIn</a></li>
        </ul>
      </footer>
    </div>
  );
};

export default App;
