"use client";
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

function FloatingMusic() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const playAudio = async () => {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch (err) {
        console.warn(
          "Autoplay blocked — waiting for user click to start music."
        );
      }
    };

    playAudio();
  }, []);

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play();
      setIsPlaying(true);
    }
  };

  return (
    <div
      onClick={toggleMusic}
      className="cursor-pointer fixed bottom-6 left-6 flex flex-col items-center justify-center bg-[#9a7e66] text-white px-6 py-4 rounded-full shadow-lg hover:opacity-85 transition-all duration-300 z-50"
    >
      {/* Animated Equalizer Bars */}
      <div className="flex items-end gap-[3px] h-4">
        {isPlaying ? (
          <>
            {[0, 1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                animate={{ height: ["20%", "100%", "30%"] }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.1,
                }}
                className="w-[3px] bg-white rounded"
              />
            ))}
          </>
        ) : (
          <div className="relative top-1">
            <Play size={26} />
          </div>
        )}
      </div>

      {/* Hidden Audio Element */}
      <audio ref={audioRef} src="/music/Iris.mp3" loop preload="auto" />
    </div>
  );
}

export default FloatingMusic;
