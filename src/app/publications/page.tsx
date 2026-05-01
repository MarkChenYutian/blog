import { Metadata } from 'next';
import Image from 'next/image';
import * as React from 'react';

import Footer from '@/components/Footer';
import NavigationBar from '@/components/Navigation';

import PublicationEntry, { PublicationEntryProps } from '@/app/publications/entry';

import AvatarImage from '~/images/Yutian_Chen.jpg';

export const metadata: Metadata = {
  title: 'Publications',
};

const publications: PublicationEntryProps[] = [
  {
    title: "MAC-VO: Metrics-aware Covariance for Learning-based Stereo Visual Odometry",
    authors: ["Yuheng Qiu*", "Yutian Chen*", "Zihao Zhang", "Wenshan Wang", "Sebastian Scherer"],
    venue: "ICRA 2025",
    arxiv: "https://arxiv.org/abs/2409.09479",
    homepage: "https://mac-vo.github.io/",
    github: "https://github.com/MAC-VO/MAC-VO",
    awards: ["Best Conference Paper Award", "Best Paper Award on Robot Perception"],
  },
  {
    title: "Co-Me: Confidence-Guided Token Merging for Visual Geometric Transformers",
    authors: ["Yutian Chen", "Yuheng Qiu", "Ruogu Li", "Jay Patrikar", "Sebastian Scherer"],
    venue: "CVPR 2026",
    arxiv: "https://arxiv.org/abs/2511.14751",
    homepage: "https://co-me-tokens.github.io",
    github: "https://github.com/co-me-tokens/CoMe",
  },
  {
    title: "UFM: A Simple Path towards Unified Dense Correspondence with Flow",
    authors: [
      "Yuchen Zhang", "Nikhil Keetha", "Chenwei Lyu", "Bhuvan Jhamb", "Yutian Chen",
      "Yuheng Qiu", "Jay Karhade", "Shreyas Jha", "Yaoyu Hu", "Deva Ramanan",
      "Sebastian Scherer", "Wenshan Wang",
    ],
    venue: "NeurIPS 2025",
    arxiv: "https://arxiv.org/abs/2506.09278",
    homepage: "https://uniflowmatch.github.io",
    github: "https://github.com/UniFlowMatch/UFM",
  },
  {
    title: "AirIO: Learning Inertial Odometry with Enhanced IMU Feature Observability",
    authors: ["Yuheng Qiu*", "Can Xu*", "Yutian Chen", "Shibo Zhao", "Junyi Geng", "Sebastian Scherer"],
    venue: "IEEE RA-L",
    arxiv: "https://arxiv.org/abs/2501.15659",
    homepage: "https://air-io.github.io/",
    github: "https://github.com/Air-IO/Air-IO",
  },
  {
    title: "AirIMU: Learning Uncertainty Propagation for Inertial Odometry",
    authors: ["Yuheng Qiu", "Chen Wang", "Can Xu", "Yutian Chen", "Xunfei Zhou", "Youjie Xia", "Sebastian Scherer"],
    venue: "arXiv Preprint",
    arxiv: "https://arxiv.org/abs/2310.04874",
    homepage: "https://airimu.github.io/",
    github: "https://github.com/haleqiu/AirIMU",
  },
  {
    title: "Virtual Community: An Open World for Humans, Robots, and Society",
    authors: [
      "Qinhong Zhou*", "Hongxin Zhang*", "Xiangye Lin*", "Zheyuan Zhang*", "Yutian Chen",
      "Wenjun Liu", "Zunzhe Zhang", "Sunli Chen", "Lixing Fang", "Qiushi Lyu",
      "Xinyu Sun", "Jincheng Yang", "Zeyuan Wang", "Bao Chi Dang", "Zhehuan Chen",
      "Daksha Ladia", "Jiageng Liu", "Chuang Gan",
    ],
    venue: "ICLR 2026",
    arxiv: "https://arxiv.org/abs/2508.14893",
    homepage: "https://virtual-community-ai.github.io/",
    github: "https://github.com/UMass-Embodied-AGI/Virtual-Community"
  },
  {
    title: "Token Prediction as Implicit Classification to Identify LLM-Generated Text",
    authors: ["Yutian Chen*", "Hao Kang*", "Vivian Zhai", "Liangze Li", "Rita Singh", "Bhiksha Raj"],
    venue: "EMNLP 2023",
    homepage: "https://aclanthology.org/2023.emnlp-main.810/",
    github: "https://github.com/MarkChenYutian/T5-Sentinel-public"
  },
  {
    title: "GPT-Sentinel: Distinguishing Human and ChatGPT Generated Content",
    authors: ["Yutian Chen*", "Hao Kang*", "Vivian Zhai", "Liangze Li", "Rita Singh", "Bhiksha Raj"],
    venue: "arXiv Preprint",
    arxiv: "https://arxiv.org/abs/2305.07969",
  },
  {
    title: "PyPose v0.6: The Imperative Programming Interface for Robotics",
    authors: [
      "Zitong Zhan", "Xiangfu Li", "Qihang Li", "Haonan He", "Abhinav Pandey",
      "Haitao Xiao", "Yangmengfei Xu", "Xiangyu Chen", "Kuan Xu", "Kun Cao",
      "Zhipeng Zhao", "Zihan Wang", "Huan Xu", "Zihang Fang", "Yutian Chen",
      "Wentao Wang", "Xu Fang", "Yi Du", "Tianhao Wu", "Xiao Lin",
      "Yuheng Qiu", "Fan Yang", "Jingnan Shi", "Shaoshu Su", "Yiren Lu",
      "Taimeng Fu", "Karthik Dantu", "Jiajun Wu", "Lihua Xie", "Marco Hutter",
      "Luca Carlone", "Sebastian Scherer", "Daning Huang", "Yaoyu Hu",
      "Junyi Geng", "Chen Wang",
    ],
    venue: "IROS Workshop 2023",
    arxiv: "https://arxiv.org/abs/2309.13035",
    homepage: "https://pypose.org/",
    github: "https://github.com/pypose/pypose",
  },
  {
    title: "Myocardial Segmentation of Cardiac MRI Sequences With Temporal Consistency for Coronary Artery Disease Diagnosis",
    authors: [
      "Yutian Chen*", "Wen Xie*", "Jiawei Zhang*", "Hailong Qiu*", "Dewen Zeng", "Yiyu Shi",
      "Haiyun Yuan", "Jian Zhuang", "Yanchun Zhang", "Yuhao Dong", "Meiping Huang", "Xiaowei Xu",
    ],
    venue: "Frontier Cardiovascular Medicine 2022",
    homepage: "https://www.frontiersin.org/articles/10.3389/fcvm.2022.804442/full",
  },
];

export default function PublicationsPage() {
  return (
    <div className='min-h-screen'>
      <div className='px-4'>
        <div className='relative flex flex-wrap flex-row items-center justify-center w-full'>
          <Image alt="Yutian Chen portrait" src={AvatarImage.src} width={64} height={64} className='rounded-full m-4 hidden md:block' />
          <h1 className='text-2xl md:text-3xl font-extralight py-2'>Yutian Chen's <span className='font-semibold'>Publications</span></h1>
          <div className='flex-grow' />
        </div>
      </div>
      <NavigationBar />
      <div className='layout py-6'>
        <p className='text-xs italic text-slate-500 mb-2'>★ indicates equal contribution.</p>
        {publications.map((pub, i) => (
          <PublicationEntry key={i} index={i + 1} {...pub} />
        ))}
      </div>
      <Footer />
    </div>
  );
}
