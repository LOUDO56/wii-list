import { useSession } from "next-auth/react";
import db from "./db"

export async function fetchGames(){
    const games = await db.wiigames.findMany({
        orderBy: [
            {
                title: "asc"
            }
        ]
    });
    return games;
}

export async function fetchOwnedGames(){
    const games = await db.wiigames.findMany({
        where: {
            owned: true
        },
        orderBy: [
            {
                title: "asc"
            }
        ]
    });
    return games;
}

export async function fetchUnownedGames(){
    const games = await db.wiigames.findMany({
        where: {
            owned: false
        },
        orderBy: [
            {
                title: "asc"
            }
        ]
    });
    return games;
}

export async function fetchWishGames(){
    const games = await db.wiigames.findMany({
        where: {
            wish: true
        },
        orderBy: [
            {
                title: "asc"
            }
        ]
    });
    return games;
}

export async function fetchRecentAddedGames(){
    const games = await db.wiigames.findMany({
        where: {
            owned_when: {
                not: null
            }
        },
        orderBy: [
            {
                owned_when: "desc"
            }
        ]
    });
    return games;
}


export async function fetchGameInfo(gameId: string){
    const gameInfo = await db.wiigames.findUnique({
        where: {
            id: gameId
        }
    });
    return gameInfo;
}