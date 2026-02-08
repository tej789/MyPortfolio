import React, { useState, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CodeBracketIcon } from '@heroicons/react/24/outline';
import FilterButton from './FilterButton';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');



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

  // immutable source of truth for projects
  const allProjects = useMemo(() => ([
    {
      id: 1,
      title: 'Local Crisis HelpChain',
      description: 'A MERN stack emergency help platform that connects people during crisis situations, allowing users to request and provide help in real time.',
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
      description: 'A web-based car rental platform allowing users to browse cars, book rentals, and manage reservations through a modern responsive interface.',
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
        'A full-stack MERN blogging platform where users can create, publish, and explore blogs across categories with authentication, role-based access, and image uploads.',
      image: '📝',
      categories: ['web', 'mern'],
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Cloudinary'],
      github: 'https://github.com/tej789/BlogNest',
      live: null,
      featured: false
    },
    
  ]), []);

  // const filters = [
  //   { id: 'all', label: 'All Projects' },
  //   { id: 'web', label: 'Web' },
  //   { id: 'mern', label: 'MERN' },
  //   { id: 'backend', label: 'Backend' },
  //   { id: 'ai', label: 'AI / Data' },
  //   { id: 'freelance', label: 'Freelance' },
  //   { id: 'academic', label: 'Academic' }
  // ];

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') return allProjects;
    return allProjects.filter(project => Array.isArray(project.categories) && project.categories.includes(activeFilter));
  }, [activeFilter, allProjects]);

  const handleSetFilter = useCallback((id) => {
    setActiveFilter(id);
  }, []);

  return (
    <section id="projects" className="section-padding section-light">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-primary mb-4">My Projects</h2>
          <div className="w-20 h-1 accent-underline mx-auto mb-6"></div>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each project showcases different 
            technologies and problem-solving approaches.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.15 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
          role="tablist"
        >
          {filters.map((filter) => (
            <FilterButton
              key={filter.id}
              id={filter.id}
              label={filter.label}
              active={activeFilter === filter.id}
              onClick={handleSetFilter}
            />
          ))}
        </motion.div> */}

        
            <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence mode="wait">

          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </AnimatePresence>
      </motion.div>

        {/* Call to Action */}
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