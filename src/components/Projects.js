import React from 'react';
import { motion } from 'framer-motion';
import screenvImage from '../images/screenv.png';
import fishImage from '../images/fishytype.png';
import shopImage from '../images/shop.png';
import marvelImage from '../images/marvel.png';

const projects = [
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
  }
];

const Projects = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {projects.map((project, index) => (
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
            <div className="relative aspect-[4/3] overflow-hidden bg-slate-50">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
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
  );
};

export default Projects;
