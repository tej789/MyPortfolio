import React from 'react';
import { DocumentArrowDownIcon } from '@heroicons/react/24/outline';

const CertificateCard = ({ cert, onView }) => {
  return (
    <article
      className="group relative flex flex-col justify-between h-full rounded-2xl border border-gray-200/80 dark:border-gray-800/80 bg-white/95 dark:bg-gray-900/95 shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 p-6 backdrop-blur"
      aria-labelledby={`cert-${cert.id}-title`}
    >
      <div>
        <div className="mb-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-gray-500 dark:text-gray-400">
          {cert.issuer}{cert.date && ` • ${cert.date}`}
        </div>

        <h4
          id={`cert-${cert.id}-title`}
          className="text-lg font-semibold text-dusk_blue-900 dark:text-white mb-2"
        >
          {cert.title}
        </h4>

        {cert.description && (
          <p className="text-sm text-dusk_blue-900/80 dark:text-gray-300 leading-relaxed mb-4 line-clamp-3">
            {cert.description}
          </p>
        )}
      </div>

      <div className="mt-4 flex items-center gap-3">
        <button
          onClick={() => onView(cert)}
          className="flex-1 inline-flex items-center justify-center rounded-lg bg-indigo-600 text-white py-2.5 text-sm font-medium shadow-sm hover:bg-indigo-500 transition-colors duration-200"
        >
          View
        </button>

        <a
          href={cert.file}
          download
          className="inline-flex items-center gap-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white/90 dark:bg-gray-900/80 px-4 py-2.5 text-sm font-medium text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
        >
          <DocumentArrowDownIcon className="w-5 h-5" />
          <span>Download</span>
        </a>
      </div>
    </article>
  );
};

export default CertificateCard;
