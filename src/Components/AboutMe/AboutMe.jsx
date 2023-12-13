const AboutMe = () => {
  return (
    <div id="about" className="max-w-screen-xl mx-auto p-6 mt-10 md:flex ">
      <div className="mr-4 md:w-1/2">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-lg text-gray-600 mb-4">
          I am a passionate MERN stack developer with expertise in building
          dynamic and responsive web applications. My focus is on crafting
          seamless digital experiences using React, JavaScript, and other modern
          technologies.
        </p>
        <div>
          <h3 className="text-xl font-semibold mb-2">Education</h3>
          <ul className="list-disc pl-6">
            <li>
              Bachelor's Degree in Management - National University (2021)
            </li>
            <li>
              Higher Secondary Certificate - Jhalokati Govt. Collage (2020)
            </li>
            <li>
              Secondary School Certificate - Jhalokati Govt. School (2018)
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-14 ml-14 transform ease-in duration-500 hover:scale-105 ">
        <img
          src="https://i.ibb.co/wpjWtPd/20230616-162016.jpg"
          alt="Profile Picture of Arafat"
          className="grayscale-[50%] hover:grayscale-0 ease-in duration-500  w-52 hidden md:block h-52 object-cover rounded-xl"
        />
      </div>
    </div>
  );
};

export default AboutMe;
