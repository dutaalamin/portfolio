import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      startDate: 'Jan 2026',
      endDate: 'Present',
      location: 'Cilegon, Indonesia',
      company: 'PT POSCO DX INDONESIA',
      role: 'Automation Engineer',
      type: 'Contract',
      achievements: [
        'Supporting Level 2 industrial automation systems for Shearing Line operations in Plate Mill, including monitoring, troubleshooting, and maintaining automation applications, source code, and HMI systems.',
        'Developing and maintaining Level 2 process logic and automation application components for industrial production systems.',
        'Supporting testing, troubleshooting, and maintenance activities for industrial automation systems in real-time manufacturing environments.',
        'Collaborating with production and maintenance teams to ensure stable, safe, and reliable plant operations.',
        'Monitoring system performance and assisting in resolving operational issues in real-time manufacturing environments.'
      ],
      technologies: ['Factory Automation', 'Industrial Automation', 'PLC Programming', 'SCADA Systems', 'Manufacturing Systems', 'Process Optimization', 'System Integration', 'Technical Engineering']
    },
    {
      startDate: 'Jan 2025',
      endDate: 'Oct 2025',
      location: 'Jakarta, Indonesia',
      company: 'PT KARUNIA BERCA INDONESIA',
      role: 'Software Engineer',
      type: 'Contract',
      achievements: [
        'Developed and customized ERP modules based on company requirements to support business operations and improve workflow efficiency.',
        'Integrated ERP modules and internal business systems to ensure seamless data flow and support operational processes across departments.',
        'Maintained and optimized ERP system performance through debugging, feature enhancements, and routine system improvements.',
        'Diagnosed and resolved ERP-related software, hardware, and database issues to minimize downtime and ensure system reliability.',
        'Managed and optimized databases to maintain data integrity, improve system efficiency, and support accurate business reporting.',
        'Collaborated with cross-functional teams to align ERP implementation and system enhancements with business needs and operational objectives.'
      ],
      technologies: ['PHP', 'Java', 'ERP', 'System Integration', 'Database Management', 'Problem Solving', 'Software Development', 'Customization', 'Business Analysis', 'Technical Support', 'API Development', 'System Architecture']
    },
    {
      startDate: 'Sep 2024',
      endDate: 'Dec 2024',
      location: 'Remote',
      company: 'Appen',
      role: 'AI Engineer',
      type: 'Freelance',
      achievements: [
        'Contributed to the improvement of multilingual AI systems by annotating and translating text-to-speech (TTS) datasets used for training and fine-tuning speech models.',
        'Improved model performance by validating linguistic data to ensure consistency, accuracy, and alignment with model requirements.',
        'Collaborated with cross-functional AI and NLP teams to deliver scalable and culturally adaptive datasets for global AI deployment.',
        'Performed detailed linguistic reviews to ensure high-quality data input for model training, aligned with both project-specific and AI industry standards.'
      ],
      technologies: ['Artificial Intelligence (AI)', 'Analytical Skills', 'Machine Learning', 'Data Annotation', 'Text-to-Speech', 'Natural Language Processing', 'Data Quality Assurance']
    },
    {
      startDate: 'Oct 2023',
      endDate: 'Mar 2024',
      location: 'Yogyakarta, Indonesia',
      company: 'Balai Penyelidikan dan Pengembangan Teknologi Kebencanaan Geologi - BPPTKG',
      role: 'Bachelor Thesis',
      type: 'Hybrid',
      achievements: [
        'Developed a sophisticated Convolutional Neural Network (CNN) deep learning model to classify images of Mount Merapi.',
        'Analyzed volcanic images captured under diverse environmental conditions to improve early warning detection accuracy.',
        'Explored and demonstrated the efficacy of deep learning networks in real-time volcanic activity monitoring systems.'
      ],
      technologies: ['Python', 'CNN', 'Deep Learning', 'Computer Vision', 'TensorFlow']
    },
    {
      startDate: 'Aug 2022',
      endDate: 'Sep 2022',
      location: 'Cilegon, Indonesia',
      company: 'PT Indorama Polypet Indonesia',
      role: 'IT Intern',
      type: 'Internship',
      achievements: [
        'Performed troubleshooting, maintenance, monitoring, and deployment of IT equipment.',
        'Assisted in software installation and system configuration.',
        'Diagnosed and resolved network connectivity issues to minimize downtime.',
        'Collaborated with senior engineers to maintain server uptime and security.',
        'Documented technical issues and solutions for internal knowledge sharing.'
      ],
      technologies: ['Databases', 'System Administration', 'IT Support']
    }
  ];

  return (
    <div className="space-y-12 pb-16">
      {/* Work Experience Section */}
      <section className="space-y-8">
        <div className="px-2">
          <h2 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-800 to-indigo-600 tracking-tight uppercase">Professional Journey</h2>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative group">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group-hover:border-indigo-200"
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-black text-slate-800 uppercase tracking-tight group-hover:text-indigo-600 transition-colors">{exp.role}</h3>
                    <div className="flex flex-wrap items-center gap-2 mt-2">
                      <span className="text-sm font-bold text-indigo-600 uppercase tracking-tight">{exp.company}</span>
                      <span className="w-1.5 h-1.5 bg-slate-300 rounded-full hidden sm:block"></span>
                      <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider bg-slate-100 px-2 py-0.5 rounded-md">{exp.type}</span>
                    </div>
                  </div>
                  <div className="flex flex-col md:items-end">
                    <span className="text-xs font-black text-indigo-500 uppercase tracking-widest bg-indigo-50 px-3 py-1 rounded-full whitespace-nowrap">
                      {exp.startDate} - {exp.endDate}
                    </span>
                    <span className="text-[10px] text-slate-400 font-semibold uppercase mt-2 tracking-wider">{exp.location}</span>
                  </div>
                </div>

                <ul className="text-sm text-slate-600 leading-relaxed font-medium mb-6 relative z-10 list-disc list-outside ml-5 space-y-2 marker:text-indigo-400">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-50">
                  {exp.technologies.map((tech, techIdx) => (
                    <span key={techIdx} className="text-[10px] font-bold px-3 py-1.5 bg-slate-50 text-slate-500 rounded-lg uppercase tracking-tight group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors duration-300 cursor-default">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section className="space-y-8 pt-8">
        <div className="px-2">
          <h2 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-800 to-purple-600 tracking-tight uppercase">Education</h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white p-6 md:p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-purple-200 transition-all duration-300 group relative"
        >
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center md:items-start text-center md:text-left">
            <div className="space-y-4 flex-1 w-full">
              <div className="flex flex-col md:flex-row justify-between items-center md:items-start border-b border-slate-50 pb-4 gap-3">
                <div>
                  <h3 className="text-xl md:text-2xl font-black text-slate-800 tracking-tight uppercase group-hover:text-purple-600 transition-colors">UPN Veteran Yogyakarta</h3>
                  <p className="text-sm font-bold text-purple-600 mt-1 uppercase tracking-tight">Bachelor of Informatics</p>
                </div>
                <span className="text-xs font-black text-purple-500 uppercase tracking-widest bg-purple-50 px-4 py-1.5 rounded-full whitespace-nowrap">
                  2019 - 2023
                </span>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed font-medium">
                Focused on software engineering, artificial intelligence, and system development. Gained comprehensive knowledge in programming, database management, and software architecture.
              </p>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                {['Software Engineering', 'AI & Machine Learning', 'Database Design'].map((tag) => (
                  <span key={tag} className="text-[10px] font-bold px-3 py-1.5 bg-slate-50 text-slate-500 rounded-lg uppercase tracking-tight group-hover:bg-purple-50 group-hover:text-purple-600 transition-colors duration-300 cursor-default">
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
