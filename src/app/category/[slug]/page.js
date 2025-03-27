/**
 * Category page component for EasyJoy platform
 * Displays all games from a specific category
 * Includes category header and description
 */

import { getCategoryBySlug, categories } from '../../../data/categories';
import { getGamesByCategory } from '../../../data/games';
import CategoryPageClient from '../../../components/CategoryPageClient';

// Generate static paths for all categories
export async function generateStaticParams() {
  return categories.map((category) => ({
    slug: category.slug,
  }));
}

export default function CategoryPage({ params }) {
  const { slug } = params;
  const category = getCategoryBySlug(slug);
  
  if (!category) {
    return null;
  }

  const categoryGames = getGamesByCategory(category.id);
  const otherCategories = categories.filter(cat => cat.id !== category.id);

  return (
    <CategoryPageClient 
      category={category} 
      categoryGames={categoryGames} 
      otherCategories={otherCategories} 
    />
  );
} 