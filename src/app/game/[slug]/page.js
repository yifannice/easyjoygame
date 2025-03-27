/**
 * Game details page component for EasyJoy platform
 * Displays a single game with:
 * - Game title and description
 * - Embedded game iframe
 * - Instructions on how to play
 */

import { getGameBySlug, games } from '../../../data/games';
import GamePageClient from '../../../components/GamePageClient';

// Generate static paths for all games
export async function generateStaticParams() {
  return games.map((game) => ({
    slug: game.slug,
  }));
}

export default function GamePage({ params }) {
  const { slug } = params;
  const game = getGameBySlug(slug);
  
  if (!game) {
    return null;
  }

  return <GamePageClient game={game} />;
} 