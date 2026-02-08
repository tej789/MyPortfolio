import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Modal from './Modal';
import CertificateCard from './CertificateCard';

const Certificates = () => {
  const [selected, setSelected] = useState(null);

  const certificates = [
    {
      id: 'cert-backend',
      title: 'Backend Development Certification',
      issuer: 'Coursera',
      date: '2025',
      file: '/certificates/backend_certi.pdf',
      type: 'pdf',
      description:
        'Backend development concepts including APIs, databases, and server-side programming.'
    },
    {
      id: 'cert-frontend',
      title: 'Frontend Development Certification',
      issuer: 'Coursera',
      date: '2025',
      file: '/certificates/frontend_certi.pdf',
      type: 'pdf',
      description:
        'Frontend development using modern web technologies including React and responsive UI design.'
    },
    {
      id: 'cert-java',
      title: 'Java Programming Certification',
      issuer: 'Course Certification',
      date: '2026',
      file: '/certificates/JAVA_certi.pdf',
      type: 'pdf',
      description:
        'Core Java programming including OOP concepts, collections, and application development.'
    },
    {
      id: 'cert-dsa',
      title: 'Data Structures and Algorithms (NPTEL)',
      issuer: 'NPTEL',
      date: '2026',
      file: '/certificates/NPTEL_DSA_certi.pdf',
      type: 'pdf',
      description:
        'Fundamentals of data structures and algorithms including sorting, trees, graphs, and complexity analysis.'
    }
  ];
  
  const handleView = (cert) => setSelected(cert);
  const handleClose = () => setSelected(null);

  return (
    <section id="certificates" className="section-padding pt-0">
      <div className="container-custom">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-3">Certificates & Credentials</h2>
          <p className="text-secondary max-w-2xl mx-auto">Verified certificates demonstrating professional training and technical competency. Click to view or download.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map(cert => (
            <CertificateCard key={cert.id} cert={cert} onView={handleView} />
          ))}
        </div>
      </div>

      <Modal isOpen={!!selected} onClose={handleClose} title={selected ? `${selected.title} — ${selected.issuer}` : ''}>
        {selected && selected.type === 'pdf' && (
          <div className="w-full h-[70vh]">
            <iframe src={selected.file} title={selected.title} className="w-full h-full border" style={{borderColor: 'var(--glass-border)'}} />
          </div>
        )}
        {selected && selected.type !== 'pdf' && (
          <div className="w-full h-[70vh] flex items-center justify-center">
            <img src={selected.file} alt={selected.title} className="max-h-full max-w-full object-contain" />
          </div>
        )}
      </Modal>
    </section>
  );
};

export default Certificates;
