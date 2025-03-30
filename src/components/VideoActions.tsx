
import { useState } from 'react';
import { VideoClip } from '../types';
import { HeartIcon, MessageCircleIcon, ShareIcon, BookmarkIcon } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface VideoActionsProps {
  clip: VideoClip;
  onCommentClick: () => void;
}

const VideoActions = ({ clip, onCommentClick }: VideoActionsProps) => {
  const [hasLiked, setHasLiked] = useState(clip.hasLiked);
  const [likeCount, setLikeCount] = useState(clip.likes);
  const [hasBookmarked, setHasBookmarked] = useState(false);
  const { toast } = useToast();

  const handleLike = () => {
    if (hasLiked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
      // Show heart animation
      const heartAnimation = document.createElement('div');
      heartAnimation.className = 'absolute inset-0 flex items-center justify-center';
      heartAnimation.innerHTML = '<svg class="w-32 h-32 text-red-500 animate-fade-in" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path></svg>';
      
      setTimeout(() => {
        heartAnimation.remove();
      }, 1000);
    }
    setHasLiked(!hasLiked);
  };

  const handleShare = () => {
    toast({
      title: "Share",
      description: "Sharing options would appear here",
    });
  };

  const handleBookmark = () => {
    setHasBookmarked(!hasBookmarked);
    toast({
      title: hasBookmarked ? "Removed from bookmarks" : "Added to bookmarks",
      description: hasBookmarked ? "Video removed from your bookmarks" : "Video saved to your bookmarks",
    });
  };

  return (
    <div className="absolute right-4 bottom-20 flex flex-col gap-6 items-center">
      <button 
        className="flex flex-col items-center"
        onClick={handleLike}
      >
        <div className="bg-black bg-opacity-50 rounded-full p-2 like-animation">
          <HeartIcon 
            className={`h-7 w-7 ${hasLiked ? 'text-red-500 fill-current' : 'text-white'}`} 
          />
        </div>
        <span className="text-white text-xs mt-1">{likeCount > 999 ? `${(likeCount / 1000).toFixed(1)}K` : likeCount}</span>
      </button>
      
      <button 
        className="flex flex-col items-center"
        onClick={onCommentClick}
      >
        <div className="bg-black bg-opacity-50 rounded-full p-2">
          <MessageCircleIcon className="h-7 w-7 text-white" />
        </div>
        <span className="text-white text-xs mt-1">{clip.comments > 999 ? `${(clip.comments / 1000).toFixed(1)}K` : clip.comments}</span>
      </button>
      
      <button 
        className="flex flex-col items-center"
        onClick={handleShare}
      >
        <div className="bg-black bg-opacity-50 rounded-full p-2">
          <ShareIcon className="h-7 w-7 text-white" />
        </div>
        <span className="text-white text-xs mt-1">{clip.shares > 999 ? `${(clip.shares / 1000).toFixed(1)}K` : clip.shares}</span>
      </button>
      
      <button 
        className="flex flex-col items-center"
        onClick={handleBookmark}
      >
        <div className="bg-black bg-opacity-50 rounded-full p-2">
          <BookmarkIcon 
            className={`h-7 w-7 ${hasBookmarked ? 'text-app-purple fill-current' : 'text-white'}`} 
          />
        </div>
      </button>
    </div>
  );
};

export default VideoActions;
