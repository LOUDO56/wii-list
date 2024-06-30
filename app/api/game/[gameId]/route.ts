import { addGame, isConnected, removeGame, unWishGame, wishGame } from "@/lib/actions";
import { fetchGameInfo } from "@/lib/data";


export async function GET(req: Request, { params }: { params: { gameId: string } }) {
    const connected = await isConnected();
    if(!connected){
        return Response.json({
            message: "Unauthorized"
        },{
            status: 403
        });
    }
    const gameId = params.gameId;
    try {
        const gameInfo = await fetchGameInfo(gameId);
        if(gameInfo === null){
            return Response.json({message: "The ID is not valid."})
        }
        return Response.json(gameInfo)
    } catch (error) {
        return new Response('Error when fetching game data: ' + error, {
            status: 404
        })
    }

}


export async function PUT(req: Request, { params }: { params: { gameId: string } }) {
    const connected = await isConnected();
    if(!connected){
        return Response.json({
            message: "Unauthorized"
        },{
            status: 403
        });
    }
    const gameId = params.gameId;
    const body = await req.json();
    if(body.type === "list"){     
        try {
            const res = await addGame(gameId);
            return new Response('Ok', {
                status: 200
            })
        } catch (error) {
            return new Response('Error when adding game to list: ' + error, {
                status: 404
            })
        }
    } else if (body.type === "wish"){ 
        try {
            const res = await wishGame(gameId);
            return new Response('Ok', {
                status: 200
            })
        } catch (error) {
            return new Response('Error when wishing game: ' + error, {
                status: 404
            })
        }
    }
}


export async function DELETE(req: Request, { params }: { params: { gameId: string } }) {
    const connected = await isConnected();
    if(!connected){
        return Response.json({
            message: "Unauthorized"
        },{
            status: 403
        });
    }
    const gameId = params.gameId;
    const body = await req.json();
    if(body.type === "list"){     
        try {
            const res = await removeGame(gameId);
            return new Response('Ok', {
                status: 200
            })
        } catch (error) {
            return new Response('Error when removing game from list: ' + error, {
                status: 404
            })
        }
    } else if (body.type === "wish"){ 
        try {
            const res = await unWishGame(gameId);
            return new Response('Ok', {
                status: 200
            })
        } catch (error) {
            return new Response('Error when unwishing game: ' + error, {
                status: 404
            })
        }
    }
}