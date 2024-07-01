import React, { useEffect } from 'react'
import { IoMdAdd, IoMdRemove } from 'react-icons/io'

export const AddRemButton = (props : any) => {
  const icon = props.type === "add" ? <IoMdAdd size={20}/> : <IoMdRemove size={20}/>;
  const text = props.type === "add" ? "Ajouter" : "Retirer";
  const method = props.type === "add" ? "PUT" : "DELETE";

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
      if(method === "PUT"){
        props.removeWish();
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
