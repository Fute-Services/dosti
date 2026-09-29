// // import { useState } from 'react'
// import image from '../assets/Gallery/Dosti.jpg'
// import { useImagePreloader } from '../hooks/useImagePreloader';

// export default function Project_Highlights() {
//     const isImageReady = useImagePreloader(image);
//     // const [isExpended, setIsExpended] = useState(true);  ${isExpended ? "h-[25%] md:h-[45%] lg:h-[40%]" : "h-auto"}
//     return (
//         <div className="fixed inset-0 w-screen h-screen overflow-hidden">
//             <img
//                 src={image}
//                 alt="Project Highlights"
//                 className={`w-full h-full object-contain md:object-fill ${isImageReady ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}
//             />
//             {/* <div className='absolute inset-0 bg-black/10'></div> */}
//             <div
//                 className={`
//     absolute z-20 
//     bg-white/15
//     rounded-2xl 
//     backdrop-blur-md 
//     p-5 md:p-6
//     top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
//     w-[70%] md:w-[70%] lg:w-[50%]
//     max-h-[30%] md:max-h-[60%]
//     overflow-y-auto
//     shadow-2xl
//     border border-white/10
//   `}
//             >
//                 <h2 className="
//    font-bold md:font-bold lg:font-semibold 
//     text-[12px] md:text-[16px] lg:text-[19px] 
    
//     text-[rgb(205,20,50)]
//     tracking-wide
//     leading-snug
//   ">
//                     A GRAND COMMUNITY WITH ALL THE FEATURES FOR
//                     A GREATER TOMORROW
//                 </h2>

//                 {/* <div className="w-[100px] h-[2px] bg-red-500 mx-auto my-3 rounded-full" /> */}

//                 <ul className="
//     list-disc list-inside 
//     mt-5 
//     text-white/90 font-normal
//     text-[13px] md:text-[16px]
//     space-y-2
//   ">
//                     <li>Just 7 Km (10 Mins)* from Viviana Mall.</li>
//                     <li>Just 4 Km (6 Mins)* from Balkum, Thane.</li>
//                     <li>
//                         Strategic connectivity with the Metro Line 5 (Thane–Bhiwandi–Kalyan) –
//                         Kalher Metro Station outside Dosti Greater Thane.
//                     </li>
//                     <li>
//                         Easy accessibility to Thane, Kalyan, Navi Mumbai, Mumbai & key localities via rail and road.
//                     </li>
//                     <li>Desirable lifestyle amenities and all the comforts of a modernistic life.</li>
//                     <li>Various Schools, Hospitals, Malls, Temples and Shops right within its vicinity.</li>
//                     <li>
//                         Dosti Greater Thane offers the liberty to live the much-desired life at an extremely affordable pricing.
//                     </li>
//                     <li>Homes already sold to 3700+ families.</li>
//                 </ul>
//             </div>

//             {/* <button 
//             // onClick={() => setIsExpended(!isExpended)}
//                 className={`absolute w-[39.6%] lg:w-[17%] h-[6%] 
//             transition-all duration-300 
//             ${isExpended ? "md:bottom-[26.2%] lg:bottom-[24.4%]" : " md:bottom-[8%] lg:bottom-[5%] bg-gray-500/30"} text-sm rounded-lg right-[21%] backdrop-blur-sm 
//             bg-gray-500/55  hover:bg-black/50  text-white/80 `}> {isExpended ? "View More" : " View Less"}</button> */}
//         </div>
//     )
// }