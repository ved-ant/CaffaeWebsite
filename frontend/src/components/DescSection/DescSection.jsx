import React from 'react';
import './DescSection.css';

import LeftDesc from '../../components/LeftDesc/LeftDesc';
import RightDesc from '../../components/RightDesc/RightDesc';
import Image1 from '../../assets/ellipse3.png';
import Image2 from '../../assets/search.png';
import Image3 from '../../assets/ellipse4.png';
import Image4 from '../../assets/motivation.png';
import Image5 from '../../assets/ellipse5.png';
import Image6 from '../../assets/experts.png';
import Image7 from '../../assets/ellipse6.png';
import Image8 from '../../assets/verified.png';

const DescSection = () => {
  return (
    <div className='desc_section-container'>
        <RightDesc title="Personalized Guidance" text="We understand that every journey is unique. That's why we prioritize personalized connections between seekers and Gurus. Our platform facilitates one-on-one interactions, allowing you to have meaningful conversations and receive tailored guidance that aligns with your goals and aspirations." image1={Image1} image2={Image2} />
        <LeftDesc title="Inspiration and Motivation" text="Our Gurus are not just knowledgeable mentors; they are also a source of inspiration. By sharing their own stories of triumphs, setbacks, and lessons learned, they ignite your motivation and provide the encouragement you need to stay focused and determined on your path to success." image1={Image3} image2={Image4} />
        <RightDesc title="Diverse Expertise" text="Regardless of your area of interest, Caffae has Gurus from various fields and industries. Whether you're pursuing entrepreneurship, arts and creativity, career development, or personal growth, you'll find experienced Gurus who can provide targeted advice and help you make informed decisions." image1={Image5} image2={Image6} />
        <LeftDesc title="Verified Gurus" text="We take the quality of our Gurus seriously. Each Guru on Caffae undergoes a rigorous verification process to ensure their credibility and expertise. This way, you can trust that the advice and insights you receive are from reliable and qualified sources." image1={Image7} image2={Image8} />
    </div>
  )
}

export default DescSection;