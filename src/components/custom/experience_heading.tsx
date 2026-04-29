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
  items: React.JSX.Element[]
};

export default function ExperienceHead(exp: ExperienceProps) {
  return <div className="mt-6">
    <div className="flex items-center flex-wrap gap-x-4 gap-y-1">
      <Image alt={exp.title} src={exp.icon} width={64} height={64} />
      <div className="leading-tight">
        <p className="text-2xl font-semibold">{exp.title}</p>
        <UnderlineLink href={exp.link} className="font-normal">{exp.place}</UnderlineLink>
      </div>
      <div className="flex-grow" />
      <span className="font-light text-neutral-500">{exp.from_date} – {exp.to_date}</span>
    </div>
    <ol className="ml-[30px] border-l-4 pl-4 mt-3 mb-2 space-y-1">
      {exp.desc !== undefined && <div className="mb-3">{exp.desc}</div>}
      {
        exp.items.map((elem, index) => <li key={index}>{elem}</li>)
      }
    </ol>
  </div>
};
