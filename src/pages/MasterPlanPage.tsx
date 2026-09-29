// import { useState } from "react";
// import FullPageLayout from "../components/FullPageLayout";
// import GlassWrapper from "../components/GlassWrapper";
// import bgImage from "../assets/Gallery/Gym.jpg";
// import masterplan1 from "../assets/MasterPlan/masterplan1.png";
// import masterplan2 from "../assets/MasterPlan/masterplan2.png";
// import { amenitiesData } from "../Data/AmenitiesData";

// interface AmenityItem {
//     id: number;
//     name: string;
//     coords: string;
// }

// interface ImageSettings {
//     imageHeight: number;
//     imageWidth: number;
//     svgViewBox: string;
// }

// interface AmenityPlan {
//     imageSettings: ImageSettings;
//     data: AmenityItem[];
// }


// export default function MasterPlanPage() {
//     const [mode, setMode] = useState<"master_plan_1" | "master_plan_2">(
//         "master_plan_1"
//     );

//     const [hoveredAmenityId, setHoveredAmenityId] = useState<number | null>(null);
//     const [lockedAmenityIds, setLockedAmenityIds] = useState<number[]>([]);
//     const [tooltip, setTooltip] = useState<{
//         x: number;
//         y: number;
//         name: string;
//     } | null>(null);

//     /* =======================
//        CURRENT PLAN
//     ======================= */

//     const currentPlan: AmenityPlan =
//         mode === "master_plan_1"
//             ? amenitiesData.amenities
//             : amenitiesData.amenities1;

//     const { imageSettings, data: currentAmenities } = currentPlan;


//     const backgroundImage =
//         mode === "master_plan_1" ? masterplan1 : masterplan2;

//     /* =======================
//        ACTIVE AMENITIES
//     ======================= */

//     const activeAmenities = currentAmenities.filter(
//         (a: any) =>
//             a.id === hoveredAmenityId || lockedAmenityIds.includes(a.id)
//     );

//     /* =======================
//        TOGGLE LOCK
//     ======================= */

//     const toggleLock = (id: number) => {
//         setLockedAmenityIds((prev) =>
//             prev.includes(id)
//                 ? prev.filter((i) => i !== id)
//                 : [...prev, id]
//         );
//     };

//     return (
//         <FullPageLayout background={bgImage}>
//             <GlassWrapper>
//                 <div className="flex w-full h-full gap-5 p-4">

//                     {/* ================= LEFT : MASTER PLAN ================= */}
//                     <div className="w-[80%] flex justify-center items-center">
//                         <div
//                             className="relative"
//                             style={{
//                                 width: imageSettings.imageWidth,
//                                 height: imageSettings.imageHeight,
//                             }}
//                         >
//                             {/* ================= IMAGE ================= */}
//                             <img
//                                 src={backgroundImage}
//                                 alt="Master Plan"
//                                 className="absolute inset-0 w-full h-full object-contain rounded-xl"
//                             />

//                             {/* ================= SVG OVERLAY ================= */}
//                             <svg
//                                 className="absolute inset-0 w-full h-full pointer-events-none"
//                                 viewBox={imageSettings.svgViewBox}
//                                 preserveAspectRatio="xMidYMid meet"
//                             >
//                                 {activeAmenities.map((item: any) => {
//                                     const [x, y, r] = item.coords.split(",").map(Number);
//                                     const isLocked = lockedAmenityIds.includes(item.id);

//                                     return (
//                                         <circle
//                                             key={item.id}
//                                             cx={x}
//                                             cy={y}
//                                             r={r}
//                                             fill={
//                                                 isLocked
//                                                     ? "rgba(255,0,0,0.5)"
//                                                     : "rgba(255,0,0,0.3)"
//                                             }
//                                             className="transition-all duration-300 animate-pulse"
//                                         />
//                                     );
//                                 })}
//                             </svg>

//                             {/* ================= HOTSPOTS ================= */}
//                             {currentAmenities.map((item: any) => {
//                                 const [x, y] = item.coords.split(",").map(Number);
//                                 const isLocked = lockedAmenityIds.includes(item.id);

//                                 return (
//                                     <div
//                                         key={item.id}
//                                         className="absolute w-6 h-6 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
//                                         style={{
//                                             left: `${(x / imageSettings.imageWidth) * 100}%`,
//                                             top: `${(y / imageSettings.imageHeight) * 100}%`,
//                                         }}
//                                         onMouseEnter={() => {
//                                             setHoveredAmenityId(item.id);
//                                             setTooltip({ x, y, name: item.name });
//                                         }}
//                                         onMouseLeave={() => {
//                                             setHoveredAmenityId(null);
//                                             setTooltip(null);
//                                         }}
//                                         onClick={() => toggleLock(item.id)}
//                                     >
//                                         {/* DOT */}
//                                         <div
//                                             className={`w-full h-full rounded-full transition-all duration-300
//               ${isLocked ? "bg-red-500 scale-125" : "bg-red-400"}
//             `}
//                                         />

//                                         {/* TOOLTIP */}
//                                         {tooltip && tooltip.name === item.name && (
//                                             <div className="absolute -top-9 left-1/2 -translate-x-1/2
//               bg-black/70 text-white text-xs px-3 py-1 rounded-lg
//               backdrop-blur-lg whitespace-nowrap animate-fadeIn">
//                                                 {item.name}
//                                             </div>
//                                         )}
//                                     </div>
//                                 );
//                             })}
//                         </div>
//                     </div>


//                     {/* ================= RIGHT : BUTTONS ================= */}
//                     <div className="w-[20%] flex flex-col gap-4 justify-center">

//                         <button
//                             onClick={() => {
//                                 setMode("master_plan_1");
//                                 setLockedAmenityIds([]);
//                             }}
//                             className={`px-6 py-3 rounded-xl font-semibold transition-all
//                 ${mode === "master_plan_1"
//                                     ? "bg-red-500 text-white shadow-lg"
//                                     : "bg-white/20 text-white hover:bg-white/30"
//                                 }`}
//                         >
//                             Master Plan 1
//                         </button>

//                         <button
//                             onClick={() => {
//                                 setMode("master_plan_2");
//                                 setLockedAmenityIds([]);
//                             }}
//                             className={`px-6 py-3 rounded-xl font-semibold transition-all
//                 ${mode === "master_plan_2"
//                                     ? "bg-red-500 text-white shadow-lg"
//                                     : "bg-white/20 text-white hover:bg-white/30"
//                                 }`}
//                         >
//                             Master Plan 2
//                         </button>
//                     </div>

//                 </div>
//             </GlassWrapper>
//         </FullPageLayout>
//     );
// }
