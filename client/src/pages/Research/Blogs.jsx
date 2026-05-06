import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';


const Research = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Fetch from your backend URL
    fetch('http://localhost:5000/api/blogs')
      .then(res => res.json())
      .then(data => setBlogs(data))
      .catch(err => console.error("Fetch error:", err));
  }, []);

  return (
    <div className="research-layout">
      <h2>Research Blogs</h2>
      <main className="blog-grid"> 
        <div className="sidebar">
          {blogs.length === 0 ? <p>No papers yet...</p> : (
            blogs.toReversed().map(blog => (
              <Link key={blog._id} to={`/research/${blog._id}`} className="nav-link">
                <article key={blog._id} className="blog-card">
                  {blog.image && <img src={`http://localhost:5000${blog.image}`} alt="Blog Img" />} <br />
                </article>
                <div className="card-info">
                  <span className="date">{new Date(blog.date).toLocaleDateString()}</span>
                  <h3>{blog.title}</h3>
                </div>
              </Link>
            ))
          )}
        </div>
      </main>
    </div>
  );
};

export default Research;