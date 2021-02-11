import React from "react";
import Navbar from './navbar';
import Intro from './intro';
import About from './about';
import Projects from './projects';
import Contact from './contact';
import Tech from './tech';


const App = () => {
  return (
    <div>
      <Navbar />
      <Intro />
      <Tech />
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
