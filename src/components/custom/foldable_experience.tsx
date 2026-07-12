'use client';

import { ChevronDownIcon } from 'lucide-react';
import React from 'react';

/**
 * A ruled divider with a mono label that toggles the visibility of the
 * content below it (used for the "Earlier" tier of the experience list).
 */
export default function FoldableExperience({ label, children }: { label: string, children: React.ReactNode }) {
  const [open, setOpen] = React.useState(false);

  return (
    <div>
      <button
        type='button'
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className='group mt-8 flex w-full items-center gap-2 border-t border-neutral-200 pt-3 text-left'
      >
        <span className='mono-label text-neutral-400 transition-colors group-hover:text-primary-800'>
          {label}
        </span>
        <ChevronDownIcon
          size={14}
          className={`text-neutral-400 transition-transform duration-300 group-hover:text-primary-800 motion-reduce:transition-none ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`grid transition-[grid-template-rows] duration-300 motion-reduce:transition-none ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
      >
        <div className='overflow-hidden'>{children}</div>
      </div>
    </div>
  );
}
