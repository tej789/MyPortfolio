import React from 'react';
import { motion } from 'framer-motion';

const FilterButton = ({ id, label, active, onClick }) => {
  return (
    <motion.button
      whileTap={{ scale: 0.97 }}
      onClick={() => onClick(id)}
      role="tab"
      aria-selected={active}
      className="px-5 py-2 rounded-full font-medium focus:outline-none focus:ring-2 focus:ring-offset-2"
      style={{
        background: active ? 'var(--accent)' : 'transparent',
        color: active ? '#fff' : 'var(--text-primary)',
        border: active ? 'none' : '1px solid var(--glass-border)',
        boxShadow: active ? '0 6px 18px rgba(0,0,0,0.08)' : 'none'
      }}
    >
      {label}
    </motion.button>
  );
};

export default FilterButton;
