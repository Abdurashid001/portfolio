export const translations = {
  en: {
    nav: {
      about: "ABOUT",
      work: "WORK",
      contact: "CONTACT"
    },
    landing: {
      hello: "Hello! I'm",
      role: "Backend Developer"
    },
    about: {
      title: "About Me",
      desc: "I am a software developer focused on building scalable web applications and efficient systems. I develop REST APIs and work on creating reliable and high-performance solutions. I prioritize clean architecture, security, and performance in every project. I enjoy solving real-world problems and turning ideas into working products."
    },
    whatIDo: {
      title: "What I Do",
      desc1: "Software Developer focused on scalable systems and clean code. Creating fast, reliable, and efficient solutions.",
      desc2: "System Administrator focused on system reliability and security. Keeping infrastructure efficient and stable.",
      skillset: "Skillset & tools",
      develop: "DEVELOP",
      sysadmin: "SYSADMIN"
    },
    techstack: {
      title: "My Techstack"
    },
    work: {
      title: "My Work",
      projects: [
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
          image: "/images/pro2.webp"
        },
        {
          title: "Barbershop Booking",
          category: "Frontend & Backend",
          tools: "PHP, MySql, Vue.js, Tailwind",
          description: "A fully functional barbershop booking system with admin panel for customers.",
          image: "/images/pro3.webp"
        },
        {
          title: "Weather App",
          category: "Web Application",
          tools: "Laravel, Dart, OpenWeather API, Flutter",
          description: "You can get daily weather information of any location or area through this application.",
          image: "/images/pro4.webp"
        }
      ]
    },
    career: {
      title: "Career",
      role1: "Student",
      company1: "Tashkent Information Technologies University",
      desc1: "My background in cybersecurity helps me understand system vulnerabilities and security principles. I focus on creating secure, reliable systems and protecting applications from potential threats.",
      role2: "Developer",
      company2: "Merit Chemicals & Web Drivers MCHJ",
      desc2: "With experience as a software developer, I have built web applications and backend systems. I focus on performance, scalability, and writing clean, maintainable code.",
      role3: "Developer & Sysadmin",
      company3: "Navoiy mining and metallurgy combine",
      desc3: "Software developer with experience in backend systems and infrastructure. Focused on building secure, scalable, and reliable solutions."
    },
    contact: {
      title: "Drop me a message",
      email: "Email",
      phone: "Phone",
      social: "Social",
      designed: "Designed and Developed by"
    }
  },
  ru: {
    nav: {
      about: "ОБО МНЕ",
      work: "ПОРТФОЛИО",
      contact: "КОНТАКТЫ"
    },
    landing: {
      hello: "Привет! Я",
      role: "Backend-разработчик"
    },
    about: {
      title: "Обо мне",
      desc: "Я разработчик программного обеспечения, специализируюсь на создании масштабируемых веб-приложений и эффективных систем. Разрабатываю REST API и создаю надежные высокопроизводительные решения. В каждом проекте уделяю особое внимание чистой архитектуре, безопасности и производительности. Мне нравится решать реальные задачи и превращать идеи в рабочие продукты."
    },
    whatIDo: {
      title: "Мои навыки",
      desc1: "Разработчик ПО, ориентированный на масштабируемые системы и чистый код. Создаю быстрые и надежные решения.",
      desc2: "Системный администратор, сфокусированный на надежности и безопасности систем. Поддерживаю стабильную работу инфраструктуры.",
      skillset: "Навыки и инструменты",
      develop: "РАЗРАБОТКА",
      sysadmin: "СИСАДМИН"
    },
    techstack: {
      title: "Стек технологий"
    },
    work: {
      title: "Мои работы",
      projects: [
        {
          title: "Интернет-магазин",
          category: "Full-Stack",
          tools: "PHP, MySQL, HTML, CSS",
          description: "Полноценная система интернет-магазина с панелью администратора для клиентов.",
          image: "/images/pro1.webp"
        },
        {
          title: "Онлайн Автошкола",
          category: "Full-Stack",
          tools: "PHP, Vue.js, MySQL",
          description: "Полноценная электронная система автошколы с панелью администратора для студентов.",
          image: "/images/pro2.webp"
        },
        {
          title: "Бронирование в Барбершоп",
          category: "Frontend & Backend",
          tools: "PHP, MySql, Vue.js, Tailwind",
          description: "Полнофункциональная система бронирования для барбершопа с панелью администратора.",
          image: "/images/pro3.webp"
        },
        {
          title: "Приложение Погоды",
          category: "Web Application",
          tools: "Django, PostgreSQL, HTML, CSS",
          description: "Вы можете получать ежедневную информацию о погоде в любом месте или районе через это приложение.",
          image: "/images/pro4.webp"
        }
      ]
    },
    career: {
      title: "Карьера",
      role1: "Студент",
      company1: "ТУИТ",
      desc1: "Специальность кибербезопасности помогает мне понимать уязвимости систем и принципы безопасности. Фокусируюсь на создании надежных систем и защите приложений от потенциальных угроз.",
      role2: "Разработчик",
      company2: "Merit Chemicals & Web Drivers MCHJ",
      desc2: "Имею опыт разработки веб-приложений и backend-систем. Делаю упор на производительность, масштабируемость и написание чистого, поддерживаемого кода.",
      role3: "Разработчик и Сисадмин",
      company3: "Навоийский горно-металлургический комбинат",
      desc3: "Разработчик ПО с опытом работы с back-end системами и инфраструктурой. Ориентирован на создание безопасных и масштабируемых решений."
    },
    contact: {
      title: "Напишите мне",
      email: "Почта",
      phone: "Телефон",
      social: "Соц. сети",
      designed: "Разработано"
    }
  }
};

export type Language = "en" | "ru";
