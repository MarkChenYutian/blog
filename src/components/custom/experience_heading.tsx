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
  return <div className="mt-12">
    <div className="flex content-between items-start flex-wrap">
      <Image alt={exp.title} src={exp.icon} width={96} height={96} />
      <div className="ml-4">
        <p className="text-2xl font-semibold">{exp.title}</p>
        <UnderlineLink href={exp.link} className="font-normal">{exp.place}</UnderlineLink>
      </div>
      <div className="flex-grow" />
      <span className="font-light">{exp.from_date}-{exp.to_date}</span>
    </div>
    <ol className="ml-4 border-l-4 pl-4 my-4">
      {exp.desc === undefined ? null : <div className="mb-8">{exp.desc}</div>}
      {
        exp.items.map((elem, index) => <li key={index} className="my-1">{elem}</li>)
      }
    </ol>
  </div>
};
