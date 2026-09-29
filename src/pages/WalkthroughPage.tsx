
import { MdOutlineReplyAll } from "react-icons/md";
import {  useNavigate } from "react-router-dom";

export default function WalkthroughPage() {
    const navigate=useNavigate();
  return (
    <div className="w-full h-screen">

        <div className="absolute top-5 left-2 flex gap-4 z-[2000]">

                {/* Mute / Unmute */}
                <button
                    onClick={()=>navigate(-1)}
                    className="p-5 bg-black/30 animate-float1 hover:text-black backdrop-blur-xl text-white rounded-full border border-black/30 hover:bg-white/40 transition shadow-lg"
                >
                    <MdOutlineReplyAll />
                </button>
            </div>
      <iframe
        src="https://fast.wistia.net/embed/iframe/zq51uwecjx
        ?videoFoam=true
        
        &muted=true
        &controlsVisibleOnLoad=true
        &playbar=true
        &fullscreenButton=true
        &volumeControl=true
        &smallPlayButton=true
        &endVideoBehavior=loop"
        allow="autoplay; fullscreen"
        allowFullScreen
        className="w-full h-full border-0 rounded-2xl"
        title="Walkthrough Video"
      />
    </div>
  );
}
