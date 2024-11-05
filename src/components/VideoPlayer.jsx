import React, { useEffect, useRef } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

const VideoPlayer = ({ options, onReady }) => {
    const videoRef = useRef(null);
    const playerRef = useRef(null);

    useEffect(() => {
        // Use setTimeout to delay initialization slightly
        const timeoutId = setTimeout(() => {
            if (playerRef.current === null) {
                const videoElement = videoRef.current;

                if (videoElement) {
                    const player = (playerRef.current = videojs(videoElement, options, () => {
                        onReady && onReady(player);
                        console.log('Player initialized');
                    }));
                } else {
                    console.warn('Video element not found');
                }
            }
        }, 100); // Adjust delay as needed

        return () => {
            // Dispose of the player on component unmount
            clearTimeout(timeoutId);
            if (playerRef.current) {
                playerRef.current.dispose();
                playerRef.current = null;
                console.log('Player disposed');
            }
        };
    }, [options, onReady]);

    return (
        <div data-vjs-player>
            <video ref={videoRef} className="video-js vjs-big-play-centered" />
        </div>
    );
};

export default VideoPlayer;