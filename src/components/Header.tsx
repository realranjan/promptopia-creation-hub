
import { useState } from 'react';
import { Category } from '../types';
import { SearchIcon, PlusIcon, BellIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeaderProps {
  currentCategory: Category;
  setCurrentCategory: (category: Category) => void;
}

const Header = ({ currentCategory, setCurrentCategory }: HeaderProps) => {
  const categories: Category[] = ["For You", "Following", "Trending", "Live"];
  
  return (
    <header className="fixed top-0 left-0 right-0 z-10 bg-background/80 backdrop-blur-md">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <SearchIcon className="h-5 w-5 text-foreground" />
          </Button>
        </div>
        
        <nav className="flex gap-4">
          {categories.map((category) => (
            <button
              key={category}
              className={`relative px-2 py-1 font-medium transition-colors ${
                currentCategory === category
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground/80"
              }`}
              onClick={() => setCurrentCategory(category)}
            >
              {category}
              {currentCategory === category && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-app-purple animate-pulse-scale"></span>
              )}
            </button>
          ))}
        </nav>
        
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <PlusIcon className="h-5 w-5 text-foreground" />
          </Button>
          <Button variant="ghost" size="icon">
            <BellIcon className="h-5 w-5 text-foreground" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
