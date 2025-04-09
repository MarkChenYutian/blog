// app/[slug]/page.tsx
import fs from 'fs';
import path from 'path';

import MarkdownRenderer from '@/components/Markdown';


interface Params {
  slug: string;
}


export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), 'content/posts');
  const filenames = fs.readdirSync(postsDirectory);
  return filenames.filter((filename) => 
    !filename.startsWith('_')
  ).map((filename) => ({
    slug: filename.replace(/\.md$/, ''),
  }));
}

export default async function PostPage({ params }: { params: Params }) {
  const { slug } = params;
  const postsDirectory = path.join(process.cwd(), 'content/posts');
  const filePath = path.join(postsDirectory, `${slug}.md`);
  const content = fs.readFileSync(filePath, 'utf8');

  return (
    <article className='rendered-markdown'>
      <MarkdownRenderer content={content} />
    </article>
  );
}
