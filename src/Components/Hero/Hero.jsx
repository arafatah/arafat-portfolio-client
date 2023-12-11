import Container from "../Container/Container";
import Animation from "../../../public/Animation - 1702240093761.json";
import Lottie from "lottie-react";
const Hero = () => {
  return (
    <div>
      <Container>
        <div className="font-semibold text-6xl md:text-7xl sm:text-2xl leading-[72px] md:leading-[70px] sm:leading-[40px] max-w-full md:max-w-4xl bg-[linear-gradient(121.57deg, #FFFFFF 18.77%, rgba(255, 255, 255, 0.66) 60.15%)] bg-clip-text mb-16 md:mb-4 md:mt-8 sm:mb-8">
          Welcome To <br />
          My Personal Portfolio
        </div>
        <div className="flex">
          <div className="">
            <p className="max-w-4xl text-base text-justify lg:text-lg xl:text-xl leading-6 lg:leading-8 xl:leading-8 font-light pb-3.6rem lg:pb-24 sm:pb-16 text-gray-500">
              Arafat, a skilled MERN developer, crafts exceptional digital
              experiences with React, JavaScript, and Tailwind CSS. Specializing
              in dynamic, responsive web apps, he prioritizes clean code.
              Proficient in MongoDB, Express.js, and Node.js, Arafat delivers
              scalable solutions, contributing to impactful and innovative
              projects as a collaborative team member.
            </p>
            <a href="/public/White Minimalist Professional Resume.pdf" download='White Minimalist Professional Resume.pdf'>
              <button className="btn btn-outline btn-primary">
                Download Resume
              </button>
            </a>
          </div>
          <div className="h-52">
            <Lottie
              animationData={Animation}
              loop={true}
              className="w-[650px] relative top-[-289px] left-[116px] hidden md:block"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
