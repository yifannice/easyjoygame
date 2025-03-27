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
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <Link href={`/game/${game.slug}`}>
        <div className="relative w-full aspect-[4/3]">
          <Image 
            src={game.thumbnail} 
            alt={game.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{objectFit: 'cover'}}
            className="transition-transform hover:scale-110"
            priority={false}
          />
        </div>
      </Link>
      <div className="p-4">
        <Link href={`/game/${game.slug}`}>
          <h3 className="text-lg font-bold text-text hover:text-primary line-clamp-1">{game.title}</h3>
        </Link>
        <p className="text-sm text-gray-600 mt-1 line-clamp-2">{game.description}</p>
        
        <div className="mt-2 flex flex-wrap gap-1">
          {game.categories.map(categoryId => {
            const category = getCategoryById(categoryId);
            return (
              <Link 
                key={categoryId}
                href={`/category/${category.slug}`}
                className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-background text-primary hover:bg-primary hover:text-white transition-colors"
              >
                {category.name}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
} 