import { PropsWithChildren } from "react";
import "./styles/Landing.css";
import { useLanguage } from "../context/LanguageContext";

const Landing = ({ children }: PropsWithChildren) => {
  const { t } = useLanguage();
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>{t.landing.hello}</h2>
          </div>
          <div className="landing-info">
            <h3>{t.landing.role}</h3>
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
