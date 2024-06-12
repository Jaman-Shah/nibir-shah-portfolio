import React from "react";

const Banner = () => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://i.ibb.co/fkZFVF8/20240429-114635979.jpg)`,
      }}
      className="flex relative justify-center  bg-cover bg-center  items-center p-4"
    >
      <div className="h-full w-full absolute "></div>
      <div className="w-1/2 p-12 pt-0 h-screen">
        <div
          style={{
            backgroundImage: `url('https://i.ibb.co/hdxwh6w/SAVE-20240502-085337.jpg')`,
          }}
          className="h-full hover:scale-110 transition duration-500 transform rotate-6 hover:rotate-0 w-full bg-cover bg-center rounded-2xl"
        ></div>
      </div>
      <div className="w-1/2 p-4 shadow-3xl text-white">
        <div>
          <h1 className="text-[90px]">
            Nibir <span className="font-bold text-orange-400 ">Shah</span>
          </h1>
          <p className="font-bold text-3xl">Professional Web Developer</p>
          <h1 className="border-b border-green-400 font-bold text-2xl">
            Skills:
          </h1>
          <p>Web Developer</p>
          <p>Data Entry</p>

          <h1 className="border-b border-green-400 font-bold text-2xl">
            Contact Info:
          </h1>
          <p>Web Developer</p>
          <p>Data Entry</p>
          <h1 className="border-b border-green-400 font-bold text-2xl">
            Expriences :
          </h1>
          <p>Web Developer</p>
          <p>Data Entry</p>
          <h1 className="border-b border-green-400 font-bold text-2xl">
            Educations :
          </h1>
          <p>Web Developer</p>
          <p>Data Entry</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
