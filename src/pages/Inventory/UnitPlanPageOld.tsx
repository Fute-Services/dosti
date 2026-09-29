// import { useState, useRef } from 'react';
// // import bgImage from '../../assets/Inventory/unit/pride_wing_A_sideUnit.png';
// // import image1 from '../../assets/Towers/image2.png';
// // import InventoryNavbar from '../../Components/InventoryNavbar';
// // import image from '../../assets/images1.jpeg'
// // import image from '../../assets/Gallery/Gym.jpg';

// // import BackButton from '../../Components/BackButton';
// // import wingA from '../../assets/Inventory/unit/pride_wing_A_Unit.png'
// import { useNavigate, useParams } from 'react-router-dom';
// // import { Tooltip } from 'react-tooltip'

// import { AiOutlineClose } from "react-icons/ai";
// // import { GrFormPreviousLink } from "react-icons/gr";
// // import { GrFormNextLink } from "react-icons/gr";
// // import { useNavigate } from 'react-router-dom';
// import { Data } from '../../Data/FloorPlanData';
// import Tooltip from '@mui/material/Tooltip';


// export default function UnitPlanPage() {
//     const navigate = useNavigate();
//     const [open,
//         //  setOpen
//     ] = useState(false);
//     const [open1,
//         // setOpen1
//     ] = useState(false);
//     // const [hoveredId, setHoveredId] = useState<Number | null>(null);
//     // const navigate = useNavigate();

//     // const [hover, setHover] = useState(false);
//     const containerRef = useRef<HTMLDivElement | null>(null);
//     const lastTouchDistance = useRef<number | null>(null);
//     const [zoom, setZoom] = useState(false);
//     const [scale, setScale] = useState(1);
//     const [origin, setOrigin] = useState("50% 50%");


//     const { unitId } = useParams<{ unitId: string }>();
//     const [hoverId, setHoverId] = useState<number | null>(null);
//     const [selectedUnit, setSelectedUnit] = useState<number | null>(null);

//     // const unitData=Data.find((e)=>e.units.some((u:{unitId:number})=>u.unitId===Number(unitId)))

//     // const unitData: Unit:any | undefined = Data
//     //     .flatMap((item: DataItem) => item.units)
//     //     .find((unit) => unit.unitId === Number(unitId))
//     const parentWing = Data.find(item =>
//         item.units.some(unit => unit.unitId === Number(unitId))
//     );
//     const unitData = Data
//         .flatMap(item => item.units)
//         .find(unit => unit.unitId === Number(unitId));


//     console.log("..........." + JSON.stringify(unitData));

//     const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
//         e.preventDefault();

//         const rect = containerRef.current?.getBoundingClientRect();
//         if (!rect) return;

//         const x = ((e.clientX - rect.left) / rect.width) * 100;
//         const y = ((e.clientY - rect.top) / rect.height) * 100;

//         setOrigin(`${x}% ${y}%`);

//         setScale((prev) =>
//             Math.min(3, Math.max(1, prev - e.deltaY * 0.001))
//         );
//     };
//     const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
//         if (e.touches.length === 2) {
//             const dx = e.touches[0].clientX - e.touches[1].clientX;
//             const dy = e.touches[0].clientY - e.touches[1].clientY;
//             lastTouchDistance.current = Math.hypot(dx, dy);
//         }
//     };

//     const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
//         if (e.touches.length !== 2 || !lastTouchDistance.current) return;

//         e.preventDefault();

//         const dx = e.touches[0].clientX - e.touches[1].clientX;
//         const dy = e.touches[0].clientY - e.touches[1].clientY;
//         const distance = Math.hypot(dx, dy);

//         const zoomFactor = distance / lastTouchDistance.current;
//         lastTouchDistance.current = distance;

//         const rect = containerRef.current?.getBoundingClientRect();
//         if (!rect) return;

//         const centerX =
//             (e.touches[0].clientX + e.touches[1].clientX) / 2;
//         const centerY =
//             (e.touches[0].clientY + e.touches[1].clientY) / 2;

//         const x = ((centerX - rect.left) / rect.width) * 100;
//         const y = ((centerY - rect.top) / rect.height) * 100;

//         setOrigin(`${x}% ${y}%`);

//         setScale((prev) =>
//             Math.min(3, Math.max(1, prev * zoomFactor))
//         );
//     };

//     const handleTouchEnd = () => {
//         lastTouchDistance.current = null;
//     };



//     return (<>

//         {/* <h2>{unitData.unitName}</h2> */}
//         <div className="flex flex-col md:flex-row overflow-y-scroll lg:overflow-hidden items-center justify-center lg:justify-start lg:items-start lg:h-screen w-full bg-[#E8E8E8] gap-3">

//             {/* // style={{ backgroundImage: `url(${image})` }} */}
//             <div className='lg:flex-col flex md:w-[25%] lg:w-[8%]'></div>
//             <div className="flex flex-col lg:justify-center lg:w-[15%] w-[50%] lg:bg-[#E8E8E8] h-auto md:h-screen lg:mt-0 lg:ml-0 md:mt-24 md:ml-5">
//                 <h2 className='w-full text-center font-semibold p-2 rounded-lg bg-[#f5f5f5] text-[15px] from-gray-200 to-[#f5f5f5] border-[#cf9079] text-[#333]'>FLOOR PLANS</h2>
//                 <div className='bg-[#f5f5f5] lg:h-[auto] mt-5 items-center justify-center overflow-scroll overflow-x-hidden scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent shadow-md'>
//                     <h2 className='font-semibold text-[14px] mb-2 flex item-center text-center gap-3'>
//                         <span className='flex justify-center items-center text-[#333] w-full rounded-md shadow-md mt-3'>
//                             {unitData?.unitName.toUpperCase()}
//                         </span>
//                     </h2>
//                     {unitData?.rooms?.map((room) => (
//                         <button
//                             key={room.id}
//                             className={`flex w-[85%] text-nowrap m-3 lg:ml-5 p-2 text-[11.5px]
//                             justify-start transition-all duration-200 rounded-md shadow-md mb-2
//                             ${hoverId === room.id
//                                     ? "scale-105 bg-black text-white"
//                                     : "scale-100 bg-[#7d7a74ff] text-white"
//                                 }`}
//                             onMouseEnter={() => setHoverId(room.id)}
//                             onMouseLeave={() => setHoverId(null)}
//                             onClick={() => setSelectedUnit(room.id)}
//                         >
//                             {room.name.toUpperCase()}
//                             <p className='ml-[auto]'>{room.size}</p>
//                         </button>
//                     ))}

//                 </div>
//             </div>
//             <div className="flex flex-col lg:w-[70%] md:w-[90%] w-[90%] justify-center items-center object-cover bg-[#E8E8E8] overflow-hidden">
//                 <svg viewBox={parentWing?.imageSettings?.svg}
//                     className='w-full h-full object-cover ml-[35%]'
//                     preserveAspectRatio='xMidYMid meet'>
//                     {unitData?.unitImage && (
//                         <image
//                             href={unitData.unitImage}
//                             width={unitData.widthx}
//                             height={unitData.heighty}
//                             preserveAspectRatio="xMidYMid meet"
//                         />
//                     )}
//                     {unitData?.rooms.map((room) => (
//                         <Tooltip
//                             title={`${room.name} - ${room.size}`}
//                             arrow
//                             placement='top'
//                             open={selectedUnit === room.id || hoverId === room.id}
//                         >
//                             <g>
//                                 <polygon
//                                     key={room.id}
//                                     points={room.polygon}
//                                     fill={hoverId === room.id ? "rgba(255,112,67,0.5)" : "transparent"}
//                                     style={{ cursor: "pointer" }}
//                                     onMouseEnter={() => setHoverId(room.id)}
//                                     onMouseLeave={() => setHoverId(null)}
//                                 />
//                             </g>
//                         </Tooltip>
//                     ))}
//                 </svg>
//             </div>
//             <div className="flex flex-col lg:w-[13%]  w-[70%] bg-[#E8E8E8] justify-start lg:mt-20 p-0 mr-2">
//                 <div className='bg-white/70 border border-gray-300 p-3 items-center rounded-sm rounded-xl flex flex-col gap-2 '>
//                     <button onClick={() => navigate(-1)}
//                         className="w-full py-2 bg-[#7d7a74ff] text-white rounded-lg border border-white/40
//                         text-[13.5px] shadow hover:bg-black transition">
//                         GO BACK
//                     </button>
//                     <button
//                         onClick={() => setZoom(!zoom)}
//                         className="w-full text-[13.5px] py-2 bg-[#7d7a74ff] text-white rounded-lg border border-white/40 shadow hover:bg-black transition">
//                         ZOOM IMAGE
//                     </button>
//                      {!zoom && (<div className="absolute top-2 md:top-[63%] md:block hidden md:right-2 -translate-x-0 -translate-y-1/2
//                         bg-white/20 border border-gray-300 shadow-xl
//                         px-2 py-6 rounded-2xl space-y-4 w-[250px] md:w-[200px] lg:w-[240px] 2xl:w-[220px]">
//                         <p className="font-semibold text-[14px]">
//                             INFORMATION
//                         </p>

//                         <div className="flex items-center">
//                             <p className="font-semibold text-[14px]">Status</p>
//                             <p className="text-sm ml-[auto]">{unitData?.unitInfo?.status}</p>
//                         </div>

//                         <div className="flex items-center">
//                             <p className="font-semibold text-[14px]">Tower</p>
//                             {/* <div className="flex-1 border-b border-white/30 mx-2"></div> */}
//                             <p className="text-sm ml-[auto]">{unitData?.unitInfo?.tower}</p>
//                         </div>
//                         <div className="flex items-center">
//                             <p className="font-semibold text-[14px]">Wing</p>
//                             {/* <div className="flex-1 border-b border-white/30 mx-2"></div> */}
//                             <p className="text-sm ml-[auto]">{unitData?.unitInfo?.wing}</p>
//                         </div>

//                         <div className="flex items-center">
//                             <p className="font-semibold text-[14px]">Floor Number</p>
//                             {/* <div className="flex-1 border-b border-white/30 mx-2"></div> */}
//                             <p className="text-sm ml-[auto]">{unitData?.unitInfo?.floorno}</p>
//                         </div>

//                         <div className="flex items-center">
//                             <p className="font-semibold text-[14px]">Rera Carpet Area</p>
//                             {/* <div className="flex-1 border-b border-white/30 mx-2"></div> */}
//                             <p className="text-sm ml-[auto]">{unitData?.unitInfo?.Rera_carpet_area}</p>
//                         </div>
//                         <div className="flex items-center">
//                             <p className="font-semibold text-[14px]">Enclosed Balcony</p>
//                             {/* <div className="flex-1 border-b border-white/30 mx-2"></div> */}
//                             <p className="text-sm ml-[auto]">{unitData?.unitInfo?.enclosed_balcony_area}</p>
//                         </div>

//                         <div className="flex items-center">
//                             <p className="font-semibold text-[14px]">Open Balcony Area</p>
//                             {/* <div className="flex-1 border-b border-white/30 mx-2"></div> */}
//                             <p className="text-sm ml-[auto]">{unitData?.unitInfo?.open_balcony_area}</p>
//                         </div>

//                         <div className="flex items-center">
//                             <p className="font-semibold text-[14px]">Total Usable Area</p>
//                             {/* <div className="flex-1 border-b border-white/30 mx-2"></div> */}
//                             <p className="text-sm ml-[auto]">{unitData?.unitInfo?.total_usable_area}</p>
//                         </div>


//                     </div>)}
//                 </div>
//             </div>
//             {/* Small Preview Image */}
//             {/* <div className="absolute right-[20%] top-[6%] z-[2000] p-1 w-28 h-32 md:w-[200px] md:h-40 
//                 bg-black/10 backdrop-blur-xl rounded-lg border border-white/40 shadow-lg 
//                 flex justify-center items-center hover:bg-black/20 transition">
//                 {unitData?.unitleftside ? (
//                     <img
//                         src={unitData.unitleftside}
//                         alt="Unit left side"
//                         className="w-full h-full object-contain"
//                     />
//                 ) : (
//                     <p className="text-center text-gray-500">No image available</p>
//                 )}

//             </div> */}



//             {/* Buttons */}

//             {/* <div className="absolute right-14 top-[13%] z-[2000] flex flex-col gap-5 w-[25%] md:w-[200px] lg:w-[240px] 2xl:w-[130px]">
//                 <button onClick={() => navigate(-1)}
//                     className="w-full py-2 bg-[#7d7a74ff] text-white rounded-lg border border-white/40 shadow hover:bg-black transition">
//                     GO BACK
//                 </button>
//                 <button
//                     onClick={() => setZoom(!zoom)}
//                     className="w-full py-2 bg-[#7d7a74ff] text-white rounded-lg border border-white/40 shadow hover:bg-black transition">
//                     ZOOM IMAGE
//                 </button>
//             </div> */}


//             {zoom && (
//                 <div
//                     className="fixed inset-0 z-[5000] bg-white/20 backdrop-blur-xl p-5 flex justify-center items-center"
//                 >
//                     {/* Close Button */}
//                     <button
//                         onClick={() => setZoom(false)}
//                         className="absolute top-4 right-4 bg-black/20 text-white rounded-full w-7 h-7 flex items-center justify-center hover:bg-black/40 transition shadow-lg"
//                     >
//                         <AiOutlineClose size={17} />
//                     </button>


//                     {/* Zoomed Image */}
//                     <div
//                         ref={containerRef}
//                         className="w-full h-full overflow-hidden touch-none flex items-center justify-center"
//                         onWheel={handleWheel}
//                         onTouchStart={handleTouchStart}
//                         onTouchMove={handleTouchMove}
//                         onTouchEnd={handleTouchEnd}
//                     >
//                         {unitData?.unitImage ? (
//                             <img
//                                 src={unitData.unitImage}
//                                 alt="Zoomable"
//                                 draggable={false}
//                                 style={{
//                                     transform: `scale(${scale})`,
//                                     transformOrigin: origin,
//                                     transition: "transform 0.1s ease-out",
//                                     cursor: scale > 1 ? "grab" : "default",
//                                 }}
//                                 className="max-w-full max-h-full object-cover select-none"
//                             />
//                         ) : (
//                             <p className="text-center text-gray-500">No image available</p>
//                         )}
//                     </div>

//                 </div>
//             )}










//             {/* <div className='absolute bg-black left-0 min-w-72 min-h-64 rounded-xl'>

//             </div> */}
//         </div>
//         {/* <InventoryNavbar /> */}
//         {/*  hover:bg-[rgb(207,171,111)]
//         <div className="absolute top-1/2 left-2 -translate-x-0 -translate-y-1/2
//     text-center px-2 py-14 rounded-br-xl
//     bg-white/10 backdrop-blur-lg shadow-xl border border-white/20">



//             <p className="text-[12px] font-medium text-white/90 mt-1 drop-shadow">
//                 WING – A
//             </p>
//         </div> */}


//         {/* <div className="absolute bottom-2  flex items-center gap-5 bg-black/70 w-full max-h-40 justify-center p-6">

//             {/* Prev Button 
//             <button className="w-9 h-9 flex items-center justify-center 
//       bg-white/80 text-black font-bold rounded-full shadow 
//       hover:bg-white transition" onClick={() => setOpen(!open)}>
//                 <GrFormPreviousLink size={20} />
//             </button>

//             {/* Glass Number Panel 
//             <div className="
//       bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl transition-all duration-300 ease-in-out
//       rounded-3xl px-8 py-2 flex items-center">

//                 <div className="flex gap-8 text-white font-semibold text-xl">
//                     <span className="cursor-pointer hover:text-white hover:bg-[rgb(101,101,102)] justify-center items-center flex w-10 h-10 rounded-full hover:text-3xl">1</span>
//                     <span className="cursor-pointer hover:text-white hover:bg-[rgb(101,101,102)] justify-center items-center flex w-10 h-10 rounded-full hover:text-3xl">2</span>
//                     <span className="cursor-pointer hover:text-white hover:bg-[rgb(101,101,102)] justify-center items-center flex w-10 h-10 rounded-full hover:text-3xl">3</span>
//                     <span className="cursor-pointer hover:text-white hover:bg-[rgb(101,101,102)] justify-center items-center flex w-10 h-10 rounded-full hover:text-3xl">4</span>
//                     <span className="cursor-pointer hover:text-white hover:bg-[rgb(101,101,102)] justify-center items-center flex w-10 h-10 rounded-full hover:text-3xl">5</span>
//                     <span className="cursor-pointer hover:text-white hover:bg-[rgb(101,101,102)] justify-center items-center flex w-10 h-10 rounded-full hover:text-3xl">6</span>
//                     <span className="cursor-pointer hover:text-white hover:bg-[rgb(101,101,102)] justify-center items-center flex w-10 h-10 rounded-full hover:text-3xl">7</span>
//                 </div>

//             </div>

//             {/* Next Button 
//             <button className="w-auto h-9 flex items-center justify-center 
//       bg-white/80 text-black font-bold rounded-full shadow text-sm p-2
//       hover:bg-white transition" onClick={() => setOpen1(!open1)}>
//                 Explore<GrFormNextLink size={20} />
//             </button>

//         </div> */}


//         {open && (
//             <div className="absolute bottom-24 left-[19%]  p-6 rounded-xl bg-black/70 shadow-lg w-80 animate-float">
//                 <div className=' p-2 rounded-lg  '>

//                     {/* Heading */}
//                     <h2 className="text-center font-bold text-lg mb-2 text-white">
//                         FLOORS (T3A-6)
//                     </h2>

//                     {/* Calendar Grid */}
//                     <div className="grid grid-cols-9 gap-1 text-center text-gray-900 font-semibold">

//                         {/* 1–7 */}
//                         {[1, 2, 3, 4, 5, 6, 7].map(n => (
//                             <div key={n} className="p-2 bg-gray-100 rounded-md hover:bg-gray-400 justify-center items-center flex">{n}</div>
//                         ))}

//                         {/* 9–12 */}
//                         {[9, 10, 11, 12].map(n => (
//                             <div key={n} className="p-2 bg-gray-100 rounded-md hover:bg-gray-400 justify-center items-center flex">{n}</div>
//                         ))}

//                         {/* 14–17 */}
//                         {[14, 15, 16, 17].map(n => (
//                             <div key={n} className="p-2 bg-gray-100 rounded-md hover:bg-gray-400 justify-center items-center flex">{n}</div>
//                         ))}

//                         {/* 19–22 */}
//                         {[19, 20, 21, 22].map(n => (
//                             <div key={n} className="p-2 bg-gray-100 rounded-md hover:bg-gray-400 justify-center items-center flex">{n}</div>
//                         ))}

//                         {/* 24–27 */}
//                         {[24, 25, 26, 27].map(n => (
//                             <div key={n} className="p-2 bg-gray-100 rounded-md hover:bg-gray-400 justify-center items-center flex">{n}</div>
//                         ))}

//                         {/* 29–30 */}
//                         {[29, 30].map(n => (
//                             <div key={n} className="p-2 bg-gray-100 rounded-md hover:bg-gray-400 justify-center items-center flex">{n}</div>
//                         ))}

//                     </div></div>
//             </div>
//         )}


//         {open1 && (
//             <div className="absolute bottom-24 right-5  p-6 rounded-xl bg-black/70 shadow-lg w-80 animate-float">
//                 <div className=' p-2 rounded-lg bg-white/50'>

//                     {/* Heading */}
//                     <h2 className="text-center font-bold text-[16px] mb-2 text-white">
//                         FLOORS (T3A-6)
//                     </h2>

//                     {/* Calendar Grid */}
//                     <div className="grid grid-cols-9 gap-1 text-center text-gray-900 font-semibold">

//                         {/* 1–7 */}
//                         {[1, 2, 3, 4, 5, 6, 7].map(n => (
//                             <div key={n} className="p-1 text-[13px] bg-gray-100 rounded-lg hover:bg-gray-300 justify-center items-center flex">{n}</div>
//                         ))}

//                         {/* 9–12 */}
//                         {[9, 10, 11, 12].map(n => (
//                             <div key={n} className="p-1 text-[13px] bg-gray-100 rounded-lg hover:bg-gray-300 justify-center items-center flex">{n}</div>
//                         ))}

//                         {/* 14–17 */}
//                         {[14, 15, 16, 17].map(n => (
//                             <div key={n} className="p-1 text-[13px] bg-gray-100 rounded-lg hover:bg-gray-300 justify-center items-center flex">{n}</div>
//                         ))}

//                         {/* 19–22 */}
//                         {[19, 20, 21, 22].map(n => (
//                             <div key={n} className="p-1 text-[13px] bg-gray-100 rounded-lg hover:bg-gray-300 justify-center items-center flex">{n}</div>
//                         ))}

//                         {/* 24–27 */}
//                         {[24, 25, 26, 27].map(n => (
//                             <div key={n} className="p-1 text-[13px] bg-gray-100 rounded-lg hover:bg-gray-300 justify-center items-center flex">{n}</div>
//                         ))}

//                         {/* 29–30 */}
//                         {[29, 30].map(n => (
//                             <div key={n} className="p-1 text-[13px] bg-gray-100 rounded-lg hover:bg-gray-300  justify-center items-center flex">{n}</div>
//                         ))}

//                     </div></div>
//             </div>
//         )}




//     </>)
// }