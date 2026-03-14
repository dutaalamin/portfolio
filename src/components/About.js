import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  SiHtml5, SiJavascript, SiTypescript, SiPhp, SiPython, 
  SiReact, SiNextdotjs, SiTailwindcss, SiBootstrap, SiNodedotjs, 
  SiExpress, SiLaravel, SiFlask, SiDjango, SiFirebase,
  SiGit, SiGithub, SiFigma, SiVite, SiDocker,
  SiKubernetes, SiGooglecloud, SiPostman
} from 'react-icons/si';
import { FaCss3Alt } from 'react-icons/fa';
import { VscCode } from 'react-icons/vsc';


const About = () => {
  const [activeSkillCategory, setActiveSkillCategory] = useState('Web Development');

  const skillCategories = {
    'Web Development': {
      description: 'Building modern, responsive web applications',
      skills: [
        { name: 'HTML', icon: SiHtml5, color: '#E34F26' },
        { name: 'CSS', icon: FaCss3Alt, color: '#1572B6' },
        { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
        { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
        { name: 'React', icon: SiReact, color: '#61DAFB' },
        { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
      ]
    },
    'REST API': {
      description: 'Creating robust and scalable backend services',
      skills: [
        { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
        { name: 'Laravel', icon: SiLaravel, color: '#FF2D20' },
        { name: 'Python', icon: SiPython, color: '#3776AB' },
        { name: 'Django', icon: SiDjango, color: '#092E20' },
      ]
    },
    'Tools & Cloud': {
      description: 'Development, deployment, and cloud infrastructure',
      skills: [
        { name: 'VS Code', icon: VscCode, color: '#007ACC' },
        { name: 'Git', icon: SiGit, color: '#F05032' },
        { name: 'Docker', icon: SiDocker, color: '#2496ED' },
        { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' }
      ]
    }
  };


  return (
    <section className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 px-2">
        <h2 className="text-2xl font-black text-slate-800 tracking-tight">Skills Expertise</h2>
        
        <div className="flex flex-wrap gap-1.5">
          {Object.keys(skillCategories).map((category) => (
            <button
              key={category}
              onClick={() => setActiveSkillCategory(category)}
              className={`px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-tight transition-all ${
                activeSkillCategory === category 
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-100' 
                : 'bg-slate-100 text-slate-400 hover:bg-slate-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="px-2 space-y-6">
        <p className="text-[10px] font-black text-indigo-400 uppercase tracking-widest leading-none">
          {skillCategories[activeSkillCategory].description}
        </p>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-x-4 gap-y-8">
          {skillCategories[activeSkillCategory].skills.map((skill, idx) => {
            const Icon = skill.icon;
            return (
              <motion.div 
                key={idx} 
                whileHover={{ y: -5 }}
                className="flex flex-col items-start group cursor-pointer"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 bg-slate-50 rounded-2xl flex items-center justify-center p-4 transition-all duration-300 group-hover:bg-slate-100 group-hover:shadow-inner shadow-sm border border-slate-100/50">
                  <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center transform group-hover:scale-110 transition-transform">
                    <Icon size={40} style={{ color: skill.color }} />
                  </div>
                </div>
                <div className="mt-3 w-16 md:w-20 text-center">
                  <p className="text-[10px] font-black uppercase tracking-tight text-slate-700 group-hover:text-slate-900 transition-colors">{skill.name}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
