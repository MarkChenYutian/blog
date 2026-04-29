import ExperienceHead from '@/components/custom/experience_heading';
import Paperlink from '@/components/custom/paper_link';
import UnderlineLink from '@/components/links/UnderlineLink';

import LTIImage from '~/images/lti.png';

export default function LTIExperience() {
  return (
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
        <Paperlink key={0}
          title="Token Prediction as Implicit Classification to Identify LLM-Generated Text"
          link="https://aclanthology.org/2023.emnlp-main.810/"
          venue="EMNLP 2023"
        />
      ]}
    />
  );
}
