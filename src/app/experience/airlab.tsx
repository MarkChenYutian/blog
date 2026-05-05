import ExperienceHead from '@/components/custom/experience_heading';
import Paperlink from '@/components/custom/paper_link';
import UnderlineLink from '@/components/links/UnderlineLink';

import AirLabLogo from '~/images/AirLab_Logo.png';

export default function AirLabExperience() {
  return (
    <ExperienceHead
      icon={AirLabLogo}
      title="Spatial AI & Visual-Inertial SLAM"
      place="The AirLab, Robotics Institue, Carnegie Mellon University"
      link="https://theairlab.org/"
      from_date="Sep 2022"
      to_date="Now"
      desc={
        <p className='text-justify hyphens-auto'>
          Working with Professor <UnderlineLink href="https://www.ri.cmu.edu/ri-faculty/sebastian-scherer/">Sebastian Scherer</UnderlineLink> and Dr. <UnderlineLink href="http://yuhengqiu.com/">Yuheng Qiu</UnderlineLink>, I aimed to construct robust and accurate visual-inertial SLAM system using data-driven approach.
          I Developed the MAC-VO, an award-winning SoTA visual odometry that is generalizable everywhere (even the <UnderlineLink href="/posts/lunar-autonomy">lunar surface 🌕</UnderlineLink>!).
          I also worked extensively on IMU and visual-inerital system to create low-latency and robust state estimation system for real-world deployment.
        </p>
      }
      items={[
        <Paperlink key={0}
          title="MAC-VO: Metric-Aware Covariance for Learning-based Stereo Visual Odometry"
          link="https://mac-vo.github.io/"
          venue="ICRA 2025"
          awards={["ICRA 2025 Best Conference Paper Award", "Best Paper Award on Robot Perception"]}
          slides={[{ title: "MAC-VO Presentation Slide", link: "/files/MAC-VO-AirLab-Long-Presentation.pdf" }]}
        />,
        <Paperlink key={1}
          title="UFM: A Simple Path towards Unified Dense Correspondence with Flow"
          link="https://uniflowmatch.github.io"
          venue="NeurIPS 2025"
        />,
        <Paperlink key={2}
          title="AirIO: Learning Inertial Odometry with Enhanced IMU Feature Observability"
          link="https://air-io.github.io/"
          venue="IEEE RA-L"
        />,
        <Paperlink key={3}
          title="AirIMU: Learning Uncertainty Propagation for Inertial Odometry"
          link="https://airimu.github.io/"
          venue="arXiv Preprint"
        />,
        <Paperlink key={4}
          title="PyPose v0.6: The Imperative Programming Interface for Robotics"
          link="https://arxiv.org/abs/2309.13035"
          venue="IROS Workshop 2023"
        />
      ]}
    />
  );
}
