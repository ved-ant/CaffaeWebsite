import styl from "./Section1.module.css";
import img1 from '../../assets/Guru/frame41.png'
import img2 from  '../../assets/Guru/rectangle6 (1).png'
const Section1 = () => {
  return (
    <div className={styl.container}>
    <img src={img1} className={styl.gr} style={{position:'absolute'}}></img>
    <img src={img2} className={styl.gr} style={{position:'absolute'}}></img>
      <Step
        heading="Who is Guru?"
        paragraph="A Guru is an experienced person in any field for ex. photography, JEE , Business and much more. He/She doesn’t need any degree or qualification in any field to guide someone. Just experience is enough and good communication skills are plus."
      ></Step>
      <Step heading='Why Caffae Needs Guru?' paragraph='Caffae needs Guru to Guide individuals in their respective field by sharing their experience and problems they once faced in their path so that people understand the field or interest they want to pursue.'></Step>
      <Step heading='Responsibility of guru' paragraph='Guru’s responsibility will be to register on our platform and turn the toggle button to online whenever they want to take calls, accept the call from user, start sharing experience and earn the money for every minute you spend on call.'></Step>
    </div>
  );
};

export default Section1;

const Step = (props) => {
  const headingstl = {
    color: "#FFF",
    textAlign: "left",
    fontFamily: "Helvetica",
    fontSize: "34px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "normal",
    display: "inline",
  };

  const stylpara = {
    width: "40%",
    height: "92px",
    display: "inline",
    flexShrink: 0,
    color: "#FFF",
    fontFamily: "Helvetica",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
  };

  return (
    <div
    className={styl.stepwrap}
    >
      <h2 style={headingstl}>{props.heading}</h2>
      <p className={styl.stylpara}>{props.paragraph}</p>
    </div>
  );
};
