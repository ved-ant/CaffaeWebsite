import React from 'react';
import './DescSection.css';

import LeftDesc from '../LeftDesc/LeftDesc';
import RightDesc from '../RightDesc/RightDesc';
import Image1 from '../../assets/ellipse3.png';
import Image2 from '../../assets/search.png';
import Image3 from '../../assets/ellipse4.png';
import Image4 from '../../assets/Group 80443.png';
import Image5 from '../../assets/ellipse5.png';
import Image6 from '../../assets/service-247rafiki.png';
import Image7 from '../../assets/ellipse6.png';
import Image8 from '../../assets/verified.png';

const UserDescSection = () => {
  return (
    <div className='desc_section-container'>
        <LeftDesc title="Pocket Friendly" text="You don’t have to buy any plan or subscription to buy our services. we provide easy pay per minute service." image1={Image3} image2={Image4} />
        <RightDesc title="Easily Accessible" text="You can call Guru anytime and anywhere you want.In Special cases when Guru is not available you can book appointment for future calls." image1={Image5} image2={Image6} />
        <LeftDesc title="Verified Gurus" text="We take the quality of our Gurus seriously. Each Guru on Caffae undergoes a rigorous verification process to ensure their credibility and expertise. This way, you can trust that the advice and insights you receive are from reliable and qualified sources." image1={Image7} image2={Image8} />
    </div>
  )
}

export default UserDescSection;