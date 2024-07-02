import { isConnected } from "@/lib/actions";
import { fetchCountOwnedGames, fetchGames, fetchOwnedGames, fetchRecentAddedGames, fetchUnownedGames, fetchWishGames } from "@/lib/data";

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
    const count = searchParams.get('count');
    if(count){
        const countGame = await fetchCountOwnedGames();
        return new Response(countGame.toString());
    }
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
            games = await fetchRecentAddedGames();
            break;
        default:
            games = await fetchGames();
    }
    return Response.json(games);
}