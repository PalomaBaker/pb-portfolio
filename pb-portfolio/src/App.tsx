import React from 'react';
import Header from './components/Header';
import Project1 from './components/Project1';
import Project2 from './components/Project2';
import Project3 from './components/Project3';

const App = () => {
  return (
    <div>
      <Header />

      <main>
        <section id="projects">
          <h2>Projects</h2>
          <Project1 />
          <Project2 />
          <Project3 />
        </section>

        {/* Rest of your code */}
      </main>

      {/* Footer code */}
    </div>
  );
};

export default App;
