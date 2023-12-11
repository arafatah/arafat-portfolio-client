import Project from "./Project";

const Projects = () => {
  const projects = [
    {
    name: "FASHION - A CLOTH EXCHANGE WEBSITE",
      img: "https://i.ibb.co/7kbwVtZ/Screenshot-2023-12-11-012033.png",
      description:
        "FashionSwap, a full-stack e-commerce marvel, seamlessly integrates Firebase authentication and Stripe payment gateway. Elevating the experience, it features admin and user dashboards, ensuring secure, stylish exchanges in the realm of sustainable fashion..",
      live: "https://shop-auth-5d9ec.web.app/",
      code: " https://github.com/arafatah/cloth-exchange-client",
      technologies: [
        "React",
        "Node",
        "Express",
        "JavaScript",
        "MongoDB",
        
      ],
    },

    {
      name: "TRAVOL - A TRAVEL GUIDE PLATFORM",
      img: "https://i.ibb.co/Jzrk39q/Screenshot-2023-12-11-012456.png",
      description:
        "TRAVOL, your ultimate travel guide platform, beckons with a triple-tiered login system for admins, tour guides, and tourists. Packed with myriad features, it's your gateway to seamless and enriched travel experiences.",
      live: "https://travel-with-arafat.netlify.app/",
      code: "https://github.com/arafatah/travel-guide-client",
      technologies: [
        "React",
        "Node",
        "Express",
        "daisyUI",
        "Firebase",
      ],
    },

    {
    name: "LOVE-ME - A WEEDING MANAGEMENT WEBSITE",
      img: "https://i.ibb.co/QQy9YG3/Screenshot-2023-12-11-013002.png",
      description:
      "Elevate your wedding planning with our sophisticated platform built on React, JavaScript, and Firebase. Seamlessly manage every detail, from guest lists to vendor coordination, ensuring a stress-free and memorable celebration.",
      live: "https://wedding-event-management-70063.web.app",
      code: "https://github.com/arafatah/event-managment-client",
      technologies: [
        "React",
        "Node",
        "Firebase",
      ],
    },

    {
      name: "CAR-SELLING - A WEBSITE FOR CAR SELLING",
      img: "https://i.ibb.co/5rs6PHb/Screenshot-2023-12-11-014318.png",
      description:
      "Revolutionize your car buying experience with our dynamic platform. Powered by React and JavaScript, explore a vast inventory, streamline sales, and find your dream car effortlessly.",
      live: "https://car-selling-001.web.app/",
      code: "https://github.com/arafatah/car-selling-brand-cleint",
      technologies: [
        "javascript",
        "Node",
        "React",
        "Firebase",
      ],
    },
  ];
  return (
    <div id="projects" className="max-w-screen-xl mx-auto p-6 mt-14">
    <div className="text-3xl font-bold mb-8">Projects</div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-2">
      {projects.map((project, index) => (
        <Project key={index} project={project} />
      ))}
    </div>
  </div>
  );
};

export default Projects;
