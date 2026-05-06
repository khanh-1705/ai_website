import React, { useState } from "react";

function Contact() {
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('mail', mail);
    formData.append('message', message);

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
    <div className="contact">
      <div className="page-layout">
        <div className="page-visual">
          <div className="page-grid">
            <div className="page-visual-label">
              <h1 className="font-weight-light">Contact</h1>
            </div>
            <div className="page-body">
              <h2>Mia (Gia-Khanh) Truong</h2>
              <p>University of New Brunswick</p>
              <p>Faculty of Computer Science</p>
              <p>
                Email: &nbsp;
                <a href="mailto:giakhanhtruong.ca@gmail.com">giakhanhtruong.ca@gmail.com</a>
              </p>
              <p>
                LinkedIn: &nbsp;
                <a href="https://www.linkedin.com/in/mia-gia-khanh-truong-4a70642ab/">
                  linkedin.com/in/mia-gia-khanh-truong-4a70642ab
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
