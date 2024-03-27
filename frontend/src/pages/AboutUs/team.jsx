import { Fragment } from "react";
import stl from "./team.module.css";
import image3 from '../../assets/Mask group.png';
const Team = () => {
  return (
    <Fragment>
      <div className={stl.team}>
        <h1>The Team</h1>
        <div className={stl.teamMembers}>
          <div className={stl.row}>
            <TeamMember name="Eshu Kholi" role="Co-Founder" img=""></TeamMember>
            <TeamMember name="Vedant Gadodia" role="TechLead" img=""></TeamMember>
            <TeamMember name="Gungun Hindoja" role="Product Developer" img=""></TeamMember>
          </div>
          
        </div>
      </div>
    </Fragment>
  );
};

const TeamMember = (props) => {
  return (
    <div className={stl.member}>
      <div className={stl.img}>
        <img src={props.imag}></img>
      </div>
      <div className={stl.name}>{props.name}</div>
      <div className={stl.role}>{props.role}</div>
    </div>
  );
};

export default Team;
