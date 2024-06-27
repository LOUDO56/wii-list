'use client';

import React from 'react'
import Image from 'next/image'


export default function login() {

  function passwordType(value: string) {
    console.log(value);
  }

  return (
    <main className='h-screen flex justify-center items-center'>
        <div className="px-10 mx-5 py-6 bg-white shadow-md flex flex-col gap-3 items-center">
            <Image 
                src="/logo.png"
                width={130}
                height={130}
                alt='WiiList logo'
            />
            <p className='font-medium text-lg sm:text-xl text-center'>Connecte toi pour pouvoir accéder à ta liste</p>
            <form action="" className='mt-5 w-full sm:w-72'>
                <div className="relative border mb-8 shadow-sm">
                    <Image 
                        src="/lock.svg"
                        width={20}
                        height={20}
                        alt='lock password icon'
                        className='absolute top-[10px] left-3'
                    />
                    <input className='py-[10px] w-full pl-10 shadow-md text-sm ' type="password" name="password" id="password" placeholder='Mot de passe' />
                </div>
                <input onChange={(e) => passwordType(e.target.value)} type="submit" value="Se connecter" className='py-2 w-full text-center bg-black text-white cursor-pointer hover:bg-gray-800  transition-all duration-200'/>
            </form>
        </div>
    </main>
  )
}
