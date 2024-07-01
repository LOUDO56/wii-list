import React from 'react'

export const Filter = (props : any) => {
  return (
    <div className='flex gap-2 mb-5'>
        <p className='font-medium text-2xl'>Filtrage</p>
        <select name="filter" id="fitler" onChange={(e) => props.setFilter(e.target.value)}>
            <option value="all-games">Tous les jeux</option>
            <option value="owned-games">Jeux possédés</option>
            <option value="not-owned-games">Jeux non possédés</option>
            <option value="wish-games">Liste de souhait</option>
            <option value="recent-games">Ajout récent</option>
        </select>
    </div>
  )
}
