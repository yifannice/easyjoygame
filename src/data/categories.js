/**
 * Category data for EasyJoy platform
 * Contains information about game categories including:
 * - ID and slug for routing
 * - Display name
 * - Icon for visual representation
 */
export const categories = [
  { 
    id: "casual", 
    name: "Casual", 
    slug: "casual", 
    icon: "👾",
    description: "Easy to play games for quick entertainment sessions"
  },
  { 
    id: "action", 
    name: "Action", 
    slug: "action", 
    icon: "💥",
    description: "Fast-paced games with exciting gameplay elements"
  },
  { 
    id: "shooter", 
    name: "Shooter", 
    slug: "shooter", 
    icon: "🔫",
    description: "Games focused on shooting mechanics and precision"
  },
  { 
    id: "puzzle", 
    name: "Puzzle", 
    slug: "puzzle", 
    icon: "🧩",
    description: "Mind-bending puzzles to test your logical thinking"
  },
  { 
    id: "card", 
    name: "Card", 
    slug: "card", 
    icon: "🃏",
    description: "Traditional and innovative card games"
  },
  { 
    id: "classic", 
    name: "Classic", 
    slug: "classic", 
    icon: "🎮",
    description: "Timeless games that have stood the test of time"
  },
  {
    id: "interactive-fiction",
    name: "Interactive Fiction",
    slug: "interactive-fiction",
    icon: "📖",
    description: "Story-driven games with multiple choices and outcomes"
  },
  {
    id: "horror",
    name: "Horror",
    slug: "horror",
    icon: "👻",
    description: "Scary and suspenseful games that will keep you on edge"
  },
  {
    id: "roguelike",
    name: "Roguelike",
    slug: "roguelike",
    icon: "⚔️",
    description: "Procedurally generated games with permadeath mechanics"
  },
  {
    id: "strategy",
    name: "Strategy",
    slug: "strategy",
    icon: "🎯",
    description: "Games that require careful planning and tactical thinking"
  },
  {
    id: "multiplayer",
    name: "Multiplayer",
    slug: "multiplayer",
    icon: "👥",
    description: "Games that can be played with multiple players"
  },
  {
    id: "racing",
    name: "Racing",
    slug: "racing",
    icon: "🏎️",
    description: "Fast-paced racing games with various vehicles and tracks"
  },
  {
    id: "sports",
    name: "Sports",
    slug: "sports",
    icon: "⚽",
    description: "Sports-themed games including billiards, soccer, and more"
  }
];

/**
 * Utility function to get a category by slug
 */
export function getCategoryBySlug(slug) {
  return categories.find(category => category.slug === slug);
}

/**
 * Utility function to get a category by id
 */
export function getCategoryById(id) {
  return categories.find(category => category.id === id);
} 