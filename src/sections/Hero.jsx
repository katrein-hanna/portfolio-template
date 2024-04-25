import React from "react";
import PROFILE_PIC from "../assets/images/r-profile.png";

import { Link } from "react-scroll";

import ICON_1 from "../assets/images/icon2.png";
import ICON_2 from "../assets/images/icon3.png";
import ICON_3 from "../assets/images/icon4.png";
import ICON_4 from "../assets/images/icon1.png";
import { STATS } from "../utils/data";
import StatInfoCard from "../components/StatInfoCard";

function Hero() {
  return (
    <section id="hero" className="container lg:max-w-[85rem] mx-auto px-8">
      <div className="flex flex-col lg:flex-row gap-14 items-center justify-between mt-[80px]">
        <div className="order-2 lg:order-1 text-center lg:text-left mt-16 lg:mt-0">
          <h3 className="text-xl lg:text-2xl font-medium text-black">
            👋 Hi, I'm New User
          </h3>
          <h1 className="w-full lg:w-[480px] text-4xl lg:text-5xl font-bold leading-[50px] lg:leading-[60px] mt-3 bg-gradient-primary bg-clip-text text-transparent">
            Building Scalable & User Centric Web Apps
          </h1>

          <p className="w-full lg:w-[500px] text-sm lg:text-base mt-4">
            I'm a passionate Full Stack Frontend Developer crafting responsive,
            accessible, and dynamic web experiences using React and TailwindCSS
          </p>

          <div className="flex justify-center lg:justify-start gap-4 md:gap-8 mt-6">
            <Link to="projects" smooth spy offset="100">
              <button className="flex-1 md:flex-none action-btn-outline btn-scale-anim">
                View My Work
              </button>
            </Link>
            <button className="flex-1 md:flex-none action-btn btn-scale-anim">
              Download Resume
            </button>
          </div>
        </div>

        <div className="w-[275px] md:w-[370px] h-[325px] md:h-[428px] bg-orange-100/50 rounded-4xl relative order-1 lg:order-2">
          <img src={PROFILE_PIC} alt="Profile Pic" className="profile-pic" />

          <img
            src={ICON_1}
            alt="Icon 1"
            className="icon-img -left-7 bottom-15 routate-[1.75deg]"
          />

          <img
            src={ICON_2}
            alt="Icon 2"
            className="icon-img left-1 md:left-8 -bottom-6 rotate-[2.57deg]"
          />

          <img
            src={ICON_3}
            alt="Icon 3"
            className="icon-img left-22 md:left-[148px] -bottom-9 rotate-[3.75deg] "
          />

          <img
            src={ICON_4}
            alt="Icon 4"
            className="icon-img left-44 md:left-[255px] -bottom-9 md:-bottom-12 rotate-[4.75deg]"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 md:gap-8 gap-4 mt-16 md:mt-24 ">
        {STATS.map((item) => (
          <StatInfoCard key={item.id} count={item.count} label={item.label} />
        ))}
      </div>
    </section>
  );
}

export default Hero;
