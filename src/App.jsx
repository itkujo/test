import React from 'react';
import VideoPlayer from './components/VideoPlayer';

function App() {
  const videoJsOptions = {
    controls: true,
    responsive: true,
    fluid: true,
    autoplay: true,
    muted: true,
    controlBar: {
      children: [
        'playToggle',       // Play/Pause button
        'volumePanel',      // Volume control
        'fullscreenToggle', // Fullscreen button
        //'currentTimeDisplay', // Shows the current time of the video.
        'progressControl', // Shows the progress bar.
        //'remainingTimeDisplay', // Shows the remaining time of the video.
        //'playbackRateMenuButton', // Allows playback speed adjustment.
        //'settingsMenuButton', // Can include additional settings if using plugins.
        // You can add or remove other controls here as needed
      ],
    },
    sources: [
      {
        src: '/dollartree.mp4',
        type: 'video/mp4',
      },
    ],
  };


  const handlePlayerReady = (player) => {
    console.log('Player is ready:', player);

    // Example: Add custom event listeners or controls
    player.on('ended', () => {
      console.log('Video ended');
    });
  };

  return (
    <div className="App">
      <h1>Custom Video.js Player</h1>
      <VideoPlayer options={videoJsOptions} onReady={handlePlayerReady} />
    </div>
  );
}

export default App;