import { useState } from "react";
import {AiOutlineClose} from "react-icons/ai";
// import bgImage from '../assets/Inventory/image11.png'
import bgImage from '../assets/Inventory/floor/pride_wing_A.png';
import { MdOutlineReplyAll } from "react-icons/md";
import { useNavigate } from "react-router-dom";



export default function FloorInformation() {

    const navigate=useNavigate();
    const [zoom,setZoom]=useState(false);
    return (<>
        <div className='absolute top-[35%] flex right-5 py-2
         text-white rounded-lg w-56 text-sm justify-center items-center
          -translate-x-0 -translate-y-1/2 backdrop-blur-lg hover:backdrop-blur-xl 
        border border-while/10 shadow-xl  hover:shadow-[0_4px_30px_rgba(255,80,80,0.4)] hover:text-[15px]  ease-in-out duration-300 transition-all'>
            <button onClick={()=>setZoom(!zoom)}>ZOOM IMAGE</button>
        </div>

         <div className="absolute top-[4%] left-[3.1%] flex gap-4 z-[2000]">

                {/* Mute / Unmute */}
                <button
                    onClick={()=>navigate(-1)}
                    className="p-5 bg-black/30  backdrop-blur-xl text-white rounded-full hover:text-black hover:bg-white/40 transition shadow-lg"
                >
                    <MdOutlineReplyAll />
                </button>
            </div>

        { zoom && (<div className="fixed inset-0 z-[5000] bg-white/20 backdrop-blur-xl p-5 flex justify-center
        overflow-auto">
             {/* Close Button */}
                    <button
                        onClick={() => setZoom(false)}
                        className="absolute top-4 right-4 bg-black/20 text-white rounded-full w-7 h-7 flex items-center justify-center hover:bg-black/40 transition shadow-lg"
                    >
                        <AiOutlineClose size={17} />
                    </button>

                    <img src={bgImage} alt="Zoom" className="max-w-full max-h-full object-cover transition-transform duration-300"/>


        </div>)}

        <div className="absolute top-[56%] right-5 -translate-x-0 -translate-y-1/2
     bg-black/40 backdrop-blur-lg border border-white/20 shadow-xl
     px-2 py-6 rounded-br-2xl text-white space-y-4 w-56">
            <p className=" font-semibold tracking-widest text-white drop-shadow">
                TYPICAL FLOOR PLAN
            </p>

            <p className="text-sm font-bold text-white mt-2 drop-shadow-lg">
                TOWER DOSTI PRIDE
            </p>
            <div className="flex items-center">
                <p className="font-semibold w-32">Wing</p>
                <div className="flex-1 border-b border-white/30 mx-2"></div>
                <p className="font-bold text-sm">A</p>
            </div>

            {/* <div className="flex items-center">
                <p className="font-semibold w-32">Floor</p>
                <div className="flex-1 border-b border-white/30 mx-2"></div>
                <p className="font-bold text-xl">17</p>
            </div> */}




            <div className="flex items-center">
                <p className="font-semibold w-32">Total Floors</p>
                <div className="flex-1 border-b border-white/30 mx-2"></div>
                <p className="font-bold text-sm">24</p>
            </div>

            <div className="flex items-center">
                <p className="font-semibold w-32">Available</p>
                <div className="flex-1 border-b border-white/30 mx-2"></div>
                <p className="font-bold text-sm">24</p>
            </div>

        </div>
        <div className="absolute bottom-[20%] right-5 text-white flex items-center space-x-3  text-sm px-4 py-2 shadow-lg">
            <span className="w-2 h-2 bg-white rounded-full flex-shrink-0 bg-white/90 backdrop-blur-lg border border-white/30"></span>
            <span className=" font-semibold">Unit Type - 1BHK</span>
        </div>



    </>)
}