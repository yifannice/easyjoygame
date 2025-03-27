"use client";

/**
 * CategoryFilter component for EasyJoy platform
 * Provides filtering UI for games by category
 * Used on the homepage and search results page
 */
import { useState } from 'react';
import Link from 'next/link';
import { categories } from '../data/categories';

export default function CategoryFilter({ selectedCategory, onSelectCategory }) {
  return (
    <div className="mb-6">
      <h2 className="text-lg font-bold mb-3">Categories</h2>
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => onSelectCategory(null)}
          className={`px-3 py-1 rounded-full text-sm transition-colors ${
            selectedCategory === null
              ? 'bg-primary text-white'
              : 'bg-background text-text hover:bg-gray-300'
          }`}
        >
          All Games
        </button>
        
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onSelectCategory(category.id)}
            className={`px-3 py-1 rounded-full text-sm transition-colors flex items-center ${
              selectedCategory === category.id
                ? 'bg-primary text-white'
                : 'bg-background text-text hover:bg-gray-300'
            }`}
          >
            <span className="mr-1">{category.icon}</span>
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
} 