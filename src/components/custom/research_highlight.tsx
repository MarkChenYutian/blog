import { AwardIcon } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

import UnstyledLink from '@/components/links/UnstyledLink';

interface ResearchHighlightProps {
  title: string;
  link: string;
  venue?: string;
  awards?: string[];
  image?: string;
  imageAlt?: string;
}

export default function ResearchHighlight(p: ResearchHighlightProps) {
  return (
    <UnstyledLink href={p.link} className='group flex items-start gap-4 py-3'>
      {p.image && (
        <Image
          src={p.image}
          alt={p.imageAlt ?? ''}
          width={256}
          height={160}
          className='w-28 sm:w-36 h-auto shrink-0 border border-neutral-200 grayscale transition-[filter] duration-200 group-hover:grayscale-0'
        />
      )}
      <div className='min-w-0'>
        <p className='text-base leading-snug transition-colors group-hover:text-primary-800'>{p.title}</p>
        {p.venue && (
          <span className='mt-1.5 inline-block font-mono text-xs uppercase tracking-wider text-neutral-500 border border-neutral-300 px-1.5 py-0.5'>
            {p.venue}
          </span>
        )}
        {p.awards && p.awards.map((award, i) => (
          <p key={i} className='mt-1 flex items-center gap-1.5 text-sm font-medium text-primary-600'>
            <AwardIcon size={14} strokeWidth={1.25} className='shrink-0' /> {award}
          </p>
        ))}
      </div>
    </UnstyledLink>
  );
}
