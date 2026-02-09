import React from 'react';
import { motion } from 'framer-motion';
import { AcademicCapIcon, CalendarIcon, MapPinIcon } from '@heroicons/react/24/outline';

const Education = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const educationData = [
    {
      id: 1,
      degree: 'Bachelor of Technology in Computer Engineering',
      institution: 'Charotar University of Science and Technology (CHARUSAT)',
      location: 'Changa, Gujarat, India',
      duration: '2023 - 2027',
      description:
        'Focused on software development, data structures, algorithms, and full-stack web development. Built academic and personal projects using MERN stack technologies and modern development tools.',
        gpa: '8.3/10',
      achievements: [
        'Developed MERN stack web applications',
        'Completed NPTEL Data Structures & Algorithms certification',
        'Built full-stack academic projects',
        'Active participation in technical learning and project development'
      ]
    }
  ];
  

  // const certifications = [
  //   {
  //     id: 1,
  //     name: 'MongoDB Developer Certification',
  //     issuer: 'MongoDB University',
  //     date: '2024',
  //     credential: 'M001'
  //   },
  //   {
  //     id: 2,
  //     name: 'React Developer Certification',
  //     issuer: 'Meta',
  //     date: '2024',
  //     credential: 'REACT-001'
  //   },
  //   {
  //     id: 3,
  //     name: 'Node.js Developer Certification',
  //     issuer: 'Node.js Foundation',
  //     date: '2023',
  //     credential: 'NODE-001'
  //   },
  //   {
  //     id: 4,
  //     name: 'Python Programming Certification',
  //     issuer: 'Python Institute',
  //     date: '2023',
  //     credential: 'PCAP-001'
  //   }
  // ];

  return (
    <section id="education" className="section-padding  pb-0 section-gray">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl font-bold text-primary mb-4">Education & Certifications</h2>
          <div className="w-20 h-1 accent-underline mx-auto mb-6"></div>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            My educational background and professional certifications that have shaped my 
            development journey and technical expertise.
          </p>
        </motion.div>

        {/* Education Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold text-primary mb-8 text-center">Education</h3>
          <div className="space-y-8">
            {educationData.map((education, index) => (
              <motion.div
                key={education.id}
                variants={itemVariants}
                className="card relative"
              >
                {/* Timeline Line */}
                {index < educationData.length - 1 && (
                  <div className="absolute left-8 top-full w-0.5 h-8 timeline-line"></div>
                )}

                <div className="grid lg:grid-cols-3 gap-6">
                  {/* Left Column - Icon and Timeline */}
                  <div className="flex items-start space-x-4">
                    <div className="icon-circle flex-shrink-0">
                      <AcademicCapIcon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 text-sm text-secondary mb-1">
                        <CalendarIcon className="w-4 h-4" />
                        <span>{education.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-secondary">
                        <MapPinIcon className="w-4 h-4" />
                        <span>{education.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Middle Column - Degree and Institution */}
                  <div className="lg:col-span-2">
                    <h4 className="text-xl font-bold text-primary mb-2">
                      {education.degree}
                    </h4>
                    <p className="text-lg font-semibold text-accent mb-3">
                      {education.institution}
                    </p>
                    <p className="text-secondary mb-4 leading-relaxed">
                      {education.description}
                    </p>
                    
                    {/* GPA */}
                    <div className="chip mb-4">GPA: {education.gpa}</div>

                    {/* Achievements */}
                    <div className="space-y-2">
                      <h5 className="font-semibold text-primary">Key Achievements:</h5>
                      <ul className="list-disc list-inside space-y-1 text-secondary">
                        {education.achievements.map((achievement, idx) => (
                          <li key={idx}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="text-2xl font-bold text-primary mb-8 text-center">Certifications</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert) => (
              <motion.div
                key={cert.id}
                whileHover={{ scale: 1.05 }}
                className="card text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4">
                  <div className="icon-circle mx-auto">
                    <AcademicCapIcon className="w-8 h-8" />
                  </div>
                </div>
                <h4 className="font-bold text-primary mb-2">{cert.name}</h4>
                <p className="text-accent font-medium mb-2">{cert.issuer}</p>
                <p className="text-sm text-secondary mb-2">{cert.date}</p>
                <div className="badge-muted">{cert.credential}</div>
              </motion.div>
            ))}
          </div>
        </motion.div> */}

        {/* Additional Information */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 card p-8"
        >
          <h3 className="text-2xl font-bold text-primary mb-6 text-center">Continuous Learning</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-primary mb-4">Online Courses & Workshops</h4>
              <ul className="space-y-2 text-secondary">
                <li>• Advanced React Patterns (Udemy)</li>
                <li>• Node.js Microservices (Pluralsight)</li>
                <li>• MongoDB Aggregation Framework (MongoDB University)</li>
                <li>• Git & GitHub Masterclass (Coursera)</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-primary mb-4">Professional Development</h4>
              <ul className="space-y-2 text-secondary">
                <li>• Agile/Scrum Methodology Training</li>
                <li>• Code Review Best Practices</li>
                <li>• API Design & Documentation</li>
                <li>• Performance Optimization Techniques</li>
              </ul>
            </div>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default Education; 