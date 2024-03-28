import React from 'react';
import './DescSection.css';

import LeftDesc from '../LeftDesc/LeftDesc';
import RightDesc from '../RightDesc/RightDesc';
import Image1 from '../../assets/ellipse3.png';
import Image2 from '../../assets/search.png';
import Image3 from '../../assets/ellipse4.png';
import Image4 from '../../assets/Group 80445.png';
import Image5 from '../../assets/ellipse5.png';
import Image6 from '../../assets/Group 80446.png';
import Image7 from '../../assets/ellipse6.png';
import Image8 from '../../assets/Group 80447.png';

const GuruDescSection = () => {
  return (
    <div className='desc_section-container'>

        <LeftDesc title="Monetize Your Experience" text="On Caffae your experience will be valued. you can decide your own call charges and earn money per minute for every call you take. " image1={Image3} image2={Image4} />
        <RightDesc title="Social Backgiving" text="By sharing the experiences and problems you faced, you can give back to the society and help the people in need." image1={Image5} image2={Image6} />
        <LeftDesc title="Increase Your Network" text="You can expand your Social Network and followers by guiding the freshers through our platform . You can build your reputation and presentation skills" image1={Image7} image2={Image8} />
    </div>
  )
}

export default GuruDescSection;