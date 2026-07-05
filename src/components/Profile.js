import React from 'react';
import { motion } from 'framer-motion';

const Profile = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-10 pb-20 pt-8">
      {/* Header Section */}
      <section className="flex flex-col md:flex-row items-center gap-8 md:gap-12 px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-48 h-48 md:w-64 md:h-64 shrink-0 rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-slate-50"
        >
          <img 
            src="/images/duta.png" 
            alt="Duta Alamin" 
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div className="space-y-4 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">Duta Alamin</h1>
            <p className="text-indigo-600 font-bold text-lg mt-1">Automation Engineer</p>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-500 font-semibold"
          >
            24 Years Old • Banten, Indonesia
          </motion.p>
        </div>
      </section>

      {/* Content Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="prose prose-slate max-w-none px-4"
      >
        <div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-100 shadow-sm space-y-8">
          <div className="space-y-6 text-slate-600 text-lg leading-relaxed font-medium">
            <p>
              Hi! I'm <span className="text-slate-900 font-bold">Duta Alamin</span>. I am 24 years old and currently working as an <span className="text-indigo-600 font-bold text-lg">Automation Engineer</span>.
            </p>
            
            <p>
              I have always been fascinated by technology, especially how systems can be automated to improve efficiency. My primary focus and passion lie within <span className="italic text-slate-800">AI, Industrial Automation, and Software Engineering</span>.
            </p>

            <p>
              I enjoy exploring how AI can be integrated into industrial processes to create smarter solutions. For me, automation isn't just about replacing manual tasks, it's about empowering human innovation by creating more efficient systems.
            </p>

            <p>
              Currently, I am constantly learning and experimenting with new technologies to stay ahead in this rapidly evolving industry.
            </p>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Profile;
