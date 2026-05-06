require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const Blog = require('./models/Blog');

const app = express();
// CORS (Cross-Origin Resource Sharing)
app.use(cors());
app.use(express.json());
// Make the uploads folder public so React can see the images
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const uri = process.env.MONGODB_URI; 

// 1. Database Connection (Replace with your MongoDB Atlas URI)
mongoose.connect(uri)
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.log(err));

// 2. Image Upload Logic
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname)
});
const upload = multer({ storage });

// 3. The ROUTE to save a blog
app.post('/api/blogs', upload.single('banner'), async (req, res) => {
  try {
    const newBlog = new Blog({
      title: req.body.title,
      content: req.body.content,
      image: req.file ? `/uploads/${req.file.filename}` : null
    });
    const savedBlog = await newBlog.save();
    res.status(200).json(savedBlog);
  } catch (err) {
    res.status(500).json(err);
  }
});

// 4. The ROUTE to get all blogs (to replace your JSON file)
app.get('/api/blogs', async (req, res) => {
  const blogs = await Blog.find();
  res.json(blogs);
});

app.listen(5000, () => console.log("Server running on port 5000"));