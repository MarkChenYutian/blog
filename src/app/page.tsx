'use static';

import { ArrowRightIcon, GraduationCapIcon, LinkedinIcon, MailIcon } from 'lucide-react';
import type { Metadata } from 'next';
import Image from 'next/image';
import * as React from 'react';
import { RiGithubLine } from 'react-icons/ri';
import '@/lib/env';

import ExperienceHead from '@/components/custom/experience_heading';
import Paperlink from '@/components/custom/paper_link';
import Footer from '@/components/Footer';
import { withValidIcon } from '@/components/icons/withValidIcon';
import ButtonLink from '@/components/links/ButtonLink';
import UnderlineLink from '@/components/links/UnderlineLink';
import NavigationBar from '@/components/Navigation';

import AirLabLogo from '~/images/AirLab_Logo.png';
import FieldAILogo from '~/images/FieldAI_Logo.png';
import GuangdongCardiovescularImage from '~/images/guangdong_cardiovescular_inst.jpg';
import LTIImage from '~/images/lti.png';
import MITIBMImage from '~/images/MIT-IBM-WatsonAI.png';
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
            <div className='header-band bg-primary-800 px-6 py-6 text-neutral-100'>
            <div className='relative flex flex-wrap flex-row items-center justify-center w-full'>
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

                <div className='flex justify-between items-center flex-wrap mt-2 text-neutral-400 font-light leading-tight'>
                  <span className='text-xl'>Carnegie Mellon University</span>
                  <span>2021 Aug - 2026 May</span>
                </div>
                <p className='text-lg text-neutral-400 font-light leading-tight'><del>MSc. Robotics</del> (Dropped)</p>
                <p className='text-lg text-neutral-400 font-light leading-tight'>BSc. Computer Science, Minor in Mathematical Science</p>
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
              <div className='text-lg homepage-card col-span-1 lg:col-span-2 row-span-2 flex flex-col'>
                <h2 className='text-3xl py-2 text-primary-800'>About Me</h2>
                <p className='break-words hyphens-auto overflow-auto pt-4 text-justify'>
                  I am an M.S. Robotics student at Carnegie Mellon University, advised by <UnderlineLink href="https://www.ri.cmu.edu/ri-faculty/sebastian-scherer/">Prof. Sebastian Scherer</UnderlineLink> in <UnderlineLink href="https://theairlab.org/">the AirLab</UnderlineLink>.
                  My research focuses on enabling machines to understand and interact with the physical reality through robust geometric and semantic perception.
                  I am broadly interested in visual geometry, spatial reasoning, and the development of scalable algorithms that bridge perception and action for autonomous systems.
                </p>
                <div className='flex-grow'/>
                <div className='flex flex-row-reverse pt-4'><ButtonLink href='/files/resume.pdf' variant='primary' size='large' className='min-w-44 text-center' rightIcon={ArrowRightIcon}>See My Resume</ButtonLink></div>
              </div>

              <div className='text-lg homepage-card col-span-1 lg:col-span-4 row-span-1'>
                <h2 className='text-3xl py-2 text-primary-800'>Recent Research</h2>
                <p className='text-justify hyphens-auto'>Below is a highlight list of my recent works. For a full list of works, please see <UnderlineLink className='text-primary-500' href="#experience-section">Here</UnderlineLink>.</p>
                <ul className='pl-8 py-4'>
                  <li><Paperlink title="Co-Me: Confidence-Guided Token Merging for Visual Geometric Transformers" link="https://co-me-tokens.github.io"/></li>
                  <li><Paperlink title="UFM: A Simple Path towards Unified Dense Correspondence with Flow" link="https://uniflowmatch.github.io"/></li>
                  <li><Paperlink title="MAC-VO: Metric-Aware Covariance for Learning-based Stereo Visual Odometry" link="https://mac-vo.github.io/" awards={["ICRA 2025 Best Conference Paper Award", "Best Paper Award on Robot Perception"]}/></li>
                </ul>
              </div>

              <div className='text-lg homepage-card col-span-1 lg:col-span-2 row-span-2'>
                <h2 className='text-3xl py-2 text-primary-800'>Projects</h2>
                <div className='grid grid-cols-4 justify-center items-center auto-cols-min'>
                  <Image alt='PyPose Icon' src={PyposeImage.src} width='44' height='44' className='inline-block ml-4' />
                  <h3 className='break-words hyphens-auto overflow-auto text-xl font-semibold col-span-3'>
                    <UnderlineLink href="https://pypose.org/">PyPose</UnderlineLink>
                  </h3>
                  <p className='col-span-4 text-justify hyphens-auto'>
                    PyPose is a Library for Robot Learning with Physics-based Optimization. It supports efficient automatic-differentiation on Lie Group and Algebra.
                  </p>
                  <div className='col-span-4 p-2'></div>
                  <Image alt='CMU SCS Icon' src={SCSImage.src} width='44' height='44' className='inline-block ml-4' />
                  <h3 className='break-words hyphens-auto overflow-auto text-xl font-semibold pt-4 col-span-3'>
                    <UnderlineLink href="https://cs122.andrew.cmu.edu/visualc0/">C0 Visualizer</UnderlineLink>
                  </h3>
                  <p className='col-span-4 text-justify hyphens-auto'>
                    I created the C0 program visualizer, a virtual machine that executes C language in browser and provide realtime memory visualization.
                  </p>
                </div>
              </div>

              <div className='text-lg homepage-card col-span-1 lg:col-span-2 row-span-1'>
                <h2 className='text-3xl py-2 text-primary-800'>Open Source Notes</h2>
                <p className='break-words hyphens-auto overflow-auto text-justify'>
                  I believe knowledge is most impactful when shared freely. By open-sourcing my notes from high school AP courses to advanced university topics, I aim to improve the accessibility of knowledge for everyone.
                </p>
                <div className='flex flex-row-reverse pt-4'><ButtonLink href='/notes' variant='light' size='large' className='min-w-44 text-center' rightIcon={ArrowRightIcon}>Visit My Notes</ButtonLink></div>
              </div>

              <div className='text-lg homepage-card col-span-1 lg:col-span-6 row-span-4'>
                <h2 className='text-3xl pt-2 text-primary-800' id='experience-section'>Experience</h2>
                <ol>
                  <li>
                    <ExperienceHead
                      icon={AirLabLogo}
                      title="Spatial AI & Visual-Inertial SLAM"
                      place="The AirLab, Robotics Institue, Carnegie Mellon University"
                      link="https://theairlab.org/"
                      from_date="Sep 2022"
                      to_date="Now"
                      desc={
                        <p className='text-justify hyphens-auto'>
                          Working with Professor <UnderlineLink href="https://www.ri.cmu.edu/ri-faculty/sebastian-scherer/">Sebastian Scherer</UnderlineLink>, I aimed to construct robust and accurate visual-inertial SLAM system using data-driven approach.
                          I Developed the MAC-VO, an award-winning visual odometry that significantly outperforms the state-of-the-art visual odomtries like DPVO by 30% on relative translation error (RTE) and relative rotation error (ROE) in multiple public datasets.
                          I also Deployed the MAC-VO as ROS2 node on Orin-AGX on real drone and speedup the system by 4 times with TensorRT.
                        </p>
                      }
                      items={[
                        <Paperlink key={0} title="MAC-VO: Metric-Aware Covariance for Learning-based Stereo Visual Odometry" link="https://mac-vo.github.io/" awards={["ICRA 2025 Best Conference Paper Award", "Best Paper Award on Robot Perception"]}/>,
                        <Paperlink key={1} title="UFM: A Simple Path towards Unified Dense Correspondence with Flow" link="https://uniflowmatch.github.io"/>,
                        <Paperlink key={2} title="AirIO: Learning Inertial Odometry with Enhanced IMU Feature Observability" link="https://air-io.github.io/" />,
                        <Paperlink key={3} title="AirIMU: Learning Uncertainty Propagation for Inertial Odometry" link="https://airimu.github.io/" />,
                        <Paperlink key={4} title="PyPose v0.6: The Imperative Programming Interface for Robotics" link="https://arxiv.org/abs/2309.13035" />
                      ]}
                    />

                    <ExperienceHead
                      icon={FieldAILogo}
                      title="ViT Inference Acceleration"
                      place="Field AI Inc., Field AI Research Institute"
                      link="https://www.fieldai.com/fairi"
                      from_date="Jun 2025"
                      to_date="Aug 2025"
                      desc={
                        <p className='text-justify hyphens-auto'>
                          Working with <UnderlineLink href="https://www.jaypatrikar.me">Jay Patrikar</UnderlineLink>, we propose the Confidence-Guided Token Merging (Co-Me), a training-free acceleration method for visual geometric transformers that identifies and merges low-confidence tokens to reduce computation while preserving spatial fidelity.
                          By leveraging a distilled confidence predictor, Co-Me delivers substantial speedups across models like VGGT (up to 11.3x) and MapAnything (up to 7.8x), enabling real-time 3D perception.
                        </p>
                      }
                      items={[
                        <Paperlink key={0} title="Co-Me: Confidence-Guided Token Merging for Visual Geometric Transformers" link="https://co-me-tokens.github.io"/>
                      ]}
                    />

                    <ExperienceHead
                      icon={MITIBMImage}
                      title="Embodied AI Simulator"
                      place="MIT-IBM Watson AI Lab"
                      link="https://mitibmwatsonailab.mit.edu/"
                      from_date="Apr 2024"
                      to_date="Jan 2025"
                      desc={
                        <p className='text-justify hyphens-auto'>
                          Working with Professor <UnderlineLink href="https://people.csail.mit.edu/ganchuang/">Chuang Gan</UnderlineLink>, I developed a data pipeline for City-scale 3D scene reconstruction based on real world satellite/street-view image for multi-agent simulator.
                        </p>
                      }
                      items={[
                        <Paperlink key={0} title="Virtual Community: An Open World for Humans, Robots, and Society" link="https://virtual-community-ai.github.io/paper.pdf"/>
                      ]}
                    />

                    <ExperienceHead
                      icon={LTIImage}
                      title="Generated Text Detection"
                      place="Language Technology Institue, Carnegie Mellon University"
                      link="https://www.lti.cs.cmu.edu/"
                      from_date="Mar 2023"
                      to_date="Sep 2023"
                      desc={
                        <p className='text-justify hyphens-auto'>
                          Working with Professor <UnderlineLink href="http://ayesha.lti.cs.cmu.edu/mlsp/people/rsingh/index.html">Rita Singh</UnderlineLink> and <UnderlineLink href="https://scholar.google.com/citations?user=IWcGY98AAAAJ&hl=en">Bhiksha Raj</UnderlineLink>, built a LLM-generated content detector called "LLM-Sentinel".
                          Reaches 98% accuracy on test dataset and outperform existing content detector by OpenAI and ZeroGPT.
                          Collected the OpenLLMText dataset, a dataset contains 30k human written text from OpenWebText and its corresponding rephrased version by various LLMs such as GPT3.5, LLaMA, PaLM, etc.
                        </p>
                      }
                      items={[
                        <Paperlink key={0} title="Token Prediction as Implicit Classification to Identify LLM-Generated Text" link="https://aclanthology.org/2023.emnlp-main.810/" />
                      ]}
                    />

                    <ExperienceHead
                      icon={GuangdongCardiovescularImage}
                      title="Medical Image Segmentation"
                      place="Guangdong Cardiovascular Institute"
                      link="https://www.gdghospital.org.cn/en/introductiontotheinstitute/info_itemId_85.html"
                      from_date="Dec 2018"
                      to_date="Jan 2020"
                      desc={
                        <p className='text-justify hyphens-auto'>
                          Mentored by Professor <UnderlineLink href="https://engineering.nd.edu/faculty/yiyu-shi/">Yiyu Shi</UnderlineLink> and <UnderlineLink href="https://xiaoweixu.github.io">Xiaowei Xu</UnderlineLink>, I proposed an encoder-decoder architecture to perform semantic segmentation on cardiac MRI sequence.
                          By introducing Temporal constraint on segmentation result, the model improved the accuracy by 2% on ACDC Dataset comparing to the baseline model.
                        </p>
                      }
                      items={[
                        <Paperlink key={0} title="Myocardial Segmentation of Cardiac MRI Sequences With Temporal Consistency for Coronary Artery Disease Diagnosis" link="https://www.frontiersin.org/journals/cardiovascular-medicine/articles/10.3389/fcvm.2022.804442/full" />
                      ]}
                    />
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
