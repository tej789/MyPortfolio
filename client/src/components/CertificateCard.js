import React from 'react';
import { DocumentArrowDownIcon } from '@heroicons/react/24/outline';

const CertificateCard = ({ cert, onView }) => {
  return (
    <article className="card p-6 flex flex-col justify-between" aria-labelledby={`cert-${cert.id}-title`}>
      <div>
        <h4 id={`cert-${cert.id}-title`} className="text-lg font-semibold text-primary mb-1">{cert.title}</h4>
        <p className="text-sm text-secondary mb-3">{cert.issuer} • {cert.date}</p>
        {cert.description && <p className="text-secondary text-sm mb-4">{cert.description}</p>}
      </div>

      <div className="mt-4 flex items-center gap-3">
        <button
          onClick={() => onView(cert)}
          className="btn-primary flex-1 flex items-center justify-center"
        >
          View
        </button>

        <a
          href={cert.file}
          download
          className="btn-secondary inline-flex items-center gap-2"
        >
          <DocumentArrowDownIcon className="w-5 h-5" />
          <span className="text-sm">Download</span>
        </a>
      </div>
    </article>
  );
};

export default CertificateCard;
