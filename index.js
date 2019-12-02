      const ytdl = require('ytdl-core');
      const fs = require('fs');

      function getFile() {
        try {
          var text = document.getElementById("videoinput").value;
          ytdl(text).pipe(fs.createWriteStream('video.mp4'));
          alert("Completed!");
        } catch(e) {
          alert(e);
        } 
      }
