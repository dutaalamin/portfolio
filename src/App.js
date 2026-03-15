import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Contact from './components/Contact';



function Sidebar() {
  const navigate = useNavigate();
  const menuItems = [
    { name: 'Home', icon: '🏠', id: 'home' },
    { name: 'Profile', icon: '👤', id: 'profile' },
    { name: 'Experience', icon: '🏢', id: 'experience' },
    { name: 'Messages', icon: '✉️', id: 'contact' },
  ];

  return (
    <>
      <aside className="fixed left-0 top-0 bottom-0 w-48 bg-white border-r border-slate-200 hidden md:flex flex-col py-4 z-40">
        <div className="px-4 mb-6">
          <div className="flex items-center gap-3 p-2 hover:bg-slate-50 rounded-lg cursor-pointer transition-colors group">
            <div className="w-10 h-10 rounded-full overflow-hidden bg-slate-100 border border-slate-200">
              <img src="/images/duta.png" alt="Avatar" className="w-full h-full object-cover" />
            </div>
            <span className="text-xs font-black text-slate-800 line-clamp-1 group-hover:underline">Duta Alamin</span>
          </div>
        </div>

        <nav className="flex-1 px-2 space-y-1">
          {menuItems.map((item) => (
            <button
              key={item.name}
              onClick={() => {
                if (item.id === 'experience') navigate('/experience');
                else if (item.id === 'profile') navigate('/profile');
                else {
                  navigate('/');
                  setTimeout(() => document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' }), 100);
                }
              }}
              className="w-full flex items-center gap-3 px-3 py-2 text-slate-600 hover:bg-slate-100 rounded-md transition-all group"
            >
              <span className="text-lg">{item.icon}</span>
              <span className="text-[11px] font-black uppercase tracking-tight group-hover:text-slate-900">{item.name}</span>
            </button>
          ))}
        </nav>
      </aside>

      {/* Mobile Bottom Navigation - Moved out of the hidden aside */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 flex md:hidden justify-around items-center py-2 px-4 z-50">
        {menuItems.map((item) => (
          <button
            key={item.name}
            onClick={() => {
              if (item.id === 'experience') navigate('/experience');
              else if (item.id === 'profile') navigate('/profile');
              else {
                navigate('/');
                setTimeout(() => document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' }), 100);
              }
            }}
            className="flex flex-col items-center gap-1 p-2"
          >
            <span className="text-xl">{item.icon}</span>
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter">{item.name}</span>
          </button>
        ))}
      </nav>
    </>
  );
}



function SectionWrapper({ children }) {
  return (
    <div className="w-full relative z-10">
      {children}
    </div>
  );
}

function MainPage() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      setTimeout(() => {
        const element = document.getElementById(location.state.scrollTo);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location.state]);

  return (
    <div className="w-full flex flex-col gap-10 pb-32 md:pb-20">
      <div id="home" className="w-full"><Hero /></div>

      <div id="continue" className="space-y-4 px-4 sm:px-8">
        <div className="flex items-center justify-between px-2">
          <h2 className="text-xl font-black text-slate-800 tracking-tight">Games</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4">
          <div
            onClick={() => window.open('https://pacmanduta.vercel.app', '_blank')}
            className="group cursor-pointer"
          >
            <div className="aspect-square relative overflow-hidden bg-slate-100 rounded-lg">
              <img
                src="/images/pacman_thumb.png"
                alt="Pacman"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="py-2">
              <p className="text-[11px] font-black text-slate-800 truncate uppercase tracking-tight">Pacman</p>
            </div>
          </div>

        </div>
      </div>

      <div id="projects" className="space-y-6 px-4 sm:px-8">
        <div className="flex items-center justify-between px-2">
          <h2 className="text-2xl font-black text-slate-800 tracking-tight">Projects</h2>
        </div>
        <Projects />
      </div>

      <div id="about" className="space-y-6 px-4 sm:px-8">
        <About />
      </div>

      <div id="contact" className="space-y-6 px-4 sm:px-8">
        <div className="flex items-center gap-2 px-2">
          <h2 className="text-2xl font-black text-slate-800 tracking-tight">Get in Touch</h2>
        </div>
        <SectionWrapper><Contact /></SectionWrapper>
      </div>
    </div>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <ParallaxProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-white text-[#1b1d1e] font-sans flex flex-col scroll-smooth">
          <div className="flex flex-1 pt-0">
            <Sidebar />
            <main className="flex-1 w-full md:ml-48 transition-all">
              <AnimatePresence mode="wait">
                <Routes>
                  <Route path="/" element={<MainPage />} />
                  <Route path="/experience" element={
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="w-full transition-all px-4 sm:px-8 py-8"
                    >
                      <Experience />
                    </motion.div>
                  } />
                  <Route path="/profile" element={
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="w-full transition-all px-4 sm:px-8 py-8"
                    >
                      <Profile />
                    </motion.div>
                  } />
                </Routes>
              </AnimatePresence>
            </main>
          </div>
          <footer className="md:ml-48 py-10 bg-white border-t border-slate-100">
            <div className="max-w-6xl mx-auto px-8 text-center">

              <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em]">
                DUTA ALAMIN 2026
              </p>
            </div>
          </footer>
        </div>
      </Router>
    </ParallaxProvider>
  );
}

export default App;
