import stl from "./vision.module.css";

const Vision = () => {
  return (
    <div className={stl.parent}>
      <div className={stl.left}>
        <h2>
          Caffae’s vision is to provide everyone <span className={stl.textHighlight}>easy access</span> to personalized
          guidance in any field of interest without wasting time.
        </h2>
        <p>
          At our Platform both user and Guru will get benefits. Users can get
          guidance from any guru at any time they want while Gurus will get paid
          for every minute they spend on call and this way they can also
          increase their network.
        </p>
      </div>
      <div className={stl.right}>
        <div className={stl.profileCircle}> </div>
        <div className={stl.profileBox}>
            <span className={stl.name}></span>
            <span className={stl.quote}></span>
        </div>
      </div>
    </div>
  );
};

export default Vision