const AboutMe = () => {
    return (
      <div className="max-w-screen-xl mx-auto p-6 mt-10">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-gray-600 mb-4">
            I am a passionate MERN stack developer with expertise in building dynamic and responsive web applications. My focus is on crafting seamless digital experiences using React, JavaScript, and other modern technologies.
          </p>
          <div>
            <h3 className="text-xl font-semibold mb-2">Education</h3>
            <ul className="list-disc pl-6">
              <li>Bachelor's Degree in Management - National University (2021)</li>
              <li>Higher Secondary Certificate - Jhalokati Govt. Collage (2020)</li>
              <li>Secondary School Certificate - Jhalokati Govt. School (2018)</li>
            </ul>
          </div>
        </div>
      </div>
    );
  };
  
  export default AboutMe;