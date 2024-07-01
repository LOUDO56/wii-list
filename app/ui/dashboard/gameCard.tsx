import React, { useState } from 'react'
import Image from 'next/image'
import { AddRemButton } from '../buttons/addRemButton'
import { WishButton } from '../buttons/wishButton'
import { State } from './state'
import dateFormat from 'dateformat'


export const GameCard = (props: any) => {

  const [showFullDescription, setShowFullDescription] = useState(false);
  const [gameOnList, setGameOnList] = useState(props.owned);
  const [gameOnWish, setGameOnWish] = useState(props.wish);
  const [ownedWhen, setOwnedWhen] = useState(dateFormat(new Date(props.owned_when), 'dd/mm/yy à HH:MM'));

  let synopsis = props.synopsis
  const maxCharacterDesc = 300;

  synopsis = synopsis.replaceAll("\\n", "\n");
  synopsis = synopsis.replaceAll("\\r", "");
  synopsis = synopsis.replaceAll('\\"', '"');

  if(!showFullDescription && synopsis.length >= maxCharacterDesc){
    synopsis = synopsis.substring(0, maxCharacterDesc) + '...';
  }

  return (
    <div className='flex flex-col sm:flex-row gap-5 shadow-lg border border-gray-200 p-5 rounded-xl'>
        <div className='sm:block flex justify-center'>
            <Image 
                src={`/images/covers/${props.id}.png`}
                width={200}
                height={200}
                alt='Wii game cover'
                className='w-40 sm:w-44'
            />
        </div>
        <div className="flex flex-col gap-5 w-full">
            <div className="flex flex-col sm:flex-row justify-between">
                <h3 className="font-bold text-xl sm:text-2xl w-auto sm:max-w-[37rem]">{ props.title }</h3>
                <div className="flex flex-col gap-1 font-bold my-3 sm:my-0">
                    <p className='text-lg sm:text-xl text-left sm:text-right'>Dans la collection</p>
                    <p className='self-start sm:self-end'>{gameOnList ? <State status="yes" /> : <State status="no" />}</p>
                </div>
            </div>
            <div className="flex flex-col gap-2 font-semibold text-sm sm:text-base">
                <p>Date: <span className='font-normal'>{ props.day }/{ props.month }/{ props.year }</span></p>
                <p>Genres: <span className='font-normal'>{ props.genre }</span></p>
                <p>Développeurs: <span className='font-normal'>{ props.developer }</span></p>
            </div>
            <div className='text-sm sm:text-base whitespace-pre-line'>
                <p className="font-semibold mb-2">Synopsis :</p>
                <p>{ synopsis }</p>
                { synopsis.length >= maxCharacterDesc ?
                <span 
                    onClick={() => setShowFullDescription((prevState) => !prevState)} 
                    className="text-blue-400 hover:underline cursor-pointer">
                        { showFullDescription ? "Voir moins": "Voir plus" }
                </span>
                :
                ""
            }
            </div>
            <hr />
            <div className="flex justify-between">
                <div className='text-gray-400'>
                    {gameOnList ? `Ajouté le: ${ownedWhen}` : ""}
                </div>
                <div className='flex gap-3'>
                    {!gameOnList ?  
                        <WishButton 
                            type={gameOnWish ? "remove" : "add"}
                            gameId={props.id} 
                            handleClick={() => { setGameOnWish(!gameOnWish) }}
                        /> 
                        :
                        ""
                    }
                    <AddRemButton 
                        type={gameOnList ? "remove" : "add"}
                        gameId={props.id}
                        handleClick={() => { 
                            setGameOnList(!gameOnList)
                            setOwnedWhen(dateFormat(new Date(), 'dd/mm/yy à HH:MM'))
                        }}
                        removeWish={() => { setGameOnWish(false) }}
                    /> 
                </div>

            </div>
        </div>
    </div>
  )
}
