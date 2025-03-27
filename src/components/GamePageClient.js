'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import GameFrame from './GameFrame';

export default function GamePageClient({ game }) {
  const router = useRouter();

  // If game not found, redirect to homepage
  useEffect(() => {
    if (!game) {
      router.push('/');
    }
  }, [game, router]);

  if (!game) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary mx-auto"></div>
          <p className="mt-3 text-gray-600">Loading game...</p>
        </div>
      </div>
    );
  }

  // Format game instructions
  const formatGameInstructions = () => {
    return (
      <div className="text-white">
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-2">游戏简介</h2>
          <p className="text-lg">{game.description}</p>
        </div>
        
        <div>
          <h2 className="text-xl font-bold mb-2">游戏说明</h2>
          <div className="whitespace-pre-line">{game.instructions}</div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Game header - minimal and fixed height */}
      <header className="bg-gray-900 shadow-sm p-3 flex justify-between items-center">
        <button 
          onClick={() => router.back()}
          className="inline-flex items-center text-primary hover:underline"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          返回
        </button>
        
        <h1 className="text-xl font-bold text-center flex-1">{game.title}</h1>
        
        <div className="w-16"></div> {/* Spacer to balance the layout */}
      </header>
      
      {/* Main content container */}
      <main className="max-w-6xl mx-auto p-0">
        {/* Game container */}
        <div className="flex justify-center bg-black">
          <GameFrame game={game} />
        </div>
        
        {/* Game instructions - formatted according to screenshot */}
        <div className="bg-[#6b8e23] p-6 mx-auto mt-6">
          {formatGameInstructions()}
        </div>
      </main>
    </div>
  );
} 