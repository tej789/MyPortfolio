import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { CodeBracketIcon } from '@heroicons/react/24/outline';
import ProjectCard from './ProjectCard';

const Projects = () => {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.05
      }
    }
  };

  const allProjects = useMemo(() => ([
    {
      id: 1,
      title: 'Local Crisis HelpChain',
      description:
        'A MERN stack emergency help platform connecting people during crisis situations.',
      image: '🚨',
      categories: ['web', 'mern'],
      technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
      github: 'https://github.com/tej789/LocalCrisisHelpChain',
      live: 'https://local-crisis-helpchain.vercel.app/',
      featured: true
    },
    {
      id: 2,
      title: 'Car Rental System',
      description:
        'A responsive car rental platform allowing users to browse and book cars.',
      image: '🚗',
      categories: ['web', 'mern'],
      technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
      github: 'https://github.com/tej789/CarRental',
      live: 'https://car-rental-omega-pearl.vercel.app/',
      featured: true
    },
    {
      id: 3,
      title: 'BlogNest',
      description:
        'A full-stack MERN blogging platform with authentication and role-based access.',
      image: '📝',
      categories: ['web', 'mern'],
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Cloudinary'],
      github: 'https://github.com/tej789/BlogNest',
      live: null,
      featured: false
    }
  ]), []);

  return (
    <section id="projects" className="section-padding section-light">
      <div className="container-custom">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-primary mb-4">
            My Projects
          </h2>
          <div className="w-20 h-1 accent-underline mx-auto mb-6"></div>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            Here are some of the projects I've worked on showcasing my MERN stack skills.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {allProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-secondary mb-6">
            Want to see more of my work?
          </p>
          <a
            href="https://github.com/tej789"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center space-x-2"
          >
            <CodeBracketIcon className="w-5 h-5" />
            <span>View All Projects on GitHub</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;
