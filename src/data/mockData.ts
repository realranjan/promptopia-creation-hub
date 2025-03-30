
import { User, Comment, VideoClip } from '../types';

export const mockUsers: User[] = [
  {
    id: "user1",
    username: "creativemind",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=250&auto=format&fit=crop",
    followers: 23500,
    isFollowing: false
  },
  {
    id: "user2",
    username: "techexplorer",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=250&auto=format&fit=crop",
    followers: 15300,
    isFollowing: true
  },
  {
    id: "user3",
    username: "travelbug",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=250&auto=format&fit=crop",
    followers: 43200,
    isFollowing: false
  }
];

export const mockComments: Comment[] = [
  {
    id: "comment1",
    userId: "user2",
    username: "techexplorer",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=250&auto=format&fit=crop",
    text: "This is absolutely amazing! How did you capture this?",
    likes: 47,
    timestamp: "2 hours ago"
  },
  {
    id: "comment2",
    userId: "user3",
    username: "travelbug",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=250&auto=format&fit=crop",
    text: "The colors in this video are stunning! What filter did you use?",
    likes: 23,
    timestamp: "30 minutes ago"
  },
  {
    id: "comment3",
    userId: "user1",
    username: "creativemind",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=250&auto=format&fit=crop",
    text: "I've been trying to create content like this for ages! Any tips?",
    likes: 15,
    timestamp: "1 hour ago"
  }
];

export const mockVideos: VideoClip[] = [
  {
    id: "video1",
    url: "https://assets.mixkit.co/videos/preview/mixkit-girl-in-neon-sign-1232-large.mp4",
    caption: "Night vibes in the city #neon #nightlife",
    user: mockUsers[0],
    likes: 8432,
    comments: 342,
    shares: 129,
    hasLiked: false,
    timestamp: "2 hours ago"
  },
  {
    id: "video2",
    url: "https://assets.mixkit.co/videos/preview/mixkit-tree-with-yellow-flowers-1173-large.mp4",
    caption: "Spring has finally arrived! 🌸 #nature #spring",
    user: mockUsers[1],
    likes: 3214,
    comments: 123,
    shares: 47,
    hasLiked: true,
    timestamp: "1 day ago"
  },
  {
    id: "video3",
    url: "https://assets.mixkit.co/videos/preview/mixkit-portrait-of-a-fashion-woman-with-silver-makeup-39875-large.mp4",
    caption: "New makeup look, what do you think? ✨ #beauty #makeup",
    user: mockUsers[2],
    likes: 12765,
    comments: 867,
    shares: 310,
    hasLiked: false,
    timestamp: "3 hours ago"
  },
  {
    id: "video4",
    url: "https://assets.mixkit.co/videos/preview/mixkit-waves-in-the-water-1164-large.mp4",
    caption: "Ocean therapy 🌊 #beach #relaxation",
    user: mockUsers[0],
    likes: 6543,
    comments: 234,
    shares: 98,
    hasLiked: false,
    timestamp: "5 hours ago"
  },
  {
    id: "video5",
    url: "https://assets.mixkit.co/videos/preview/mixkit-young-woman-talking-on-a-chrome-background-42723-large.mp4",
    caption: "Just sharing my thoughts on the latest trends #talk #opinion",
    user: mockUsers[1],
    likes: 2345,
    comments: 178,
    shares: 45,
    hasLiked: false,
    timestamp: "7 hours ago"
  }
];
