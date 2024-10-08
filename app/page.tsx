'use client';

import { useSession } from "next-auth/react";
import Login from "./ui/login";
import Dashboard from "./ui/dashboard/dashboard";
import Image from "next/image";

export default function Home() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <main className="h-screen flex justify-center items-center">
       <Image 
           src="/images/mario-coin.gif"
           width={40}
           height={40}
           alt="Mario coin loading"
           unoptimized
       />
      </main>
    );
  }

  return (
    <>
      {session ? 
      <main className="mx-auto max-w-[65em]"><Dashboard /></main> 
      : <main className="h-screen flex justify-center items-center"><Login /></main> }
    </>
  );
}
