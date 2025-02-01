import { NewspaperIcon } from "lucide-react";
import React from "react";

import UnderlineLink from "@/components/links/UnderlineLink";

interface PaperProps {
  title: string,
  link: string
};

export default function Paperlink(paper: PaperProps) {
  return <UnderlineLink className='' href={paper.link}><NewspaperIcon className='mr-2' />{paper.title}</UnderlineLink>;
};
