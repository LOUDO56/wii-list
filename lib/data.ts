import { useSession } from "next-auth/react";
import db from "./db"

export async function fetchGames(){
    const games = await db.wiigames.findMany({
        take: 10,
        orderBy: [
            {
                title: "asc"
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