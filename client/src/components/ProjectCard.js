import React from 'react';
import { motion } from 'framer-motion';
import { CodeBracketIcon, GlobeAltIcon, EyeIcon } from '@heroicons/react/24/outline';

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.96 },
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
    transition: { duration: 0.25, ease: 'easeInOut' }
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
      whileHover={{ y: -6 }}
      className="group flex flex-col h-full bg-gray-800/80 dark:bg-gray-800 border border-gray-700 hover:border-gray-600 transition-all duration-300 rounded-xl overflow-hidden"
    >
      {/* Top image/emoji section */}
      <div
        className="relative h-48 flex items-center justify-center overflow-hidden"
        style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.02), transparent)' }}
      >
        <span className="text-6xl select-none">{project.image}</span>

        {project.featured && (
          <div className="absolute top-4 right-4 bg-gray-200 text-gray-900 px-2 py-1 rounded-full text-xs font-bold">
            Featured
          </div>
        )}

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 text-white transition"
              >
                <CodeBracketIcon className="w-5 h-5" />
              </a>
            )}

            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-blue-600 hover:bg-blue-500 text-white transition"
              >
                <GlobeAltIcon className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3
          id={`project-${project.id}-title`}
          className="text-xl font-bold text-dusk_blue-900 dark:text-white mb-2"
        >
          {project.title}
        </h3>

        <p className="text-dusk_blue-900 dark:text-gray-300 mb-4 leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 rounded-full text-sm bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-600"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-auto">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center space-x-2 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 text-white transition"
            >
              <CodeBracketIcon className="w-4 h-4" />
              <span>Code</span>
            </a>
          )}

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center space-x-2 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white transition"
            >
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
