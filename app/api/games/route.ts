import { isConnected } from "@/lib/actions";
import { fetchGames, fetchOwnedGames, fetchUnownedGames, fetchWishGames } from "@/lib/data";

export async function GET(req: Request) {
    const connected = await isConnected();
    if(!connected){
        return Response.json({
            message: "Unauthorized"
        },{
            status: 403
        });
    }

    const url = new URL(req.url);
    const searchParams = new URLSearchParams(url.searchParams);
    const filter = searchParams.get('filter');
    let games;
    switch(filter){
        case "all-games":
            games = await fetchGames();
            break;
        case "owned-games":
            games = await fetchOwnedGames();
            break;
        case "not-owned-games":
            games = await fetchUnownedGames();
            break;
        case "wish-games":
            games = await fetchWishGames();
            break;
        case "recent-games":
            games = await fetchWishGames();
            break;
        default:
            games = await fetchGames();
    }
    return Response.json(games);
}