import React, { useEffect, useState } from 'react'
import { GameCard } from './gameCard';
import { GameCardSkeleton } from '../loading/gameCardSkeleton';

export const GameCardContainer = () => {

  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  const maxGameOnePage = 10;
  
  useEffect(() => { 
      const fetchedGames = async () => {
        try {
            const res = await fetch('/api/games')
            const data = await res.json()
            setGames(data);
        } catch (error) {
            console.log("Error when fetching games" + error);
        } finally {
            setLoading(false);
        }
    }
    // setTimeout(() => {
    //     fetchedGames();
    // }, 5000);
    fetchedGames();

}, [])
  
  return (
    <div className="flex flex-col gap-10">
        {
            loading ? (
                Array.from({ length: maxGameOnePage }).map((_, index) => (
                    <GameCardSkeleton key={index} />
                ))
            ) : (
                games.map((game) => (
                <GameCard
                    key={game.id}
                    id={game.id}
                    title={game.title}
                    day={game.day}
                    month={game.month}
                    year={game.year}
                    genre={game.genre}
                    developer={game.developer}
                    synopsis={game.synopsis}
                    owned={game.owned}
                    wish={game.wish}
                    owned_when={game.owned_when}
                />
                ))
            )
        }
    </div>
  )
}
