import { AwardIcon, NewspaperIcon } from "lucide-react";
import React from "react";

import UnderlineLink from "@/components/links/UnderlineLink";

interface PaperProps {
  title: string,
  link: string,
  awards?: string[],
};

export default function Paperlink(paper: PaperProps) {
  return <div>
    <UnderlineLink className='' href={paper.link}><NewspaperIcon className='mr-2' />{paper.title}</UnderlineLink>
    {paper.awards && paper.awards.length > 0 && (
      paper.awards.map(
        (award, index) => {
          return <p key={index} className="text-sm font-semibold text-primary-600 pl-2 ml-6 border-l-2">
            <AwardIcon className="inline-block text-xs mr-2 mb-0"/> {award}
          </p>;
        }
      )
    )}
  </div>;
};
