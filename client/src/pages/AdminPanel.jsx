import React, { useState } from 'react';

const AdminPanel = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('banner', file);

    try {
      const response = await fetch('http://localhost:5000/api/blogs', {
        method: 'POST',
        body: formData, // No headers needed, browser sets "multipart/form-data"
      });
      if (response.ok) {
        alert('Blog saved!');
        window.location.reload(); // Refresh to see the new post
      }
    } catch (err) {
      console.error("Error saving blog:", err);
    }
  };

  return (
    <div className="admin-form">
      <h3>Create New Post</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Title" onChange={(e) => setTitle(e.target.value)} required />
        <textarea placeholder="Content (HTML allowed)" onChange={(e) => setContent(e.target.value)} required />
        <input type="file" accept="image/*" onChange={(e) => setFile(e.target.files[0])} />
        <button type="submit">Publish Research</button>
      </form>
    </div>
  );
};

export default AdminPanel;