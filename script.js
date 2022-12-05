var playBtn = document.getElementById('playBtn')

    var wavesurfer = WaveSurfer.create({
      container: '#waveform',
      waveColor: '#ddd',
      progressColor: '#212121',
      barWidth: 2,
      responsive: true,
      height: 90,
    })

    wavesurfer.load('media/audio.wav')

    playBtn.onclick = function(){
      wavesurfer.playPause()
      if(playBtn.src.includes('play.png')){
        playBtn.src = "media/pause.png"
      }else{
        playBtn.src = "media/play.png"
      }
    }

    wavesurfer.on('finish', function(){
      playBtn.src = "media/play.png"
      wavesurfer.stop()
    })
