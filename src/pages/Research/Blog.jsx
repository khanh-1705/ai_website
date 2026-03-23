import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Blog = () => {
  const { id } = useParams(); // Grabs 'safety-frontiers' from the URL
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`/api/posts/${id}`)
      .then(res => res.json())
      .then(data => setPost(data));
  }, [id]);

  if (!post) return <div className="loading">Loading...</div>;

  return (
    <article className="post-detail">
      <header className="detail-header">
        <p>{post.date}</p>
        <h1>{post.title}</h1>
      </header>
      <section className="detail-content">
        {post.content}
      </section>
    </article>
  );
};

export default Blog;