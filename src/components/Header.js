"use client";

/**
 * Header component for EasyJoy platform
 * Provides main navigation, branding, and search functionality
 * Includes responsive mobile menu for smaller screens
 */
import { useState } from 'react';
import Link from 'next/link';
import { categories } from '../data/categories';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-primary text-2xl font-display font-bold">EasyJoy</span>
            <span className="text-accent-orange ml-1">Games</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4">
            <Link href="/" className="text-text hover:text-primary transition-colors">
              Home
            </Link>
            {categories.map((category) => (
              <Link 
                key={category.id} 
                href={`/category/${category.slug}`}
                className="text-text hover:text-primary transition-colors"
              >
                {category.name}
              </Link>
            ))}
            <div className="relative ml-2">
              <input
                type="text"
                placeholder="Search games..."
                className="bg-background rounded-full px-4 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-text" onClick={toggleMobileMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 py-2">
            <Link href="/" className="block py-2 text-text hover:text-primary">
              Home
            </Link>
            <div className="py-2">
              <div className="font-medium mb-1">Categories</div>
              <div className="grid grid-cols-2 gap-1">
                {categories.map((category) => (
                  <Link 
                    key={category.id} 
                    href={`/category/${category.slug}`}
                    className="py-1 text-sm text-text hover:text-primary"
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="py-2">
              <input
                type="text"
                placeholder="Search games..."
                className="w-full bg-background rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>
        )}
      </div>
    </header>
  );
} 