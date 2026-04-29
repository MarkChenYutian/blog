import { ArrowRightIcon, AwardIcon, FileTextIcon, GlobeIcon } from "lucide-react";
import React from "react";
import { RiGithubLine } from "react-icons/ri";

import GithubStars from "@/components/custom/github_stars";
import { withValidIcon } from "@/components/icons/withValidIcon";

const GithubIcon = withValidIcon(RiGithubLine);

export interface PublicationEntryProps {
  title: string;
  authors: string[];
  venue: string;
  arxiv?: string;
  homepage?: string;
  github?: string;
  awards?: string[];
  index?: number;
}

const ME = 'Yutian Chen';

const linkClass =
  "group inline-flex items-center gap-2 px-3 py-1.5 text-sm border border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-slate-400 transition-colors";

const arrowClass = "ml-1 transition-transform duration-200 group-hover:translate-x-1";

export default function PublicationEntry({
  index, title, authors, venue, arxiv, homepage, github, awards,
}: PublicationEntryProps) {
  return (
    <article className="flex gap-4 border-b border-slate-200 py-5">
      {index !== undefined && (
        <span className="text-slate-400 text-sm font-medium pt-1 w-10 text-right shrink-0 tabular-nums">
          [{index}]
        </span>
      )}
      <div className="flex-1 min-w-0">
        <div className="flex items-baseline justify-between gap-4 flex-wrap">
          <h3 className="text-lg font-semibold flex-1 min-w-[16rem]">{title}</h3>
          <span className="text-sm italic text-slate-500 whitespace-nowrap">{venue}</span>
        </div>
        <p className="text-sm text-slate-600 mt-2">
          {authors.map((raw, i) => {
            const equalContrib = raw.endsWith('*');
            const name = raw.replace(/\*$/, '');
            const isMe = name === ME;
            return (
              <React.Fragment key={i}>
                <span className={isMe ? 'font-bold text-slate-800' : ''}>{name}</span>
                {equalContrib && <sup className="text-slate-400 ml-0.5">★</sup>}
                {i < authors.length - 1 ? ', ' : ''}
              </React.Fragment>
            );
          })}
        </p>

        {awards && awards.length > 0 && (
          <ul className="mt-2 ml-2 border-l-2 border-primary-700 pl-3 space-y-1">
            {awards.map((a, i) => (
              <li key={i} className="flex items-center gap-1.5 text-sm text-primary-700 font-semibold">
                <AwardIcon size={14} strokeWidth={1.5} /> {a}
              </li>
            ))}
          </ul>
        )}

        {(arxiv || homepage || github) && (
          <div className="mt-3 flex flex-wrap gap-2">
            {arxiv && (
              <a href={arxiv} target="_blank" rel="noopener noreferrer" className={linkClass}>
                <FileTextIcon size={16} strokeWidth={1.5} />
                arXiv
                <ArrowRightIcon size={16} strokeWidth={1.5} className={arrowClass} />
              </a>
            )}
            {homepage && (
              <a href={homepage} target="_blank" rel="noopener noreferrer" className={linkClass}>
                <GlobeIcon size={16} strokeWidth={1.5} />
                Homepage
                <ArrowRightIcon size={16} strokeWidth={1.5} className={arrowClass} />
              </a>
            )}
            {github && (
              <a href={github} target="_blank" rel="noopener noreferrer" className={linkClass}>
                <GithubIcon size={16} />
                GitHub
                <GithubStars link={github} />
                <ArrowRightIcon size={16} strokeWidth={1.5} className={arrowClass} />
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
