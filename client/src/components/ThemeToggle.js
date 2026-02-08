import React from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = ({ className = '' }) => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-pressed={isDarkMode}
      aria-label="Toggle theme"
      className={`theme-toggle ${isDarkMode ? 'theme-toggle-dark' : 'theme-toggle-light'} ${className}`}
    >
      <span className={`theme-toggle-thumb ${isDarkMode ? 'theme-toggle-thumb-dark' : 'theme-toggle-thumb-light'}`} />
      <span className="sr-only">Toggle theme</span>
      <div className="absolute left-0 right-0 pointer-events-none flex items-center justify-center h-6">
        {isDarkMode ? (
          <SunIcon className="w-4 h-4 text-yellow-400" />
        ) : (
          <MoonIcon className="w-4 h-4 text-gray-600" />
        )}
      </div>
    </button>
  );
};

export default ThemeToggle;
