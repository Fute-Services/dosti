// import { Slide } from "@mui/material";
// import { useEffect, useState, useCallback } from "react";
// import { FiChevronLeft, FiChevronRight, FiPause, FiPlay } from "react-icons/fi";

// interface Slide {
//   id: number,
//   image: string,
//   title?: string
// }

// interface AutoSliderProps {
//   slides: Slide[];
//   autoPlay?: boolean;
//   interval?: number;
//   height?: string;
// }
// export default function AutoSlider({
//   slides,
//   autoPlay = true,
//   interval = 5000,
//   height = "350px",
// }: AutoSliderProps) {
//   const [current, setCurrent] = useState(0);
//   const [paused, setPaused] = useState(!autoPlay);

//   const next = useCallback(() => {
//     setCurrent((prev) => (prev + 1) % slides.length);
//   }, [slides.length]);

//   const prev = () => {
//     setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
//   };

//   useEffect(() => {
//     if (paused || slides.length <= 1) return;
//     const timer = setInterval(next, interval);
    
//     return () => clearInterval(timer);
//   }, [paused, next, interval, slides.length]);

//   if (!slides.length) return null;

//   return (
//     <div
//       className="relative w-full overflow-hidden rounded-3xl  bg-white/25 backdrop-blur-3xl
//         border border-white/30 w-full h-full  lg:h-screen px-10 py-14 text-center  flex flex-col justify-center items-center
//         shadow-2xl"
//       style={{ height }}
//     >
//       <div className="mt-2 flex flex-col gap-2 items-center justify-center text-center">
//         {/* <h2>ISSE GREATER TOWNSHIP NAHI</h2> */}
//         <h1 className="text-[15px] font-bold text-white  drop-shadow-md">
//           ISSE GREATER TOWNSHIP NAHI
//         </h1>
//         <p className="mb-4 text-[10px] text-gray-200">
//           11+ UNIQUE BRAND ALLIANCES
//         </p>
//       </div>
//       {/* Slides */}
//       <div
//         className="flex h-full transition-transform duration-700 ease-in-out mb-5"
//         style={{ transform: `translateX(-${current * 100}%)` }}
//       >
//         {slides.map((slide, index) => (
//           <div key={index} className="min-w-full h-full ">
//             <img
//               src={slide.image}
//               // alt={slide.title || "slide"}
//               className="w-full h-full object-contain"
//               loading="lazy"
//             />
//           </div>
//         ))}
//       </div>

//       <div className=" absolute text-center justify-center bottom-2 gap-5
//     flex items-center justify-center ">
//         {/* Prev */}
//         <button
//           onClick={prev}
//           className="
    
//     w-10 h-10 justify-center items-center flex
//     bg-white/10 backdrop-blur-xl border border-white/30
//     text-white rounded-full
//     shadow-[0_4px_20px_rgba(0,0,0,0.25)]
//     hover:bg-white/20 hover:scale-110
//     transition-all duration-300
//   "
//         >


//           <FiChevronLeft size={24} />
//         </button>


//         {/* Pause / Play */}
//         <button
//           onClick={() => setPaused(!paused)}
//           className="
    
//     w-10 h-10 justify-center items-center flex
//     bg-white/10 backdrop-blur-xl border border-white/30
//     text-white rounded-full
//     shadow-[0_4px_20px_rgba(0,0,0,0.25)]
//     hover:bg-white/20 hover:scale-110
//     transition-all duration-300
//   "
//         >
//           {paused ? <FiPlay size={20} /> : <FiPause size={20} />}
//         </button>

//         {/* Next */}
//         <button
//           onClick={next}
//           className="
    
//     w-10 h-10 justify-center items-center flex
//     bg-white/10 backdrop-blur-xl border border-white/30
//     text-white rounded-full
//     shadow-[0_4px_20px_rgba(0,0,0,0.25)]
//     hover:bg-white/20 hover:scale-110
//     transition-all duration-300
//   "
//         >
//           <FiChevronRight size={24} />
//         </button>

//       </div>
//     </div>
//   );
// }
