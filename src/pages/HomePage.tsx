import { useEffect } from "react";
import RightSideNavbar from '../components/Navbar/RightSideNavbar';
export default function HomePage() {

    useEffect(() => {
        import("../pages/LocationPage1"); 
    }, []);

    useEffect(() => {
    const images = import.meta.glob(
        "/src/assets/Location1/*.{png,jpg,jpeg,webp}",
        { eager: true }
    );

    Object.values(images).forEach((module: any) => {
        const img = new Image();
        img.src = module.default;
    });
}, []);

    return (
        <>
            <div className='h-auto md:h-screen overflow-y-scroll md:overflow-hidden w-full'>
                <iframe
                    // src="https://futeservices.com/25-26/DOSTI%20360/index.html"
                    src="https://futeservices.com/26-27/Hiranadani/DOSTI/index.html"
                    style={{ width: "100%", height: "100vh", border: "none" }}
                    title=""
                    className='select-none'
                />
                <RightSideNavbar />
            </div>
        </>
    )
}