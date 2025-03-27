"use client";

/**
 * GameCard component for EasyJoy platform
 * Displays a game preview card with:
 * - Game thumbnail
 * - Title
 * - Short description
 * - Category badges
 */
import Image from 'next/image';
import Link from 'next/link';
import { getCategoryById } from '../data/categories';

export default function GameCard({ game }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105 max-w-[280px] mx-auto">
      <Link href={`/game/${game.slug}`}>
        <div className="relative group">
          <div className="relative overflow-hidden rounded-lg bg-gray-100 aspect-[16/9]">
            <Image
              src={game.thumbnail}
              alt={game.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="280px"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300" />
          </div>
          <div className="p-3">
            <h3 className="text-base font-semibold text-gray-900 line-clamp-1">{game.title}</h3>
            <p className="mt-1 text-xs text-gray-500 line-clamp-2">{game.description}</p>
            <div className="mt-2 flex flex-wrap gap-1">
              {game.categories.map((categoryId) => {
                const category = getCategoryById(categoryId);
                if (!category) return null;
                return (
                  <span
                    key={categoryId}
                    className="inline-flex items-center px-1.5 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800"
                  >
                    {category.name}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
} 