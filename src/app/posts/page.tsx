import fs from 'fs';
import matter from 'gray-matter';
import { Metadata } from 'next';
import path from 'path';

import PageHeader from '@/components/custom/page_header';
import Footer from '@/components/Footer';
import NavigationBar from '@/components/Navigation';

import AllPosts from '@/app/posts/page-search';
import { PostPageProps } from '@/app/posts/post-entry';

export const metadata: Metadata = {
  title: 'Posts',
};

function parsePostContent(filepath: string): PostPageProps {
  const fileContent = fs.readFileSync(filepath, 'utf8');
  const { data, content } = matter(fileContent);

  return {
    filename: path.basename(filepath, '.md'),
    title: data.title,
    content: content,
    date: data.date,
    tags: data.tags ? data.tags : [],
  };
}

export default async function PostPage() {
  const postsDirectory = path.join(process.cwd(), 'content/posts');
  const posts = fs.readdirSync(postsDirectory).filter((filename) => 
    !filename.startsWith('_')
  ).map(
    fn => parsePostContent(path.join(postsDirectory, fn))
  ).sort(
    (a, b) => b.date.getTime() - a.date.getTime()
  );

  return (
    <div className='min-h-screen'>
      <PageHeader title='Posts' />
      <NavigationBar />
      <div className='px-4'>
        <AllPosts posts={posts} />
      </div>
      <Footer />
    </div>
  );
}
