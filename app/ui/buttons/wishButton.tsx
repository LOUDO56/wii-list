import React from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'

export const WishButton = (props : any) => {
  const icon = props.type === "add" ? <FaRegHeart size={20}/> : <FaHeart size={20} className='text-red-500'/>
  const method = props.type === "add" ? "PUT" : "DELETE";

  async function actionGameWish(){
    const res = await fetch(`/api/game/${props.gameId}`, {
      method: method,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({type: "wish"})
    })
    if(res.ok){
      props.handleClick();
    }
  }
  
  return (
    <button className='button' onClick={actionGameWish}>
        {icon}
    </button>
  )
}
