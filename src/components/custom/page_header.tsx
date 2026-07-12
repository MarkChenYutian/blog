import Image from 'next/image';
import Link from 'next/link';

import ThemeToggle from '@/components/ThemeToggle';

import AvatarImage from '~/images/Yutian_Chen.jpg';

export default function PageHeader({ title }: { title: string }) {
  return (
    <div className='corner-ticks corner-ticks-sm relative bg-primary-800 dark:bg-primary-900 text-neutral-100 px-6 py-4'>
      <div className='flex flex-row items-center justify-left gap-4'>
        <Link href='/' className='shrink-0'>
          <Image alt='Yutian Chen portrait' src={AvatarImage.src} width={48} height={48} className='rounded-md dark:brightness-[.85]' />
        </Link>
        <div>
          <p className='text-xl md:text-2xl font-medium tracking-tight leading-tight'>Yutian Chen</p>
          <p className='mono-label text-neutral-300'>{title}</p>
        </div>
      </div>
      <ThemeToggle className='absolute right-4 top-1/2 -translate-y-1/2' />
    </div>
  );
}
