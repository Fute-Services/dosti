
// import { useNavigate } from 'react-router-dom';
// import bgImage from '../assets/Inventory/projectdetails4.jpeg'

// import bgImage1 from '../assets/Inventory/image11.png'
// import { useState } from 'react';
// // import BackButton from '../../Components/BackButton';
// // import { PiBuildings } from "react-icons/pi";
// {/* <PiBuildings /> */ }


// import Tooltip from '@mui/material/Tooltip';
// // IntroPage_with_AbsoluteBar.tsx
// // Tailwind CSS utility classes used. Adjust spacing/colors as needed.
// import { FaBuilding } from "react-icons/fa";

// export default function InventoryPage() {

//     const navigate = useNavigate();
//     const [selectedFloor, setSelectedFloor] = useState<Number | null>(null);
//     const [hoveredFloor, setHoveredFloor] = useState<Number | null>(null);

//     const [iconHover, setIconHover] = useState<Number | null>(null);




//     const getPolygonCenter = (points: any) => {
//         const coords = points.split(",").map(Number);
//         let x = 0, y = 0;
//         const total = coords.length / 2;

//         for (let i = 0; i < coords.length; i += 2) {
//             x += coords[i];
//             y += coords[i + 1];
//         }

//         return {
//             x: x / total,
//             y: y / total,
//         };
//     };






//     const buildingData = [
//         {
//             id: 10001, name: "Sector 3A-Cluster 2", polygon: "1657,193,1912,264,1887,337,1824,328,1712,287,1542,268,1519,241 ",
//             buildings: [
//                 {
//                     id: 1, title: "Pride A", polygon: "1674,203,1665,246,1687,251,1696,216",
//                     polygon1: "1664,188,1673,213,1696,213,1691,182", link: "/floorplan", hoverColor: "rgba(255,112,67,0.7)",

//                 },
//                 {
//                     id: 2, title: "Pride B", polygon: "1717,221,1706,256,1737,265,1747,228", link: "",
//                     polygon1: "1719,198,1709,223,1753,232,1764,210",
//                     hoverColor: "rgba(255,112,67,0.7)",
//                 },
//                 // {
//                 //     id: 1, title: "Pride A", polygon: "886,111,898,97,924,110,907,124", link: "/floorplan", hoverColor: "rgba(255,112,67,0.7)",

//                 // },
//                 // {
//                 //     id: 2, title: "Pride B", polygon: "915,123,927,109,953,122,938,135", link: "", hoverColor: "rgba(255,112,67,0.7)",
//                 // },
//                 {
//                     id: 3, title: "Pride C", polygon: "1783,237,1810,247,1799,277,1774,270",
//                     polygon1: "1785,221,1775,246,1819,255,1830,233",
//                     link: "", hoverColor: "rgba(255,112,67,0.7)",
//                 },
//                 {
//                     id: 4, title: "Pride D", polygon: "1856,259,1885,270,1872,323,1844,314",
//                     polygon1: "1858,241,1848,259,1892,270,1897,250",
//                     link: "", hoverColor: "rgba(255,112,67,0.7)",
//                 },
//                 {
//                     id: 5, title: "Charm A", polygon: "", link: "", polygon1: "1753,273,1737,293,1776,309,1792,286", hoverColor: "rgba(255,112,67,0.4)",
//                 },
//                 {
//                     id: 6, title: "Charm B", polygon: "", link: "", polygon1: " 1681,254,1665,274,1704,290,1720,267", hoverColor: "rgba(255,112,67,0.5)",
//                 },
//                 {
//                     id: 7, title: "Charm C", polygon: "", link: "", polygon1: "1621,243,1605,263,1644,279,1660,256 ", hoverColor: "rgba(255,112,67,0.4)",
//                 },
//                 {
//                     id: 8, title: "Grace A", polygon: "", link: "", polygon1: "1585,204,1569,224,1608,240,1624,217", hoverColor: "rgba(255,112,67,0.4)",
//                 },
//                 {
//                     id: 9, title: "Grace B", polygon: "", link: "", polygon1: "1542,226,1526,246,1565,262,1581,239", hoverColor: "rgba(255,112,67,0.4)",
//                 },

//             ]
//         },

//         {
//             id: 10002, name: "Sector 3A-Cluster 1B", polygon: " 1706,179,1808,168,1936,181,1938,225,1917,245",
//             buildings: [
//                 {
//                     id: 1, title: "Dazzle A", polygon: "", link: "", polygon1: " 1900,167,1884,187,1923,203,1939,180", hoverColor: "rgba(255,112,67,0.4)",
//                 },
//                 {
//                     id: 2, title: "Dazzle B", polygon: "", link: "", polygon1: "1833,158,1817,178,1856,194,1872,171", hoverColor: "rgba(255,112,67,0.4)",
//                 },
//                 {
//                     id: 3, title: "Zion ", polygon: "", link: "", polygon1: " 1916,200,1900,220,1939,236,1955,213", hoverColor: "rgba(255,112,67,0.4)",
//                 },
//                 {
//                     id: 4, title: "Serene A", polygon: "", link: "", polygon1: "1872,224,1856,244,1895,260,1911,237", hoverColor: "rgba(255,112,67,0.4)",
//                 },
//                 {
//                     id: 5, title: "Serene B", polygon: "", link: "", polygon1: " 1797,203,1781,223,1820,239,1836,216", hoverColor: "rgba(255,112,67,0.4)",
//                 },
//                 {
//                     id: 6, title: "Serene C", polygon: "", link: "", polygon1: "1744,189,1728,209,1767,225,1783,202", hoverColor: "rgba(255,112,67,0.4)",
//                 },


//             ]
//         }
//     ]









//     return (
//         <>

//             <div className='relative h-screen w-screen bg-cover bg-center bg-no-repeat '
//                 style={{ backgroundImage: `url(${bgImage1})` }}
//             >






//                 <div className='absolute inset-0 w-full h-sull overflow-hidden bg-black '>
//                     <svg
//                         viewBox='0 0 2580 1440'
//                         className="w-full h-full"
//                         preserveAspectRatio="none" // SVG fills the container
//                     >
//                         <image
//                             href={bgImage}
//                             x="0"
//                             y="0"
//                             width="2580"
//                             height="1440"
//                             preserveAspectRatio="none" // <-- change from 'meet' to 'slice'
//                         />




//                         {/* Polygons 
//                         {buildingData?.map((flat) => (
//                             flat.buildings?.map((e) => (


//                                 <Tooltip
//                                     key={e.id}
//                                     title={e.title}
//                                     placement="top"
//                                     componentsProps={{
//                                         tooltip: {
//                                             sx: {
//                                                 background: "rgba(255, 255, 255, 0.15)",   // glass white layer
//                                                 backdropFilter: "blur(10px)",               // glass blur
//                                                 WebkitBackdropFilter: "blur(5px)",         // Safari support
//                                                 color: "#fff",
//                                                 fontSize: "12px",
//                                                 padding: "8px 12px",
//                                                 borderRadius: "10px",
//                                                 border: "1px solid rgba(255, 255, 255, 0.2)", // soft glass border
//                                                 boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",   // depth
//                                             },
//                                         },
//                                         arrow: {
//                                             sx: {
//                                                 color: "rgba(255, 255, 255, 0.25)",          // arrow color matches glass
//                                                 backdropFilter: "blur(10px)",
//                                             },
//                                         },
//                                     }}
//                                 >
//                                     <polygon
//                                         points={e.polygon}
//                                         fill={
//                                             selectedFloor === e.id
//                                                 ? 'rgba(255,112,67,0.7)'
//                                                 : hoveredFloor === e.id
//                                                     ? e.hoverColor
//                                                     : 'transparent'
//                                         }
//                                         // stroke="orange"
//                                         // strokeWidth={2}
//                                         style={{ cursor: 'pointer' }}
//                                         onMouseEnter={() => setHoveredFloor(e.id)}
//                                         onMouseLeave={() => setHoveredFloor(null)}
//                                         onDoubleClick={() => {
//                                             setSelectedFloor(e.id);
//                                             navigate(`/floorplan/${e.id}`);
//                                         }}

//                                     />
//                                 </Tooltip>
//                             ))))}   */}



//                         {buildingData?.map((flat) =>
//                             flat.buildings?.map((e) => {
//                                 const iconPos = e.polygon1 ? getPolygonCenter(e.polygon1) : null;

//                                 return (
//                                     <g key={e.id}>
//                                         {/* Main Polygon */}

//                                         <Tooltip
//                                             title={flat.name}
//                                             placement="right"
//                                             componentsProps={{
//                                                 tooltip: {
//                                                     sx: {
//                                                         background: "rgba(255, 255, 255, 0.15)",
//                                                         backdropFilter: "blur(10px)",
//                                                         WebkitBackdropFilter: "blur(5px)",
//                                                         color: "#fff",
//                                                         fontSize: "12px",
//                                                         padding: "8px 12px",
//                                                         borderRadius: "10px",
//                                                         border: "1px solid rgba(255, 255, 255, 0.2)",
//                                                         boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
//                                                     },
//                                                 },
//                                                 arrow: {
//                                                     sx: {
//                                                         color: "rgba(255, 255, 255, 0.25)",
//                                                         backdropFilter: "blur(10px)",
//                                                     },
//                                                 },
//                                             }}
//                                         >
//                                             <polygon
//                                                 points={flat.polygon}
//                                                 // fill={
//                                                 //     hoveredFloor === e.id
//                                                 //         ? e.hoverColor
//                                                 //         : "transparent"
//                                                 // }
//                                                 // fill="rgba(255,112,67,0.7)"
//                                                 fill={
//                                                     selectedFloor === e.id
//                                                         ? "rgba(255,112,67,0.7)"
//                                                         // : hoveredFloor === e.id
//                                                         //     ? e.hoverColor
//                                                         : "transparent"
//                                                 }
//                                                 style={{ cursor: "pointer" }}
//                                                 onMouseEnter={() => setHoveredFloor(e.id)}
//                                                 onMouseLeave={() => setHoveredFloor(null)}
//                                                 onDoubleClick={() => {
//                                                     setSelectedFloor(e.id);
//                                                     navigate(`/floorplan/${e.id}`);
//                                                 }}
//                                             />
//                                         </Tooltip>
//                                         {/* React Icon for polygon1 */}
//                                         {iconPos && (
//                                             <Tooltip
//                                                 title={e.title}
//                                                 placement="top"
//                                                 componentsProps={{
//                                                     tooltip: {
//                                                         sx: {
//                                                             background: "rgba(255, 255, 255, 0.15)",
//                                                             backdropFilter: "blur(10px)",
//                                                             WebkitBackdropFilter: "blur(5px)",
//                                                             color: "#fff",
//                                                             fontSize: "12px",
//                                                             padding: "8px 12px",
//                                                             borderRadius: "10px",
//                                                             border: "1px solid rgba(255, 255, 255, 0.2)",
//                                                             boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
//                                                         },
//                                                     },
//                                                     arrow: {
//                                                         sx: {
//                                                             color: "rgba(255, 255, 255, 0.25)",
//                                                             backdropFilter: "blur(10px)",
//                                                         },
//                                                     },
//                                                 }}
//                                             >
//                                                 <foreignObject
//                                                     x={iconPos.x - 18}
//                                                     y={iconPos.y - 46}   // lifted so arrow touches building
//                                                     width="40"
//                                                     height="55"
//                                                     style={{ overflow: "visible", cursor: "pointer" }}
//                                                     onDoubleClick={() => navigate(`/floorplan/${e.id}`)}
//                                                 >
//                                                     <div style={{ position: "relative", width: "40px", height: "55px" }}>

//                                                         {/* Round background */}
//                                                         <div
//                                                             style={{
//                                                                 width: "40px",
//                                                                 height: "40px",
//                                                                 borderRadius: "50%",
//                                                                 background: "rgba(255, 255, 255, 0.6)",
//                                                                 backdropFilter: "blur(6px)",
//                                                                 border: "1px solid rgba(255,255,255,0.3)",
//                                                                 display: "flex",
//                                                                 alignItems: "center",
//                                                                 justifyContent: "center",
//                                                                 boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
//                                                             }}
//                                                             onMouseEnter={() => setIconHover(e.id)}
//                                                             onMouseLeave={() => setIconHover(null)}
//                                                             onDoubleClick={() => {
//                                                                 setSelectedFloor(e.id);
//                                                                 navigate(`/floorplan/${e.id}`);
//                                                             }}
//                                                         >
//                                                             <FaBuilding size={21} color="#58420a" />
//                                                         </div>

//                                                         {/* Arrow pointer */}
//                                                         <div
//                                                             style={{
//                                                                 position: "absolute",
//                                                                 left: "50%",
//                                                                 top: "38px",
//                                                                 transform: "translateX(-50%)",
//                                                                 width: "0",
//                                                                 height: "0",
//                                                                 borderLeft: "7px solid transparent",
//                                                                 borderRight: "7px solid transparent",
//                                                                 borderTop: "10px solid rgba(255,255,255,0.25)",
//                                                                 filter: "drop-shadow(0 2px 2px rgba(0,0,0,0.2))",
//                                                             }}
//                                                         />
//                                                     </div>
//                                                 </foreignObject>
//                                             </Tooltip>
//                                         )}


//                                     </g>
//                                 );
//                             })
//                         )}

//                     </svg>
//                 </div>



//                 {/* <Header/> */}
//                 {/* <BackButton/> */}
//                 {/* Absolute vertical bar on the left */}


//                 <div>
//                     {buildingData?.map((flat) =>
//                         flat.id === 10001 ? (
//                             <nav
//                                 key={flat.id}
//                                 className="absolute right-2 top-[7%] transform translate-y-10 h-[280px]
//         custom-scroll-glass overflow-y-scroll bg-white/20 backdrop-blur-md 
//         border border-white/20 rounded-2xl p-2 shadow-lg z-20"
//                                 aria-label="Pride navigation"
//                             >
//                                 <h2 className="font-bold mb-2">{flat.name}</h2>

//                                 <ul className="flex flex-col gap-1">
//                                     {flat.buildings?.map((item) => (
//                                         <li key={item.id}>
//                                             <button
//                                                 className={`w-40 text-left px-4 py-2 rounded-lg hover:bg-white/20 
//                 transition-colors duration-150
//                 ${selectedFloor === item.id
//                                                         ? "bg-black/40 text-white"
//                                                         : iconHover === item.id
//                                                             ? "bg-white/70 text-black"
//                                                             : "text-white/80"
//                                                     }`}
//                                                 aria-label={item.title}
//                                                 onMouseEnter={() => setIconHover(item.id)}
//                                                 onMouseLeave={() => setIconHover(null)}
//                                                 // onClick={() => setSelectedFloor(item.id)}
//                                                 onDoubleClick={() => navigate(`/floorplan/${item.id}`)}
//                                             >
//                                                 {item.title}
//                                             </button>
//                                         </li>
//                                     ))}
//                                 </ul>
//                             </nav>
//                         ) : (
//                             <nav
//                                 key={flat.id}
//                                 className="absolute right-2 top-[83%] transform -translate-y-[80%] h-[280px]
//         custom-scroll-glass overflow-y-scroll bg-white/20 backdrop-blur-md 
//         border border-white/20 rounded-2xl p-2 shadow-lg z-20"
//                                 aria-label="Pride navigation"
//                             >
//                                 <h2 className="font-bold mb-2"> {flat.name}</h2>

//                                 <ul className="flex flex-col gap-1">
//                                     {flat.buildings?.map((item) => (
//                                         <li key={item.id}>
//                                             <button
//                                                 className="w-40 text-left px-4 py-2 rounded-lg text-white/80 hover:bg-white/20"
//                                                 aria-label={item.title}
//                                             >
//                                                 {item.title}
//                                             </button>
//                                         </li>
//                                     ))}
//                                 </ul>
//                             </nav>
//                         )
//                     )}
//                 </div>


//             </div>



//         </>
//     )
// }
