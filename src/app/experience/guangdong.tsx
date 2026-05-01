import ExperienceHead from '@/components/custom/experience_heading';
import Paperlink from '@/components/custom/paper_link';
import UnderlineLink from '@/components/links/UnderlineLink';

import GuangdongCardiovescularImage from '~/images/guangdong_cardiovescular_inst.jpg';

export default function GuangdongExperience() {
  return (
    <ExperienceHead
      icon={GuangdongCardiovescularImage}
      title="Medical Image Segmentation"
      place="Guangdong Cardiovascular Institute"
      link="https://www.gdghospital.org.cn/en/introductiontotheinstitute/info_itemId_85.html"
      from_date="Dec 2018"
      to_date="Jan 2020"
      desc={
        <p className='text-justify hyphens-auto'>
          Mentored by Professor <UnderlineLink href="https://engineering.nd.edu/faculty/yiyu-shi/">Yiyu Shi</UnderlineLink> and Dr. <UnderlineLink href="https://xiaoweixu.github.io">Xiaowei Xu</UnderlineLink>, I proposed an encoder-decoder architecture to perform semantic segmentation on cardiac MRI sequence.
          By introducing Temporal constraint on segmentation result, the model improved the accuracy by 2% on ACDC Dataset comparing to the baseline model.
        </p>
      }
      items={[
        <Paperlink key={0}
          title="Myocardial Segmentation of Cardiac MRI Sequences With Temporal Consistency for Coronary Artery Disease Diagnosis"
          link="https://www.frontiersin.org/journals/cardiovascular-medicine/articles/10.3389/fcvm.2022.804442/full"
          venue="Frontier Cardiovascular Medicine 2022"
        />
      ]}
    />
  );
}
