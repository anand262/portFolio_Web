import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-[#0a192f] text-gray-300"
      id="about_section"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Hi. I'm Anand Shinde, nice to meet you. Please take a look around.
            </p>
          </div>
          <div>
            <p>
              Hi, I had Completed an extensive training program from Newton
              School of 6 months; gained expertise in Web Technologies required
              to become a FullStack / MERN Stack Developer. I am passionate
              about building excellent software and also developed multiple
              innovative projects using Java, HTML, CSS, Bootstrap, Tailwind
              CSS, JavaScript, NodeJS, Express JS, GITHUB, and REACT JS.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
