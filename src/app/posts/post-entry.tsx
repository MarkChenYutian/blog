import { ArrowRightIcon, CalendarIcon, TagIcon } from 'lucide-react';

import ButtonLink from '@/components/links/ButtonLink';

export interface PostPageProps {
  filename: string;
  title: string;
  content: string;
  date: Date;
  tags: string[];
};

const cropLength = 400;



export default function PostEntry(content: PostPageProps) {
  return (
    <div className='p-4 text-slate-700'>
      <h2 className='font-semibold'>{content.title}</h2>
      <p className='text-slate-400'>
        <CalendarIcon size={16} className='inline-block mb-1' /> {content.date.toLocaleDateString()}
        <TagIcon size={16} className='inline-block mb-1 ml-4' /> {content.tags.join(", ")}
      </p>
      <p>{content.content.slice(undefined, cropLength) + (content.content.length < cropLength ? "" : "...")}</p>
      <div className='flex justify-end pt-4'>
        <ButtonLink href={"/posts/" + content.filename} variant='light' size='base' rightIcon={ArrowRightIcon}>View More</ButtonLink>
      </div>
    </div>
  );
}
