import './index.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Teamwork from './components/Teamwork';
import Contact from './components/Contact';


function App() {
  return (
    <div className="font-sans" style={{ backgroundColor: '#1E2329', color: '#D1D5DB' }}>
      <Navbar />
      <main className="container mx-auto py-8 px-4">
        <Hero />
        <Skills />
        <Projects />
        <Certifications />
        <Teamwork />
        <Contact />
      </main>
    </div>
  );
}

export default App;