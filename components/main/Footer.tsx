import React from "react";
import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";
import { SOCIAL_LINKS } from "@/constants/social";

const linkClassName =
  "flex flex-row items-center my-[15px] text-gray-200 transition-colors hover:text-white";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Community</div>
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClassName}
            >
              <RxGithubLogo />
              <span className="text-[15px] ml-[6px]">Github</span>
            </a>
          </div>

          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Social Media</div>
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClassName}
            >
              <RxLinkedinLogo />
              <span className="text-[15px] ml-[6px]">Linkedin</span>
            </a>
          </div>

          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">About</div>
            <a href={SOCIAL_LINKS.email} className={linkClassName}>
              <span className="text-[15px]">manishk_sharma@outlook.com</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Footer;
