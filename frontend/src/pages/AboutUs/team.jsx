import { Fragment } from "react";
import stl from "./team.module.css";
import image1 from "../../assets/eshu.jpg";
import image3 from "../../assets/gungun.png";
import image2 from "../../assets/vedant.jpeg";
import borderImg from "./ellipse12.png";
const Team = () => {
  return (
    <Fragment>
      <div className={stl.team}>
        <h1>The Team</h1>
        <div className={stl.teamMembers}>
          <div className={stl.row}>
            <TeamMember
              name="Eshu Kholi"
              role="Co-Founder"
              image={image1}
            ></TeamMember>
            <TeamMember
              name="Vedant Gadodia"
              role="TechLead"
              image={image2}
            ></TeamMember>
            <TeamMember
              name="Gungun Hindoja"
              role="Product Developer"
              image={image3}
            ></TeamMember>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const TeamMember = (props) => {
  return (
    <div className={stl.member}>
      <div className={stl.image}>
        <img src={props.image}></img>
        <img src={borderImg} alt="" />
      </div>
      <div className={stl.name}>{props.name}</div>
      <div className={stl.role}>{props.role}</div>
    </div>
  );
};

export default Team;
