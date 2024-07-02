import React, { useState } from 'react'

import Image from 'next/image'
import { IoIosSearch } from 'react-icons/io'
import { useDebouncedCallback } from 'use-debounce'

export const Search = (props : any) => {

  const handleSearch = useDebouncedCallback((search) => {
    props.setSearch(search);
  }, 300)

  return (
    <div className='mt-5 mb-8 flex flex-col sm:flex-row gap-3 w-full sm:w-auto'>
        <div className="relative border shadow-sm">
            <IoIosSearch 
                className='absolute top-[9px] left-3'
                size={25}
            />
            <input 
                type="text" 
                name="text" 
                id="text" 
                placeholder='Rechercher un jeu'
                className='py-3 pl-12 shadow-md border border-transparent transition-all duration-200 text-sm w-full sm:w-[40em] focus:border-blue-400 outline-none'
                autoComplete='off'
                onChange={(e) => {handleSearch(e.target.value)}}
            />
        </div>
    </div>
  )
}
