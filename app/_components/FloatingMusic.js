"use client";
import { useRef, useState } from "react";
import { Play, Pause } from "lucide-react";

function FloatingMusic() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <div
      onClick={toggleMusic}
      className="cursor-pointer fixed bottom-6 left-6 bg-[#9a7e66] text-3xl max-lg:text-2xl max-md:text-lg text-white px-10 py-3 shadow-lg hover:opacity-80 transition-all duration-300 z-50 max-lg:px-8 max-lg:py-1 max-md:px-5"
    >
      {isPlaying ? <Pause size={28} /> : <Play size={28} />}
      <audio ref={audioRef} src="/music/Iris.mp3" loop />
    </div>
  );
}
export default FloatingMusic;
