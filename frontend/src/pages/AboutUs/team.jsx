import { Fragment } from "react";
import stl from "./team.module.css";

const Team = () => {
  return (
    <Fragment>
      <div className={stl.team}>
        <h1>The Team</h1>
        <div className={stl.teamMembers}>
          <div className={stl.row}>
            <TeamMember name="" role="" img=""></TeamMember>
            <TeamMember name="" role="" img=""></TeamMember>
            <TeamMember name="" role="" img=""></TeamMember>
          </div>
          <div className={stl.row}>
            <TeamMember name="" role="" img=""></TeamMember>
            <TeamMember name="" role="" img=""></TeamMember>
            <TeamMember name="" role="" img=""></TeamMember>
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
