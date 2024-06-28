import React from 'react'

export const Filter = () => {
  return (
    <div className='flex gap-2'>
        <p className='font-medium'>Filtrage</p>
        <select name="filter" id="fitler">
            <option value="all-games">Tous les jeux</option>
            <option value="owned-games">Jeux possédés</option>
            <option value="not-owned-games">Jeux non possédés</option>
            <option value="wish-games">Liste de souhait</option>
            <option value="recent-games">Ajout récent</option>
        </select>
    </div>
  )
}
