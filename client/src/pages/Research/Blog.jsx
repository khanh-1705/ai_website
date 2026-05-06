import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const BlogDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/blogs`) // In a real app, you'd create a specific GET /api/blogs/:id route
      .then(res => res.json())
      .then(data => {
        const found = data.find(item => item._id === id);
        setPost(found);
      });
  }, [id]);

  if (!post) return <div>Select a post...</div>;

  return (
    <article className="post-card">
      
      <h2>{post.title}</h2>
      
      {/* Format the date nicely */}
      <span className="date">{new Date(post.date).toLocaleDateString()}</span>

      {post.image && <img src={`http://localhost:5000${post.image}`} alt="Research Banner" />}

      {/* Using dangerouslySetInnerHTML allows you to render HTML if you used a rich text editor */}
      <div className="content-body" dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  );
};

export default BlogDetail;