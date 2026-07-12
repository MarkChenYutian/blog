import { ArrowRightIcon, CalendarIcon } from 'lucide-react';
import Link from 'next/link';

export interface PostPageProps {
  filename: string;
  title: string;
  content: string;
  date: Date;
  tags: string[];
};

const cropLength = 220;

const stripMarkdown = (md: string): string =>
  md
    .replace(/```[\s\S]*?```/g, '')
    .replace(/~~~[\s\S]*?~~~/g, '')
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/<[^>]*>/g, '')
    .replace(/\$\$[\s\S]*?\$\$/g, '')
    .replace(/\$([^$\n]+)\$/g, '$1')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/`([^`]+)`/g, '$1')
    .replace(/^#{1,6}\s+/gm, '')
    .replace(/(\*\*|__)(.*?)\1/g, '$2')
    .replace(/(\*|_)(.*?)\1/g, '$2')
    .replace(/~~(.*?)~~/g, '$1')
    .replace(/^>\s?/gm, '')
    .replace(/^[-*_]{3,}\s*$/gm, '')
    .replace(/^\s*[-*+]\s+/gm, '')
    .replace(/^\s*\d+\.\s+/gm, '')
    .replace(/\|/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

export default function PostEntry(content: PostPageProps) {
  const plain = stripMarkdown(content.content);
  const preview = plain.slice(0, cropLength) + (plain.length < cropLength ? "" : "...");

  return (
    <Link
      href={"/posts/" + content.filename}
      className="group flex flex-col h-full bg-white border border-slate-200 dark:bg-neutral-800/50 dark:border-neutral-700/60 p-4 hover:shadow-md hover:border-slate-300 dark:hover:border-neutral-600"
    >
      <h2 className="text-lg font-medium text-slate-800 dark:text-neutral-200 group-hover:text-primary-800 dark:group-hover:text-primary-300">
        {content.title}
      </h2>
      <p className="mt-1 font-mono text-xs text-slate-400 dark:text-neutral-500 flex items-center gap-1">
        <CalendarIcon size={12} /> {content.date.toLocaleDateString()}
      </p>

      {content.tags.length > 0 && (
        <div className="flex flex-wrap gap-1 mt-2">
          {content.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-xs uppercase tracking-wider text-slate-600 dark:text-neutral-400 border border-slate-300 dark:border-neutral-700 px-1.5 py-0.5"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      <p className="mt-3 text-sm text-slate-600 dark:text-neutral-400 line-clamp-4">{preview}</p>

      <div className="mt-auto pt-4 flex items-center text-sm text-primary-700 dark:text-primary-400">
        Read more <ArrowRightIcon size={14} className="ml-1" />
      </div>
    </Link>
  );
}
