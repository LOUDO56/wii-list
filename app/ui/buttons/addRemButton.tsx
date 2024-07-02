import React, { useEffect, useState } from 'react'
import { IoMdAdd, IoMdRemove } from 'react-icons/io'

export const AddRemButton = (props : any) => {
  const icon = props.type === "add" ? <IoMdAdd size={20}/> : <IoMdRemove size={20}/>;
  const text = props.type === "add" ? "Ajouter" : "Retirer";
  const method = props.type === "add" ? "PUT" : "DELETE";
  const countGameElement = document.getElementById('currentOwnedGames') as HTMLElement;

  async function removeWishIfWished(){
    const res = await fetch(`/api/game/${props.gameId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({type: "wish"})
    })
    if(res.ok){
      props.games[props.index].wish = false
    }
  }

  async function actionGameList(){
    const res = await fetch(`/api/game/${props.gameId}`, {
      method: method,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({type: "list"})
    })
    if(res.ok){
      props.handleClick();
      const res = await fetch('/api/games?count=true');
      const countGame = await res.text();
      countGameElement.textContent = countGame;
      if(method === "PUT"){
        props.games[props.index].owned = true
        props.removeWish();
        if(props.games[props.index].wish){
          removeWishIfWished();
        }
      } else {
        props.games[props.index].owned = false
      }
    }
  }



  return (
    <button className='button' onClick={actionGameList}>
        {icon}
        <p>{text}</p>
    </button>
  )
}
