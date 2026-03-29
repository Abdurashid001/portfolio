import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";
import { useLanguage } from "../context/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>{t.contact.title}</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>{t.contact.email}</h4>
            <p>
              <a href="mailto:emailingizni_kuzating@mail.com" data-cursor="disable">
                yetmishovabdurashid13@gmail.com
              </a>
            </p>
            <h4>{t.contact.phone}</h4>
            <p>
              <a href="tel:+998939013631" data-cursor="disable">
                +998 93 901 36 31
              </a>
            </p>
          </div>
          <div className="contact-box">
            <h4>{t.contact.social}</h4>
            <a
              href="https://github.com/Abdurashid001"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/yetmishov-abdurashid-a6b0663bb/?skipRedirect=true"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
            <a
              href="https://t.me/Abdurashid_Yetmishov"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Telegram <MdArrowOutward />
            </a>
            <a
              href="https://www.instagram.com/iamabdurashid/"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              {t.contact.designed} <br /> by <span>Abdurashid Yetmishov</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
