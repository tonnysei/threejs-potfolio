// import { useState } from 'react';
// import Globe from 'react-globe.gl';

// import Button from '../components/Button.jsx';

const About = () => {
  // const [hasCopied, setHasCopied] = useState(false);

  // const handleCopy = () => {
  //   navigator.clipboard.writeText(' adrian@jsmastery.pro');
  //   setHasCopied(true);

  //   setTimeout(() => {
  //     setHasCopied(false);
  //   }, 2000);
  // };

  return (
    <section className="c-space my-20" id="about">
  <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
    {/* What We Do Section */}
    <div className="col-span-1 md:col-span-2 xl:row-span-3">
      <div className="grid-container">
        <img src="assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />
        <div>
          <p className="grid-headtext">What We Do</p>
          <p className="grid-subtext">
            We handle every aspect of your website’s journey. From designing intuitive <span className="font-bold bg-gradient-to-b from-teal-500 via-purple-500 to-red-500 text-transparent bg-clip-text">UI/UX</span> to developing robust <span className="font-bold bg-gradient-to-b from-teal-500 via-purple-500 to-red-500 text-transparent bg-clip-text">front-end</span> and <span className="font-bold bg-gradient-to-b from-teal-500 via-purple-500 to-red-500 text-transparent bg-clip-text">back-end</span> functionality, we create seamless digital experiences. Our team takes care of everything—from initial concept and coding to <span className="font-bold bg-gradient-to-b from-teal-500 via-purple-500 to-red-500 text-transparent bg-clip-text">deploying</span> your site live, ensuring a smooth and efficient process every step of the way.
          </p>
        </div>
      </div>
    </div>

    {/* Tech Stack Section */}
    <div className="col-span-1 md:col-span-1 xl:row-span-3">
      <div className="grid-container">
        <img src="assets/grid2.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />
        <div>
          <p className="grid-headtext">Tech Stack</p>
          <p className="grid-subtext">
            We specialize in a variety of languages, frameworks, and tools that allow us to build robust and scalable applications.
          </p>
        </div>
      </div>
    </div>

    {/* Who Are We Section */}
    <div className="col-span-1 md:col-span-2 xl:col-span-3 xl:row-span-3">
      <div className="grid-container">
        <div class="flex justify-center items-center"><img src="assets/grid3.png" alt="grid-3" className=" w-[550px] sm:h-[266px] h-fit  rounded-2xl" /></div>
        <div>
          <p className="grid-headtext">Who Are We?</p>
          <p className="grid-subtext">
            At [Agency Name], we are a team of three passionate developers committed to delivering innovative web solutions. With expertise in both frontend and backend technologies, we work collaboratively to create dynamic, user-friendly websites that help businesses thrive in the digital world.
          </p>
        </div>
      </div>
    </div>
    
  </div>
</section>


  );
};

export default About;
