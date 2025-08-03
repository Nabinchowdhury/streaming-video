const express = require('express');
const path = require('path');
const cors = require('cors');
const fs = require('fs');

const app = express();
const port = 3000;

// Enable cors for all routes
app.use(cors());

app.get('/video.mpd', (req, res) => {
    console.log('called mpd', __dirname);
    const filePath = path.join(__dirname, 'ffmpeg_chunk', 'video_3.mpd');
    console.log(filePath);
    res.sendFile(filePath);
});

// Serve the DASH segment files
app.get('/video/:segment', (req, res) =>{
    const segment = req.params.segment;
    console.log('called segment', segment);
    const filePath = path.join(__dirname, 'ffmpeg_chunk', segment);
    console.log(filePath);
    res.sendFile(filePath);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});