
import { useState, useRef, useEffect } from 'react';
import { Comment } from '../types';
import { X, Heart, Send } from 'lucide-react';
import { mockComments } from '../data/mockData';
import { Button } from '@/components/ui/button';

interface CommentsProps {
  isOpen: boolean;
  onClose: () => void;
  videoId: string;
}

const Comments = ({ isOpen, onClose, videoId }: CommentsProps) => {
  const [comments, setComments] = useState<Comment[]>(mockComments);
  const [newComment, setNewComment] = useState("");
  const commentsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const handleLikeComment = (commentId: string) => {
    setComments(comments.map(comment => 
      comment.id === commentId 
        ? { ...comment, likes: comment.likes + 1 } 
        : comment
    ));
  };

  const handleAddComment = () => {
    if (newComment.trim()) {
      const newCommentObj: Comment = {
        id: `new-${Date.now()}`,
        userId: "currentUser",
        username: "you",
        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=250&auto=format&fit=crop",
        text: newComment,
        likes: 0,
        timestamp: "Just now"
      };
      
      setComments([newCommentObj, ...comments]);
      setNewComment("");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-end justify-center animate-fade-in">
      <div 
        ref={commentsRef}
        className="bg-card rounded-t-xl w-full max-w-md max-h-[80vh] animate-slide-up flex flex-col"
      >
        <div className="p-4 border-b border-border flex items-center justify-between">
          <h3 className="font-semibold text-lg">Comments</h3>
          <button onClick={onClose} className="p-1 rounded-full hover:bg-secondary">
            <X className="h-5 w-5" />
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {comments.map(comment => (
            <div key={comment.id} className="flex gap-3">
              <img 
                src={comment.avatar} 
                alt={comment.username} 
                className="h-8 w-8 rounded-full object-cover flex-shrink-0" 
              />
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-sm">{comment.username}</span>
                  <span className="text-xs text-muted-foreground">{comment.timestamp}</span>
                </div>
                <p className="text-sm mt-1">{comment.text}</p>
                <div className="flex items-center gap-2 mt-1">
                  <button 
                    className="text-xs text-muted-foreground hover:text-foreground"
                    onClick={() => handleLikeComment(comment.id)}
                  >
                    Like
                  </button>
                  <span className="text-xs text-muted-foreground">{comment.likes} likes</span>
                </div>
              </div>
              <button onClick={() => handleLikeComment(comment.id)}>
                <Heart className="h-4 w-4 text-muted-foreground hover:text-red-500" />
              </button>
            </div>
          ))}
        </div>
        
        <div className="p-3 border-t border-border flex gap-2 items-center">
          <input
            type="text"
            placeholder="Add a comment..."
            className="flex-1 bg-secondary rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-app-purple"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleAddComment()}
          />
          <Button 
            onClick={handleAddComment} 
            disabled={!newComment.trim()}
            className="rounded-full bg-app-purple hover:bg-app-purple-dark p-2"
            size="icon"
          >
            <Send className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Comments;
