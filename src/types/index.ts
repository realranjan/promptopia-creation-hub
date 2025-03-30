
export interface User {
  id: string;
  username: string;
  avatar: string;
  followers: number;
  isFollowing: boolean;
}

export interface Comment {
  id: string;
  userId: string;
  username: string;
  avatar: string;
  text: string;
  likes: number;
  timestamp: string;
}

export interface VideoClip {
  id: string;
  url: string;
  caption: string;
  user: User;
  likes: number;
  comments: number;
  shares: number;
  hasLiked: boolean;
  timestamp: string;
}

export type Category = "For You" | "Following" | "Trending" | "Live";
