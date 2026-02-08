import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/24/outline';

const backdrop = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

const modal = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

const Modal = ({ isOpen, onClose, title, children }) => {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={backdrop}
        >
          <motion.div
            className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden
          />

          <motion.div
            className="relative max-w-4xl w-full mx-4 sm:mx-6"
            variants={modal}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <div className="bg-surface dark:bg-surface p-6 rounded-2xl border" style={{borderColor: 'var(--glass-border)'}}>
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-lg font-semibold text-primary">{title}</h3>
                <button onClick={onClose} aria-label="Close modal" className="p-2 rounded-md hover:bg-opacity-10 transition-colors">
                  <XMarkIcon className="w-5 h-5 text-secondary" />
                </button>
              </div>

              <div className="max-h-[70vh] overflow-auto">{children}</div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
