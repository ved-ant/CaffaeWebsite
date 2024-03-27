import stl from "./vision.module.css";
import image1 from"../../assets/Mask group.png";
const Vision = () => {
  return (
    <div className={stl.wrapper}>
    <div className={stl.parent}>
      <div className={stl.left}>
        <h2>
          Caffae’s vision is to provide everyone <span className={stl.textHighlight}>easy access</span> to personalized
          guidance in any field of interest without wasting time.
        </h2>
        <span className={stl.para}>
          At our Platform both user and Guru will get benefits. Users can get
          guidance from any guru at any time they want while Gurus will get paid
          for every minute they spend on call and this way they can also
          increase their network.
        </span>
      </div>
      <div className={stl.right}>
        <div className={stl.profileCircle} > </div>
        <div className={stl.profileBox}>
            <span className={stl.name}>Romil Seth<br/> Founder & CEO</span>
            <span className={stl.quote}>
              Fail as early as possible
            </span>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Vision