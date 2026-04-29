"use client"
import matter from 'gray-matter';
import { ArrowLeftIcon, CalendarIcon, TagIcon } from 'lucide-react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeKatex from 'rehype-katex';
import rehypeRaw from 'rehype-raw';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import remarkParse from 'remark-parse';
import { unified } from 'unified';
import { visit } from 'unist-util-visit';

import CursorField from '@/components/custom/cursor_field';
import Footer from '@/components/Footer';
import useActiveHeading, { TOCEntry } from '@/components/markdown_extension/interact';
import NavigationBar from '@/components/Navigation';

interface MarkdownRendererProps {
  content: string;
}

const normalizeBlockMath = (md: string): string =>
  md
    .replace(/\$\$(?=\S)/g, '$$\n')
    .replace(/(?<=\S)\$\$/g, '\n$$');

const MarkdownRenderer: React.FC<MarkdownRendererProps> = (raw_data) => {
  const [toc, setToc] = useState<TOCEntry[]>([]);
  const { data, content: rawContent } = matter(raw_data.content);
  const content = normalizeBlockMath(rawContent);
  const post_title = data.title || 'Default Title';
  const post_date: Date | undefined = data.date ? new Date(data.date) : undefined;
  const post_tags: string[] = Array.isArray(data.tags) ? data.tags : [];

  useEffect(() => {
    const extractTOC = async () => {
      const processor = unified().use(remarkParse);
      const tree = processor.parse(content);

      const tocEntries: TOCEntry[] = [];
      visit(tree, 'heading', (node: any) => {
        const title = node.children.map((child: any) => child.value).join('');
        const level = node.depth;
        const id = title
          .toLowerCase()
          .replace(/\s+/g, '-')
          .replace(/[^\w-]/g, '');
        tocEntries.push({ title, level, id });
      });

      setToc(tocEntries);
    };

    extractTOC();
  }, [content]);

  const activeId = useActiveHeading(toc);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="header-band relative overflow-hidden bg-primary-800 text-neutral-100 h-80 flex items-center justify-center px-4">
        <CursorField color='white' />
        <Link
          href="/posts"
          className="absolute z-20 top-4 left-4 flex items-center gap-2 px-3 py-2 text-sm font-medium text-white bg-white/15 border border-white/40 backdrop-blur-[2px] hover:bg-white/25 hover:border-white/60 transition"
        >
          <ArrowLeftIcon size={16} />
          All Posts
        </Link>
        <div className="relative z-10 flex flex-col items-center gap-4 text-center max-w-4xl">
          <h1 className="text-5xl font-normal">{post_title}</h1>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-neutral-200">
            {post_date && (
              <span className="flex items-center gap-1.5">
                <CalendarIcon size={14} />
                {post_date.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
              </span>
            )}
            {post_tags.length > 0 && (
              <span className="flex items-center gap-2 flex-wrap justify-center">
                <TagIcon size={14} />
                {post_tags.map((tag) => (
                  <span key={tag} className="px-2 py-0.5 bg-white/15 backdrop-blur-[2px] text-xs">
                    {tag}
                  </span>
                ))}
              </span>
            )}
          </div>
        </div>
      </header>
      <div className='bg-slate-50'>
        <NavigationBar />
        <div className="flex flex-1 max-w-screen-xl mx-auto min-h-screen">
          <aside className="hidden lg:block w-80 p-4 sticky top-12 h-screen overflow-y-auto">
            <nav>
              <h3 className='pb-4 text-primary-900'>Table of Content</h3>
              {toc.length == 0 ?
                <span className='italic text-neutral-500'>No headings in this page</span> :
                <ul className="text-lg">
                  {toc.map((entry, index) => {
                    const is_active: boolean = activeId === entry.id;
                    return (
                      <a href={`#${entry.id}`} key={index}><li
                        style={{ paddingLeft: `${(entry.level * 15) - (is_active ? 4 : 0)}px` }}
                        className={
                          `${is_active ? 'border-l-4 text-primary-700' : 'text-slate-400'} font-normal
                       border-primary-800 hover:bg-primary-50 hover:text-primary-700`
                        }
                      >
                        {entry.title}
                      </li></a>);
                  })}
                </ul>}
            </nav>
          </aside>

          <main className="flex-1 p-4 w-full">
            <article className='react-md-render'>
              <ReactMarkdown
                remarkPlugins={[remarkGfm, remarkMath]}
                rehypePlugins={[
                  rehypeKatex,
                  rehypeRaw,
                  rehypeSlug,
                  [rehypeAutolinkHeadings, { behavior: 'after' }],
                ]}
                components={{
                  a: ({ href, children, ...props }) => {
                    const isExternal = href !== undefined && !href.startsWith('/') && !href.startsWith('#');
                    return (
                      <a
                        href={href}
                        {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                        {...props}
                      >
                        {children}
                      </a>
                    );
                  },
                }}
              >
                {content}
              </ReactMarkdown>
            </article>
          </main>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default MarkdownRenderer;
