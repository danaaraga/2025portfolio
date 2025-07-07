import './index.css'
import Navbar from './components/Navbar';
import Home from './components/Hero';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';


function App() {
  return (
    <div className="font-sans bg-white" style={{ color: '#D1D5DB' }}>
      <Navbar />
      <main className="container mx-auto px-4">
        <Home />
        <AboutMe />
        <Skills />
        <Certifications />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;