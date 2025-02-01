"use client"
import matter from 'gray-matter';
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

import Footer from '@/components/Footer';
import useActiveHeading, { TOCEntry } from '@/components/markdown_extension/interact';
import NavigationBar from '@/components/Navigation';

import HeroImage from '~/images/AntelopeCanyon.jpg';

interface MarkdownRendererProps {
  content: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = (raw_data) => {
  const [toc, setToc] = useState<TOCEntry[]>([]);
  const { data, content } = matter(raw_data.content);
  const post_title = data.title || 'Default Title';

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
      <div className="absolute inset-0 bg-cover bg-center blur-sm -z-10 trans" style={{ backgroundImage: `url(${HeroImage.src})` }} />
      <header className="bg-cover bg-center h-80 flex items-center justify-center bg-white bg-opacity-70 p-4">
        <h1 className="text-primary-900 text-5xl font-bold">{post_title}</h1>
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
                    const is_active: boolean = activeId.includes(entry.id);
                    return (
                      <a href={`#${entry.id}`} key={index}><li
                        style={{ paddingLeft: `${(entry.level * 15) - (is_active ? 4 : 0)}px` }}
                        className={
                          `${is_active ? 'border-l-4 text-primary-700 font-bold' : 'text-primary-400 font-normal'} 
                       border-primary-800 hover:bg-primary-50 hover:text-primary-700 hover:font-bold`
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
                  rehypeRaw,
                  rehypeSlug,
                  [rehypeAutolinkHeadings, { behavior: 'after' }],
                  rehypeKatex,
                ]}
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
