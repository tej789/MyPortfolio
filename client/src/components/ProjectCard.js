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
        className="group flex flex-col h-full bg-white/95 dark:bg-gray-900/95 border border-gray-200/80 dark:border-gray-800/80 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 backdrop-blur"
        >

      <div
        className="relative h-40 flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-500/10 via-sky-500/5 to-transparent dark:from-indigo-500/20 dark:via-sky-500/10 dark:to-transparent"
      >
        <div className="relative flex items-center justify-center w-16 h-16 rounded-2xl bg-white/80 dark:bg-gray-900/80 shadow-md ring-1 ring-gray-200/80 dark:ring-gray-700/80">
          <span className="text-4xl select-none">{project.image}</span>
        </div>
        {project.featured && (
          <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-wide uppercase bg-amber-100 text-amber-900 dark:bg-amber-500/15 dark:text-amber-300 border border-amber-200/80 dark:border-amber-400/30">
            Featured
          </div>
        )}

        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/45 transition-all duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-3">
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer"
              className="icon-button p-2 rounded-full bg-white/95 text-gray-900 shadow-sm hover:bg-gray-100 transition-colors duration-200">
                <CodeBracketIcon className="w-5 h-5" />
              </a>
            )}
            {project.live && (
              <a href={project.live} target="_blank" rel="noopener noreferrer" className="icon-button p-2 rounded-full bg-indigo-600 text-white shadow-sm hover:bg-indigo-500 transition-colors duration-200">
                <GlobeAltIcon className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-1">
      {project.categories && (
        <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-gray-500 dark:text-gray-400">
          {project.categories.join(' • ')}
        </p>
      )}
      <h3
  id={`project-${project.id}-title`}
  className="text-xl font-semibold text-dusk_blue-900 dark:text-white mb-2"
>
  {project.title}
</h3>
<p className="text-sm text-dusk_blue-900/80 dark:text-gray-300 mb-5 leading-relaxed line-clamp-3">
  {project.description}
   </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, i) => (
            <span key={i}className="px-3 py-1 rounded-full text-xs bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 border border-gray-200 dark:border-gray-700 tracking-wide">
{tech}</span>
          ))}
        </div>

        <div className="flex gap-3 mt-auto">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1 inline-flex items-center justify-center space-x-2 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white/90 dark:bg-gray-900/80 text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200">
              <CodeBracketIcon className="w-4 h-4" />
              <span>Code</span>
            </a>
          )}
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex-1 inline-flex items-center justify-center space-x-2 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-500 shadow-sm transition-colors duration-200">
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
