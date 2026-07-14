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
      company: 'BPPTKG Geologi',
      role: 'Bachelor Thesis Researcher',
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
        'Collaborated with senior IT engineers to maintain server uptime and security.',
        'Documented technical issues and solutions for internal knowledge sharing.'
      ],
      technologies: ['Databases', 'System Administration', 'IT Support', 'Networking']
    },
    {
      startDate: 'Aug 2019',
      endDate: 'Nov 2023',
      location: 'Yogyakarta, Indonesia',
      institution: 'UPN Veteran Yogyakarta',
      degree: 'Bachelor of Informatics',
      type: 'Education',
      description: 'Focused on software engineering, artificial intelligence, and system development. Gained comprehensive knowledge in programming, database management, and software architecture.',
      technologies: ['Software Engineering', 'AI & Machine Learning', 'Database Design', 'Algorithm Analysis', 'Data Structures', 'Operating Systems']
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-20 font-serif">
      <div className="border-b-2 border-slate-800 pb-2 mb-8">
        <h2 className="text-3xl font-bold text-slate-900 uppercase tracking-wider">
          Experience & Education
        </h2>
      </div>

      <div className="space-y-8 text-slate-900">
        {experiences.map((exp, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.3 }}
            className="group"
          >
            {/* Header: Role/Degree and Dates */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
              <h3 className="text-xl font-bold">
                {exp.role || exp.degree}
              </h3>
              <span className="text-sm font-semibold whitespace-nowrap">
                {exp.startDate} – {exp.endDate}
              </span>
            </div>

            {/* Subheader: Company/Institution, Location, Type */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-3 italic">
              <span className="text-lg font-medium">
                {exp.company || exp.institution}
              </span>
              <span className="text-sm">
                {exp.location} | {exp.type || 'Academic'}
              </span>
            </div>

            {/* Achievements / Description */}
            <div className="text-base leading-relaxed">
              {exp.achievements ? (
                <ul className="list-disc pl-5 space-y-1.5 marker:text-slate-800">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="pl-1">{achievement}</li>
                  ))}
                </ul>
              ) : (
                <p className="mb-2">
                  {exp.description}
                </p>
              )}
            </div>
            
            {/* Technologies */}
            <div className="mt-3 text-sm">
              <span className="font-semibold italic">Technologies/Skills: </span>
              {exp.technologies.join(', ')}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;



