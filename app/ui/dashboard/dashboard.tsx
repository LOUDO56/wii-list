

import Image from "next/image";
import { Search } from "./search";
import { Filter } from "./filter";
import { GameCardContainer } from "./gameCardContainer";
import { useState } from "react";


export default function Dashboard(){

    const [search, setSearch] = useState("");

    return (
        <div className="bg-white px-3 sm:px-8 py-5 w-full">
            <div className="flex flex-col items-center gap-3">
                <Image 
                    src="/images/logo.png"
                    width={200}
                    height={200}
                    alt="Logo wii list"
                />
                <p className='font-medium text-lg'>J'ai <span></span> jeux sur <span></span> en tout !</p>
                <Search setSearch={setSearch}/>
            </div>
            <div className="flex flex-col gap-5">
                <Filter />
                <GameCardContainer search={search} />
            </div>
        </div>
    )
}