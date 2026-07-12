'use static';

import { ArrowRightIcon, ArrowUpRightIcon, GraduationCapIcon, LinkedinIcon, MailIcon, NotebookPenIcon, UserIcon } from 'lucide-react';
import type { Metadata } from 'next';
import Image from 'next/image';
import * as React from 'react';
import { RiGithubLine } from 'react-icons/ri';
import '@/lib/env';

import CursorField from '@/components/custom/cursor_field';
import FoldableExperience from '@/components/custom/foldable_experience';
import PdfButtonLink from '@/components/custom/pdf_button_link';
import ResearchHighlight from '@/components/custom/research_highlight';
import Footer from '@/components/Footer';
import { withValidIcon } from '@/components/icons/withValidIcon';
import ButtonLink from '@/components/links/ButtonLink';
import UnderlineLink from '@/components/links/UnderlineLink';
import UnstyledLink from '@/components/links/UnstyledLink';
import NavigationBar from '@/components/Navigation';
import ThemeToggle from '@/components/ThemeToggle';

import AirLabExperience from '@/app/experience/airlab';
import AmazonExperience from '@/app/experience/amazon';
import FieldAIExperience from '@/app/experience/fieldai';
import GuangdongExperience from '@/app/experience/guangdong';
import LTIExperience from '@/app/experience/lti';
import MITIBMExperience from '@/app/experience/mitibm';

import GWCSImage from '~/images/GWCS_Logo.png';
import PyposeImage from '~/images/pypose.jpg';
import SCSImage from '~/images/scslogo_no_outline_simple.gif';
import AvatarImage from '~/images/Yutian_Chen.jpg';
/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

const GithubIcon = withValidIcon(RiGithubLine);

export const metadata: Metadata = {
  title: 'Yutian Chen',
  alternates: {
    canonical: 'https://yutianchen.blog/',
  },
}

export default function HomePage() {
  return (
    <main>
      <section className='bg-white dark:bg-neutral-900'>

        <div className='relative flex min-h-screen flex-col text-neutral-800 dark:text-neutral-300'>
          <div className='pb-4'>
            <div className='header-band corner-ticks relative overflow-hidden bg-primary-800 dark:bg-primary-900 px-6 py-6 text-neutral-100'>
              <CursorField color='white' />
              <ThemeToggle className='absolute right-4 top-4 z-20' />
              <div className='relative z-10 flex flex-wrap flex-row items-center justify-center w-full'>
                <Image
                  alt='Yutian Chen portrait'
                  src={AvatarImage.src}
                  width={512}
                  height={512}
                  className='relative m-8 h-64 w-64 shrink-0 rounded-2xl object-cover object-bottom dark:brightness-[.85]'
                />
                <div className='p-4'>
                  <h1 className='text-5xl md:text-6xl font-medium tracking-tight py-2'>Yutian Chen <span className='text-2xl'>陈昱天</span></h1>
                  <ul className='mb-5'>
                    <li className='font-mono text-sm'> <UnderlineLink href="mailto:yutianch@andrew.cmu.edu"><MailIcon className='mr-2' size={16} /> yutianch@stanford.edu </UnderlineLink></li>
                  </ul>

                  <div className='flex justify-between items-baseline gap-x-6 flex-wrap leading-tight'>
                    <span className='text-xl font-medium'>Stanford University</span>
                    <span className='font-mono text-sm text-neutral-300'>Sep 2026 — Now</span>
                  </div>
                  <p className='text-lg leading-tight'>Ph.D. in Computer Science</p>

                  <div className='flex justify-between items-baseline gap-x-6 flex-wrap mt-3 text-neutral-300 font-light leading-tight'>
                    <span className='text-xl'>Carnegie Mellon University</span>
                    <span className='font-mono text-sm'>Aug 2021 — May 2025</span>
                  </div>
                  <p className='text-lg text-neutral-300 font-light leading-tight'>BSc. Computer Science, Minor in Mathematical Science</p>
                </div>

                <div className='flex-grow' />
                <div className='p-4'>
                  <h3 className='mono-label font-normal text-neutral-300 mb-2'>Find me at</h3>
                  <ul>
                    <li className='text-lg'><UnderlineLink href="https://scholar.google.com/citations?user=9-Cac9MAAAAJ&hl=en"><GraduationCapIcon className='mr-2' /> Google Scholar</UnderlineLink></li>
                    <li className='text-lg'><UnderlineLink href="https://www.linkedin.com/in/yutian-chen-469602223/"><LinkedinIcon className='mr-2' /> LinkedIn</UnderlineLink></li>
                    <li className='text-lg'><UnderlineLink href="https://github.com/MarkChenYutian"><GithubIcon className='text-2xl mr-2' /> GitHub</UnderlineLink></li>
                  </ul>
                </div>
              </div>
            </div>

            <NavigationBar />

            <div className='grid grid-cols-1 lg:grid-cols-6 lg:gap-4 px-6 pt-4'>
              {/* About Me */}
              <div className='text-lg homepage-card col-span-1 lg:col-span-3 row-span-1 flex flex-col'>
                <h2 className='text-3xl font-medium tracking-tight py-2 text-primary-800 dark:text-primary-400'>About Me</h2>
                <p className='break-words pt-4'>
                  I am a Ph.D. student in Computer Science at Stanford University working with <UnderlineLink bold href="https://shurans.github.io/">Prof. Shuran Song</UnderlineLink>.
                  Previously, I have had the honor of collaborating with <UnderlineLink bold href="https://www.ri.cmu.edu/ri-faculty/sebastian-scherer/">Prof. Sebastian Scherer</UnderlineLink> and <UnderlineLink bold href="http://yuhengqiu.com/">Dr. Yuheng Qiu</UnderlineLink> in <UnderlineLink bold href="https://theairlab.org/">the AirLab</UnderlineLink> at CMU, <UnderlineLink bold href="https://me.berkeley.edu/people/koushil-sreenath/">Prof. Koushil Sreenath</UnderlineLink> at Amazon Frontier AI Robotics (FAR), <UnderlineLink bold href="https://sairlab.org/chenwang/">Prof. Chen Wang</UnderlineLink> at the University at Buffalo, and <UnderlineLink bold href="https://people.csail.mit.edu/ganchuang/">Prof. Chuang Gan</UnderlineLink> at the MIT-IBM Watson AI Lab.
                  My research focuses on enabling machines to understand and interact with the physical reality through robust geometric and semantic perception.
                  I am broadly interested in visual geometry, spatial reasoning, and the development of scalable algorithms that bridge perception and action for autonomous systems.
                </p>
                <div className='flex-grow' />
                <div className='flex flex-row-reverse pt-4'>
                  <PdfButtonLink link='/files/Yutian_Chen_CV.pdf' modalTitle='Yutian Chen — CV'>
                    <ButtonLink href='/files/Yutian_Chen_CV.pdf' variant='primary' size='large' className='min-w-44 text-center' rightIcon={ArrowRightIcon}>See My CV</ButtonLink>
                  </PdfButtonLink>
                </div>
              </div>

              {/* Research Highlights */}
              <div className='text-lg homepage-card col-span-1 lg:col-span-3 row-span-1 flex flex-col'>
                <h2 className='text-3xl font-medium tracking-tight py-2 text-primary-800 dark:text-primary-400'>Research Highlights</h2>
                <div className='divide-y divide-neutral-200 dark:divide-neutral-800'>
                  <ResearchHighlight
                    title='Co-Me: Confidence-Guided Token Merging for Visual Geometric Transformers'
                    link='https://co-me-tokens.github.io'
                    venue='CVPR 2026'
                    image='/images/research/co-me.png'
                    imageAlt='Point cloud of the Sydney Opera House reconstructed with Co-Me'
                  />
                  <ResearchHighlight
                    title='MAC-VO: Metric-Aware Covariance for Learning-based Stereo Visual Odometry'
                    link='https://mac-vo.github.io/'
                    venue='ICRA 2025'
                    awards={["ICRA 2025 Best Conference Paper Award", "Best Paper Award on Robot Perception"]}
                    image='/images/research/mac-vo.jpg'
                    imageAlt='MAC-VO running on-device on a stereo camera rig'
                  />
                </div>
                <div className='flex-grow' />
                <div className='flex justify-end pt-2'>
                  <UnderlineLink href='/publications' className='font-mono text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-400'>All Publications →</UnderlineLink>
                </div>
              </div>

              {/* Projects & Notes */}
              <div className='text-lg homepage-card col-span-1 lg:col-span-6 row-span-1'>
                <h2 className='font-mono text-sm uppercase tracking-widest text-primary-800 dark:text-primary-400 pt-1 pb-3'>Open Source Projects</h2>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-4 pb-1'>
                  <UnstyledLink href='https://pypose.org/' className='group flex items-center gap-3'>
                    <Image alt='PyPose Icon' src={PyposeImage.src} width={36} height={36}
                      className='grayscale transition-[filter] duration-200 group-hover:grayscale-0' />
                    <span className='min-w-0'>
                      <span className='flex items-center gap-1 text-xl leading-tight text-neutral-500 dark:text-neutral-400 transition-colors group-hover:text-primary-800 dark:group-hover:text-primary-300'>
                        PyPose <ArrowUpRightIcon size={16} className='shrink-0' />
                      </span>
                      <span className='block font-mono text-xs text-neutral-400 dark:text-neutral-500'>Robot learning · Lie theory · PyTorch</span>
                    </span>
                  </UnstyledLink>
                  <UnstyledLink href='/notes' className='group flex items-center gap-3'>
                    <span className='flex h-9 w-9 shrink-0 items-center justify-center bg-primary-50 text-primary-800 dark:bg-primary-950 dark:text-primary-300 grayscale transition-[filter] duration-200 group-hover:grayscale-0'>
                      <NotebookPenIcon size={20} strokeWidth={1.5} />
                    </span>
                    <span className='min-w-0'>
                      <span className='flex items-center gap-1 text-xl leading-tight text-neutral-500 dark:text-neutral-400 transition-colors group-hover:text-primary-800 dark:group-hover:text-primary-300'>
                        Open Notes <ArrowUpRightIcon size={16} className='shrink-0' />
                      </span>
                      <span className='block font-mono text-xs text-neutral-400 dark:text-neutral-500'>Course notes · AP to university · Open access</span>
                    </span>
                  </UnstyledLink>
                  <UnstyledLink href='https://cs122.andrew.cmu.edu/visualc0/' className='group flex items-center gap-3'>
                    <Image alt='CMU SCS Icon' src={SCSImage.src} width={36} height={36}
                      className='grayscale transition-[filter] duration-200 group-hover:grayscale-0' />
                    <span className='min-w-0'>
                      <span className='flex items-center gap-1 text-xl leading-tight text-neutral-500 dark:text-neutral-400 transition-colors group-hover:text-primary-800 dark:group-hover:text-primary-300'>
                        C0 Visualizer <ArrowUpRightIcon size={16} className='shrink-0' />
                      </span>
                      <span className='block font-mono text-xs text-neutral-400 dark:text-neutral-500'>C in browser · Memory visualization · CMU 15-122</span>
                    </span>
                  </UnstyledLink>
                  <UnstyledLink href='https://gwcs.xyz/' className='group flex items-center gap-3'>
                    <Image alt='GZFLS CS Club Icon' src={GWCSImage.src} width={36} height={36}
                      className='grayscale transition-[filter] duration-200 group-hover:grayscale-0' />
                    <span className='min-w-0'>
                      <span className='flex items-center gap-1 text-xl leading-tight text-neutral-500 dark:text-neutral-400 transition-colors group-hover:text-primary-800 dark:group-hover:text-primary-300'>
                        CS Club <ArrowUpRightIcon size={16} className='shrink-0' />
                      </span>
                      <span className='block font-mono text-xs text-neutral-400 dark:text-neutral-500'>High School · Student community · CS education</span>
                    </span>
                  </UnstyledLink>
                </div>
              </div>

              {/* Experiences */}
              <div className='text-lg homepage-card col-span-1 lg:col-span-6 row-span-4'>
                <h2 className='text-3xl font-medium tracking-tight pt-2 text-primary-800 dark:text-primary-400' id='experience-section'>Experience</h2>
                <AmazonExperience />
                <AirLabExperience />
                <FieldAIExperience />

                <FoldableExperience label='More Experience'>
                  <MITIBMExperience />
                  <LTIExperience />
                  <GuangdongExperience />
                </FoldableExperience>
              </div>

              {/* Other (Yutian Chen)s */}
              <div className='text-lg homepage-card col-span-1 lg:col-span-2 row-span-1'>
                <h2 className='text-3xl font-medium tracking-tight py-2 text-primary-800 dark:text-primary-400'>Fun Fact</h2>
                <p className='break-words'>
                  There are at least two other (Yutian Chen)s actively working in AI research. If I'm not the one you are looking for, you might want to check on their homepages:
                </p>
                <ul className='pl-4 py-2'>
                  <li><UnderlineLink href="https://www.cantab.net/users/yutian.chen/index.html"><UserIcon className='mr-2' /> Yutian Chen @ Google DeepMind</UnderlineLink></li>
                  <li><UnderlineLink href="https://yutian10.github.io/"><UserIcon className='mr-2' /> Yutian Chen @ CUHK</UnderlineLink></li>
                </ul>
              </div>

              {/* Research Motto */}
              <div className='text-lg homepage-card col-span-1 lg:col-span-4 row-span-1 flex items-center justify-center'>
                <blockquote className='max-w-2xl border-l-2 border-primary-800 dark:border-primary-400 pl-6 py-2'>
                  <p className='mono-label text-neutral-400 dark:text-neutral-500 mb-3'>Research Motto</p>
                  <p className='text-xl font-light leading-relaxed'>
                    Good research is about solving the important problem at the right time, with simple methods and solid engineering.
                  </p>
                </blockquote>
              </div>

            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
