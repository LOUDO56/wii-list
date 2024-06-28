'use client';

import Image from "next/image";
import { Search } from "./search";
import { Filter } from "./filter";
import { GameCard } from "./gameCard";


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
                <div className="flex flex-col gap-10">
                    <GameCard 
                        id="R2SP18"
                        title="Lorem ipsum"
                        day="19"
                        month="05"
                        year="2011"
                        genre="action"
                        developer="Lorem ipsum"
                        synopsis="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus  
                        condimentum nibh nec lorem hendrerit, ac porttitor velit pellentesque.  
                        Integer ut semper elit, ac malesuada justo. Sed tincidunt mi nisl, at  
                        vehicula sapien interdum a. Nam eleifend lorem eu sapien molestie  
                        dignissim. Praesent lacinia ligula sit amet diam suscipit, ut congue  
                        nulla dignissim. Cras ullamcorper imperdiet nibh. Donec a ornare enim.  
                        Morbi a arcu a libero posuere cursus. Sed varius accumsan nulla, sed  
                        ullamcorper velit congue in. Vestibulum tincidunt, purus sit amet  hendrerit suscipit, 
                        nibh libero mattis turpis, id viverra velit dolor  nec ante. Nulla eget varius leo, maximus
                        tincidunt lac..."
                        owned={true}
                        wish={false}
                    />
                    <GameCard 
                        id="R2SP18"
                        title="Lorem ipsum"
                        day="19"
                        month="05"
                        year="2011"
                        genre="action"
                        developer="Lorem ipsum"
                        synopsis="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus  
                        condimentum nibh nec lorem hendrerit, ac porttitor velit pellentesque.  
                        Integer ut se."
                        owned={false}
                        wish={true}
                    />
                </div>
            </div>
        </div>
    )
}