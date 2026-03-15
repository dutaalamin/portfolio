import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      startDate: 'Jan 2026',
      endDate: 'Present',
      location: 'Cilegon, Indonesia',
      company: 'PT POSCO DX INDONESIA',
      role: 'Factory Automation Engineer',
      type: 'Contract',
      description: 'Designing and implementing automation systems for factory operations. Developing and maintaining industrial automation solutions. Optimizing manufacturing processes through automation technologies.',
      technologies: ['Factory Automation', 'Industrial Automation', 'PLC Programming', 'SCADA Systems', 'Manufacturing Systems', 'Process Optimization', 'System Integration', 'Technical Engineering']
    },
    {
      startDate: 'Jan 2025',
      endDate: 'Oct 2025',
      location: 'Jakarta, Indonesia',
      company: 'PT KARUNIA BERCA INDONESIA',
      role: 'Software Engineer',
      type: 'Contract',
      description: 'Development & Customization: Building and customizing ERP modules to meet specific company requirements. System Integration: Integrating various business systems and ensuring seamless data flow. Problem Solving: Identifying and resolving technical issues in existing systems.',
      technologies: ['PHP', 'Java', 'ERP', 'System Integration', 'Database Management', 'Problem Solving', 'Software Development', 'Customization', 'Business Analysis', 'Technical Support', 'API Development', 'System Architecture']
    },
    {
      startDate: 'Sep 2024',
      endDate: 'Dec 2024',
      location: 'Remote',
      company: 'Appen',
      role: 'AI Engineer',
      type: 'Freelance',
      description: 'Contributed to the improvement of multilingual AI systems by annotating and translating text-to-speech (TTS) datasets used for training and fine-tuning speech models. Worked on data quality assurance and validation for machine learning projects.',
      technologies: ['Artificial Intelligence (AI)', 'Analytical Skills', 'Machine Learning', 'Data Annotation', 'Text-to-Speech', 'Natural Language Processing', 'Data Quality Assurance']
    },
    {
      startDate: 'Oct 2023',
      endDate: 'Mar 2024',
      location: 'Yogyakarta, Indonesia',
      company: 'Balai Penyelidikan dan Pengembangan Teknologi Kebencanaan Geologi - BPPTKG',
      role: 'Bachelor Thesis',
      type: 'Hybrid',
      description: 'I developed a deep learning model using Convolutional Neural Network (CNN) to classify images of Mount Merapi captured in different environmental and volcanic conditions. The goal was to explore how convolutional networks can be used for volcanic activity monitoring and early warning systems.',
      technologies: ['Python', 'CNN', 'Deep Learning', 'Computer Vision', 'TensorFlow']
    },
    {
      startDate: 'Aug 2022',
      endDate: 'Sep 2022',
      location: 'Cilegon, Indonesia',
      company: 'PT Indorama Polypet Indonesia',
      role: 'IT Intern',
      type: 'Internship',
      description: 'Assisted in IT infrastructure maintenance and support. Worked on database management and system administration tasks.',
      technologies: ['Databases', 'System Administration', 'IT Support']
    }
  ];

  return (
    <div className="space-y-10 pb-10">
      {/* Work Experience Section */}
      <section className="space-y-4">
        <div className="flex items-center gap-3 px-2">
          <div className="w-1 h-6 bg-indigo-500 rounded-full"></div>
          <h2 className="text-xl font-black text-slate-800 tracking-tight uppercase">Work Experience</h2>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ x: 5 }}
              className="bg-white p-6 flex flex-col md:flex-row gap-6 transition-all group rounded-xl border border-transparent hover:border-slate-100 hover:shadow-lg hover:shadow-indigo-100/40"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 bg-indigo-50 rounded-xl flex-shrink-0 flex items-center justify-center text-4xl transition-all duration-500 shadow-inner">
                {idx === 0 ? '🏭' : idx === 1 ? '💻' : idx === 2 ? '🤖' : idx === 3 ? '🌋' : '👨‍💻'}
              </div>

              <div className="flex-1 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-50 pb-2">
                  <h3 className="text-lg font-black text-indigo-600 uppercase tracking-tight transition-colors">{exp.role}</h3>
                  <div className="flex flex-col items-end">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest bg-slate-50 px-2 py-0.5 rounded-full">
                      {exp.startDate} – {exp.endDate}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <h4 className="text-indigo-600 font-black text-[13px] uppercase tracking-tight">{exp.company}</h4>
                  <span className="w-0.5 h-0.5 bg-slate-300 rounded-full"></span>
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">{exp.type}</span>
                </div>

                <p className="text-[12px] text-slate-500 leading-relaxed font-semibold bg-slate-50/50 p-3 rounded-lg border border-slate-50">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {exp.technologies.map((tech, techIdx) => (
                    <span key={techIdx} className="text-[8px] font-black px-2 py-1 bg-indigo-50 text-indigo-400 rounded uppercase tracking-tight hover:text-indigo-600 transition-all cursor-default">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section className="space-y-4 pt-4">
        <div className="flex items-center gap-3 px-2">
          <div className="w-1 h-6 bg-indigo-500 rounded-full"></div>
          <h2 className="text-xl font-black text-slate-800 tracking-tight uppercase">Education</h2>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm"
        >
          <div className="flex flex-col md:flex-row gap-6 items-center md:items-start text-center md:text-left">
            <div className="w-20 h-20 md:w-24 md:h-24 bg-indigo-50 rounded-xl flex-shrink-0 flex items-center justify-center text-5xl shadow-inner">
              🎓
            </div>
            <div className="space-y-3 flex-1">
              <div className="flex flex-col md:flex-row justify-between items-center md:items-start border-b border-slate-50 pb-3 gap-3">
                <div>
                  <h3 className="text-lg font-black text-slate-800 tracking-tight">UPN Veteran Yogyakarta</h3>
                  <p className="text-sm font-bold text-indigo-600 mt-0.5">Bachelor of Informatics</p>
                </div>
                <span className="text-[10px] font-black text-indigo-400 uppercase tracking-widest bg-indigo-50 px-3 py-1.5 rounded-full whitespace-nowrap">
                  2019 - 2023
                </span>
              </div>
              <p className="text-[12px] text-slate-500 leading-relaxed font-semibold">
                Focused on software engineering, artificial intelligence, and system development. Gained comprehensive knowledge in programming, database management, and software architecture.
              </p>
              <div className="flex flex-wrap gap-1.5 justify-center md:justify-start">
                {['Software Engineering', 'AI & Machine Learning', 'Database Design'].map((tag) => (
                  <span key={tag} className="text-[8px] font-black px-2 py-1 bg-indigo-50 text-indigo-400 rounded uppercase tracking-tight">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Experience;
