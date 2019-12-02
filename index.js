

      function getFile() {
        const dl = require('ytdl-core');
        const fs = require('fs');
        try {
          var text = document.getElementById("videoinput").value;
          dl(text).pipe(fs.createWriteStream('video.mp4'));
          alert("Completed!");
        } catch(e) {
          alert(e);
        } 
      }
