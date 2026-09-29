// import { useState } from "react";
import { Data } from '../Data/FloorPlanData';
// import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import { GrFormNextLink } from "react-icons/gr";


export default function ExploreWings() {



    // const { id } = useParams<{ id: string }>()
    // const [open, setOpen] = useState(false);

    const navigate = useNavigate();

    // const floorData = Data.filter((floor) => floor.id === Number(id))






    return (<>
        <div className="absolute bottom-0 lg:block hidden  flex items-center gap-5 bg-black/30 w-full max-h-38 justify-center p-3">
            {/* Glass Number Panel */}
            <div className="relative justify-center flex w-[80%] gap-2 left-[10%] items-center">
                {/* Prev Arrow */}
                <button
                    onClick={() => {
                        const panel = document.getElementById("towerScroll") as HTMLElement | null;
                        panel?.scrollBy({ left: -200, behavior: "smooth" });
                    }}
                    className="
      z-10
      bg-white/20 backdrop-blur-lg border border-white/30
      text-white p-2 rounded-full hover:bg-white/30 transition shadow transition-all duration-300 ease-in-out
      rotate-180
    "
                >
                    ➤
                </button>

                {/* Glass Panel */}
                <div
                    id="towerScroll"
                    className="
      bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg 
      rounded-3xl px-6 py-2 max-w-[90%] md:max-w-[70%] lg:max-w-[70%]
      overflow-x-scroll text-container no-scrollbar
    "
                >
                    <div className="flex items-center gap-5 text-white font-medium text-sm whitespace-nowrap">



                        {Data.map((e) => {
                            return (
                                <>
                                    <div className="flex items-center gap-5 text-white font-medium text-sm whitespace-nowrap">
                                        <span
                                            key={e.id}

                                            className="
                    cursor-pointer px-4 py-2 rounded-full transition-all duration-200
                    bg-white/5 hover:bg-white/20 hover:scale-105
                "
                                            onClick={() => navigate(`/floorplan/${e.id}`)}
                                        >
                                            {e.name3}
                                        </span>
                                    </div>
                                </>
                            )
                        })}

                    </div>




                </div>

                {/* Right Arrow Scroll Button */}
                <button
                    onClick={() => {
                        const panel = document.getElementById("towerScroll") as HTMLElement | null;
                        panel?.scrollBy({ left: 200, behavior: "smooth" });
                    }}
                    className="
     
      bg-white/20 backdrop-blur-lg border border-white/30
      text-white p-2 rounded-full hover:bg-white/30 transition shadow ease-in-out transition-all duration-300
    "
                >
                    ➤
                </button>


                {/* Next Button 
                <button className="w-auto h-9 flex items-center justify-center 
          bg-white/80 text-black font-bold rounded-full shadow text-sm p-2
          hover:bg-white transition" onClick={() => setOpen(!open)}>
                    Explore<GrFormNextLink size={20} />
                </button>*/}


            </div>


        </div>


        {/* {open && floorData?.map((e) => (

            <div className="absolute bottom-24 right-5  p-6 rounded-xl bg-black/70 shadow-lg w-68 animate-float">
                <div className=' p-2 rounded-lg bg-white/50'>

                    
                    <h2 className="text-center font-bold text-[15px] mb-2 text-white">
                        Units of {e.name}
                    </h2>

                  
                    <div className="grid grid-cols-9 gap-1 text-center text-gray-900 font-semibold">
                        {e.units.map((unit) => (<div
                            className="p-1 text-[11px] bg-gray-100 rounded-lg hover:bg-gray-300
                 flex items-center justify-center cursor-pointer"

                            onClick={() => navigate(`/unit/${unit.unitId}`)}
                        >

                            <span>{unit.id}</span>


                        </div>))}
                    </div>



                </div>

            </div>

        ))} */}

    </>)
}