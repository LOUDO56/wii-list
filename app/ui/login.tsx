'use client';

import React, { useState } from 'react'
import Image from 'next/image'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import clsx from 'clsx';


export default function Login() {


  async function handleFormSubmit(e : any) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    if(formData.get('password') === "") {
        setError('Champ du mot de passe vide.')
        return;
    }

    const result = await signIn('credentials', {
      password: formData.get('password'),
      redirect: false
    });

    if (result?.ok) {
      router.push('/');
    } else {
        setError("Mauvais mot de passe.");
    }
  }

  const [passwordVisible, setPasswordVisbile] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  return (
    <div className="px-10 mx-5 py-6 bg-white shadow-md flex flex-col gap-3 items-center">
        <Image 
            src="/images/logo.png"
            width={130}
            height={130}
            alt='WiiList logo'
        />
        <p className='font-medium text-lg sm:text-xl text-center'>Connecte toi pour pouvoir accéder à ta liste</p>
        <form action="" className='mt-5 w-full sm:w-72' onSubmit={handleFormSubmit}>
            <div className="relative border shadow-sm">
                <Image 
                    src="/images/lock.svg"
                    width={20}
                    height={20}
                    alt='lock password icon'
                    className='absolute top-[10px] left-3'
                />
                <input 
                    className={clsx(
                        'py-[10px] w-full pl-10 shadow-md text-sm',
                        {
                            'border border-red-400': error !== ""
                        }
                    )}
                    type={passwordVisible ? "text" : "password"} 
                    name="password" 
                    id="password" 
                    placeholder='Mot de passe'
                />
                {
                    passwordVisible 
                    ? 
                    <FaRegEye onClick={() => setPasswordVisbile(false)} className='absolute top-[10px] right-3' /> 
                    : 
                    <FaRegEyeSlash onClick={() => setPasswordVisbile(true)} className='absolute top-[10px] right-3' />
                }
            </div>
            <p className='text-red-400 mb-8 mt-1 text-center'>{error}</p>
            <input type="submit" value="Se connecter" className='py-2 w-full text-center bg-black text-white cursor-pointer hover:bg-gray-800  transition-all duration-200'/>
        </form>
    </div>
  )
}
