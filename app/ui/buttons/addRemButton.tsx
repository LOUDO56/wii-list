import React from 'react'
import { IoMdAdd, IoMdRemove } from 'react-icons/io'

export const AddRemButton = (props : any) => {
  const icon = props.type === "add" ? <IoMdAdd size={20}/> : <IoMdRemove size={20}/>
  const text = props.type === "add" ? "Ajouter" : "Retirer"
  return (
    <button className='button'>
        {icon}
        <p>{text}</p>
    </button>
  )
}
