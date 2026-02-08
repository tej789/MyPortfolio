import React from 'react';
import { motion } from 'framer-motion';
import { EnvelopeIcon, ArrowUpIcon, PhoneIcon } from '@heroicons/react/24/outline';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="card relative">

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.96 }}
        className="absolute top-4 left-1/2 -translate-x-1/2 accent-btn-circle"
      >
        <ArrowUpIcon className="w-6 h-6" />
      </motion.button>

      <div className="container-custom py-16">
        <div className="grid md:grid-cols-3 gap-8">

          {/* Brand Section */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-primary-400 mb-4">
              Tej Goti
            </h3>

            <p className="text-secondary mb-6 leading-relaxed">
              MERN Stack Developer passionate about building scalable web
              applications and transforming ideas into clean, efficient code.
            </p>

            {/* Social Icons */}
            <div className="flex justify-center md:justify-start space-x-4">

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/tej-goti-1470b9288"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-circle"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286z"/>
                </svg>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/tej789"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-circle"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 .5C5.73.5.5 5.73.5 12A11.5 11.5 0 008.29 22.94c.6.11.82-.26.82-.58v-2.17c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.83 1.23 1.83 1.23 1.08 1.85 2.84 1.32 3.53 1.01.11-.78.42-1.32.76-1.62-2.66-.3-5.47-1.33-5.47-5.91 0-1.31.47-2.38 1.24-3.22-.13-.31-.54-1.56.12-3.25 0 0 1.01-.32 3.3 1.23a11.43 11.43 0 016 0c2.28-1.55 3.29-1.23 3.29-1.23.67 1.69.26 2.94.13 3.25.77.84 1.23 1.91 1.23 3.22 0 4.59-2.81 5.6-5.49 5.9.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.83.58A11.5 11.5 0 0023.5 12C23.5 5.73 18.27.5 12 .5z"/>
                </svg>
              </a>

              {/* Email */}
              <a
  href="mailto:gotitej2005@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="icon-circle"
>

                <EnvelopeIcon className="w-5 h-5" />
              </a>

            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>

            <ul className="space-y-3">
              {['home', 'about', 'skills', 'projects', 'education', 'contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link}`}
                    className="text-secondary hover:text-primary-400 transition"
                  >
                    {link.charAt(0).toUpperCase() + link.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold text-white mb-6">Contact Info</h4>

            <div className="space-y-4">

              <div className="flex items-center justify-center md:justify-start space-x-3">
                <EnvelopeIcon className="w-5 h-5 text-primary-400" />
                <a href="mailto:gotitej2005@gmail.com" className="text-secondary hover:text-primary-400 transition">
                  gotitej2005@gmail.com
                </a>
              </div>

              <div className="flex items-center justify-center md:justify-start space-x-3">
                <PhoneIcon className="w-5 h-5 text-primary-400" />
                <span className="text-secondary">+91 8160515463</span>
              </div>

              <div className="flex items-center justify-center md:justify-start space-x-3">
                <a href="https://github.com/tej789" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-primary-400 transition">
                  github.com/tej789
                </a>
              </div>

              <div className="flex items-center justify-center md:justify-start space-x-3">
                <a
                  href="https://www.linkedin.com/in/tej-goti-1470b9288"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:text-primary-400 transition"
                >
                  LinkedIn Profile
                </a>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-secondary text-sm">
              © {currentYear} Tej Goti. All rights reserved.
            </p>

            <p className="text-secondary text-sm">
              Designed & Developed by Tej Goti | MERN Stack Developer
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
