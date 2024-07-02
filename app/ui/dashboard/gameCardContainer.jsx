import React, { useEffect, useState } from 'react'
import { GameCard } from './gameCard';
import { GameCardSkeleton } from '../loading/gameCardSkeleton';
import ReactPaginate from 'react-paginate';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';
import { Filter } from './filter';


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
  
  const fetchGames = async (filter) => {
      setLoading(true)
      try {
          const res = await fetch(`/api/games?filter=${filter}`)
          const data = await res.json()
          if(filter === "all-games"){
            const countGameElement = document.getElementById('maxGame');
            countGameElement.textContent = data.length;
          }
          setGames(data);
      } catch (error) {
          console.log("Error when fetching games" + error);
      } finally {
          setLoading(false);
      }
  }

  useEffect(() => { 
    fetchGames("all-games");
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
                currentItems.map((game, index) => (
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
                    games={games}
                    index={index}
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
        <Items currentItems={currentItems} />    
        <ReactPaginate
            breakLabel="..."
            nextLabel={<MdArrowForwardIos size={20} />}
            onPageChange={handlePageClick}
            pageRangeDisplayed={onMobile ? 2 : 5}
            marginPagesDisplayed={onMobile ? 1 : 2}
            pageCount={pageCount}
            previousLabel={<MdArrowBackIos size={20} />}
            renderOnZeroPageCount={null}
            className='flex flex-wrap gap-2 justify-center items-center sm:p-2 p-5 border border-gray-300 rounded-xl w-full text-base sm:text-lg'
            pageLinkClassName='px-2 sm:px-5 py-2 bg-gray-100 rounded-lg'
            breakLinkClassName='px-2 sm:px-5 py-2 bg-gray-100 rounded-lg'
            nextClassName='p-1 sm:p-5'
            previousClassName='p-1 sm:p-5'
            nextClassLinkName='p-1 sm:p-5'
            previousClassLinkName='p-1 sm:p-5'
            activeLinkClassName='text-white !bg-black'
            onClick={() => window.scrollTo({top: 0})}
        />
      </>
    );
  }
  
  
  return (
    <div className="flex flex-col gap-10 w-full">
       <Filter fetchGames={fetchGames} />
       { games.length === 0 && !loading ?
        <p className='text-center text-2xl font-semibold'>Aucun résultat</p>
        :
        <PaginatedItems itemsPerPage={maxGameOnePage} />  
      }
    </div>
  )
}
