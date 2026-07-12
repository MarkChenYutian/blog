import { Metadata } from 'next';
import * as React from 'react';

import PageHeader from '@/components/custom/page_header';
import FileSystemApp from '@/components/filesystem2/app';
import Footer from '@/components/Footer';
import NavigationBar from '@/components/Navigation';

export const metadata: Metadata = {
  title: 'Shared Files',
};

export default function FilePage() {
  return (
    <main>
      <section className='min-w-full bg-white mb-8'>
        <PageHeader title='Notes' />
        <NavigationBar />
        <div className='px-4'>
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
