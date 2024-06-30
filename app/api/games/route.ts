import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import { NextApiRequest } from "next";
import { isConnected } from "@/lib/actions";
import { fetchGames } from "@/lib/data";

export async function GET() {
    const connected = await isConnected();
    if(!connected){
        return Response.json({
            message: "Unauthorized"
        },{
            status: 403
        });
    }

    const games = await fetchGames();
    return Response.json(games);
}