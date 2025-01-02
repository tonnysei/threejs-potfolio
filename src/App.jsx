import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Footer from './sections/Footer.jsx';
import Navbar from './sections/Navbar.jsx';
import Contact from './sections/Contact.jsx';
import Clients from './sections/Clients.jsx';
import Projects1 from './sections/Projects1.jsx';
import Projects2 from './sections/Projects2.jsx';
import Projects3 from './sections/Projects3.jsx';
import Projects4 from './sections/Projects4.jsx';
import Features from './sections/Features.jsx';

const App = () => {
  return (
    <main className="max-w-7xl mx-auto relative">
      <Navbar />
      <Hero />
      <About />
      <Projects1 />
      <Projects2 />
      <Projects3 />
      <Projects4 />
      <Clients />
      <Features/>
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
