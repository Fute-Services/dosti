// import { useNavigate } from 'react-router-dom';
// import { useState } from 'react';
// import { FaBuilding } from "react-icons/fa";
// import Tooltip from '@mui/material/Tooltip';

// // Import your assets
// import bgImage from '../assets/Inventory/projectdetails4.jpeg';
// // import bgImage1 from '../assets/Inventory/image11.png';

// export default function InventoryPage() {
//     const navigate = useNavigate();
//     const [selectedFloor, setSelectedFloor] = useState<number | null>(null);
//     const [hoveredFloor, setHoveredFloor] = useState<number | null>(null);
//     const [iconHover, setIconHover] = useState<number | null>(null);

//     const getPolygonCenter = (points: string) => {
//         if (!points) return { x: 0, y: 0 };
//         const coords = points.split(",").map(Number);
//         let x = 0, y = 0;
//         const total = coords.length / 2;
//         for (let i = 0; i < coords.length; i += 2) {
//             x += coords[i];
//             y += coords[i + 1];
//         }
//         return { x: x / total, y: y / total };
//     };

//     const buildingData = [
//         {
//             id: 10001, 
//             name: "Sector 3A-Cluster 2", 
//             buildings: [
//                 { id: 1, title: "Pride A", polygon1: "1676,186,1660,245,1681,250,1701,195", hoverColor: "rgba(255,112,67,0.6)" },
//                 { id: 2, title: "Pride B", polygon1: "1721,211,1712,254,1733,259,1747,216", hoverColor: "rgba(255,112,67,0.6)" },
//                 { id: 3, title: "Pride C", polygon1: "1788,241,1810,247,1801,277,1781,279", hoverColor: "rgba(255,112,67,0.6)" },
//                 { id: 4, title: "Pride D", polygon1: "1860,252,1848,312,1869,317,1883,261", hoverColor: "rgba(255,112,67,0.6)" },
//                 { id: 5, title: "Charm A", polygon1: "1753,273,1737,293,1776,309,1792,286", hoverColor: "rgba(255,112,67,0.4)" },
//                 { id: 6, title: "Charm B", polygon1: "1681,254,1665,274,1704,290,1720,267", hoverColor: "rgba(255,112,67,0.5)" },
//                 { id: 7, title: "Charm C", polygon1: "1621,243,1605,263,1644,279,1660,256", hoverColor: "rgba(255,112,67,0.4)" },
//                 { id: 8, title: "Grace A", polygon1: "1585,204,1569,224,1608,240,1624,217", hoverColor: "rgba(255,112,67,0.4)" },
//                 { id: 9, title: "Grace B", polygon1: "1542,226,1526,246,1565,262,1581,239", hoverColor: "rgba(255,112,67,0.4)" },
//             ]
//         },
//         {
//             id: 10002, 
//             name: "Sector 3A-Cluster 1B", 
//             buildings: [
//                 { id: 10, title: "Dazzle A", polygon1: "1900,167,1884,187,1923,203,1939,180", hoverColor: "rgba(255,112,67,0.4)" },
//                 { id: 11, title: "Dazzle B", polygon1: "1833,158,1817,178,1856,194,1872,171", hoverColor: "rgba(255,112,67,0.4)" },
//                 { id: 12, title: "Zion", polygon1: "1916,200,1900,220,1939,236,1955,213", hoverColor: "rgba(255,112,67,0.4)" },
//                 { id: 13, title: "Serene A", polygon1: "1872,224,1856,244,1895,260,1911,237", hoverColor: "rgba(255,112,67,0.4)" },
//                 { id: 14, title: "Serene B", polygon1: "1797,203,1781,223,1820,239,1836,216", hoverColor: "rgba(255,112,67,0.4)" },
//                 { id: 15, title: "Serene C", polygon1: "1744,189,1728,209,1767,225,1783,202", hoverColor: "rgba(255,112,67,0.4)" },
//             ]
//         }
//     ];

//     const tooltipStyles = {
//         sx: {
//             background: "rgba(255, 255, 255, 0.15)",
//             backdropFilter: "blur(10px)",
//             color: "#fff",
//             fontSize: "12px",
//             padding: "8px 12px",
//             borderRadius: "10px",
//             border: "1px solid rgba(255, 255, 255, 0.2)",
//             boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
//         }
//     };

//     return (
//         <div className='relative h-screen w-screen bg-black overflow-hidden'>
//             <svg
//                 viewBox='0 0 2580 1440'
//                 className="w-full h-full"
//                 preserveAspectRatio="none"
//             >
//                 <image href={bgImage} width="2580" height="1440" />

//                 {buildingData.map((cluster) =>
//                     cluster.buildings.map((b) => {
//                         const iconPos = getPolygonCenter(b.polygon1);
//                         const isActive = hoveredFloor === b.id || selectedFloor === b.id || iconHover === b.id;

//                         return (
//                             <g key={b.id} className="transition-all duration-300">
//                                 {/* Invisible Hitbox Polygon - This captures the mouse */}
//                                 <polygon
//                                     points={b.polygon1}
//                                     fill={isActive ? b.hoverColor : "transparent"}
//                                     style={{ cursor: "pointer", pointerEvents: "auto" }}
//                                     onMouseEnter={() => setHoveredFloor(b.id)}
//                                     onMouseLeave={() => setHoveredFloor(null)}
//                                     onClick={() => setSelectedFloor(b.id)}
//                                     onDoubleClick={() => navigate(`/floorplan/${b.id}`)}
//                                 />

//                                 {/* Icon and Tooltip - Only visible when hovering or active */}
//                                 {isActive && (
//                                     <foreignObject
//                                         x={iconPos.x - 20}
//                                         y={iconPos.y - 50}
//                                         width="40"
//                                         height="60"
//                                         className="pointer-events-none animate-in fade-in zoom-in duration-200"
//                                     >
//                                         <Tooltip title={b.title} open={true} placement="top" componentsProps={{ tooltip: tooltipStyles }}>
//                                             <div className="flex flex-col items-center">
//                                                 <div className="w-10 h-10 rounded-full bg-white/60 backdrop-blur-md flex items-center justify-center border border-white/30 shadow-lg">
//                                                     <FaBuilding size={20} color="#58420a" />
//                                                 </div>
//                                                 {/* Arrow */}
//                                                 <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-white/40" />
//                                             </div>
//                                         </Tooltip>
//                                     </foreignObject>
//                                 )}
//                             </g>
//                         );
//                     })
//                 )}
//             </svg>

//             {/* Sidebar Navigation */}
//             <div className="absolute right-4 top-24 flex flex-col gap-4 max-h-[85vh] overflow-y-scroll custom-scroll-glass">
//                 {buildingData.map((cluster) => (
//                     <div 
//                         key={cluster.id} 
//                         className="bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-xl  shadow-2xl w-56"
//                     >
//                         <h2 className="text-white font-bold mb-3 text-sm tracking-wide uppercase opacity-70">
//                             {cluster.name}
//                         </h2>
//                         <ul className="space-y-1">
//                             {cluster.buildings.map((item) => (
//                                 <li key={item.id}>
//                                     <button
//                                         onMouseEnter={() => setHoveredFloor(item.id)}
//                                         onMouseLeave={() => setHoveredFloor(null)}
//                                         onDoubleClick={() => navigate(`/floorplan/${item.id}`)}
//                                         className={`w-full text-left px-3 py-2 rounded-xl text-sm transition-all duration-200 
//                                             ${hoveredFloor === item.id ? "bg-white/30 text-white translate-x-1" : "text-white/60 hover:bg-white/10"}`}
//                                     >
//                                         {item.title}
//                                     </button>
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }