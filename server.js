const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Named page routes — must come BEFORE express.static so they are never shadowed
app.get('/about',       (req, res) => res.sendFile(path.join(__dirname, 'about.html')));
app.get('/about.html',  (req, res) => res.sendFile(path.join(__dirname, 'about.html')));
app.get('/privacy',     (req, res) => res.sendFile(path.join(__dirname, 'privacy.html'), () => res.sendFile(path.join(__dirname, 'index.html'))));

// Static assets (images, CSS, JS, etc.)
app.use(express.static(__dirname));

// SPA fallback — serves index.html for any other unmatched route
app.get('*', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

app.listen(PORT, () => console.log(`Mindforia running on port ${PORT}`));

