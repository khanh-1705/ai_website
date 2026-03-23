import { useEffect } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from './pages/About';
import Blogs from './pages/Research/Blogs';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Blog from './pages/Research/Blog'; 

// 1. Move the Hero content to a separate component
const Home = () => (
  <main className="hero">
    <div className="hero-content">
      <h1 className="reveal-text">AI research and products that put safety at the frontier.</h1>
      <p className="fade-in">Anthropic is an AI safety and research company that’s working to build reliable, interpretable, and steerable AI systems.</p>
      <div className="cta-group">
        <button className="btn-primary">Try Claude</button>
        <button className="btn-text">Read our research →</button>
      </div>
    </div>
  </main>
);

function App() {
  // 2. Wrap your animation logic in useEffect
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
  }, []); // Empty array means "run once on load"

  return (
    <Router>
      <nav className="navbar">
        <div className="logo">
          <Link to="/">
            <img src="/src/assets/anthropic.png" alt="Logo" />
          </Link>
        </div>
        <div className="nav-links">
          <Link to="/about">About</Link>
          <Link to="/research">Research</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/login" className="btn-secondary">Log in</Link>
        </div>
      </nav>

      {/* 3. The Routes now swap the Home component for other pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/research" element={<Blogs />} />
        
        {/* THIS IS THE DYNAMIC JUMP */}
          <Route path="/research/:id" element={<Blog />} />
        
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;