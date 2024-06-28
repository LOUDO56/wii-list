import { useSession } from "next-auth/react";
import db from "./db"

export async function fetchGames(){
    const games = await db.wiigames.findMany();
    return games;
}

export async function isConnected(){
    const { data: session, status } = useSession();
    if(!session) return false
    return true;
}