
import { Home, Search, Video, User } from 'lucide-react';

const BottomNav = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 h-16 bg-background/80 backdrop-blur-md border-t border-border z-10">
      <div className="grid grid-cols-4 h-full">
        <button className="flex flex-col items-center justify-center gap-1 text-foreground">
          <Home className="h-5 w-5" />
          <span className="text-xs">Home</span>
        </button>
        
        <button className="flex flex-col items-center justify-center gap-1 text-muted-foreground">
          <Search className="h-5 w-5" />
          <span className="text-xs">Discover</span>
        </button>
        
        <button className="flex flex-col items-center justify-center gap-1 text-muted-foreground">
          <Video className="h-5 w-5" />
          <span className="text-xs">Create</span>
        </button>
        
        <button className="flex flex-col items-center justify-center gap-1 text-muted-foreground">
          <User className="h-5 w-5" />
          <span className="text-xs">Profile</span>
        </button>
      </div>
    </div>
  );
};

export default BottomNav;
