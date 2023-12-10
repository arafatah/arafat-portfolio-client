import Project from "./Project";

const Projects = () => {
  const projects = [
    {
      name: "Ema-john",
      img: "https://i.ibb.co/8rYQXzR/ema-john.png",
      description:
        "A full-stack e-commerce website with firebase authentication, stripe payment gateway, and dashboard functionality for admin and user.",
      live: "https://ema-john-simple-6b1b6.web.app/",
      code: "Hello.com",
      technologies: [
        "React",
        "Node",
        "Express",
        
      ],
    },

    {
      name: "Ema-john",
      img: "https://i.ibb.co/8rYQXzR/ema-john.png",
      description:
        "A full-stack e-commerce website with firebase authentication, stripe payment gateway, and dashboard functionality for admin and user.",
      live: "https://ema-john-simple-6b1b6.web.app/",
      code: "Hello.com",
      technologies: [
        "React",
        "Node",
        "Express",
        "MongoDB",
        "Firebase",
        "Stripe",
        "Bootstrap",
        "Material-UI",
        "Heroku",
      ],
    },

    {
      name: "Ema-john",
      img: "https://i.ibb.co/8rYQXzR/ema-john.png",
      description:
        "A full-stack e-commerce website with firebase authentication, stripe payment gateway, and dashboard functionality for admin and user.",
      live: "https://ema-john-simple-6b1b6.web.app/",
      code: "Hello.com",
      technologies: [
        "React",
        "Node",
        "Express",
        "MongoDB",
        "Firebase",
        "Stripe",
        "Bootstrap",
        "Material-UI",
        "Heroku",
      ],
    },

    {
      name: "Ema-john",
      img: "https://i.ibb.co/8rYQXzR/ema-john.png",
      description:
        "A full-stack e-commerce website with firebase authentication, stripe payment gateway, and dashboard functionality for admin and user.",
      live: "https://ema-john-simple-6b1b6.web.app/",
      code: "Hello.com",
      technologies: [
        "React",
        "Node",
        "Express",
        "MongoDB",
        "Firebase",
        "Stripe",
        "Bootstrap",
        "Material-UI",
        "Heroku",
      ],
    },

    {
      name: "Ema-john",
      img: "https://i.ibb.co/8rYQXzR/ema-john.png",
      description:
        "A full-stack e-commerce website with firebase authentication, stripe payment gateway, and dashboard functionality for admin and user.",
      live: "https://ema-john-simple-6b1b6.web.app/",
      code: "Hello.com",
      technologies: [
        "React",
        "Node",
        "Express",
        "MongoDB",
        "Firebase",
        "Stripe",
        "Bootstrap",
        "Material-UI",
        "Heroku",
      ],
    },

    {
      name: "Ema-john",
      img: "https://i.ibb.co/8rYQXzR/ema-john.png",
      description:
        "A full-stack e-commerce website with firebase authentication, stripe payment gateway, and dashboard functionality for admin and user.",
      live: "https://ema-john-simple-6b1b6.web.app/",
      code: "Hello.com",
      technologies: [
        "React",
        "Node",
        "Express",
        "MongoDB",
        "Firebase",
        "Stripe",
        "Bootstrap",
        "Material-UI",
        "Heroku",
      ],
    },

    
  ];
  return (
    <div className="max-w-screen-xl mx-auto p-6">
    <div className="text-3xl font-bold mb-8">Projects</div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
      {projects.map((project, index) => (
        <Project key={index} project={project} />
      ))}
    </div>
  </div>
  );
};

export default Projects;
