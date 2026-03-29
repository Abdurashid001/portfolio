import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Student</h4>
                <h5>Tashkent Information Technologies University</h5>
              </div>
              <h3>2019-2023</h3>
            </div>
            <p>
              My background in cybersecurity helps me understand system vulnerabilities and security principles. 
              I focus on creating secure, reliable systems and protecting applications from potential threats.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Developer</h4>
                <h5>Merit Chemicals & Web Drivers MCHJ</h5>
              </div>
              <h3>2023 - 2025</h3>
            </div>
            <p>
              With experience as a software developer, I have built web applications and backend systems. 
              I focus on performance, scalability, and writing clean, maintainable code.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Developer & Sysadmin</h4>
                <h5>Navoiy mining and metallurgy combine</h5>
              </div>
              <h3>2025 - NOW</h3>
            </div>
            <p>
              Software developer with experience in backend systems and infrastructure. 
              Focused on building secure, scalable, and reliable solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
