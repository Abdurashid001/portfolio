import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
          </div>
          <div className="landing-info">
            <h3>Backend Developer</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1"></div>
              <h3>_</h3>
              <div className="landing-h2-2"></div>
            </h2>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
