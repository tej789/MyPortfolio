import React from 'react';
import { motion } from 'framer-motion';
import { CodeBracketIcon, GlobeAltIcon, EyeIcon } from '@heroicons/react/24/outline';


const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.96
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 120,
      damping: 20,
      mass: 0.8
    }
  },
  exit: {
    opacity: 0,
    y: -20,
    scale: 0.96,
    transition: {
      duration: 0.25,
      ease: 'easeInOut'
    }
  }
};


const ProjectCard = ({ project }) => {
  return (
    

            <motion.article
        variants={cardVariants}
        layout="position"
        initial="hidden"
        animate="visible"
        exit="exit"
        className="project-card group flex flex-col h-full"
        >

      <div className="relative h-48 flex items-center justify-center overflow-hidden" style={{background: 'linear-gradient(180deg, rgba(0,0,0,0.02), transparent)'}}>
        <span className="text-6xl select-none">{project.image}</span>
        {project.featured && (
          <div className="absolute top-4 right-4 bg-platinum-200 text-dusk_blue-900 px-2 py-1 rounded-full text-xs font-bold">
            Featured
          </div>
        )}

        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-3">
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer"
              className="icon-button p-2 rounded-full hover:opacity-90 transition-colors duration-200">
                <CodeBracketIcon className="w-5 h-5" />
              </a>
            )}
            {project.live && (
              <a href={project.live} target="_blank" rel="noopener noreferrer" className="icon-button p-2 rounded-full hover:opacity-90 transition-colors duration-200">
                <GlobeAltIcon className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 id={`project-${project.id}-title`} className="text-xl font-bold text-dusk_blue-900 mb-2">{project.title}</h3>
        <p className="text-dusk_blue-900 dark:text-grey_olive-600 mb-4 leading-relaxed line-clamp-3">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, i) => (
            <span key={i} className="px-3 py-1 rounded-full text-sm bg-platinum-100 dark:bg-platinum-700 text-dusk_blue-900 dark:text-platinum-50">{tech}</span>
          ))}
        </div>

        <div className="flex gap-3 mt-auto flex gap-3">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1 inline-flex items-center justify-center space-x-2 py-2 rounded-lg" style={{background: 'var(--elevated-surface)', color: 'var(--text-primary)', border: '1px solid var(--glass-border)'}}>
              <CodeBracketIcon className="w-4 h-4" />
              <span>Code</span>
            </a>
          )}
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex-1 inline-flex items-center justify-center space-x-2 py-2 rounded-lg" style={{background: 'var(--accent)', color: '#fff'}}>
              <EyeIcon className="w-4 h-4" />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
