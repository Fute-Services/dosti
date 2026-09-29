import React from "react";
import FullPageLayout from "../../components/FullPageLayout";
import GlassWrapper from "../../components/GlassWrapper";
import bgImage from '../../assets/Gallery/Gym.jpg'
const YouTubePlayer: React.FC = () => {
    return (<FullPageLayout background={bgImage} >
        <GlassWrapper className=" bg-white/25 backdrop-blur-xl
            border border-white/30 w-full h-full overflow-y-scroll
             lg:h-screen p-5 text-center  flex flex-col justify-center items-center overflow-hidden
            shadow-2xl ">
            <div className="w-full h-screen flex items-center justify-center overflow-hidden">
                <iframe
                    width="80%"
                    height="80%"
                    src="https://www.youtube.com/embed/c5uumOGCCz4"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="border-0"
                />
            </div></GlassWrapper></FullPageLayout >);
};

export default YouTubePlayer;