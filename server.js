const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.static(__dirname));
// Explicit routes for named HTML pages — must come before the catch-all
app.get('/about', (req, res) => res.sendFile(path.join(__dirname, 'about.html')));
app.get('/about.html', (req, res) => res.sendFile(path.join(__dirname, 'about.html')));
// SPA fallback — serves index.html for any other unmatched route
app.get('*', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));
app.listen(PORT, () => console.log(`Mindforia running on port ${PORT}`));
