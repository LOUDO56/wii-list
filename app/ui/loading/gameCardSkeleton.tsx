import React, { useState } from 'react'
import Image from 'next/image'
import { AddRemButton } from '../buttons/addRemButton'
import { State } from '../dashboard/state'
import { WishButton } from '../buttons/wishButton'

export const GameCardSkeleton = () => {
  return (
    <div className='flex flex-col sm:flex-row gap-5 shadow-lg border border-gray-200 p-5 rounded-xl'>
        <div className='sm:block flex justify-center'>
            <div className="w-[170px] h-[250px] bg-gray-200 rounded-xl animate-pulse"></div>
        </div>
        <div className="flex flex-col gap-5 w-full">
            <div className="flex flex-col sm:flex-row justify-between">
                <h3 className="w-72 h-6 bg-gray-200 rounded-xl animate-pulse"></h3>
                <div className="flex flex-col gap-1 font-bold my-3 sm:my-0">
                    <p className='w-36 h-6 bg-gray-200 rounded-xl animate-pulse'></p>
                    <p className='self-start sm:self-end w-14 h-6 bg-gray-200 rounded-xl animate-pulse'></p>
                </div>
            </div>
            <div className="flex flex-col gap-2 font-semibold">
                <div className='w-52 h-6 bg-gray-200 rounded-xl animate-pulse'></div>
                <div className='w-52 h-6 bg-gray-200 rounded-xl animate-pulse'></div>
                <div className='w-52 h-6 bg-gray-200 rounded-xl animate-pulse'></div>
            </div>
            <div>
                <div className='w-full h-6 bg-gray-200 rounded-xl animate-pulse text-gray-200 select-none'>
                    <p className="invisible">
                        ....................................................................
                        ..........................................................................
                        ..............................................................................
                    </p>
                </div>
                <div className='w-full h-6 bg-gray-200 rounded-xl animate-pulse mt-1'></div>
                <div className='w-full h-6 bg-gray-200 rounded-xl animate-pulse mt-1'> </div>
            </div>
            <hr />
            <div className="flex gap-3 justify-end">
                <div className="w-14 h-9 bg-gray-200 rounded-xl animate-pulse"></div>
                <div className="w-24 h-9 bg-gray-200 rounded-xl animate-pulse"></div>
            </div>
        </div>
    </div>
  )
}
