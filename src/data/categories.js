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
  }
];

/**
 * Get category by ID
 * @param {string} id - Category ID
 * @returns {Object|null} Category object or null if not found
 */
export function getCategoryById(id) {
  return categories.find(category => category.id === id) || null;
}

/**
 * Get category by slug
 * @param {string} slug - Category slug
 * @returns {Object|null} Category object or null if not found
 */
export function getCategoryBySlug(slug) {
  return categories.find(category => category.slug === slug) || null;
} 