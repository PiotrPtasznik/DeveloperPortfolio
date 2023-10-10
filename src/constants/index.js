
import {
    backend,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    mongodb,
    git,
    docker,
    java,
    spring,
    bootstrap,
    flashcards,
    workinprogress,
    adamed,
    tauceti,
    mysql,
    webdev,
    salesforce,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: webdev,
    },
    {
      title: "React Developer",
      icon: reactjs,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
  ];
  
  const technologies = [
    {
      name: "Java",
      icon: java,
    },
    {
      name: "Spring",
      icon: spring,
    },
    {
      name: "Salesforce",
      icon: salesforce,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "HTML",
      icon: html,
    },
    {
      name: "CSS",
      icon: css,
    },

    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Bootstrap",
      icon: bootstrap,
    },
    {
      name: "Mysql",
      icon: mysql,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Git",
      icon: git,
    },
    {
      name: "Docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Internship",
      company_name: "Adamed",
      icon: adamed,
      iconBg: "#E6DEDD",
      date: "2019 - 2021",
      points: [
        "Attended to internship in Adamed Pharma, where I learnd principles of working enviroment.",
        "My task were maintaining comapny's hardware and software infrastructure,",
        " learning how to work in office enviroment and at company's platform.",
      ],
    },
    {
      title: "Internship",
      company_name: "Tauceti",
      icon: tauceti,
      iconBg: "#E6DEDD",
      date: "2021 - 2022",
      points: [
        "Actively involved in maintaining frontend applications.",
        "Learned how to use HTML, CSS, JavaScript and Rest API.",
        "Collaborated with developers to create user-friendly and visually appealing interfaces.",
      ],
    },

  ];
  
  
  const projects = [
    {
      name: "Flashcards App",
      description:[
        " I  designed, and implemented a dynamic and user-friendly mobile application",
        " App seamlessly integrates customizable flashcards, providing a personalized approach to studying",
        '	Developed responsive intuitive  user interface',
        '	RESTful API Development: Crafted a powerful API using Spring, implementing RESTful endpoints.',
        '	DTO Implementation: Facilitated secure and efficient data exchange between the front and back ends through the implementation of Data Transfer Objects',
        '	CRUD Operations: Balanced and successfully implemented CRUD operations (Create, Read, Update, Delete) through methods, ensuring a comprehensive suite of functionalities allowing to support features such as card addition, customization and deletion of flashcards.'
      ],


      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "spring",
          color: "green-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image: flashcards,
      source_code_link: "https://github.com/PiotrPtasznik",
    },
    {
      name: "--",
      description:
        "",
      tags: [],
      image: workinprogress,
      source_code_link: "https://github.com/",
    },
    {
      name: "--",
      description:
        "--",
      tags: [],
      image: workinprogress,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, projects };