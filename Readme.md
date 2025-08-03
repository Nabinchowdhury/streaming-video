ffmpeg -i folderName/video.mp4 -map 0 -b:v 2400k -s:v 1920x1080 -c:v libx264 -an -f dash chunkFolderName/video.mpd

add '<BaseURL>http://localhost:3000/{folderName}/</BaseURL>' inside "AdaptationSet" html tag in the mpd file 
