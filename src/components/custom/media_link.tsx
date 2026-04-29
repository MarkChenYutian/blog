import { NewspaperIcon } from "lucide-react";
import React from "react";

import UnderlineLink from "@/components/links/UnderlineLink";

interface MediaProps {
  title: string,
  link: string,
};

export default function MediaLink(media: MediaProps) {
  return <UnderlineLink href={media.link}>
    <NewspaperIcon className='mr-2' strokeWidth={1.25} />
    {media.title}
  </UnderlineLink>;
};
