import { useState } from "react";
import { motion } from "framer-motion";
import Ears from "../assets/clear-Ears.svg";
import EarsLight from "../assets/clear-Ears-light.svg";
export interface DarkMode {
  darkMode: boolean;
}

const Portfolio = ({ darkMode }: DarkMode) => {
  const [isHovered, setIsHovered] = useState(false);
  // Example data for links

  interface Video {
    id: number;
    title: string;
    videoId: string;
    desc: string;
  }
  const videos: Video[] = [
    {
      id: 1,
      title: "Video 1",
      videoId: "dQw4w9WgXcQ",
      desc: "A timeless classic that will take you on a nostalgic trip down memory lane. Don’t miss the surprise!",
    },
    {
      id: 2,
      title: "Video 2",
      videoId: "9bZkp7q19f0",
      desc: "The global hit that redefined internet culture. Get ready to dance to the beat of this viral sensation!",
    },
    {
      id: 3,
      title: "Video 3",
      videoId: "3JZ_D3ELwOQ",
      desc: "An inspirational story told through powerful visuals and music. A must-watch for dreamers everywhere.",
    },
    {
      id: 4,
      title: "Video 4",
      videoId: "L_jWHffIx5E",
      desc: "An energetic and unforgettable anthem that will have you singing along every time you hear it.",
    },
    {
      id: 5,
      title: "Video 5",
      videoId: "kJQP7kiw5Fk",
      desc: "Experience the vibrant culture and passion in this chart-topping hit. A visual and auditory feast!",
    },
  ];

  return (
    <>
      <motion.div
        className="sm:max-w-6xl mx-auto p-4 mt-4 mb-4 max-w-[98vw]"
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <h1 className="text-2xl font-bold mb-6 text-dark dark:text-light text-center">
          Realizacje
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <>
              <motion.div
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
                key={video.id}
                className="bg-light dark:bg-dark shadow-lg  dark:shadow-[0_0px_25px_0px_rgba(355,355,355,0.1)] z-0 overflow-hidden"
              >
                {/* Video */}
                <iframe
                  className="w-full aspect-video"
                  src={`https://www.youtube.com/embed/${video.videoId}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>

                {/* Title */}
                <div className="p-4">
                  <h2 className="text-lg text-dark dark:text-light font-semibold">
                    {video.title}
                  </h2>
                  <p className="text-dark dark:text-light mt-2">{video.desc}</p>
                </div>
              </motion.div>
            </>
          ))}
        </div>
      </motion.div>
      <div className="hidden md:block relative">
        <motion.div
          className="fixed -z-20 top-48"
          animate={{ x: isHovered ? "-30%" : "-100%", rotate: 55 }}
          transition={{ duration: 0.4 }}
        >
          {!darkMode ? (
            <img src={Ears} width={100} height={100} />
          ) : (
            <img src={EarsLight} width={100} height={100} />
          )}
        </motion.div>
      </div>
    </>
  );
};

export default Portfolio;
