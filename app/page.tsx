"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Camera, Film, PenTool, Mail, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

// Define the Project type
interface Project {
  title: string;
  role: string;
  year: string;
  color: string;
  description: string;
}

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState<
    "director" | "business" | "content"
  >("director");
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const projects = {
    director: [
      {
        title: "Panorama Studios Mumbai",
        role: "Assistant Director",
        year: "2024",
        color: "bg-rose-50",
        description:
          "Led creative direction for multiple feature film projects.",
      },
      {
        title: "STAGE Technologies Private Limited",
        role: "Associate Director",
        year: "2023",
        color: "bg-blue-50",
        description: "Spearheaded digital content strategy and production.",
      },
      {
        title: "Documentary",
        role: "Director/Producer",
        year: "2023",
        color: "bg-amber-50",
        description:
          "Conceptualized and executed compelling documentary narratives.",
      },
      {
        title: "ZEE5 - Kehne ko Humsafar",
        role: "Director-INTERN",
        year: "2023",
        color: "bg-green-50",
        description: "Gained hands-on experience in television production.",
      },
    ],
    business: [
      {
        title: "Bombay Street - Food Venture",
        role: "Founder & CEO",
        year: "2020-2024",
        color: "bg-emerald-50",
        description: "Founded and scaled a successful food business venture.",
      },
      {
        title: "HORECA",
        role: "Managing Partner-Supplier",
        year: "2019-2021",
        color: "bg-purple-50",
        description: "Managed key supplier relationships and operations.",
      },
    ],
    content: [
      {
        title: "BEANS MEDIA",
        role: "Screenplay Writer",
        year: "2024",
        color: "bg-indigo-50",
        description: "Crafted engaging screenplays and creative content.",
      },
      {
        title: "HippoToys",
        role: "Social Media Manager",
        year: "2024",
        color: "bg-orange-50",
        description: "Managed social media strategy and content creation.",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-800">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <Image
            src="https://ik.imagekit.io/UjjwalDhariwal/Bg.jpg?updatedAt=1739738891887"
            alt="Background"
            width={600}
            height={500}
            layout="intrinsic"
            className="object-cover"
          />
        </motion.div>

        {/* Navbar */}
        <motion.div
          className={`fixed top-0 w-full z-50 transition-all duration-300 ${
            isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : ""
          }`}
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex justify-between items-center">
              <motion.h1
                className="text-xl sm:text-2xl font-light tracking-wide"
                whileHover={{ scale: 1.05 }}
              >
                Anuj Pundhir
              </motion.h1>
              <div className="flex space-x-4 sm:space-x-8">
                {[Camera, Film, PenTool, Mail].map((Icon, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="w-5 h-5 hover:text-blue-500 cursor-pointer transition-colors duration-300" />
                  </motion.div>
                ))}
              </div>
            </div>
          </nav>
        </motion.div>

        {/* Hero Content */}
        <motion.div
          className="text-center z-40 space-y-4 sm:space-y-6 relative px-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-widest text-white mb-4">
            CREATIVE
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl font-serif font-bold tracking-tighter text-white typewriter">
            DIRECTOR • MANAGER • STORY-WRITER
          </p>
          <div className="pt-6 sm:pt-8">
            <motion.button
              className="px-6 sm:px-8 py-2 sm:py-3 bg-transparent border border-gray-300 rounded-full hover:bg-gray-50 transition-all duration-300 text-sm tracking-wider text-white hover:text-gray-800"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link href="/explorework">Explore Work</Link>
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-24">
        {/* Experience Tabs */}
        <div className="flex justify-center space-x-4 sm:space-x-12 mb-8 sm:mb-16">
          {(["director", "business", "content"] as const).map((section) => (
            <motion.button
              key={section}
              onClick={() => setActiveSection(section)}
              className={`group relative px-4 sm:px-6 py-2 transition-all duration-300 ${
                activeSection === section
                  ? "text-blue-500"
                  : "text-gray-400 hover:text-gray-600"
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <span className="text-sm tracking-wider uppercase">
                {section}
              </span>
              {activeSection === section && (
                <motion.span
                  className="absolute bottom-0 left-0 w-full h-px bg-blue-500 transform origin-left transition-transform duration-300"
                  layoutId="underline"
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* Project Grid with AnimatePresence */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {projects[activeSection].map((project, index) => (
              <motion.div
                key={index}
                className={`${project.color} rounded-xl p-6 sm:p-8 transition-all duration-500 transform hover:-translate-y-2 cursor-pointer`}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                }}
                onClick={() => setSelectedProject(project)}
              >
                <div className="flex flex-col h-full justify-between">
                  <div>
                    <span className="text-sm text-gray-500 tracking-wider">
                      {project.year}
                    </span>
                    <h3 className="text-xl font-medium mt-2 mb-3">
                      {project.title}
                    </h3>
                    <p className="text-gray-600">{project.role}</p>
                    <p className="text-gray-500 text-sm mt-4">
                      {project.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                className={`${selectedProject.color} p-6 sm:p-8 rounded-xl max-w-2xl w-full mx-4 relative`}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 hover:bg-gray-200 rounded-full transition-colors duration-200"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="space-y-4">
                  <div>
                    <span className="text-sm text-gray-500 tracking-wider">
                      {selectedProject.year}
                    </span>
                    <h2 className="text-2xl font-medium mt-1">
                      {selectedProject.title}
                    </h2>
                  </div>
                  <p className="text-gray-600 font-medium">
                    {selectedProject.role}
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Stats Section */}
        <div className="mt-16 sm:mt-32 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-12">
          {[
            { number: "03+", label: "Years Experience" },
            { number: "15+", label: "Projects" },
            { number: "3", label: "Business Ventures" },
            { number: "5+", label: "Awards" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center group cursor-pointer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <h3 className="text-3xl sm:text-4xl font-light text-gray-800 group-hover:text-blue-500 transition-colors duration-300">
                {stat.number}
              </h3>
              <p className="text-sm text-gray-500 mt-2 tracking-wider uppercase">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gray-50 py-12 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-light tracking-wide mb-6 sm:mb-8">
            Lets Create Something Beautiful
          </h2>
          <motion.a
            href="https://wa.me/916283779938"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 sm:px-12 py-3 sm:py-4 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all duration-300 text-sm tracking-wider"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            GET IN TOUCH
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;