import React from "react";

function Card({data,handleClick,index}) {
    const {img,Name,artist, added}=data
    return (
        <div className="w-60 bg-zinc-200 flex gap-3 pb-6 relative">
            <div className="w-20 h-20 m-2 rounded-md bg-orange-500"><img className="w-full h-full" src={img} alt="" /></div>
            <div className="">
                <h3 className="leading-none font-extrabold text-xl mt-2">{Name}</h3>
                <h6 className="text-sm italic ">{artist}</h6>
            </div>
            <button onClick={()=>handleClick(index)} className={`px-2 py-2 rounded-full ${added?"bg-teal-500":"bg-orange-500"}  whitespace-nowrap left-1/2 translate-y-[50%] -translate-x-[50%] absolute bottom-0 text-sm`}>{added?"Added":"Add to Favourite"}</button>
        </div>
    )
}

export default Card