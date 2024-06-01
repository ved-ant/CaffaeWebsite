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
        paragraph="A Guru is an experienced individual in any field, such as photography, JEE, business, and much more. They don’t need any degree or formal qualification in a specific field to guide someone. Experience alone is sufficient, and good communication skills are a plus."
      ></Step>
      <Step heading='Why Caffae Needs Guru?' paragraph='Caffae needs Gurus to guide individuals in their respective fields by sharing their experiences and the problems they once faced on their path. This helps people understand the field or interest they want to pursue.'></Step>
      <Step heading='Responsibility of Guru' paragraph="The Guru's responsibility will be to register on our platform and toggle the button to 'online' whenever they want to take calls. They'll then accept the call from the user, share their experiences, and earn money for every minute spent on the call."></Step>
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
