import React from 'react'

import Image from 'next/image'
import { IoIosSearch } from 'react-icons/io'

export const Search = () => {
  return (
    <form action="" className='mt-5 w-full sm:w-72'>
        <div className="relative border shadow-sm">
            <IoIosSearch 
                className='absolute top-[10px] left-3'
                size={20}
            />
            <input 
                type="search" 
                name="search" 
                id="search" 
                placeholder='Rechercher un jeu'
                className='py-[10px] w-full pl-10 shadow-md text-sm'
            />
        </div>
    </form>
  )
}
