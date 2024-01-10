import './DescSection.css'

import React, { useState } from 'react';
import UserDescSection from '../UserDescSection/UserDescSection';
import GuruDescSection from '../GuruDescSection/DescSection';

const DescSection = () => {
  const [mode, setMode] = useState('user');
  

  return (
    <div className='desc'>
     <div className='top'><div className='switcher'><div className={`userbtn ${mode=="user"?"active":""} `} onClick={()=>{setMode("user")}}>User</div><div className={`gurubtn ${mode=="guru"?"active":""} `} onClick={()=>{setMode("guru")}}>Guru</div></div></div>
      <div className='fade-in'>
      {mode=="user"?<UserDescSection/>:<GuruDescSection />}
      </div>
    </div>
  );
};

export default DescSection;
