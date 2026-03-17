import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownIcon, DocumentArrowDownIcon } from '@heroicons/react/24/outline';

const GitHubIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    {...props}
  >
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.79 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.06-.02-2.09-3.34.73-4.04-1.61-4.04-1.61-.54-1.37-1.32-1.73-1.32-1.73-1.08-.74.08-.73.08-.73 1.19.08 1.82 1.23 1.82 1.23 1.06 1.82 2.79 1.29 3.47.99.11-.77.42-1.29.76-1.59-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3.01-.4c1.02 0 2.06.14 3.02.4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.62-2.8 5.65-5.48 5.95.43.37.81 1.1.81 2.22 0 1.6-.02 2.89-.02 3.29 0 .32.22.7.83.58C20.57 21.79 24 17.3 24 12 24 5.37 18.63 0 12 0Z" />
  </svg>
);

const LinkedInIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    {...props}
  >
    <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.32 8.16H4.7V24H.32V8.16zM8.09 8.16h4.16v2.15h.06c.58-1.1 2-2.27 4.12-2.27 4.4 0 5.21 2.9 5.21 6.67V24h-4.38v-8.01c0-1.91-.03-4.36-2.66-4.36-2.66 0-3.07 2.08-3.07 4.22V24H8.09V8.16z" />
  </svg>
);

const Hero = ({ scrollToSection }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
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

  const handleDownloadResume = () => {
    // Replace with your actual resume file path
    const resumeUrl = '/Tej_Resume.pdf'; // Add your resume file to public folder
    const link = document.createElement('a');
    link.href = resumeUrl;
  link.download = 'Tej_Goti_Resume.pdf';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-screen flex items-start md:items-center justify-center pt-16 md:pt-0 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-dark-900 dark:to-dark-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary-300 dark:bg-primary-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-primary-400 dark:bg-primary-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-40 w-72 h-72 bg-primary-500 dark:bg-primary-600 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      <div className="container-custom section-padding relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16"
        >
          {/* Profile Image */}
          <motion.div
            variants={itemVariants}
            className="order-1 md:order-2 flex-1 flex justify-center md:justify-end mb-8 md:mb-0"
          >
            <motion.div
              whileHover={{ scale: 1.05, transition: { duration: 0.3, ease: 'easeOut' } }}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="relative w-[176px] h-[176px] md:w-[260px] md:h-[260px] rounded-full p-[3px] bg-gradient-to-tr from-cyan-400 via-sky-500 to-blue-600 shadow-[0_0_30px_rgba(0,170,255,0.35)]"
            >
              <div className="relative w-full h-full rounded-full overflow-hidden bg-dark-800 shadow-[0_0_25px_rgba(0,0,0,0.45)]">
                <img
                  src="/profile.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: '50% 30%' }}
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Text Content */}
          <div className="order-2 md:order-1 flex-1 text-center md:text-left">
            {/* Greeting */}
            <motion.div variants={itemVariants} className="mb-2 md:mb-4">
              <span className="text-primary-500 dark:text-primary-400 font-medium">Hello, I'm</span>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={itemVariants}
              className="text-3xl md:text-6xl font-bold text-primary mb-3 md:mb-6 leading-tight"
            >
              <span className="text-primary-500 dark:text-primary-400">Tej Goti</span>
            </motion.h1>

            {/* Title */}
            <motion.h2
              variants={itemVariants}
              className="text-lg md:text-2xl font-semibold text-secondary mb-4 md:mb-6"
            >
              MERN Stack Developer
            </motion.h2>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-sm md:text-base text-secondary mb-6 md:mb-10 max-w-2xl mx-auto md:mx-0 leading-relaxed"
            >
              Passionate full-stack developer specializing in modern web technologies.
              I create scalable, user-friendly applications with clean code and innovative solutions.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center mb-3"
            >
              <button
                onClick={handleDownloadResume}
                className="btn-primary inline-flex items-center space-x-2"
              >
                <DocumentArrowDownIcon className="w-5 h-5" />
                <span>Download Resume</span>
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="btn-secondary"
              >
                View Projects
              </button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center md:justify-start gap-4 mb-16"
            >
              <a
                href="https://github.com/tej789"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub profile"
                title="View my code"
                className="p-3 rounded-full bg-white dark:bg-white/10 text-primary-600 dark:text-white/90 hover:text-[#00aaff] shadow-md hover:shadow-[0_0_18px_rgba(0,170,255,0.8)] transform hover:scale-[1.18] transition duration-300 ease-out backdrop-blur-sm"
              >
                <GitHubIcon className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile"
                title="Connect with me"
                className="p-3 rounded-full bg-white dark:bg-white/10 text-primary-600 dark:text-white/90 hover:text-[#00aaff] shadow-md hover:shadow-[0_0_18px_rgba(0,170,255,0.8)] transform hover:scale-[1.18] transition duration-300 ease-out backdrop-blur-sm"
              >
                <LinkedInIcon className="w-6 h-6" />
              </a>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          variants={itemVariants}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            onClick={() => scrollToSection('about')}
            className="text-secondary hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-300"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDownIcon className="h-8 w-8" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 