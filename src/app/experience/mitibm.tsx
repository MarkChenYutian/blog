import ExperienceHead from '@/components/custom/experience_heading';
import Paperlink from '@/components/custom/paper_link';
import UnderlineLink from '@/components/links/UnderlineLink';

import MITIBMImage from '~/images/MIT-IBM-WatsonAI.png';

export default function MITIBMExperience() {
  return (
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
        <Paperlink key={0}
          title="Virtual Community: An Open World for Humans, Robots, and Society"
          link="https://virtual-community-ai.github.io/paper.pdf"
          venue="ICLR 2026"
        />
      ]}
    />
  );
}
