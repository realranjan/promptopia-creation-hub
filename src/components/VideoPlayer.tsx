
import { useState, useRef, useEffect } from 'react';
import { VideoClip } from '../types';
import { PlayIcon, PauseIcon } from 'lucide-react';

interface VideoPlayerProps {
  clip: VideoClip;
  isActive: boolean;
}

const VideoPlayer = ({ clip, isActive }: VideoPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Control video playback based on active status
  useEffect(() => {
    if (videoRef.current) {
      if (isActive) {
        videoRef.current.currentTime = 0;
        videoRef.current.play().catch(() => {
          // Autoplay may be prevented by browser settings
          setIsPlaying(false);
        });
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  }, [isActive]);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play().catch(() => {
          setIsPlaying(false);
        });
        setIsPlaying(true);
      }
    }
  };

  return (
    <div className="relative h-full w-full">
      <video
        ref={videoRef}
        src={clip.url}
        className="h-full w-full object-cover"
        loop
        muted
        playsInline
        onClick={togglePlayPause}
      />
      
      {/* Play/Pause Button */}
      <div 
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
          isPlaying ? 'opacity-0' : 'opacity-70'
        }`}
      >
        <button 
          className="bg-black bg-opacity-50 rounded-full p-6 text-white"
          onClick={togglePlayPause}
        >
          {isPlaying ? (
            <PauseIcon className="h-10 w-10" />
          ) : (
            <PlayIcon className="h-10 w-10" />
          )}
        </button>
      </div>
      
      {/* Progress bar */}
      {isPlaying && (
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-800">
          <div className="h-full bg-app-purple progress-bar"></div>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
