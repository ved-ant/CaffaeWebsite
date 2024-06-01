import stl from "./vision.module.css";
import image1 from "../../assets/romil.jpeg";
import image2 from "../../assets/comma.png"
const Vision = () => {
  return (
    <div className={stl.wrapper}>
      <div className={stl.parent}>
        <div className={stl.left}>
          <h2>
            Caffae’s vision is to provide everyone{" "}
            <span className={stl.textHighlight}>easy access</span> to
            personalized guidance in any field of interest without wasting time.
          </h2>
          <span className={stl.para}>
          On our platform, both users and Gurus benefit. Users can get guidance from any Guru at any time, while Gurus get paid for every minute they spend on a call. This way, they can also increase their network.
          </span>
        </div>
        <div className={stl.right}>
          <div className={stl.profileCircle}>
            {" "}
            <img src={image1} alt="" />
          </div>
          <div className={stl.profileBox}>
            <span className={stl.name}>
              Romil Seth
              <br /> Founder & CEO
            </span>
          <span ><img src={image2} alt="" /></span>
            <span className={stl.quote}>Fail as early as possible.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;
