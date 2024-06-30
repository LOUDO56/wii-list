

import Image from "next/image";
import { Search } from "./search";
import { Filter } from "./filter";
import { GameCardContainer } from "./gameCardContainer";


export default function Dashboard(){

    

    return (
        <div className="bg-white max-w-[65em] px-3 sm:px-8 py-5">
            <div className="flex flex-col items-center gap-3">
                <Image 
                    src="/images/logo.png"
                    width={200}
                    height={200}
                    alt="Logo wii list"
                />
                <p className='font-medium text-lg'>J'ai <span></span> jeux sur <span></span> en tout !</p>
                <Search />
            </div>
            <div className="flex flex-col gap-5">
                <Filter />
                <GameCardContainer />
            </div>
        </div>
    )
}