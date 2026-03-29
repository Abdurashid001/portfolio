import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const myProjects = [
  {
    title: "Online Shop",
    category: "Full-Stack",
    tools: "PHP, MySQL, HTML, CSS",
    description: "A fully functional online shopping system with admin panel for customers.",
    image: "/images/pro1.webp"
  },
  {
    title: "Online Avtomaktab",
    category: "Full-Stack",
    tools: "PHP, Vue.js, MySQL",
    description: "A fully functional electronic driving school system with admin panel for customers.",
    image: "/images/pro2.webp" // Rasmingiz bo'lsa buni pro2.webp qiling
  },
  {
    title: "Barbershop Booking",
    category: "Frontend & Backend",
    tools: "PHP, MySql, Vue.js, Tailwind",
    description: "A fully functional barbershop booking system with admin panel for customers.",
    image: "/images/pro3.webp" // pro3.webp
  },
  {
    title: "Weather App",
    category: "Web Application",
    tools: "Django, PostgreSQL, HTML, CSS",
    description: "You can get daily weather information of any location or area through this application.",
    image: "/images/pro4.webp" // pro4.webp
  }
];

const Work = () => {
  useGSAP(() => {
  let translateX: number = 0;

  function setTranslateX() {
    const box = document.getElementsByClassName("work-box");
    const rectLeft = document
      .querySelector(".work-container")!
      .getBoundingClientRect().left;
    const rect = box[0].getBoundingClientRect();
    const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
    let padding: number =
      parseInt(window.getComputedStyle(box[0]).padding) / 2;
    translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
  }

  setTranslateX();

  let timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".work-section",
      start: "top top",
      end: `+=${translateX}`, // Use actual scroll width
      scrub: true,
      pin: true,
      id: "work",
    },
  });

  timeline.to(".work-flex", {
    x: -translateX,
    ease: "none",
  });

  // Clean up (optional, good practice)
  return () => {
    timeline.kill();
    ScrollTrigger.getById("work")?.kill();
  };
}, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {myProjects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>{project.tools}</h4>
                <p>{project.description}</p>
              </div>
              <WorkImage image={project.image} alt={project.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
