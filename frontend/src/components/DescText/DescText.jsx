import React from 'react';

import './DescText.css';

const DescText = ({title, text}) => {
  return (
    <div className='desc_text-container'>
      <div className='desc_text-header'>
        {title}
      </div>
      <div className='desc_text-basetext'>
        {text}
      </div>
    </div>
  )
}

export default DescText;