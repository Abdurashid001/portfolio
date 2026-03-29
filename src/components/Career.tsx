import "./styles/Career.css";
import { useLanguage } from "../context/LanguageContext";

const Career = () => {
  const { t } = useLanguage();
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>{t.career.title}</h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>{t.career.role1}</h4>
                <h5>{t.career.company1}</h5>
              </div>
              <h3>2019-2023</h3>
            </div>
            <p>{t.career.desc1}</p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>{t.career.role2}</h4>
                <h5>{t.career.company2}</h5>
              </div>
              <h3>2023 - 2025</h3>
            </div>
            <p>{t.career.desc2}</p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>{t.career.role3}</h4>
                <h5>{t.career.company3}</h5>
              </div>
              <h3>2025 - NOW</h3>
            </div>
            <p>{t.career.desc3}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
