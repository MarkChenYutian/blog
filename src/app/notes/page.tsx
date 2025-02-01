import { ArrowRightIcon } from 'lucide-react';
import { Metadata } from 'next';
import Image from 'next/image';
import * as React from 'react';

import FileSystemApp from '@/components/filesystem2/app';
import ButtonLink from '@/components/links/ButtonLink';
import NavigationBar from '@/components/Navigation';

import AvatarImage from '~/images/Yutian2025_Squared.jpg';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Shared Files',
};

export default function FilePage() {
  return (
    <main>
      <section className='min-w-full bg-white mb-8'>
        <NavigationBar />
        <div className='px-4'>
          <div className='relative flex flex-wrap flex-row items-center justify-center w-full'>
            <Image alt="Yutian Chen portrait" src={AvatarImage.src} width={64} height={64} className='rounded-full m-4 hidden md:block' />
            <h1 className='text-2xl md:text-3xl font-extralight py-2'>Yutian Chen's <span className='font-semibold'>Notes</span></h1>
            <div className='flex-grow' />
            <ButtonLink href='/' variant='primary' size='large' className='min-w-32 text-center' rightIcon={ArrowRightIcon}>About Me</ButtonLink>
          </div>

          <FileSystemApp
            bucketName='yutian-public'
            region='us-east-1'
            identityPoolID='us-east-1:0d7c101f-bcad-4d42-9723-1c7a75792a69'
          />
        </div>
      </section>
      <Footer />
    </main>
  );
}
