import { StaticImageData } from "next/image";
import Image from "next/image";
import React from "react";

import UnderlineLink from "@/components/links/UnderlineLink";


interface ExperienceProps {
  icon: StaticImageData,
  title: string,
  link: string,
  place: string,
  from_date: string,
  to_date: string,
  desc?: React.JSX.Element,
  items: React.JSX.Element[],
  compact?: boolean,
  collab?: { name: string, link?: string },
};

function CollabNote({ collab }: { collab: NonNullable<ExperienceProps['collab']> }) {
  return (
    <p className='mono-label text-neutral-400 dark:text-neutral-500 mt-0.5'>
      with{' '}
      {collab.link
        ? <UnderlineLink href={collab.link}>{collab.name}</UnderlineLink>
        : collab.name}
    </p>
  );
}

export default function ExperienceHead(exp: ExperienceProps) {
  if (exp.compact) {
    return <div className="mt-5">
      <div className="flex items-center flex-wrap gap-x-3 gap-y-1">
        <Image alt={exp.title} src={exp.icon} width={40} height={40} />
        <div className="leading-snug">
          <p className="text-base font-medium">{exp.title}</p>
          <UnderlineLink href={exp.link} className="text-sm text-neutral-500 dark:text-neutral-400">{exp.place}</UnderlineLink>
          {exp.collab && <CollabNote collab={exp.collab} />}
        </div>
        <div className="flex-grow" />
        <span className="font-mono text-xs text-neutral-400 dark:text-neutral-500 whitespace-nowrap">{exp.from_date} — {exp.to_date}</span>
      </div>
      <div className="ml-5 border-l-2 border-neutral-200 dark:border-neutral-800 pl-4 sm:pl-6 pt-2 pb-1 space-y-2 text-sm text-neutral-500 dark:text-neutral-400">
        {exp.desc !== undefined && (
          <div className="leading-relaxed max-w-3xl">{exp.desc}</div>
        )}
        {exp.items.length > 0 && (
          <ol className="space-y-1">
            {exp.items.map((elem, index) => <li key={index}>{elem}</li>)}
          </ol>
        )}
      </div>
    </div>;
  }

  return <div className="mt-8 first:mt-3">
    <div className="flex items-center flex-wrap gap-x-4 gap-y-1">
      <Image alt={exp.title} src={exp.icon} width={64} height={64} />
      <div className="leading-snug">
        <p className="text-xl font-medium">{exp.title}</p>
        <UnderlineLink href={exp.link} className="text-base text-neutral-500 dark:text-neutral-400">{exp.place}</UnderlineLink>
        {exp.collab && <CollabNote collab={exp.collab} />}
      </div>
      <div className="flex-grow" />
      <span className="font-mono text-sm text-neutral-500 dark:text-neutral-400 whitespace-nowrap">{exp.from_date} — {exp.to_date}</span>
    </div>

    {/* Rail aligned with the icon's center line */}
    <div className="ml-8 border-l-2 border-neutral-200 dark:border-neutral-800 pl-4 sm:pl-8 pt-3 pb-1 space-y-4">
      {exp.desc !== undefined && (
        <div className="text-base leading-relaxed text-neutral-700 dark:text-neutral-300 max-w-3xl">{exp.desc}</div>
      )}
      {exp.items.length > 0 && (
        <div>
          <p className="mono-label text-neutral-400 dark:text-neutral-500 mb-2">Papers</p>
          <ol className="space-y-2 text-base">
            {exp.items.map((elem, index) => <li key={index}>{elem}</li>)}
          </ol>
        </div>
      )}
    </div>
  </div>
};
