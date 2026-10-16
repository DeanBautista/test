// app.js
const express = require('express');
const app = express();
app.use(express.json());

app.get('/health', (req, res) => res.status(200).json({ status: 'ok' }));

app.get('/healths', (req, res) => res.status(200).json({ status: 'ok' }));

app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body || {};
  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' });
  }
  // real auth logic goes here
  res.status(200).json({ message: 'ok' });
});

module.exports = app;