import React from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'

export const WishButton = (props : any) => {
  const icon = props.type === "add" ? <FaRegHeart size={20}/> : <FaHeart size={20} className='text-red-500'/>
  return (
    <button className='button'>
        {icon}
    </button>
  )
}
