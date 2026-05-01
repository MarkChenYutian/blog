import ExperienceHead from '@/components/custom/experience_heading';
import Paperlink from '@/components/custom/paper_link';
import UnderlineLink from '@/components/links/UnderlineLink';

import FieldAILogo from '~/images/FieldAI_Logo.png';

export default function FieldAIExperience() {
  return (
    <ExperienceHead
      icon={FieldAILogo}
      title="ViT Inference Acceleration"
      place="Field AI Inc., Field AI Research Institute"
      link="https://www.fieldai.com/fairi"
      from_date="Jun 2025"
      to_date="Aug 2025"
      desc={
        <p className='text-justify hyphens-auto'>
          Working with Dr. <UnderlineLink href="https://www.jaypatrikar.me">Jay Patrikar</UnderlineLink>, we propose the Confidence-Guided Token Merging (Co-Me), a training-free acceleration method for visual geometric transformers that identifies and merges low-confidence tokens to reduce computation while preserving spatial fidelity.
          By leveraging a distilled confidence predictor, Co-Me delivers substantial speedups across models like VGGT (up to 11.3x) and MapAnything (up to 7.8x), enabling real-time 3D perception.
        </p>
      }
      items={[
        <Paperlink key={0}
          title="Co-Me: Confidence-Guided Token Merging for Visual Geometric Transformers"
          link="https://co-me-tokens.github.io"
          venue="CVPR 2026"
          slides={[{ title: "Co-Me Presentation Slide", link: "/files/Co-Me-AirLab-Long-Presentation.pdf" }]}
        />
      ]}
    />
  );
}
