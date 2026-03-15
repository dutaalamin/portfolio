import React from 'react';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';

const Hero = () => {

  // Use the generated professional avatar
  const profileImage = '/images/duta.png';

  return (
    <section className="bg-white overflow-hidden mb-8">
      {/* Banner Area (Matches Screenshot) */}
      <div className="h-64 sm:h-80 relative overflow-hidden bg-gradient-to-b from-[#e3e5e6] to-[#f2f4f5]">
        {/* Full-Body Avatar in Center */}
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <img
            src="/images/duta_full.png"
            alt="Full Avatar"
            className="h-full object-contain drop-shadow-2xl scale-125 md:scale-135 transition-transform duration-700"
          />
        </div>

        {/* 3D Button (Matches Screenshot) */}
        <div className="absolute top-4 right-4 bg-black/5 hover:bg-black/10 transition-colors backdrop-blur-sm text-slate-700 text-[11px] font-black px-3 py-1.5 rounded-md border border-black/10 cursor-pointer">
          3D
        </div>
      </div>

      {/* Profile Info Row (Shifted down for layout) */}
      <div className="px-4 sm:px-8 pb-8 -mt-16 md:-mt-24 relative z-10">
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center md:items-end text-center md:text-left">
          {/* Circular Avatar */}
          <div className="relative group">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-[6px] md:border-[10px] border-white bg-white overflow-hidden shadow-md">
              <div className="w-full h-full rounded-full border border-slate-100 overflow-hidden">
                <img
                  src={profileImage}
                  alt="Duta Alamin"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="absolute bottom-2 right-2 md:bottom-4 md:right-4 w-5 h-5 md:w-7 md:h-7 bg-green-500 border-[3px] md:border-4 border-white rounded-full shadow-sm"></div>
          </div>

          {/* User Info & Actions Header Row */}
          <div className="flex-1 pt-4 md:pt-28 w-full">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4 md:mb-1">
              {/* Name and Username Block */}
              <div className="flex flex-col items-center md:items-start">
                <h1 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">Duta Alamin</h1>
                <p className="text-[#00a2ff] font-bold text-sm md:text-base mb-2 md:mb-0">@dutaalamin</p>
              </div>

              {/* Action Buttons Block */}
              <div className="flex justify-center md:justify-end gap-2">
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-[#e3e5e6] hover:bg-[#d6d9da] text-slate-700 font-black py-2.5 px-6 rounded-md transition-colors text-[10px] md:text-xs uppercase tracking-tight whitespace-nowrap min-w-[100px]"
                >
                  Message
                </button>
                <button
                  onClick={() => window.open('https://linkedin.com/in/dutaalamin', '_blank')}
                  className="bg-[#e3e5e6] hover:bg-[#d6d9da] text-slate-700 font-black py-2.5 px-6 rounded-md transition-colors text-[10px] md:text-xs uppercase tracking-tight whitespace-nowrap min-w-[100px]"
                >
                  Follow
                </button>
              </div>
            </div>

            {/* Social Badges Row */}
            <div className="flex justify-center md:justify-start gap-3 mt-4">
              <a
                href="https://linkedin.com/in/dutaalamin"
                target="_blank" rel="noopener noreferrer"
                className="bg-[#e3e5e6] hover:bg-[#d6d9da] rounded-full px-4 py-1.5 flex items-center gap-2 transition-colors cursor-pointer"
              >
                <div className="w-4 h-4 bg-[#0077b5] rounded-full flex items-center justify-center">
                  <FaLinkedin size={10} className="text-white" />
                </div>
                <span className="text-[11px] font-black text-slate-800 tracking-tight">LinkedIn</span>
              </a>
              <a
                href="https://instagram.com/dutaalamin"
                target="_blank" rel="noopener noreferrer"
                className="bg-[#e3e5e6] hover:bg-[#d6d9da] rounded-full px-4 py-1.5 flex items-center gap-2 transition-colors cursor-pointer"
              >
                <div className="w-4 h-4 bg-[#e4405f] rounded-full flex items-center justify-center">
                  <FaInstagram size={10} className="text-white" />
                </div>
                <span className="text-[11px] font-black text-slate-800 tracking-tight">Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="px-8 py-6 border-t border-slate-100 bg-white">
        <div className="flex gap-12 mb-4 border-b border-slate-100 pb-2">
          <button className="text-sm font-black text-slate-800 border-b-2 border-slate-800 pb-2 -mb-[10px]">About</button>
        </div>
        <p className="text-slate-600 text-[13px] font-semibold leading-relaxed max-w-5xl pt-4">
          I’m a Software Engineer with hands-on experience in ERP development, IT business systems, and supply chain processes. I currently work as a Factory Automation Engineer, bridging software, operations, and industrial systems to build reliable, efficient solutions.
        </p>
      </div>
    </section>
  );
};

export default Hero;
