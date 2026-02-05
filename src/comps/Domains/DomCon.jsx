import React from "react";

const DomCon = () => {
  return (
    <div>
      <div>
        <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {/* PROJECT 1 */}
          <div className="hero group relative overflow-hidden transition-all hover:rounded-[70px] h-[300px] md:h-full">
            <img
              className="h-full w-full object-cover"
              src="https://img.freepik.com/free-photo/computer-program-coding-screen_53876-138060.jpg?semt=ais_hybrid&w=740&q=80"
              alt=""
            />
            <div className="opacity-0 transition-all group-hover:opacity-100 absolute inset-0 flex flex-col items-center gap-4 justify-center bg-black/10">
              <h2 className="uppercase text-2xl md:text-3xl font-bold text-white pt-2 px-3 font-[font1] border-4 rounded-full">
                Programming
              </h2>
              <p className="text-white text-sm sm:text-base md:text-lg max-w-[85%] md:max-w-[60%] mx-auto">
                Programming is the process of writing step-by-step instructions
                called code that tell a computer how to perform specific
                tasks. It is used to build software, mobile apps, games,
                automation systems, and websites. Programming involves using
                languages like Python, Java, C++, and JavaScript to solve
                problems logically and efficiently.
              </p>
            </div>
          </div>

       {/* ROBOTICS */}
<div className="group relative overflow-hidden transition-all hover:rounded-[70px] h-[300px] md:h-full">
  <img
    className="h-full w-full object-cover"
    src="https://cdn.pixabay.com/video/2022/04/19/114431-701051146_tiny.jpg"
    alt=""
  />
  <div className="opacity-0 transition-all group-hover:opacity-100 absolute inset-0 flex flex-col items-center justify-center gap-4 md:gap-6 p-4 md:p-8 bg-black/40 text-center">

    <h2 className="uppercase text-xl sm:text-2xl md:text-3xl font-bold text-white px-4 py-1 font-[font1] border-4 rounded-full">
      Robotics
    </h2>

    <p className="text-white text-sm sm:text-base md:text-lg max-w-[85%] md:max-w-[60%] mx-auto">
      Robotics combines programming, electronics, and mechanical engineering to design and build intelligent machines that can perform tasks automatically or with human assistance. It is widely used in industries, healthcare, automation, and space exploration.
    </p>

  </div>
</div>


{/* AI / DS */}
<div className="group relative overflow-hidden transition-all hover:rounded-[70px] h-[300px] md:h-full">
  <img
    className="h-full w-full object-cover"
    src="https://media.istockphoto.com/id/1387900612/photo/automation-data-analytic-with-robot-and-digital-visualization-for-big-data-scientist.jpg?s=612x612&w=0&k=20&c=50maOJU6CpVC55mYnUqtff2aiaJZ7KlmMn4jNhWD_eo="
    alt=""
  />
  <div className="opacity-0 transition-all group-hover:opacity-100 absolute inset-0 flex flex-col items-center justify-center gap-4 md:gap-6 p-4 md:p-8 bg-black/40 text-center">

    <h2 className="uppercase text-xl sm:text-2xl md:text-3xl font-bold text-white px-4 py-1 font-[font1] border-4 rounded-full">
      AI / DS
    </h2>

    <p className="text-white text-sm sm:text-base md:text-lg max-w-[85%] md:max-w-[60%] mx-auto">
      Artificial Intelligence focuses on building systems that can learn, think, and make decisions like humans, while Data Science involves analyzing large amounts of data to extract meaningful insights and predictions used in modern technologies.
    </p>

  </div>
</div>


{/* ELECTRONICS / IOT */}
<div className="group relative overflow-hidden transition-all hover:rounded-[70px] h-[300px] md:h-full">
  <img
    className="h-full w-full object-cover"
    src="https://miro.medium.com/v2/resize:fit:1400/0*f73S_6eOzRfABVr3.jpg"
    alt=""
  />
  <div className="opacity-0 transition-all group-hover:opacity-100 absolute inset-0 flex flex-col items-center justify-center gap-4 md:gap-6 p-4 md:p-8 bg-black/40 text-center">

    <h2 className="uppercase text-xl sm:text-2xl md:text-3xl font-bold text-white px-4 py-1 font-[font1] border-4 rounded-full">
      Electronics / IoT
    </h2>

    <p className="text-white text-sm sm:text-base md:text-lg max-w-[85%] md:max-w-[60%] mx-auto">
      Electronics and IoT involve designing smart devices using sensors, microcontrollers, and internet connectivity. These technologies enable automation and real-time monitoring in smart homes, healthcare systems, agriculture, and industrial applications.
    </p>

  </div>
</div>


{/* WEB DEVELOPMENT */}
<div className="group relative overflow-hidden transition-all hover:rounded-[70px] h-[300px] md:h-full">
  <img
    className="h-full w-full object-cover"
    src="https://media.istockphoto.com/id/2212360504/photo/holographic-ui-ux-display-icons-of-ux-ui-designer-creative-planning-data-visualization-web.jpg?s=612x612&w=0&k=20&c=djva2dSeRul05un08MwAq6mtJWziQ98K8eEa9y8YBh4="
    alt=""
  />
  <div className="opacity-0 transition-all group-hover:opacity-100 absolute inset-0 flex flex-col items-center justify-center gap-4 md:gap-6 p-4 md:p-8 bg-black/40 text-center">

    <h2 className="uppercase text-xl sm:text-2xl md:text-3xl font-bold text-white px-4 py-1 font-[font1] border-4 rounded-full">
      Web Development
    </h2>

    <p className="text-white text-sm sm:text-base md:text-lg max-w-[85%] md:max-w-[60%] mx-auto">
      Web development involves creating and maintaining websites and web applications using frontend technologies like HTML, CSS, and JavaScript, along with backend systems that manage servers, databases, and application logic.
    </p>

  </div>
</div>
        </div>
      </div>
    </div>
  );
};

export default DomCon;
