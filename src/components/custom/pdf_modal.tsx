'use client';

import { XIcon } from "lucide-react";
import React, { useEffect } from "react";

interface PdfModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  link: string;
};

export default function PdfModal({ isOpen, onClose, title, link }: PdfModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKey);

    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener('keydown', onKey);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <div
        className="relative w-full max-w-6xl h-[90vh] bg-white shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between bg-primary-800 text-white pl-4">
          <h2 className="text-base font-medium truncate">{title}</h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="flex items-center justify-center w-10 h-10 bg-primary-800 hover:bg-primary-700 transition-colors"
          >
            <XIcon size={20} className="text-white" strokeWidth={2} />
          </button>
        </div>
        <iframe
          src={link}
          title={title}
          className="flex-1 w-full border-0"
        />
      </div>
    </div>
  );
}
