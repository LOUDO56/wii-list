import clsx from 'clsx'
import React from 'react'

export const State = (props : any) => {
  return (
    <div className={clsx(
        'px-2 text-white rounded-lg',
        {
            'bg-green-400': props.status === "yes",
            'bg-red-400': props.status === "no",
        }
    )}>
        <p>{props.status === "yes" ? "OUI" : "NON"}</p>
    </div>
  )
}
