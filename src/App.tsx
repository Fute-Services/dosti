import { lazy, Suspense } from 'react'

import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'))
import LeftSideNavbar from './components/Navbar/LeftSideNavbar';
import LeftSideNavbar1 from './components/Navbar/LeftSideNavbar1';

import Header from './components/Navbar/Header'
const Desclaimer = lazy(() => import('./pages/RightPanel/Desclaimer'))
const AboutNew = lazy(() => import('./pages/RightPanel/AboutNew'))
const Tie_up = lazy(() => import('./pages/RightPanel/Tie_up'))
const Aminities = lazy(() => import('./pages/Aminities'))
const MasterPlanPage1 = lazy(() => import('./pages/MasterPlanPage1'))
const LocationPage1 = lazy(() => import('./pages/LocationPage1'))
import GoBackButton from './components/GoBackButton';
import GoBack from './components/GoBack';
const WalkthroughPage = lazy(() => import('./pages/WalkthroughPage'))
const InventoryPage1 = lazy(() => import('./pages/InventoryPage1'))
const UnitPlanPage = lazy(() => import('./pages/Inventory/UnitPlanPage'))
const FloorPlanPage = lazy(() => import('./pages/Inventory/FloorPlanPage'))
// import ProjectHighlights from './pages/Project_Highlights';
const ProjectHighLights = lazy(() => import('./pages/ProjectHighLights'))
const Testimonials = lazy(() => import('./pages/RightPanel/Testimonials'))
const Specification = lazy(() => import('./pages/RightPanel/Specification'))
// import Testimonials from './pages/RightPanel/FeedBack';

const BuildingPage = lazy(() => import('./pages/Inventory/BuildingPage'))

const Construction = lazy(() => import('../src/pages/RightPanel/Costruction'))
function App() {


  const location = useLocation();

  const showNavbar = ["/",  "/disclaimer", "/tie_up", "/amenities","", "/location", 
    "", "/project_details","/construction",
    "/unit","/project_highlights" ,"/testimonials",""]
  const showHeader = ["/",   "/tie_up", "/masterplan", "/project_details","/unit",,"/construction"]

  const showBackButton = [ "/disclaimer", "/tie_up",,"/construction" ,
    ]


  const navbar2=["/location","/project_highlights","/amenities","/testimonials",
    "/disclaimer","/about",]
  // "/testimonials"

  const showBackButton1 = ["/masterplan", "/project_details","/about", "/project_highlights","/amenities"]
  // const dynamicRoutes = ["/floorplan/","/unit/"];

  // const isDynamicRoute = dynamicRoutes.some((r) => location.pathname.startsWith(r));

  const showNav = showNavbar.includes(location.pathname)  
  const showHead = showHeader.includes(location.pathname) 
  // || isDynamicRoute
  const showBack = showBackButton.includes(location.pathname);
  const showBack1 = showBackButton1.includes(location.pathname)

    const navbar22 = navbar2.includes(location.pathname)

  return (
    <> {showHead && <LeftSideNavbar />}
      {showNav && <Header />}
      {showBack1 && <GoBack />}
      {showBack && <GoBackButton />}
      {navbar22 && <LeftSideNavbar1/>}
      <Suspense fallback={null}>
      <Routes>

        <Route path="/" element={<HomePage />} />
        <Route path="/disclaimer" element={<Desclaimer />} />
        <Route path="/about" element={<AboutNew />} />
        <Route path="/tie_up" element={<Tie_up />} />
        <Route path="/construction" element={<Construction/>}/>
        {/* <Route path="/project_highlights" element={<ProjectHighlights/>}/> */}
        <Route path="/project_highlights" element={<ProjectHighLights/>}/>
        <Route path="/testimonials" element={<Testimonials/>}/>
         {/* <Route path="/testimonials" element={<Testimonials/>}/> */}
        <Route path="/amenities" element={<Aminities />} />
        <Route path="/location" element={<LocationPage1 />} />
        <Route path="/masterplan" element={<MasterPlanPage1 />} />
        <Route path="/walkthrough" element={<WalkthroughPage />} />
        <Route path="/specification" element={<Specification/>}/>
        <Route path="/project_details" element={<InventoryPage1 />} />
        <Route path="/floorplan/:towerName" element={<FloorPlanPage />} />
        <Route path="/unit/:unitId" element={<UnitPlanPage />} />
        <Route path="/building/:id" element={<BuildingPage/>}/>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      </Suspense>
    </>
  )
}

export default App
