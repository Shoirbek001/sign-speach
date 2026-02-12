/**
 * Sign-Speech App - Backend server
 * Express server: static fayllarni public/ orqali servis qiladi.
 * Kelajakda: API routes, 3D avatar, AI sign recognition uchun kengaytirish mumkin.
 */

const path = require('path');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

// Static fayllar - public papkasi
app.use(express.static(path.join(__dirname, 'public')));

// Bosh sahifa - index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Imo-ishora sahifasi
app.get('/sign', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'sign.html'));
});

// Kelajakda API endpoints (masalan: /api/translate, /api/avatar)
// app.use('/api', require('./routes/api'));

app.listen(PORT, () => {
  console.log(`Server ishga tushdi: http://localhost:${PORT}`);
  console.log('  - Speech to Text: http://localhost:' + PORT + '/');
  console.log('  - Imo-ishora:     http://localhost:' + PORT + '/sign.html');
});
