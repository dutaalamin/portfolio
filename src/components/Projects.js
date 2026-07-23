import React, { useState } from 'react';
import { motion } from 'framer-motion';
import screenvImage from '../images/screenv.png';
import fishImage from '../images/fishytype.png';
import shopImage from '../images/shop.png';
import marvelImage from '../images/marvel.png';
import sportsImage from '../images/67sports.png';
import savoryzImage from '../images/savory.png';
import bproImage from '../images/bpro.png';
import colorwayImage from '../images/colorway.png';
import drakenImage from '../images/draken.png';
import stingerImage from '../images/stinger.png';
import bravoImage from '../images/bravo.png';

const projects = [
  {
    title: "Bprotraining",
    description: "A comprehensive platform for soccer training and gym workouts, designed to guide users on becoming professional athletes.",
    image: bproImage,
    tags: ["Laravel", "React", "Tailwind CSS"],
    liveUrl: "https://gtech.gaisar.id/",
    sourceUrl: "https://gtech.gaisar.id/",
  },
  {
    title: "Colorway",
    description: "A modern color palette generator with smooth animations, one-click hex copying, and a minimalist interface.",
    image: colorwayImage,
    tags: ["React", "Vite", "Tailwind CSS"],
    liveUrl: "https://colorways.vercel.app/",
    sourceUrl: "https://colorways.vercel.app/",
  },
  {
    title: "ScreenV",
    description: "Movie discovery platform with real-time ratings and personalized watchlists using TMDB API.",
    image: screenvImage,
    tags: ["React", "TMDB API", "Tailwind CSS", "Context API"],
    liveUrl: "https://screenv.vercel.app/",
    sourceUrl: "https://github.com/dutaalamin/screenv",
  },
  {
    title: "Casava",
    description: "E-commerce platform with Stripe payments, user authentication, and admin dashboard.",
    image: shopImage,
    tags: ["React", "Firebase", "Stripe API", "Redux"],
    liveUrl: "https://casavastore.vercel.app/",
    sourceUrl: "https://github.com/dutaalamin/ecommerce",
  },
  {
    title: "Dutadraken",
    description: "Software and tools service platform similar to HubSpot, providing all-in-one business solutions.",
    image: drakenImage,
    tags: ["SaaS", "React", "Tailwind CSS"],
    liveUrl: "https://dutadraken.vercel.app/",
    sourceUrl: "https://dutadraken.vercel.app/",
  },
  {
    title: "Dutastinger",
    description: "Reliable and high-performance web hosting service platform.",
    image: stingerImage,
    tags: ["Hosting", "Web App", "React"],
    liveUrl: "https://dutastinger.vercel.app/",
    sourceUrl: "https://dutastinger.vercel.app/",
  },
  {
    title: "Dutabravo",
    description: "Turn Every Order into a Lifetime Customer. One AI-powered platform for all marketing and sales needs (Email, SMS, WhatsApp).",
    image: bravoImage,
    tags: ["Marketing", "AI", "SaaS"],
    liveUrl: "https://dutabravo.vercel.app/",
    sourceUrl: "https://dutabravo.vercel.app/",
  },
  {
    title: "Fishytype",
    description: "Interactive typing speed test app with multiple themes and real-time WPM tracking.",
    image: fishImage,
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Zustand"],
    liveUrl: "https://fishytype.vercel.app/",
    sourceUrl: "https://github.com/dutaalamin/FishyType",
  },
  {
    title: "Marvel Rivals",
    description: "A fan site for the 6v6 team-based game Marvel Rivals, featuring news, updates, and character guides.",
    image: marvelImage,
    tags: ["React", "JavaScript", "Next.js"],
    liveUrl: "https://marvelrivals1.vercel.app/",
    sourceUrl: "https://marvelrivals1.vercel.app/",
  },
  {
    title: "67Sports",
    description: "Modern e-commerce platform for a sneakers store, featuring a clean and dynamic UI design.",
    image: sportsImage,
    tags: ["E-commerce", "React", "Web App"],
    liveUrl: "https://67sports.vercel.app/",
    sourceUrl: "https://67sports.vercel.app/",
  },
  {
    title: "Savory",
    description: "A food ordering website UI design for a sandwich shop, featuring a fresh and appetizing interface.",
    image: savoryzImage,
    tags: ["Food Delivery", "React", "UI/UX"],
    liveUrl: "https://savoryz.vercel.app/",
    sourceUrl: "https://savoryz.vercel.app/",
  }
];

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projects : projects.slice(0, 4);

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {displayedProjects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-xl hover:shadow-indigo-100/30 transition-all duration-300 group flex flex-col h-full"
          >
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex flex-col h-full">
              {/* Image Container */}
              <div className="relative aspect-video overflow-hidden bg-slate-50 border-b border-slate-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-indigo-900/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Content Container */}
              <div className="p-4 flex flex-col flex-1 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-black text-slate-800 uppercase tracking-tight group-hover:text-indigo-600 transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-[10px] text-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
                </div>

                <p className="text-[10px] text-slate-500 font-semibold leading-relaxed line-clamp-3 mb-2 flex-1">
                  {project.description}
                </p>

                {/* Technology Tags */}
                <div className="flex flex-wrap gap-1 pt-2 border-t border-slate-50">
                  {project.tags.slice(0, 3).map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="text-[8px] font-black px-2 py-0.5 bg-indigo-50 text-indigo-400 rounded-md uppercase tracking-tighter"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          </motion.div>
        ))}
      </div>
      
      {/* Show More Projects Button */}
      <div className="mt-8 flex justify-center">
        <button
          onClick={() => setShowAll(!showAll)}
          className="bg-[#e3e5e6] hover:bg-[#d6d9da] text-slate-700 font-black py-2.5 px-6 rounded-md transition-colors text-[10px] md:text-xs uppercase tracking-tight"
        >
          {showAll ? 'Show Less' : 'View More Projects'}
        </button>
      </div>
    </div>
  );
};

export default Projects;
