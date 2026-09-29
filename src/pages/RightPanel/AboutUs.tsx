// // import FullPageLayout from "../../components/FullPageLayout";
// // import GlassWrapper from "../../components/GlassWrapper";
// // import bgImage from '../../assets/Gallery/Dosti.jpg'
// // import image2 from '../../assets/des/DostiMap1.jpeg';
// // import image1 from '../../assets/des/DostiMap.jpeg'
// import bgImage from '../../assets/des/DostiMap.jpeg'
// import AboutSub from './AboutSub';





// export default function AboutUs() {

//     const highlights = [
//         " It’s just the Dosti DNA. Where we’ve transformed unexplored locations into the new-age nests of luxury, such as Wadala.",
//         " It’s just the Dosti Way of Building. Where we’ve uplifted lives and democratised the right to a life well lived, such as in Thane. It’s just the Dosti Purpose. ",
//         "Where we’ve elevated the art of living alongside skylines, such as Sion and Ghodbunder Road.",
//         "But at the heart of it all, it’s something deeper. It’s our instinct to understand before we build.",


//     ]

//     const high1 = [
//         " To listen before we lead. To tune in to what a city needs, what communities deserve, and what tomorrow demands.",
//         " Above all, it’s just the Dosti Legacy. A journey of befriending the art of building with pioneering foresight, strategic boldness and an unshakable foundation of trust.",

//         " Wherever Dosti Realty has set foot, the lives, the location, and the skyline have risen above and beyond. So have its privileged customers like you. ",
//         "At Dosti Realty, transforming lives alongside locales is a responsibility we proudly uphold. And will, as long as we stay. ",
//     ]
//     return (<>
//         <section
//             className="relative w-full h-auto lg:h-screen bg-cover overflow-y-scroll lg:overflow-hidden
//             bg-center text-white flex items-center justify-center "
//             style={{ backgroundImage: `url(${bgImage})` }}
//         >
//             {/* Overlay */}
//             <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

//             {/* Main Glass Card */}
//             <div className="relative  w-full justify-center items-center
//              md:justify-start md:items-start 
//             md:p-5  h-full  rounded-sm shadow-xl
//               flex md:flex-row flex-col  ">
//                 <div className='w-[8%]' />

//                 {/* Image Panel */}
//                 <div className='flex flex-col-reverse lg:flex-row h-auto lg:h-screen 
//                 rounded-sm shadow-lg 
//                  justify-center items-center bg-black/20 w-[92%]'>
//                     <div className="md:w-1/2 w-full h-64 md:h-full mt-20 md:mt-0">
//                         <img
//                             src={bgImage}
//                             alt="Legacy"
//                             className="w-full h-full object-contain"
//                         />
//                     </div>

//                     {/* Content Panel */}
//                     <div
//                         className="lg:w-1/2 w-full py-1 px-5
//   flex flex-col items-center justify-start
//   h-full lg:max-h-[85vh] overflow-y-auto space-y-3 thin-scrollbar "
//                     >
//                         <div className="z-10 lg:z-0 mt-2 md:mt-14 lg:mt-0 mb-2 flex flex-col gap-3">
//                             <h3 className="text-lg text-[12px]  lg:text-[23px] text-center font-semibold opacity-90">
//                                 A Legacy Built On
//                             </h3>

//                             <h3 className="text-lg text-[12px]  lg:text-[23px] text-center font-semibold opacity-90 flex items-center justify-center">
//                                 Understanding And Trust
//                             </h3>
//                         </div>

//                         <ul className="list-disc ml-5 space-y-4 text-[11px] md:text-base leading-relaxed">
//                             {highlights.map((item, index) => (
//                                 <li key={index}>{item}</li>
//                             ))}
//                         </ul>

// <div className='w-full justify-center itesm-center flex'>  <AboutSub /> </div>
                      

//                         <ul className="list-disc ml-5 space-y-4 text-[11px] md:text-base leading-relaxed">
//                             {high1.map((item, index) => (
//                                 <li key={index}>{item}</li>
//                             ))}
//                         </ul>
//                     </div>



//                 </div>
//             </div>
//         </section>


//     </>)
// }