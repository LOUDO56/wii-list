import { getServerSession } from "next-auth";
import { authOptions } from "./authOptions";
import db from "./db";

export async function isConnected() {
    const session = await getServerSession(authOptions);
    return session !== null;
}


export async function addGame(gameId: string) {
    const updatedGame = await db.wiigames.update({
        where: {
            id: gameId
        },
        data: {
            owned: true,
            owned_when: new Date()
        }
    })
}

export async function removeGame(gameId: string) {
    const updatedGame = await db.wiigames.update({
        where: {
            id: gameId
        },
        data: {
            owned: false
        }
    })
}

export async function wishGame(gameId: string) {
    const updatedGame = await db.wiigames.update({
        where: {
            id: gameId
        },
        data: {
            wish: true
        }
    })
}

export async function unWishGame(gameId: string) {
    const updatedGame = await db.wiigames.update({
        where: {
            id: gameId
        },
        data: {
            wish: false
        }
    })
}