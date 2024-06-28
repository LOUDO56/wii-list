'use client';

import { useSession } from "next-auth/react";


export default function Dashboard(){
    const {data: session} = useSession();
    return (
        <div>Bonjour {session?.user?.name}</div>
    )
}