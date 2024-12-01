import React from "react";

function Navbar({data}) {
    return (
         <div className="w-full py-2 px-40 text-xl flex justify-between items-center">
            <h3>Orange</h3>
            <div className="flex p-2 px-4 bg-orange-600 text-white rounded-md gap-3">
                <h3>Favourites</h3>
                <h4>{data.filter(item=>item.added).length}</h4>
            </div>
          </div>
    )
}

export default Navbar