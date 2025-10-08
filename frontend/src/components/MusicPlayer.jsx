import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    // Placeholder: In production, replace with actual audio file
    // audioRef.current.src = '/audio/ambient-track.mp3';
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        // Note: Auto-play might be blocked by browser policies
        audioRef.current.play().catch(err => {
          console.log('Audio playback prevented by browser:', err);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed top-6 right-6 z-50">
      <button
        onClick={togglePlay}
        className="bg-black/80 backdrop-blur-sm border border-gray-800 hover:border-red-900 p-3 rounded-full transition-all duration-300 hover:scale-110"
        aria-label={isPlaying ? 'Pause music' : 'Play music'}
      >
        {isPlaying ? (
          <Volume2 className="w-5 h-5 text-red-500" />
        ) : (
          <VolumeX className="w-5 h-5 text-gray-400" />
        )}
      </button>
      <audio ref={audioRef} loop />
    </div>
  );
};

export default MusicPlayer;
