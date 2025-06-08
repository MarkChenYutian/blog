'use static';

import { ArrowRightIcon, GithubIcon, GraduationCapIcon, LinkedinIcon, MailIcon } from 'lucide-react';
import type { Metadata } from 'next'
import Image from 'next/image';
import * as React from 'react';
import '@/lib/env';

import ExperienceHead from '@/components/custom/experience_heading';
import Paperlink from '@/components/custom/paper_link';
import Footer from '@/components/Footer';
import ButtonLink from '@/components/links/ButtonLink';
import UnderlineLink from '@/components/links/UnderlineLink';
import NavigationBar from '@/components/Navigation';

import AirLabLogo from '~/images/AirLab_Logo.png'
import FieldAILogo from '~/images/FieldAI_Logo.png'
import GuangdongCardiovescularImage from '~/images/guangdong_cardiovescular_inst.jpg'
import LTIImage from '~/images/lti.png';
import MITIBMImage from '~/images/MIT-IBM-WatsonAI.png'
import PyposeImage from '~/images/pypose.jpg';
import SCSImage from '~/images/scslogo_no_outline_simple.gif';
import AvatarImage from '~/images/Yutian2025_Squared.jpg';
/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

export const metadata: Metadata = {
  title: 'Yutian Chen',
}

export default function HomePage() {
  return (
    <main>
      <section className='bg-white'>

        <div className='relative flex min-h-screen flex-col text-neutral-700'>
          <NavigationBar />
          <div className='pb-4 px-6'>
            <div className='relative flex flex-wrap flex-row items-center justify-center w-full'>
              <Image alt="Yutian Chen portrait" src={AvatarImage.src} width={256} height={256} className='rounded-full m-8' />
              <div className='p-4'>
                <h1 className='text-6xl font-extrabold py-2'>Yutian Chen</h1>
                <ul className='mb-8'>
                  <li> <UnderlineLink href="mailto:yutianch@andrew.cmu.edu"><MailIcon className='mr-2' /> yutianch@andrew.cmu.edu </UnderlineLink></li>
                </ul>

                <div className='flex justify-between items-center flex-wrap'>
                  <span className='text-xl font-bold'>Carnegie Mellon University</span>
                  <span>2021 Aug - 2027 May</span>
                </div>
                <p className='text-lg'>MS. Robotics</p>
                <p className='text-lg'>BSc. Computer Science, Minor in Mathematical Science</p>
              </div>

              <div className='flex-grow' />
              <div className='p-4'>
                <h3 className='font-normal italic'>Also find me at ...</h3>
                <ul>
                  <li className='text-lg'><UnderlineLink href="https://scholar.google.com/citations?user=9-Cac9MAAAAJ&hl=en"><GraduationCapIcon className='mr-2' /> Google Scholar</UnderlineLink></li>
                  <li className='text-lg'><UnderlineLink href="https://www.linkedin.com/in/yutian-chen-469602223/"><LinkedinIcon className='mr-2' /> LinkedIn</UnderlineLink></li>
                  <li className='text-lg'><UnderlineLink href="https://github.com/MarkChenYutian"><GithubIcon className='mr-2' /> GitHub</UnderlineLink></li>
                </ul>
              </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-6'>
              <div className='text-lg homepage-card col-span-1 md:col-span-2 row-span-2'>
                <h2 className='text-3xl py-2 text-primary-900'>About Me</h2>
                <p className='break-words hyphens-auto overflow-auto pt-4'>
                  I am dedicated to improve the <b>spatial understanding</b> ability of autonomous systems, which requires a combination of geometry and semantic information about the surroundings. My research experience on <b>visual-inertial SLAM</b> at <UnderlineLink href="https://theairlab.org/">the AirLAB</UnderlineLink> focuses on improving the recognition of scene geometry in adversarial conditions, while my research experience in <b>Natural Language Processing (NLP)</b> and semantic segmentation focuses on grasping and interpreting the semantic of scenes.
                </p>
                <div className='flex flex-row-reverse pt-4'><ButtonLink href='/files/resume.pdf' variant='primary' size='large' className='min-w-44 text-center' rightIcon={ArrowRightIcon}>See My Resume</ButtonLink></div>
              </div>

              <div className='text-lg homepage-card col-span-1 md:col-span-4 row-span-1'>
                <h2 className='text-3xl py-2 text-primary-900'>Recent Research</h2>
                {/*<p className='bg-primary-50 text-primary-600'>Our work <i>MAC-VO</i> was nominated as the Best Paper Award Finalist for ICRA 2025!</p>*/}
                <p>Below is a highlight list of my recent works. For a full list of works, please see <UnderlineLink className='text-primary-500' href="#experience-section">Here</UnderlineLink>.</p>
                <ul className='pl-8 py-4'>
                  <li><Paperlink title="AirIO: Learning Inertial Odometry with Enhanced IMU Feature Observability" link="https://air-io.github.io" /></li>
                  <li><Paperlink title="MAC-VO: Metric-Aware Covariance for Learning-based Stereo Visual Odometry" link="https://mac-vo.github.io/" awards={["ICRA 2025 Best Conference Paper Award", "Best Paper Award on Robot Perception"]}/></li>
                  <li><Paperlink title="Token Prediction as Implicit Classification to Identify LLM-Generated Text" link="https://aclanthology.org/2023.emnlp-main.810/" /></li>
                </ul>
              </div>

              <div className='text-lg homepage-card col-span-1 md:col-span-2 row-span-2'>
                <h2 className='text-3xl py-2 text-primary-900'>Projects</h2>
                <div className='grid grid-cols-4 justify-center items-center auto-cols-min'>
                  <Image alt='PyPose Icon' src={PyposeImage.src} width='44' height='44' className='inline-block ml-4' />
                  <h3 className='break-words hyphens-auto overflow-auto text-xl font-semibold col-span-3'>
                    <UnderlineLink href="https://pypose.org/">PyPose</UnderlineLink>
                  </h3>
                  <p className='col-span-4'>
                    PyPose is a Library for Robot Learning with Physics-based Optimization. It supports efficient automatic-differentiation on Lie Group and Lie Algebra. I'm an active contributor of the PyPose project.
                  </p>
                  <div className='col-span-4 p-2'></div>
                  <Image alt='CMU SCS Icon' src={SCSImage.src} width='44' height='44' className='inline-block ml-4' />
                  <h3 className='break-words hyphens-auto overflow-auto text-xl font-semibold pt-4 col-span-3'>
                    <UnderlineLink href="https://cs122.andrew.cmu.edu/visualc0/">C0 Visualizer</UnderlineLink>
                  </h3>
                  <p className='col-span-4'>
                    I designed and implemented the C0 program visualizer in 2022 Summer. It is a virtual machine that executes C0 language (a safe subset of C) and provide visualization and debugging tools for education purpose.
                  </p>
                </div>
              </div>

              <div className='text-lg homepage-card col-span-1 md:col-span-2 row-span-2'>
                <h2 className='text-3xl py-2 text-primary-900'>Skills</h2>
                <p className='break-words hyphens-auto overflow-auto font-semibold mt-2'>
                  Robotics
                </p>
                <p>
                  Visual-Inertial SLAM, Computer Vision, Geometric Vision, ROS2, C++
                </p>

                <p className='break-words hyphens-auto overflow-auto font-semibold mt-4'>
                  Deep learning & Artificial Intelligence
                </p>
                <p>
                  Natural Language Processing, Semantic Segmentation, PyTorch, CUDA, TensorRT, Python, Triton
                </p>

                <p className='break-words hyphens-auto overflow-auto font-semibold mt-4'>
                  Miscellaneous
                </p>
                <p>
                  React, HTML, CSS, TypeScript, LaTeX, Blender
                </p>
              </div>

              <div className='text-lg homepage-card col-span-1 md:col-span-2 row-span-1'>
                <h2 className='text-3xl py-2 text-primary-900'>Open Source Notes</h2>
                <p className='break-words hyphens-auto overflow-auto'>
                  I believe knowledge is most impactful when shared freely. By open-sourcing my notes from high school AP courses to advanced university topics, I aim to improve the accessibility of knowledge for everyone.
                </p>
                <div className='flex flex-row-reverse pt-4'><ButtonLink href='/files' variant='light' size='large' className='min-w-44 text-center' rightIcon={ArrowRightIcon}>Visit My Notes</ButtonLink></div>
              </div>

              <div className='text-lg homepage-card col-span-1 md:col-span-4 row-span-4'>
                <h2 className='text-3xl pt-2 text-primary-900' id='experience-section'>Experience</h2>
                <ol>
                  <li>
                    <ExperienceHead
                      icon={FieldAILogo}
                      title="Robot Perception Intern"
                      place="Field AI Inc."
                      link="https://www.fieldai.com"
                      from_date="Jun 2025"
                      to_date="Aug 2025"
                      desc={
                        <p>
                          Excited to join Field AI Inc. as a Robot Perception Intern, working with <UnderlineLink href="https://www.jaypatrikar.me">Jay Patrikar</UnderlineLink> on accelerating high-resolution visual transformer inference on edge compute devices.
                        </p>
                      }
                      items={[
                      ]}
                    />

                    <ExperienceHead
                      icon={AirLabLogo}
                      title="Learning-based Visual-Inertial SLAM"
                      place="The AirLab, Robotics Institue, Carnegie Mellon University"
                      link="https://theairlab.org/"
                      from_date="Sep 2022"
                      to_date="Now"
                      desc={
                        <p>
                          Working with Professor <UnderlineLink href="https://www.ri.cmu.edu/ri-faculty/sebastian-scherer/">Sebastian Scherer</UnderlineLink>, I aimed to construct robust and accurate visual-inertial SLAM system using data-driven approach.
                          I Developed the MAC-VO, a visual odometry that outperforms the state-of-the-art visual odomtries like DPVO by 30% on relative translation error (RTE) and relative rotation error (ROE) in multiple public datasets.
                          I also Deployed the MAC-VO as ROS2 node on Orin-AGX on real drone and speedup the system by 4 times with TensorRT.
                        </p>
                      }
                      items={[
                        <Paperlink key={0} title="AirIO: Learning Inertial Odometry with Enhanced IMU Feature Observability" link="https://mac-vo.github.io/" />,
                        <Paperlink key={1} title="MAC-VO: Metric-Aware Covariance for Learning-based Stereo Visual Odometry" link="https://mac-vo.github.io/" awards={["ICRA 2025 Best Conference Paper Award", "Best Paper Award on Robot Perception"]}/>,
                        <Paperlink key={2} title="AirIMU: Learning Uncertainty Propagation for Inertial Odometry" link="https://airimu.github.io/" />,
                        <Paperlink key={3} title="PyPose v0.6: The Imperative Programming Interface for Robotics" link="https://arxiv.org/abs/2309.13035" />
                      ]}
                    />

                    <ExperienceHead
                      icon={MITIBMImage}
                      title="Embodied AI Simulator"
                      place="IBM-MIT Watson AI Lab"
                      link="https://mitibmwatsonailab.mit.edu/"
                      from_date="Apr 2024"
                      to_date="Jan 2025"
                      desc={
                        <p>
                          Working with Professor <UnderlineLink href="https://people.csail.mit.edu/ganchuang/">Chuang Gan</UnderlineLink>, I developed a data pipeline for City-scale 3D scene reconstruction based on real world satellite/street-view image for multi-agent simulator.
                        </p>
                      }
                      items={[
                        <span key={0} className='font-light italic'>Work In Progress, Currently under double-blind review</span>
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
                        <p>
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
                        <p>
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

              <div className='text-lg homepage-card col-span-1 md:col-span-2 row-span-1'>
                <h2 className='text-3xl py-2 text-primary-900'>Courses</h2>
                <ol className="my-2 ml-4 list-disc">
                  <li>16-833 Localization and Mapping</li>
                  <li>16-385 Computer Vision</li>
                  <li>15-451 Algorithm Design & Analysis</li>
                  <li>15-418 Parallel Computer Architecture and Programming</li>
                  <li>11-777 Multi-Modal Machine Learning</li>
                  <li>10-708 Probablistic Graphical Model</li>
                  <li>11-785 Intro to Deep Learning</li>
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
