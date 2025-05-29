import { MedalIcon,NewspaperIcon } from "lucide-react";
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
      <p className="text-sm text-primary-600 mt-1 ml-8">
        <MedalIcon className="inline-block mr-2"/> {paper.awards.join(", ")}
      </p>
    )}
  </div>;
};
