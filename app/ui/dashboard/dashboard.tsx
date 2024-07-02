

import Image from "next/image";
import { Search } from "./search";
import { Filter } from "./filter";
import { GameCardContainer } from "./gameCardContainer";
import { useEffect, useState } from "react";
import { fetchCountOwnedGames } from "@/lib/data";


export default function Dashboard(){

    const [search, setSearch] = useState("");

    const [countGame, setCountGame] = useState("0");

    useEffect(() => {
        const fetchCountGame = async () => {
            const res = await fetch('/api/games?count=true');
            const countGame = await res.text();
            setCountGame(countGame)
        }
        fetchCountGame();
    }, [])

    return (
        <div className="bg-white px-3 sm:px-8 py-5 w-full">
            <div className="flex flex-col items-center gap-3">
                <Image 
                    src="/images/logo.png"
                    width={200}
                    height={200}
                    alt="Logo wii list"
                />
                <p className='font-medium text-lg'>J'ai <span id="currentOwnedGames">{countGame}</span> jeux sur <span id="maxGame">0</span> en tout !</p>
                <Search setSearch={setSearch}/>
            </div>
            <div className="flex flex-col gap-5">
                <GameCardContainer search={search} />
            </div>
        </div>
    )
}