const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static files serve
app.use(express.static(path.join(__dirname, 'public')));

// Contact form endpoint
app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: 'All fields are required'
    });
  }

  console.log('New Contact Request:');
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Message:', message);

  res.json({
    success: true,
    message: 'Message sent successfully!'
  });
});

// Health check
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'UP',
    app: 'DevOps Node App'
  });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
