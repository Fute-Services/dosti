
// import { Data } from '../../Data/FloorPlanData';
// import { useParams } from 'react-router-dom';
// import Tooltip from '@mui/material/Tooltip';
// import { Button } from '@mui/material';
// import { useRef, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import ExploreWings from '../../components/ExploreWings';
// import { floorfeatures } from '../../Data/FloorFeaturesData';
// import { AiOutlineClose } from "react-icons/ai";
// import { IoArrowBack } from "react-icons/io5";
// import { GrZoomIn } from "react-icons/gr";
// import { IoIosArrowDown } from "react-icons/io";

// import { IoIosArrowUp } from "react-icons/io";
// <IoIosArrowUp />


// export default function FloorPlanPage1() {
//     const navigate = useNavigate();
//     const { id } = useParams<{ id: string }>()
//     const containerRef = useRef<HTMLDivElement | null>(null);
//     const lastTouchDistance = useRef<number | null>(null);
//     const [zoom, setZoom] = useState(false);
//     const [scale, setScale] = useState(1);
//     const [origin, setOrigin] = useState("50% 50%");
//     const [hoverId, setHoverId] = useState<number | null>(null);
//     const floorData = Data.filter((floor) => floor.id === Number(id));
//     // const [hoveredUnit, setHoverUnit] = useState(null);
//     const [selectedUnit, setSelectedUnit] = useState<number | null>(null);


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

//         {floorData.map((e) => {
//             return (
//                 <>
//                     <div className="flex flex-col md:flex-row h-auto md:h-screen w-full md:overflow-hidden
//                       gap-3 relative justify-center items-center p-10">
//                         {/* <div className='lg:flex-col flex md:w-[25%] lg:w-[8%] w-[8%]'></div>
//                         <div className="flex flex-col justify-center h-[50vh] px-20 md:px-5 lg:px-0  md:h-[80vh] lg:h-[60vh]
//                          md:w-[40%] lg:w-[10%] w-full lg:bg-[#E8E8E8]">
//                             <h2 className='w-full text-center font-semibold p-2 rounded-lg bg-[#f5f5f5] text-[15px] from-gray-200 to-[#f5f5f5] border-[#cf9079] text-[#333]'>FLOOR PLANS</h2>
//                             <div className='bg-[#f5f5f5]  mt-5 items-center justify-center overflow-scroll overflow-x-hidden scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent shadow-md'>
//                                 <h2 className='font-semibold text-[14px] mb-2 flex item-center text-center gap-3'>
//                                     <span className='flex justify-center items-center text-[#333] w-full rounded-md shadow-md mt-3'>
//                                         {e.name1.toUpperCase()}
//                                     </span>
//                                 </h2>
//                                 {e?.units.map((unit) => (
//                                     <button
//                                         key={unit.unitId}
//                                         className={`flex w-[65%] m-3 lg:ml-5 p-2 text-[11.5px] justify-center transition-all duration-200 rounded-md shadow-md mb-2
//                                         ${hoverId === unit.unitId ? "scale-105 bg-black text-white" : "scale-105 bg-[#7d7a74ff] text-white"}`}
//                                         onMouseEnter={() => setHoverId(unit.unitId)}
//                                         onMouseLeave={() => setHoverId(null)}
//                                         onClick={() => setSelectedUnit(unit.unitId)}
//                                     >
//                                         {unit.unitName.toUpperCase()}
//                                     </button>
//                                 ))}
//                             </div>
//                         </div> */}
//                         <div className='w-[10%] absolute flex flex-col h-screen
//                          justify-start py-6 left-[14%] top-1/4'>
//                             <button className='bg-[rgb(248,186,186)] border-2
//                              border-black/80 flex gap-2 p-1 text-medium 
//                              rounded-xl shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)] 
//                              justify-center font-medium  items-center text-center
//                              text-black/80
//                             '>FLOOR PLAN <IoIosArrowDown /> </button>
                          
//                         </div>

                        

//                         <div className=" flex flex-col p-4  w-[75%] absolute" >
//                             <svg
//                                 viewBox={`${e.imageSettings.svg}`}
//                                 className='w-full h-full object-cover'
//                                 preserveAspectRatio='xMidYMid meet'
//                             >
//                                 <image
//                                     href={e.mainImage}
//                                     width={e.imageSettings.width}
//                                     height={e.imageSettings.height}
//                                     // preserveAspectRatio="xMidYMid meet"
//                                 />
//                                 {e.units.map((unit) => (
//                                     <Tooltip
//                                         title={unit.unitName}
//                                         arrow
//                                         placement="top"
//                                         open={selectedUnit === unit.unitId || hoverId === unit.unitId}

//                                     // sx={{
//                                     //     "& .MuiTooltip-tooltip": {
//                                     //         backgroundColor: "blue",
//                                     //         color: "white",
//                                     //         fontSize: "14px",
//                                     //         fontWeight: "bold",
//                                     //     },
//                                     // }}
//                                     >
//                                         <g>

//                                             <polygon
//                                                 // points="340,153,408,154,408,177,428,179,430,222,449,224,449,253,450,275,377,274,378,243,333,244,333,198,339,198"
//                                                 // fill="rgba(255,112,67,0.5)"
//                                                 key={unit.unitId}
//                                                 points={unit.polygon}
//                                                 fill={hoverId === unit.unitId ? "rgba(255,112,67,0.5)" : "transparent"}
//                                                 style={{ cursor: "pointer" }}
//                                                 onMouseEnter={() => setHoverId(unit.unitId)}
//                                                 onMouseLeave={() => setHoverId(null)}




//                                                 onClick={() => navigate(`/unit/${unit.unitId}`)}
//                                             />
//                                         </g>
//                                     </Tooltip>
//                                 ))}
//                             </svg>
//                         </div>


//                          <div className='w-[3.5%] flex absolute right-5 top-10 flex-col gap-5 justify-start h-screen'>
//                             <button
//                              className='bg-white/70 border border-gray-300 
//                              items-center rounded-sm shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)] flex py-2 justify-center'><IoArrowBack size={25}/> </button>
//                             <button    className='bg-white/70 shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)]  border border-gray-300 
//                              items-center rounded-sm  flex py-2 justify-center'><GrZoomIn size={25}/> </button>
//                         </div>
//                         {/* <div className="flex flex-col lg:w-[10%] md:w-[15%] w-[70%] bg-[#E8E8E8] justify-start lg:mt-20 p-0 mr-2">
//                             <div className='bg-white/70 border border-gray-300 p-3 items-center rounded-sm rounded-xl flex flex-col gap-2 '>
//                                 <Button
//                                     fullWidth
//                                     onClick={() => navigate(`/project_details`)}
//                                     sx={{
//                                         mb: 1,
//                                         color: "white",
//                                         width: "70%",
//                                         fontSize: { sm: "10px", md: "14px", lg: "13px" },
//                                         whiteSpace: "nowrap",
//                                         backgroundColor: "#7d7a74ff",
//                                         '&:hover': { backgroundColor: "black" },
//                                         py: { xs: 1, lg: 1.2 },
//                                     }}
//                                 >Go Back
//                                 </Button>

//                                 <Button
//                                     fullWidth
//                                     sx={{
//                                         mb: 1,
//                                         color: "white",
//                                         width: "70%",
//                                         fontSize: { sm: "10px", md: "14px", lg: "13px" },
//                                         whiteSpace: "nowrap",
//                                         backgroundColor: "#7d7a74ff",
//                                         '&:hover': { backgroundColor: "black" },
//                                         py: { xs: 1, lg: 1.2 },
//                                     }}
//                                     onClick={()=>setZoom(true)}
//                                 >
//                                     Zoom Image
//                                 </Button>
//                             </div>
//                             {/* <div className='mt-4 border border-gray-300 rounded-xl mt-20 w-full h-[300px] overflow-y-auto overflow-x-hidden bg-white/20'>
//                                 <h3 className='font-semibold p-2 text-[14px] text-nowrap'>FLAT FEATURES</h3>

//                                 {floorfeatures.map((section, index) => (
//                                     <div key={index} className='p-2'>
//                                         <h4 className='font-semibold text-[12px] mb-1'>{section.title}</h4>

//                                         {section.items && (
//                                             <ul className='list-disc text-xs ml-4'>
//                                                 {section.items.map((item, i) => (
//                                                     <li key={i}>{item}</li>
//                                                 ))}
//                                             </ul>
//                                         )}
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>  */}

//                         {/* <ExploreWings /> */}

//                     </div>


//                     {zoom && (
//                         <div
//                             className="fixed inset-0 z-[5000] bg-white/20 backdrop-blur-xl p-5 flex justify-center items-center"
//                         >
//                             {/* Close Button */}
//                             <button
//                                 onClick={() => setZoom(false)}
//                                 className="absolute top-4 right-4 bg-black/20 text-white rounded-full w-7 h-7 flex items-center justify-center hover:bg-black/40 transition shadow-lg"
//                             >
//                                 <AiOutlineClose size={17} />
//                             </button>


//                             {/* Zoomed Image */}
//                             <div
//                                 ref={containerRef}
//                                 className="w-full h-full overflow-hidden touch-none flex items-center justify-center"
//                                 onWheel={handleWheel}
//                                 onTouchStart={handleTouchStart}
//                                 onTouchMove={handleTouchMove}
//                                 onTouchEnd={handleTouchEnd}
//                             >
//                                 {e ? (
//                                     <img
//                                         src={e.mainImage}
//                                         alt="Zoomable"
//                                         draggable={false}
//                                         style={{
//                                             transform: `scale(${scale})`,
//                                             transformOrigin: origin,
//                                             transition: "transform 0.1s ease-out",
//                                             cursor: scale > 1 ? "grab" : "default",
//                                         }}
//                                         className="max-w-full max-h-full object-cover select-none"
//                                     />
//                                 ) : (
//                                     <p className="text-center text-gray-500">No image available</p>
//                                 )}
//                             </div>

//                         </div>
//                     )}

//                 </>
//             )
//         })




//         }










//     </>);

// } 