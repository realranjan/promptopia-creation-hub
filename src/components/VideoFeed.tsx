
import { useState, useRef, useEffect } from 'react';
import { VideoClip, Category } from '../types';
import VideoPlayer from './VideoPlayer';
import VideoActions from './VideoActions';
import VideoInfo from './VideoInfo';
import Comments from './Comments';

interface VideoFeedProps {
  videos: VideoClip[];
  category: Category;
}

const VideoFeed = ({ videos, category }: VideoFeedProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showComments, setShowComments] = useState(false);
  const [currentVideoId, setCurrentVideoId] = useState<string | null>(null);
  
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Handle scroll to detect active video
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    const handleScroll = () => {
      if (container) {
        const scrollTop = container.scrollTop;
        const height = container.clientHeight;
        const index = Math.round(scrollTop / height);
        setActiveIndex(index);
      }
    };
    
    container.addEventListener('scroll', handleScroll);
    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const handleCommentClick = (videoId: string) => {
    setCurrentVideoId(videoId);
    setShowComments(true);
  };
  
  return (
    <div 
      className="clip-container pb-16" 
      ref={containerRef}
    >
      {videos.map((clip, index) => (
        <div key={clip.id} className="clip-item relative">
          <VideoPlayer 
            clip={clip} 
            isActive={index === activeIndex} 
          />
          <VideoInfo clip={clip} />
          <VideoActions 
            clip={clip} 
            onCommentClick={() => handleCommentClick(clip.id)} 
          />
        </div>
      ))}
      
      <Comments 
        isOpen={showComments} 
        onClose={() => setShowComments(false)} 
        videoId={currentVideoId || ''} 
      />
    </div>
  );
};

export default VideoFeed;
