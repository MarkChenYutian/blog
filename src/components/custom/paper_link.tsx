import { AwardIcon, FileTextIcon, NewspaperIcon } from "lucide-react";
import React from "react";

import SlideLink from "@/components/custom/slide_link";
import UnderlineLink from "@/components/links/UnderlineLink";

interface ChildLink {
  title: string,
  link: string,
};

interface PaperProps {
  title: string,
  link: string,
  venue?: string,
  awards?: string[],
  slides?: ChildLink[],
  media?: ChildLink[],
};

export default function Paperlink(paper: PaperProps) {
  const hasChildren = (paper.awards && paper.awards.length > 0)
    || (paper.slides && paper.slides.length > 0)
    || (paper.media && paper.media.length > 0);

  return <div>
    <UnderlineLink className='' href={paper.link}><FileTextIcon className='mr-2' strokeWidth={1.25} />{paper.title}</UnderlineLink>
    {paper.venue && (
      <span className="ml-2 text-sm italic text-neutral-500">· {paper.venue}</span>
    )}
    {hasChildren && (
      <div className="ml-6 border-l-2 pl-2 mt-1 space-y-0.5">
        {paper.awards && paper.awards.map((award, index) => (
          <p key={`award-${index}`} className="text-sm font-semibold text-primary-600">
            <AwardIcon className="inline-block text-xs mr-2 mb-0" strokeWidth={1.0} /> {award}
          </p>
        ))}
        {paper.slides && paper.slides.map((slide, index) => (
          <p key={`slide-${index}`} className="text-sm">
            <SlideLink title={slide.title} link={slide.link} />
          </p>
        ))}
        {paper.media && paper.media.map((m, index) => (
          <p key={`media-${index}`} className="text-sm">
            <UnderlineLink href={m.link}>
              <NewspaperIcon className="mr-2" strokeWidth={1.25} />{m.title}
            </UnderlineLink>
          </p>
        ))}
      </div>
    )}
  </div>;
};
