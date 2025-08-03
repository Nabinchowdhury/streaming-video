const express = require('express');
const path = require('path');
const cors = require('cors');
const fs = require('fs');

const app = express();
const port = 3000;

// Enable cors for all routes
app.use(cors());

// app.get('/video', express.static(path.join(__dirname, 'video')))

app.get('/video.mpd', (req, res) => {
    const filePath = path.join(__dirname, 'video', 'video.mpd');
    console.log(filePath);
    res.sendFile(filePath);
});

// Serve the DASH segment files
app.get('/video/:segment', (req, res) =>{
    const segment = req.params.segment;
    console.log(__dirname);
    const filePath = path.join(__dirname, 'video', segment);
    console.log(filePath);
    res.sendFile(filePath);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});