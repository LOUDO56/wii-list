import React from 'react'
import Image from 'next/image'
import { AddRemButton } from '../buttons/addRemButton'
import { State } from './state'
import { WishButton } from '../buttons/wishButton'

export const GameCard = (props: any) => {
  return (
    <div className='flex gap-5 shadow-lg border border-gray-200 p-5 w-full rounded-xl'>
        <div>
            <Image 
                src="/images/cover_not_found.png"
                width={1000}
                height={1000}
                alt='Wii game cover'
            />
        </div>
        <div className="flex flex-col gap-5">
            <div className="flex justify-between">
                <h3 className="font-bold text-2xl">{ props.title }</h3>
                <div className="flex flex-col gap-1 font-bold">
                    <p className='text-xl'>Dans la collection</p>
                    <p className='self-end'>{props.owned ? <State status="yes" /> : <State status="no" />}</p>
                </div>
            </div>
            <div className="flex flex-col gap-2 font-semibold">
                <p>Date: <span className='font-normal'>{ props.day }/{ props.month }/{ props.year }</span></p>
                <p>Genres: <span className='font-normal'>{ props.genre }</span></p>
                <p>Développeurs: <span className='font-normal'>{ props.developer }</span></p>
            </div>
            <div>
                <p className="font-semibold mb-2">Synopsis :</p>
                <p>{ props.synopsis }</p>
            </div>
            <hr />
            <div className="flex gap-3 justify-end">
                {props.wish ? <WishButton type="remove" /> : <WishButton type="add" />}
                {props.owned ? <AddRemButton type="remove" /> : <AddRemButton type="add" />}
            </div>
        </div>
    </div>
  )
}
