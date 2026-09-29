// import { useRef, useState } from "react";


// import { FaHome, FaRoad, FaTools } from "react-icons/fa";
// import { FaRedo } from "react-icons/fa";




// import neighbour from '../assets_vedio/map_for+animation_04.mp4'
// import proposed from '../assets_vedio/map_for+animation_04_proposed.mp4';
// import under from '../assets_vedio/map_for+animation_04_under+construction.mp4';


// import building from '../assets/Gallery/Gym.jpg'

// import {
//     Link,
//     //  useNavigate 
// } from "react-router-dom";
// import { MdOutlineReplyAll } from "react-icons/md";
// import { HiVolumeUp, HiVolumeOff } from "react-icons/hi";

// import { HiOutlineDotsVertical } from "react-icons/hi";
// import { FaExpandArrowsAlt } from "react-icons/fa";

// import { FaRegHeart } from "react-icons/fa";
// import { FaPlay, FaPause, } from "react-icons/fa";



// import { IoIosCloseCircleOutline } from "react-icons/io";
// import { FaWhatsapp } from "react-icons/fa";
// import { FiCopy } from "react-icons/fi";





// export default function LocationPage() {


//     const [isFav,
//         setIsFav
//     ] = useState(false);
//     const [isExpanded, setIsExpanded] = useState(false);
//     const [openShare, setOpenShare] = useState(false);
//     const [navOpen, setNavOpen] = useState(false);

//     const [activeCategory, setActiveCategory] = useState("Neighbourhood");

//     // ----- VIDEO CONTROLS -----
//     const videoRef = useRef<HTMLVideoElement>(null);
//     const [muted, setMuted] = useState(false);
//     const [paused, setPaused] = useState(false);

//     const toggleMute = () => {
//         if (videoRef.current) {
//             videoRef.current.muted = !videoRef.current.muted;
//             setMuted(videoRef.current.muted);
//         }
//     };

//     const togglePlay = () => {
//         if (videoRef.current) {
//             if (videoRef.current.paused) {
//                 videoRef.current.play();
//                 setPaused(false);
//             } else {
//                 videoRef.current.pause();
//                 setPaused(true);
//             }
//         }
//     };

//     const handleFavorite = () => {
//         setIsFav((prev) => !prev);
//     };
//     const handleExpand = () => {
//         setIsExpanded((prev) => !prev);
//         if (!isExpanded) {
//             document.documentElement.requestFullscreen();
//         }
//         else { document.exitFullscreen(); }
//     }
//     // 🔗 Share Link
//     const handleShare = () => {
//         setOpenShare(true);
//     };
//     const handleCopyLink = async () => {
//         try {
//             await navigator.clipboard.writeText(window.location.href);
//             alert("Link Copied!");
//         }
//         catch { alert("Failed to copy"); }
//     }

//     const handleWhatsAppShare = () => {
//         const url = window.location.href;
//         const message = `Check this out: ${url}`;
//         window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, "_blank");
//     }
//     return (
//         <div className="w-full h-screen bg-center bg-contain relative overflow-hidden">




//             {/* Proposed Infrastructure Video */}
//             {activeCategory === "Neighbourhood" && (
//                 <div
//                     className="w-screen h-screen relative flex items-center justify-center bg-cover bg-center"
//                     style={{ backgroundImage: `url(${building})` }}
//                 >
//                     {/* Dark blur overlay */}
//                     <div className="absolute inset-0 bg-black/40 backdrop-blur-xl"></div>

//                     {/* Video container */}
//                     <div className="relative z-10 flex items-center justify-center w-full h-full">
//                         <video
//                             ref={videoRef}
//                             src={neighbour}
//                             className="lg:max-w-[100%] max-w-full max-h-full lg:max-h-[84%] object-contain rounded-xl shadow-2xl z-[2000]"
//                             autoPlay
//                         />
//                     </div>
//                 </div>
//             )}



//             {/* Proposed Infrastructure Video */}
//             {activeCategory === "Proposed Infrastructure" && (
//                 <div
//                     className="w-screen h-screen relative flex items-center justify-center bg-cover bg-center"
//                     style={{ backgroundImage: `url(${building})` }}
//                 >
//                     {/* Dark blur overlay */}
//                     <div className="absolute inset-0 bg-black/40 backdrop-blur-xl"></div>

//                     {/* Video container */}
//                     <div className="relative z-10 flex items-center justify-center w-full h-full">
//                         <video
//                             ref={videoRef}
//                             src={proposed}
//                             className="lg:max-w-[100%] max-w-full max-h-full lg:max-h-[84%] object-contain rounded-xl shadow-2xl z-[2000]"
//                             autoPlay
//                         />
//                     </div>
//                 </div>
//             )}


//             {/* Under Construction Video */}
//             {activeCategory === "Under Construction Infrastructure" && (
//                 <div
//                     className="w-screen h-screen relative flex items-center justify-center bg-cover bg-center"
//                     style={{ backgroundImage: `url(${building})` }}
//                 >
//                     {/* Dark blur overlay */}
//                     <div className="absolute inset-0 bg-black/40 backdrop-blur-xl"></div>

//                     {/* Video container */}
//                     <div className="relative z-10 flex items-center justify-center w-full h-full">
//                         <video
//                             ref={videoRef}
//                             src={under}
//                             className="lg:max-w-[100%] max-w-full max-h-full lg:max-h-[84%] object-contain rounded-xl shadow-2xl z-[2000]"
//                             autoPlay
//                         />
//                     </div>
//                 </div>
//             )}



//             {/* <Header/> */}

//             <div className="absolute top-[14%] left-[3.1%] flex gap-4 z-[2000]">

//                 {/* Mute / Unmute */}
//                 <button

//                     className="p-3 bg-black/30 animate-float1 backdrop-blur-xl text-white rounded-full border border-white hover:bg-white/40 transition shadow-lg"
//                 >
//                     <Link to="/" ><MdOutlineReplyAll /></Link>
//                 </button>
//             </div>

//             {/* --- New Icons --- */}
//             <div className="absolute top-[14%] z-[2000] right-0 md:right-[3%] flex gap-1 md:gap-3 justify-center items-center">

//                 {/* Heart */}
//                 <div
//                     onClick={handleFavorite}
//                     className={`p-2 text-center justify-center ${isFav ? "bg-red-600 " : ""} flex text-white text-sm hover:text-black rounded-full backdrop-blur-md bg-black border border-white/20 shadow-sm cursor-pointer hover:bg-white/20  transition`}>
//                     <FaRegHeart size={10} className="" />
//                 </div>

//                 {/* Expand */}
//                 <div
//                     onClick={handleExpand}
//                     className="px-2 py-2 text-center justify-center text-white text-sm hover:text-black flex rounded-full backdrop-blur-md bg-black border border-white/20 shadow-sm cursor-pointer hover:bg-white/20 transition">
//                     <FaExpandArrowsAlt size={10} className="" />
//                 </div>

//                 {/* Three Dots */}
//                 <div
//                     onClick={handleShare}
//                     className="px-2 py-2 text-center justify-center text-white text-sm hover:text-black flex rounded-full backdrop-blur-md bg-black border border-white/20 shadow-sm cursor-pointer hover:bg-white/20 transition">
//                     <HiOutlineDotsVertical size={10} className="" />
//                 </div>

//             </div>
//             {/* Neighbour navbar*/}
//             {activeCategory !== "Neighbourhood" && activeCategory !== "Under Construction Infrastructure" && activeCategory !== "Proposed Infrastructure" && (<div
//                 className="
//     w-auto h-auto
//     absolute bottom-[11%] left-[15%]
//     bg-black/30 backdrop-blur-xl
//     border border-white/30 shadow-2xl
//     rounded-2xl py-[4px] px-2 z-10 animate-float1
//   "
//             >

//             </div>)}


//             {/* ----- VIDEO CONTROLS ----- */}
//             {(activeCategory === "Proposed Infrastructure" || activeCategory === "Neighbourhood" ||
//                 activeCategory === "Under Construction Infrastructure") && (
//                     <div className="absolute bottom-10 right-10 flex gap-4 z-[3000]">

//                         {/* Mute / Unmute */}
//                         <button
//                             onClick={toggleMute}
//                             className="p-3 bg-black/40 backdrop-blur-xl text-white rounded-full border border-white shadow-lg"
//                         >
//                             {muted ? <HiVolumeOff size={20} /> : <HiVolumeUp size={20} />}
//                         </button>

//                         {/* Play / Pause */}
//                         <button
//                             onClick={togglePlay}
//                             className="p-3 bg-black/40 backdrop-blur-xl text-white rounded-full border border-white shadow-lg"
//                         >
//                             {paused ? <FaPlay size={17} /> : <FaPause size={17} />}
//                         </button>

//                         {/* Restart */}
//                         <button
//                             onClick={() => {
//                                 if (videoRef.current) {
//                                     videoRef.current.currentTime = 0;
//                                     videoRef.current.play();
//                                     setPaused(false);
//                                 }
//                             }}
//                             className="p-3 bg-black/40 backdrop-blur-xl text-white rounded-full border border-white shadow-lg"
//                         >
//                             <FaRedo size={17} />
//                         </button>
//                     </div>
//                 )}



//             {/* Category Buttons Overlay */}
//             <div className="absolute bottom-3 md:bottom-2 md:left-16 lg:left-1/2 lg:-translate-x-1/2 left-4 z-[1000] flex md:flex-row flex-col gap-2 lg:gap-3 justify-center items-start">
//                 <button

//                     onClick={() => {
//                         setActiveCategory("Neighbourhood"); // set the category
//                         setNavOpen(!navOpen);               // toggle the nav
//                     }}
//                     // onClick={() => setNavOpen(!navOpen)}

//                     className={`flex items-center  gap-1 lg:px-4 lg:py-2 px-1   border border-white  transition shadow-lg
//                  py-[3px] text-sm lg:text-[14px] ${activeCategory === "Neighbourhood" ? "bg-black/80  backdrop-blur-xl text-white " : "bg-white/40  backdrop-blur-xl text-black  hover:bg-white/50 hover:scale-105 transition-all duration-300 ease-in-out"}  rounded-full shadow-md hover:shadow-lg transition`}
//                 >
//                     <div className="p-2 
               
//                ">
//                         <FaHome />
//                     </div>
//                     Neighborhood
//                 </button>

//                 <button
//                     onClick={() => setActiveCategory("Proposed Infrastructure")}

//                     className={`flex items-center  gap-1 lg:px-4 lg:py-2 px-1   border border-white  transition shadow-lg
//                  py-[3px] text-sm lg:text-[14px] ${activeCategory === "Proposed Infrastructure" ? "bg-black/60  backdrop-blur-xl text-white " : "bg-white/40  backdrop-blur-xl text-black  hover:bg-white/50 hover:scale-105 transition-all duration-300 ease-in-out"}  rounded-full shadow-md hover:shadow-lg transition`}

//                 >
//                     <div className="p-2 ">
//                         <FaRoad />
//                     </div>
//                     Proposed Infrastructure
//                 </button>

//                 <button
//                     onClick={() => setActiveCategory("Under Construction Infrastructure")}
//                     className={`flex items-center  gap-1 lg:px-4 lg:py-2 px-1   border border-white  transition shadow-lg
//                  py-[3px] text-sm lg:text-[14px] ${activeCategory === "Under Construction Infrastructure" ? "bg-black/60  backdrop-blur-xl text-white " : "bg-white/40  backdrop-blur-xl text-black  hover:bg-white/50 hover:scale-105 transition-all duration-300 ease-in-out"}  rounded-full shadow-md hover:shadow-lg transition`}
//                 >
//                     <div className="p-2 ">
//                         <FaTools />
//                     </div>
//                     Under Construction
//                 </button>


//             </div>

//             {/* ---------------------------------------------- */}

//             {openShare && (
//                 <div
//                     onClick={() => setOpenShare(false)}
//                     className="inset-0 bg-black/40 backdrop-blur-sm flex absolute items-center justify-center z-[3000]"
//                 >
//                     <div
//                         onClick={(e) => e.stopPropagation()}
//                         className="bg-black/50 p-5 rounded-2xl  shadow-xl w-72 flex flex-col gap-4"
//                     >
//                         <div className="relative p-4 rounded-2xl   shadow-md">
//                             <button
//                                 onClick={() => setOpenShare(false)}
//                                 className="absolute top-2 right-2 text-white hover:text-black text-2xl hover:text-[26px]">
//                                 <IoIosCloseCircleOutline />
//                             </button>

//                             <h2 className="text-lg font-semibold text-center text-white">
//                                 SHARE
//                             </h2>
//                         </div>


//                         {/* WhatsApp */}
//                         <button
//                             onClick={handleWhatsAppShare}
//                             className="bg-green-500 text-white flex items-center gap-3 px-4 py-3 rounded-xl shadow-md hover:bg-green-600 transition"
//                         >
//                             <FaWhatsapp className="text-xl" />
//                             Share on WhatsApp
//                         </button>

//                         {/* Copy Link */}
//                         <button
//                             onClick={handleCopyLink}
//                             className="bg-gray-100 text-black flex items-center gap-3 px-4 py-3 rounded-xl border hover:bg-gray-200 transition"
//                         >
//                             <FiCopy className="text-xl" />
//                             Copy Link
//                         </button>

//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// }
