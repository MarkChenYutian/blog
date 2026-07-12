import ExperienceHead from '@/components/custom/experience_heading';
import UnderlineLink from '@/components/links/UnderlineLink';

import AmazonLogo from '~/images/Amazon_Logo.png';

export default function AmazonExperience() {
  return (
    <ExperienceHead
      icon={AmazonLogo}
      title="Human-Humanoid Transfer Learning"
      place="Amazon, Frontier AI Robotics (FAR)"
      link="https://www.amazon.science/research-areas/robotics"
      from_date="May 2026"
      to_date="Aug 2026"
      desc={
        <p className='text-justify hyphens-auto'>
          I joined Amazon&apos;s Frontier AI Robotics (FAR) as an intern Member of Technical Staff, where I have the honor of working with Professor <UnderlineLink href="https://me.berkeley.edu/people/koushil-sreenath/">Koushil Sreenath</UnderlineLink> on an IMU foundation model for human and humanoid motion &mdash; a robust, generalizable encoder for multiple downstream tasks.
        </p>
      }
      items={[]}
    />
  );
}
