import fs from 'fs';
import matter from 'gray-matter';
import { Metadata } from 'next';
import Image from 'next/image';
import path from 'path';

import Footer from '@/components/Footer';
import NavigationBar from '@/components/Navigation';

import AllPosts from '@/app/posts/page-search';
import { PostPageProps } from '@/app/posts/post-entry';

import AvatarImage from '~/images/Yutian2025_Squared.jpg';

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
  const posts = fs.readdirSync(postsDirectory).map(
    fn => parsePostContent(path.join(postsDirectory, fn))
  ).sort(
    (a, b) => b.date.getTime() - a.date.getTime()
  );

  return (
    <div className='min-h-screen'>
      <NavigationBar />
      <div className='px-4'>
        <div className='relative flex flex-wrap flex-row items-center justify-center w-full'>
          <Image alt="Yutian Chen portrait" src={AvatarImage.src} width={64} height={64} className='rounded-full m-4 hidden md:block' />
          <h1 className='text-2xl md:text-3xl font-extralight py-2'>Yutian Chen's <span className='font-semibold'>Posts</span></h1>
          <div className='flex-grow' />
        </div>
        <AllPosts posts={posts} />
      </div>
      <Footer />
    </div>
  );
}
