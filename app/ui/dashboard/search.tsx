import React, { useState } from 'react'

import Image from 'next/image'
import { IoIosSearch } from 'react-icons/io'
import { useDebouncedCallback } from 'use-debounce'

export const Search = (props : any) => {

  const handleSearch = useDebouncedCallback((search) => {
    props.setSearch(search);
  }, 300)

  return (
    <form action="" className='mt-5 mb-8 flex flex-col sm:flex-row gap-3 w-full sm:w-auto'>
        <div className="relative border shadow-sm">
            <IoIosSearch 
                className='absolute top-[9px] left-3'
                size={25}
            />
            <input 
                type="search" 
                name="search" 
                id="search" 
                placeholder='Rechercher un jeu'
                className='py-3 pl-10 shadow-md border border-transparent transition-all duration-200 text-sm w-full sm:w-[30em] focus:border-blue-400 outline-none'
                autoComplete='off'
                onChange={(e) => {handleSearch(e.target.value)}}
            />
        </div>
    </form>
  )
}
