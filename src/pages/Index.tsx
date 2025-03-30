
import { useState } from 'react';
import { Category } from '../types';
import Header from '../components/Header';
import VideoFeed from '../components/VideoFeed';
import BottomNav from '../components/BottomNav';
import { mockVideos } from '../data/mockData';

const Index = () => {
  const [currentCategory, setCurrentCategory] = useState<Category>("For You");
  
  // Filter videos by category (in a real app, this would be a server fetch)
  const getVideosByCategory = (category: Category) => {
    // This is just a mock implementation
    switch (category) {
      case "Following":
        return mockVideos.filter(video => video.user.isFollowing);
      case "Trending":
        return mockVideos.sort((a, b) => b.likes - a.likes);
      case "Live":
        // No live videos in our mock data
        return [];
      default:
        return mockVideos;
    }
  };
  
  const videos = getVideosByCategory(currentCategory);
  
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header 
        currentCategory={currentCategory} 
        setCurrentCategory={setCurrentCategory} 
      />
      
      <main className="pt-16 pb-16">
        {videos.length > 0 ? (
          <VideoFeed 
            videos={videos} 
            category={currentCategory} 
          />
        ) : (
          <div className="flex flex-col items-center justify-center h-[80vh] text-center p-4">
            <h2 className="text-xl font-semibold mb-2">No videos found</h2>
            <p className="text-muted-foreground">
              {currentCategory === "Live" 
                ? "There are no live videos at the moment." 
                : "Check back later for more content."}
            </p>
          </div>
        )}
      </main>
      
      <BottomNav />
    </div>
  );
};

export default Index;
