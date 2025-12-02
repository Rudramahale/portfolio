import React from 'react';
import Navbar from './components/Navbar';
import Cursor from './components/Cursor';
import Home from './sections/Home';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

function App() {
  return (
    <div className="bg-dark text-light min-h-screen">
      <Cursor />
      <Navbar />
      <main>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
