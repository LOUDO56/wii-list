import React, { useState } from 'react'
import roboto from '@/lib/font'

export const Filter = (props : any) => {

  return (
    <div className='flex gap-2 mb-5 items-center'>
        <p className='font-medium sm:text-2xl text-xl'>Filtrage</p>
        <select className={`px-3 py-2 cursor-pointer bg-white border border-gray-200 shadow-md`} name="filter" id="filter" onChange={(e) => props.fetchGames(e.target.value)}>
            <option value="all-games">Tous les jeux</option>
            <option value="owned-games">Jeux possédés</option>
            <option value="not-owned-games">Jeux non possédés</option>
            <option value="wish-games">Liste de souhait</option>
            <option value="recent-games">Ajout récent</option>
        </select>
    </div>
  )
}
