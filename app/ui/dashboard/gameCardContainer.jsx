import React, { useEffect, useState } from 'react'
import { GameCard } from './gameCard';
import { GameCardSkeleton } from '../loading/gameCardSkeleton';
import ReactPaginate from 'react-paginate';

export const GameCardContainer = ({search}) => {

  let [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  const onMobile = window.innerWidth < 658;

  const keyWords = search.split(" ");
  games = games.filter((game) => {
    let titleGame = game.title
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, ""); // enlève les accents
    return (
        keyWords.every((keyWord) => titleGame.includes(keyWord)) ||
        game.id.toLowerCase() === search ||
        search.toLowerCase() === game.title.toLowerCase()
    )
  })

  const maxGameOnePage = onMobile ? 7 : 10;
  
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
    fetchedGames();

  }, [])

  function Items({ currentItems }) {
    return (
      <>
        {
            loading ? (
                Array.from({ length: maxGameOnePage }).map((_, index) => (
                    <GameCardSkeleton key={index} />
                ))
            ) : (
                currentItems.map((game) => (
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
      </>
    );
  }
  
  function PaginatedItems({ itemsPerPage }) {
    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = games.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(games.length / itemsPerPage);
    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % games.length;
      setItemOffset(newOffset);
    };
  
    return (
      <>
        <ReactPaginate
            breakLabel="..."
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={onMobile ? 2 : 5}
            marginPagesDisplayed={onMobile ? 1 : 2}
            pageCount={pageCount}
            previousLabel="<"
            renderOnZeroPageCount={null}
            className='flex gap-2 justify-center items-center p-2 border border-gray-300 rounded-xl w-full text-base sm:text-lg'
            pageClassName='px-2 sm:px-5 py-2'
            nextLinkClassName='p-5'
            previousLinkClassName='p-5'
            activeClassName='text-white bg-black rounded-lg'
        />
        <Items currentItems={currentItems} />    
      </>
    );
  }
  
  
  return (
    <div className="flex flex-col gap-10 w-full">
       { games.length === 0 && !loading ?
        <p className='text-center text-2xl font-semibold'>Aucun résultat</p>
        :
        <PaginatedItems itemsPerPage={maxGameOnePage} />  
      }
    </div>
  )
}
