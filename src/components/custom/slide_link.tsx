'use client';

import { PresentationIcon } from "lucide-react";
import React, { useState } from "react";

import PdfModal from "@/components/custom/pdf_modal";

interface SlideProps {
  title: string,
  link: string,
};

export default function SlideLink(slide: SlideProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="animated-underline inline-flex items-center font-medium border-current border-b border-dotted hover:border-transparent focus:outline-none focus-visible:ring focus-visible:ring-primary-500"
      >
        <PresentationIcon className="mr-2" strokeWidth={1.25} />
        {slide.title}
      </button>
      <PdfModal
        isOpen={open}
        onClose={() => setOpen(false)}
        title={slide.title}
        link={slide.link}
      />
    </>
  );
};
