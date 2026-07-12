import Image from 'next/image';
import Link from 'next/link';

import AvatarImage from '~/images/Yutian_Chen.jpg';

export default function PageHeader({ title }: { title: string }) {
  return (
    <div className='corner-ticks corner-ticks-sm bg-primary-800 text-neutral-100 px-6 py-4'>
      <div className='flex flex-row items-center justify-center gap-4'>
        <Link href='/' className='shrink-0'>
          <Image alt='Yutian Chen portrait' src={AvatarImage.src} width={48} height={48} className='rounded-md' />
        </Link>
        <div>
          <p className='text-xl md:text-2xl font-medium tracking-tight leading-tight'>Yutian Chen</p>
          <p className='mono-label text-neutral-300'>{title}</p>
        </div>
      </div>
    </div>
  );
}
