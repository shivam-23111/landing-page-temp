import React from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";
import MagicButton from "./MagicButton";

const Experience = () => {
  return (
    <div className="py-10 w-full" id="members">
      <h1 className="heading">
        Our <span className="text-purple">Coordinators</span> at{" "}
        <span className="text-purple">Signodes</span>
      </h1>

      <div className="w-full mt-5 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              borderRadius: `calc(1.75rem * 0.96)`,
            }}
            className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <img
                src={card.thumbnail}
                alt={card.thumbnail}
                className="lg:w-32 md:w-20"
              />
              <div className="lg:ms-5">
                <h1 className="text-start text-xl md:text-2xl font-bold">
                  {card.title}
                </h1>
                <p className="text-start text-white-100 mt-3 font-semibold">
                  {card.desc}
                </p>
                <div className="flex items-center justify-between mt-7 mb-3">
                  <div className="flex items-center gap-2">
                    {card.socials.map((icon, index) => (
                      <div
                        key={index}
                        className="border border-white/[.2] rounded-full bg-white lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      >
                        <a key={index} href={card.socialslinks[index]}>
                          <img src={icon} alt="icon5" className="p-2" />
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Button>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <a href="/club_coordinators">
          <MagicButton
            title="View all coordinators"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
    </div>
  );
};

export default Experience;
