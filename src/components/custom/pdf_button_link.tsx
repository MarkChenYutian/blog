'use client';

import React, { useState } from "react";

import PdfModal from "@/components/custom/pdf_modal";

interface PdfButtonLinkProps {
  link: string;
  modalTitle?: string;
  children: React.ReactNode;
}

export default function PdfButtonLink({ link, modalTitle, children }: PdfButtonLinkProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <span
        className="contents"
        onClickCapture={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setOpen(true);
        }}
      >
        {children}
      </span>
      <PdfModal
        isOpen={open}
        onClose={() => setOpen(false)}
        title={modalTitle ?? link}
        link={link}
      />
    </>
  );
}
