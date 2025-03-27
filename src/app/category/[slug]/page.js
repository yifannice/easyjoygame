/**
 * Category page component for EasyJoy platform
 * Displays all games from a specific category
 * Includes category header and description
 */
'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import GameCard from '../../../components/GameCard';
import { getGamesByCategory } from '../../../data/games';
import { getCategoryBySlug, categories } from '../../../data/categories';

export default function CategoryPage({ params }) {
  const router = useRouter();
  const { slug } = params;
  const category = getCategoryBySlug(slug);
  
  // If category not found, redirect to homepage
  useEffect(() => {
    if (!category) {
      router.push('/');
    }
  }, [category, router]);

  if (!category) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary mx-auto"></div>
          <p className="mt-3 text-gray-600">Loading category...</p>
        </div>
      </div>
    );
  }

  const categoryGames = getGamesByCategory(category.id);

  return (
    <div>
      {/* Back button */}
      <div className="mb-4">
        <button 
          onClick={() => router.back()}
          className="inline-flex items-center text-primary hover:underline"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back to All Games
        </button>
      </div>

      {/* Category header */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
        <div className="bg-gradient-to-r from-primary to-blue-700 px-6 py-8 text-white">
          <div className="flex items-center mb-2">
            <span className="text-4xl mr-3">{category.icon}</span>
            <h1 className="text-3xl font-bold">{category.name} Games</h1>
          </div>
          <p className="text-lg opacity-90">{category.description}</p>
        </div>
      </div>

      {/* Category games */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Games in this category</h2>
          <p className="text-gray-600">{categoryGames.length} games</p>
        </div>

        {categoryGames.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {categoryGames.map(game => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-lg shadow">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-xl font-bold text-gray-700 mb-2">No Games Found</h3>
            <p className="text-gray-600 mb-4">We don't have any games in this category yet.</p>
            <Link 
              href="/"
              className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-md hover:bg-blue-600 transition-colors"
            >
              Browse All Games
            </Link>
          </div>
        )}
      </div>

      {/* Other categories */}
      <div className="mt-12">
        <h2 className="text-xl font-bold mb-4">Explore Other Categories</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {categories.filter(cat => cat.id !== category.id).map(otherCategory => (
            <Link 
              key={otherCategory.id}
              href={`/category/${otherCategory.slug}`}
              className="bg-white p-4 rounded-lg shadow hover:shadow-md text-center transition-shadow"
            >
              <div className="text-3xl mb-2">{otherCategory.icon}</div>
              <div className="font-medium text-text">{otherCategory.name}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
} 