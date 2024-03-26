import "./HeroBox.css";
import CountUp from "react-countup";

function HeroBox({ title, count, children }) {
  return (
    <>
      <div className="heroBoxContainer">
        <div className="heroBoxHeader">
          {children}
          <b className="heroBoxTitel">{title} </b>
        </div>
        <p className="heroBoxCount">
            <CountUp
                start={0}
                end={count}
                duration={4}
                delay={0.5}
                separator={''}
            />
        </p>
      </div>
    </>
  );
}

export default HeroBox;
