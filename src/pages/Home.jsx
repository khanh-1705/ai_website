import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetching from your Node.js server (Port 5000)
    fetch('/api/posts')
      .then(res => res.json())
      .then(data => setPosts(data));
  }, []);

  return (
    <main className="hero">
      <div className="hero-content">
        <h1 className="reveal-text">AI research and products...</h1>
        
        <div className="post-list">
          {posts.map(post => (
            <div key={post.id} className="post-card fade-in">
              <span>{post.date}</span>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              {/* This Link triggers the "Jump" to the specific ID */}
              <Link to={`/research/${post.id}`} className="btn-text">
                Read research →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Home;