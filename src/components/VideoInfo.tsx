
import { VideoClip } from '../types';
import { Button } from '@/components/ui/button';

interface VideoInfoProps {
  clip: VideoClip;
}

const VideoInfo = ({ clip }: VideoInfoProps) => {
  return (
    <div className="absolute bottom-10 left-4 max-w-[70%] text-white z-10">
      <div className="flex items-center gap-3 mb-2">
        <img 
          src={clip.user.avatar} 
          alt={clip.user.username} 
          className="h-10 w-10 rounded-full border-2 border-white object-cover"
        />
        <div>
          <p className="font-semibold text-sm flex items-center gap-1">
            {clip.user.username}
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-white opacity-60"></span>
            <span className="text-xs opacity-80">{clip.timestamp}</span>
          </p>
        </div>
      </div>
      
      <p className="mb-4 text-sm">{clip.caption}</p>
      
      {!clip.user.isFollowing && (
        <Button className="bg-app-purple hover:bg-app-purple-dark text-sm rounded-full">
          Follow
        </Button>
      )}
    </div>
  );
};

export default VideoInfo;
