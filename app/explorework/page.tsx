"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Film, Clapperboard, FastForward, Rewind, Play, Pause, LucideIcon } from "lucide-react";

interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  genre: string;
  color: string;
  icon: LucideIcon;
}

const ExploreWork: React.FC = () => {
  const [currentScene, setCurrentScene] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const experiences: Experience[] = [
    {
      role: "Assistant Director",
      company: "Panorama Studios Mumbai",
      period: "2024",
      description: "Collaborated on major film productions, coordinating between departments and ensuring smooth execution of director's vision.",
      genre: "Action/Drama",
      color: "from-rose-900 to-rose-700",
      icon: Clapperboard
    },
    {
      role: "Associate Director",
      company: "STAGE Technologies",
      period: "2023",
      description: "Led digital content production, revolutionizing storytelling through innovative technological integration.",
      genre: "Tech-Thriller",
      color: "from-blue-900 to-blue-700",
      icon: Film
    },
    {
      role: "Director/Producer",
      company: "Documentary Division",
      period: "2023",
      description: "Crafted compelling real-life narratives, bringing untold stories to the screen with authenticity and impact.",
      genre: "Documentary",
      color: "from-amber-900 to-amber-700",
      icon: Film
    },
    {
        role: "Director - Intern",
        company: "Zee5 Studios",
        period: "2022-2023",
        description: "Worked in show Kehne ko Humsafar Hain, directed by Anil V Kumar, and assisted in the direction of the show.",
        genre: "Drama/Comedy",
        color: "from-cyan-900 to-cyan-700",
        icon: Film
        },
    {
        role: "ScreenPlay Writer",
        company: "Beans Media",
        period: "2024",
        description: "Worked on the screenplay of the music videos shoot by the company.",
        genre: "Music Videos",
        color: "from-cyan-900 to-cyan-700",
        icon: Film
    },
    {
        role: "Socail media manager",
        company: "HippoToys",
        period: "2024",
        description: "Managed the social media accounts of the company and increased the reach of the company.",
        genre: "Management",
        color: "from-cyan-900 to-cyan-700",
        icon: Clapperboard
    }
  ];

  const nextScene = () => {
    setCurrentScene((prev) => (prev + 1) % experiences.length);
  };

  const prevScene = () => {
    setCurrentScene((prev) => (prev - 1 + experiences.length) % experiences.length);
  };

  React.useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(nextScene, 5000);
      return () => clearInterval(interval);
    }
  }, [isPlaying]);

  const IconComponent = experiences[currentScene].icon;

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Film Reel Effect */}
      <div className="fixed top-0 w-full h-12 bg-black z-10 flex">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="flex-1 border-r border-gray-800">
            <div className="w-full h-4 bg-gray-900 mt-4" />
          </div>
        ))}
      </div>
      <div className="fixed bottom-0 w-full h-12 bg-black z-10 flex">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="flex-1 border-r border-gray-800">
            <div className="w-full h-4 bg-gray-900 mt-4" />
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="pt-24 pb-24">
        {/* Scene Counter */}
        <div className="fixed top-16 left-8 font-mono text-gray-500">
          <motion.div
            key={currentScene}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            SCENE {String(currentScene + 1).padStart(2, '0')}/{String(experiences.length).padStart(2, '0')}
          </motion.div>
        </div>

        {/* Controls */}
        <div className="fixed bottom-16 left-1/2 transform -translate-x-1/2 flex space-x-8 items-center bg-black/50 px-8 py-4 rounded-full backdrop-blur-sm">
          <motion.button
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            onClick={prevScene}
            className="text-gray-400 hover:text-white"
          >
            <Rewind className="w-6 h-6" />
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsPlaying(!isPlaying)}
            className="text-gray-400 hover:text-white"
          >
            {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            onClick={nextScene}
            className="text-gray-400 hover:text-white"
          >
            <FastForward className="w-6 h-6" />
          </motion.button>
        </div>

        {/* Experience Cards */}
        <AnimatePresence mode="wait">
          <div className="container mx-auto px-4 flex min-h-[70vh] items-center justify-center">
            <motion.div
              key={currentScene}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              className={`w-full max-w-3xl bg-gradient-to-br ${experiences[currentScene].color} p-12 rounded-3xl relative overflow-hidden`}
            >
              {/* Film Strip Decoration */}
              <div className="absolute top-0 left-0 w-full h-8 flex">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="flex-1 border-r border-black/20">
                    <div className="w-full h-2 bg-black/10 mt-3" />
                  </div>
                ))}
              </div>

              <div className="mt-8">
                {/* Genre Tag */}
                <div className="inline-block px-4 py-1 bg-black/20 rounded-full text-sm mb-6">
                  {experiences[currentScene].genre}
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h2 className="text-4xl font-bold tracking-tight">
                    {experiences[currentScene].role}
                  </h2>
                  <h3 className="text-2xl font-light opacity-90">
                    {experiences[currentScene].company}
                  </h3>
                  <p className="text-lg opacity-85 leading-relaxed">
                    {experiences[currentScene].description}
                  </p>
                  <div className="flex items-center space-x-2 text-sm opacity-75">
                    <IconComponent className="w-4 h-4" />
                    <span>{experiences[currentScene].period}</span>
                  </div>
                </div>
              </div>

              {/* Scene Number */}
              <div className="absolute bottom-8 right-8 font-mono opacity-50 text-sm">
                TAKE {String(currentScene + 1).padStart(2, '0')}
              </div>
            </motion.div>
          </div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ExploreWork;