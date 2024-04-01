import React from 'react';
import DescText from '../DescText/DescText';
import './RightDesc.css';

const RightDesc = ({ title, text, image1, image2 }) => {
  return (
    <div className="right_desc-container">
      <div className='right_desc-image'>
        <img src={image1} className='right_desc-bg_ellipse background-image' />
        <img src={image2} className='right_desc-top_image' />
      </div>
      <div className='right_desc-space'></div>
      <div className='right_desc-text'>
        <DescText title={title} text={text} />
      </div>

    </div>
  )
}

export default RightDesc;