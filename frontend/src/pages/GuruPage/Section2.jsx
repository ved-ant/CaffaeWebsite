
import stl from "./Section3.module.css";

import img1 from './../../assets/Guru/frame39.png'
import img2 from './../../assets/Guru/frame39 (1).png'
import img3 from './../../assets/Guru/frame39 (2).png'

const Section2 = () => {
  return (
    <div className={stl.cont}>
      <h2 className={stl.head}>Perks of being a Guru at Caffae</h2>
      <div className={stl.cardsContainer}>
      <Card graphic={img1} heading='Social Backgiving' paragraph='By sharing the experiences and problems you faced, you can give back to the society and help the people in need.'> </Card>
      <Card graphic={img2} heading='Monetize your experience' paragraph='On Caffae your experience will be valued. you can decide your own call charges and earn money per minute for every call you take. '> </Card>
      <Card graphic={img3} heading='Increase your network' paragraph='By Guiding the People who are newcomers in your field you can increase your social network and also we will allow to share your other social medias on our platform.'> </Card>
      </div>
    </div>
  );
};

export default Section2;

const Card = (props) => {

  const cardstyle = {
    width: '367px',
    height: '520px',
    borderRadius: '24px',
    background: '#FFF',
    boxShadow: '0px 4px 20px 0px rgba(0, 0, 0, 0.25)',
    margin:'8px',
    display:'flex',
    flexDirection:"column",
  };

  const headingStyle ={
    color: '#263045',
    fontFamily: 'Helvetica',
    fontSize: '24px',
    fontStyle: 'normal',
    fontWeight: 700,
    lineHeight: 'normal',
    paddingLeft: '30px'
  }

  const parastyle={
    width: '90%',
    color: '#515151',
    fontFamily: 'Helvetica',
    fontSize: '20px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: 'normal',
    paddingLeft:'30px', 
    position:'relative',
    bottom :'5%'
  }

  return <div style={cardstyle}>
   
    <img src={props.graphic} alt=""></img>
    <h3 style={headingStyle}>{props.heading}</h3>
    <p style={parastyle}>{props.paragraph}</p>
  </div>;
};
