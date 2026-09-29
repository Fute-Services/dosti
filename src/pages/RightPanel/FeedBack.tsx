// import FullPageLayout from "../../components/FullPageLayout";
// import GlassWrapper from "../../components/GlassWrapper";
// import bgImage from '../../assets/Gallery/Gym.jpg'

// import { useState, useCallback } from "react";
// import {
//     FiChevronLeft, FiChevronRight,
//     //  FiPause, FiPlay 
// } from "react-icons/fi";
// import { useNavigate } from "react-router-dom";
// type Video = {
//     id: string;
// };
// export default function FeedBack({
//     //  autoPlay = true,
//     // interval = 7000,
// }) {

//     const videos: Video[] = [
//         { id: "um1pbl82lr" },
//         { id: "u4nao5yfze" },
//         { id: "6wgrmfj5nh" },
//         { id: "wisatkr6na" },
//         { id: "0vdnxo60te" },
//     ];
//     const navigate = useNavigate();

//     const [current, setCurrent] = useState(0);
//     // const [paused, setPaused] = useState(!autoPlay);

//     const next = useCallback(() => {
//         setCurrent((prev) => (prev + 1) % videos.length);
//     }, [videos.length]);

//     const prev = () => {
//         setCurrent((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
//     };

//     // useEffect(() => {
//     //     // if (paused || videos.length <= 1) return;

//     //     const timer = setInterval(next, interval);
//     //     return () => clearInterval(timer);
//     // }, [ next, interval, videos.length]);

//     // const [navigation] = performance.getEntriesByType('navigation');

//     // if (navigation.type === 'reload') {
//     //     console.log("This page was refreshed!");
//     // } else {
//     //     console.log("This is a fresh visit.");
//     // }

//     if (!videos.length) return null;
//     return (<>
//         <FullPageLayout background={bgImage}>
//             <GlassWrapper className=" bg-white/25 backdrop-blur-xl
//             border border-white/30 w-full h-full overflow-y-scroll lg:h-screen p-10 text-center  flex flex-col justify-center items-center
//             shadow-2xl">


//                 <div className=" md:max-w-lg  lg:max-w-5xl justify-center items-center flex mt-5 md:mt-2 select-none overflow-hidden">
//                     <div className="relative w-full overflow-hidden rounded-3xl  bg-white/25 backdrop-blur-3xl 
//         border border-white/30 lg:w-full h-full transition-all duration-500 lg:h-[85%] px-10 py-14 text-center  flex flex-col justify-center items-center
//         shadow-2xl">

//                         <div className="-mt-2 flex flex-col gap-2 items-center justify-center text-center">
//                             {/* <h2>ISSE GREATER TOWNSHIP NAHI</h2> */}
//                             <h1 className="text-[15px] font-bold text-white  drop-shadow-md uppercase">
//                                 Accolades of Dosti Greater Thane
//                             </h1>
//                             <p className="mb-4 text-[10px] text-gray-200">
//                                 Voices of Trust – Real stories from people who chose Dosti and found their perfect home.
//                             </p>
//                         </div>

//                         <iframe
//                             title="Testimonial Videos"
//                             // width="800"
//                             // height="450"
//                             src={`https://fast.wistia.com/embed/medias/${videos[current].id}`}
//                             frameBorder="0"
//                             allow="autoplay; fullscreen; picture-in-picture"
//                             allowFullScreen
//                             className="w-full h-full md:w-[500px] md:h-[300px] lg:w-[800px] lg:h-[450px]"
//                         ></iframe>


//                         <div className=" absolute text-center justify-center bottom-2 gap-5
//                             flex items-center justify-center ">
//                             {/* Prev */}
//                             <button
//                                 onClick={prev}
//                                 className="
                            
//                             w-10 h-10 justify-center items-center flex
//                             bg-white/10 backdrop-blur-xl border border-white/30
//                             text-white rounded-full
//                             shadow-[0_4px_20px_rgba(0,0,0,0.25)]
//                             hover:bg-white/20 hover:scale-110
//                             transition-all duration-500
//                           "
//                             >


//                                 <FiChevronLeft size={24} />
//                             </button>


//                             {/* Pause / Play 
//                         <button
//                             onClick={() => setPaused(!paused)}
//                             className="
                            
//                             w-10 h-10 justify-center items-center flex
//                             bg-white/10 backdrop-blur-xl border border-white/30
//                             text-white rounded-full
//                             shadow-[0_4px_20px_rgba(0,0,0,0.25)]
//                             hover:bg-white/20 hover:scale-110
//                             transition-all duration-300
//                           "
//                         >
//                             {paused ? <FiPlay size={20} /> : <FiPause size={20} />}
//                         </button>  

//                         {/* Next */}
//                             <button
//                                 onClick={next}
//                                 className="
                            
//                             w-10 h-10 justify-center items-center flex
//                             bg-white/10 backdrop-blur-xl border border-white/30
//                             text-white rounded-full
//                             shadow-[0_4px_20px_rgba(0,0,0,0.25)]
//                             hover:bg-white/20 hover:scale-110
//                             transition-all duration-500
//                           "
//                             >
//                                 <FiChevronRight size={24} />
//                             </button>

//                         </div>


//                     </div>



//                 </div>

//                 <button
//                     type="button"
//                     onClick={(e) => {
//                         e.stopPropagation();
//                         e.preventDefault();
//                         navigate("/")

//                     }

//                     }
//                     className={`
//         absolute 
//         lg:px-6 lg:py-3 
//         px-2 py-1
//         rounded-3xl
//         z-[8000]
//         bg-white/15
//         backdrop-blur-2xl
//         border border-white/30
//         shadow-[0_4px_20px_rgba(255,255,255,0.25)]
//         text-white font-semibold tracking-wide
//         transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
//         hover:scale-110
//         hover:bg-white/25
//         hover:shadow-[0_2px_5px_rgba(0.10,1,0.5,2)]
//         animate-float1
//         cursor-pointer pointer-events-auto text-[11px] lg:text-sm  right-[2%] top-[15%]
        
//       `}
//                 >
//                     GO BACK
//                 </button>
//             </GlassWrapper>
//         </FullPageLayout>

//     </>)
// }