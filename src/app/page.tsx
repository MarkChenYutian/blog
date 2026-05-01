'use static';

import { ArrowRightIcon, GraduationCapIcon, LinkedinIcon, MailIcon, UserIcon } from 'lucide-react';
import type { Metadata } from 'next';
import Image from 'next/image';
import * as React from 'react';
import { RiGithubLine } from 'react-icons/ri';
import '@/lib/env';

import CursorField from '@/components/custom/cursor_field';
import FoldableRegion from '@/components/custom/foldable_region';
import Paperlink from '@/components/custom/paper_link';
import PdfButtonLink from '@/components/custom/pdf_button_link';
import Footer from '@/components/Footer';
import { withValidIcon } from '@/components/icons/withValidIcon';
import ButtonLink from '@/components/links/ButtonLink';
import UnderlineLink from '@/components/links/UnderlineLink';
import NavigationBar from '@/components/Navigation';

import AirLabExperience from '@/app/experience/airlab';
import FieldAIExperience from '@/app/experience/fieldai';
import GuangdongExperience from '@/app/experience/guangdong';
import LTIExperience from '@/app/experience/lti';
import MITIBMExperience from '@/app/experience/mitibm';

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
      <section className='bg-white'>

        <div className='relative flex min-h-screen flex-col text-neutral-800'>
          <div className='pb-4'>
            <div className='header-band relative overflow-hidden bg-primary-800 px-6 py-6 text-neutral-100'>
              <CursorField color='white' />
              <div className='relative z-10 flex flex-wrap flex-row items-center justify-center w-full'>
                <Image alt="Yutian Chen portrait" src={AvatarImage.src} width={256} height={256} className='rounded-full m-8' />
                <div className='p-4'>
                  <h1 className='text-6xl font-extrabold py-2'>Yutian Chen</h1>
                  <ul className='mb-4'>
                    <li> <UnderlineLink href="mailto:yutianch@andrew.cmu.edu"><MailIcon className='mr-2' /> yutianch@stanford.edu </UnderlineLink></li>
                  </ul>

                  <div className='flex justify-between items-center flex-wrap leading-tight'>
                    <span className='text-xl font-bold'>Stanford University</span>
                    <span>2026 Sep - Now</span>
                  </div>
                  <p className='text-lg leading-tight'>Ph.D. in Computer Science</p>

                  <div className='flex justify-between items-center flex-wrap mt-2 text-neutral-300 font-extralight leading-tight'>
                    <span className='text-xl'>Carnegie Mellon University</span>
                    <span>2021 Aug - 2026 May</span>
                  </div>
                  <p className='text-lg text-neutral-300 font-extralight leading-tight'><del>MSc. Robotics</del> (Dropped)</p>
                  <p className='text-lg text-neutral-300 font-extralight leading-tight'>BSc. Computer Science, Minor in Mathematical Science</p>
                </div>

                <div className='flex-grow' />
                <div className='p-4'>
                  <h3 className='font-normal italic'>Also find me at ...</h3>
                  <ul>
                    <li className='text-lg'><UnderlineLink href="https://scholar.google.com/citations?user=9-Cac9MAAAAJ&hl=en"><GraduationCapIcon className='mr-2' /> Google Scholar</UnderlineLink></li>
                    <li className='text-lg'><UnderlineLink href="https://www.linkedin.com/in/yutian-chen-469602223/"><LinkedinIcon className='mr-2' /> LinkedIn</UnderlineLink></li>
                    <li className='text-lg'><UnderlineLink href="https://github.com/MarkChenYutian"><GithubIcon className='text-2xl mr-2' /> GitHub</UnderlineLink></li>
                  </ul>
                </div>
              </div>
            </div>

            <NavigationBar />

            <div className='grid grid-cols-1 lg:grid-cols-6 px-6'>
              {/* About Me */}
              <div className='text-lg homepage-card col-span-1 lg:col-span-2 row-span-1 flex flex-col'>
                <h2 className='text-3xl py-2 text-primary-800'>About Me</h2>
                <p className='break-words hyphens-auto overflow-auto pt-4 text-justify'>
                  I am an M.S. Robotics student at Carnegie Mellon University, advised by <UnderlineLink href="https://www.ri.cmu.edu/ri-faculty/sebastian-scherer/">Prof. Sebastian Scherer</UnderlineLink> in <UnderlineLink href="https://theairlab.org/">the AirLab</UnderlineLink>.
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

              {/* Updates */}
              <div className='text-lg homepage-card col-span-1 lg:col-span-4 row-span-1'>
                <h2 className='text-3xl py-2 text-primary-800'>Recent Updates</h2>
                <p className='text-justify hyphens-auto'>Below is a highlight list of my recent works. For a full list of works, please see <UnderlineLink className='text-primary-500' href="/publications">Here</UnderlineLink>.</p>
                <ul className='pl-4 py-2'>
                  <li><Paperlink title="Co-Me: Confidence-Guided Token Merging for Visual Geometric Transformers" link="https://co-me-tokens.github.io" venue="CVPR 2026" /></li>
                  <li><Paperlink title="MAC-VO: Metric-Aware Covariance for Learning-based Stereo Visual Odometry" link="https://mac-vo.github.io/" venue="ICRA 2025" awards={["ICRA 2025 Best Conference Paper Award", "Best Paper Award on Robot Perception"]} /></li>
                </ul>
              </div>

              {/* Projects */}
              <div className='text-lg homepage-card col-span-1 lg:col-span-4 row-span-1'>
                <h2 className='text-3xl py-2 text-primary-800'>Projects</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 pt-2'>
                  <div>
                    <div className='flex items-center gap-3 mb-2'>
                      <Image alt='PyPose Icon' src={PyposeImage.src} width={44} height={44} />
                      <h3 className='text-xl font-semibold'>
                        <UnderlineLink href="https://pypose.org/">PyPose</UnderlineLink>
                      </h3>
                    </div>
                    <p className='text-justify hyphens-auto'>
                      PyPose is a Library for Robot Learning with Physics-based Optimization. It supports efficient automatic-differentiation on Lie Group and Algebra.
                    </p>
                  </div>
                  <div>
                    <div className='flex items-center gap-3 mb-2'>
                      <Image alt='CMU SCS Icon' src={SCSImage.src} width={44} height={44} />
                      <h3 className='text-xl font-semibold'>
                        <UnderlineLink href="https://cs122.andrew.cmu.edu/visualc0/">C0 Visualizer</UnderlineLink>
                      </h3>
                    </div>
                    <p className='text-justify hyphens-auto'>
                      I created the C0 program visualizer, a virtual machine that executes C language in browser and provide realtime memory visualization.
                    </p>
                  </div>
                </div>
              </div>

              {/* Notes */}
              <div className='text-lg homepage-card col-span-1 lg:col-span-2 row-span-1'>
                <h2 className='text-3xl py-2 text-primary-800'>Open Source Notes</h2>
                <p className='break-words hyphens-auto overflow-auto text-justify'>
                  I believe knowledge is most impactful when shared freely. By open-sourcing my notes from high school AP courses to advanced university topics, I aim to improve the accessibility of knowledge for everyone.
                </p>
                <div className='flex flex-row-reverse pt-4'><ButtonLink href='/notes' variant='light' size='large' className='min-w-44 text-center' rightIcon={ArrowRightIcon}>Visit My Notes</ButtonLink></div>
              </div>

              {/* Experiences */}
              <div className='text-lg homepage-card col-span-1 lg:col-span-6 row-span-4'>
                <h2 className='text-3xl pt-2 text-primary-800' id='experience-section'>Experience</h2>
                <ol>
                  <li>
                    <AirLabExperience />
                    <FieldAIExperience />

                    <FoldableRegion collapsedHeight={120}>
                      <MITIBMExperience />
                      <LTIExperience />
                      <GuangdongExperience />
                    </FoldableRegion>
                  </li>
                </ol>
              </div>

              {/* Other (Yutian Chen)s */}
              <div className='text-lg homepage-card col-span-1 lg:col-span-2 row-span-1'>
                <h2 className='text-3xl py-2 text-primary-800'>Fun Fact</h2>
                <p className='break-words hyphens-auto overflow-auto text-justify'>
                  There are at least two other (Yutian Chen)s actively working in AI research. If I'm not the one you are looking for, you might want to check on their homepages:
                  <ul className='pl-4 py-2'>
                    <li><UnderlineLink href="https://www.cantab.net/users/yutian.chen/index.html"><UserIcon className='mr-2' /> Yutian Chen @ Google DeepMind</UnderlineLink></li>
                    <li><UnderlineLink href="https://yutian10.github.io/"><UserIcon className='mr-2' /> Yutian Chen @ CUHK</UnderlineLink></li>
                  </ul>
                </p>
              </div>

              {/* Research Motto */}
              <div className='text-lg homepage-card col-span-1 lg:col-span-4 row-span-1 flex items-center justify-center'>
                <blockquote className='relative px-8 py-2 max-w-2xl'>
                  <span aria-hidden className='absolute -top-4 -left-4 text-8xl leading-none font-serif text-slate-300 select-none pointer-events-none'>&ldquo;</span>
                  <p className='relative z-10 text-left font-normal tracking-wide px-6'>
                    GOOD RESEARCH IS ABOUT SOLVING THE IMPORTANT PROBLEM AT THE RIGHT TIME WITH SIMPLE METHODS AND SOLID ENGINEERING.
                  </p>
                  <span aria-hidden className='absolute -bottom-10 -right-4 text-8xl leading-none font-serif text-slate-300 select-none pointer-events-none'>&rdquo;</span>
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
