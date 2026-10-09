import { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Achievements from './components/Achievements';
import Fields from './components/Fields';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  // Intersection Observer for reveal animations on scroll
  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    };

    const observerOptions = {
      threshold: 0.05,
      rootMargin: "0px 0px -20px 0px"
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => {
      observer.observe(el);
      // Immediately activate if already in viewport
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        el.classList.add('active');
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Achievements />
        <Fields />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
