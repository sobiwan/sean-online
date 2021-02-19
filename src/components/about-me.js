import React from "react";
import ScreenWrapper from "../components/common/screen-wrapper";
import SectionTitle from "../components/common/section-title";
import Image from "../components/common/image";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import { Forbe30Icon } from "../resources/images";
import "../styles";

const mavelyUrl = "https://joinmavely.com";
const swyftUrl =
  "https://www.forbes.com/sites/parmyolson/2015/02/03/super-bowl-stickers-future-mobile-advertising/#6c480c445443";
const irishbeefURL =
  "https://www.qsrmagazine.com/news/dallas-based-irish-beef-buys-8-tucson-area-arbys-units";

const AboutMeParagraph = () => (
  <div className="am-main-paragraph font-center roboto">
    Currently solving brand customer acquisition issues{" "}
    <a href={mavelyUrl} target="_blank" rel="noopener noreferrer">
      @Mavely
    </a>
    . Formerly co-created the world's first emoji ad network{" "}
    <a href={swyftUrl} target="_blank" rel="noopener noreferrer">
      @Swyft
    </a>{" "}
    and took a culure first approach to resturant roll ups{" "}
    <a href={irishbeefURL} target="_blank" rel="noopener noreferrer">
      @IrishBeef
    </a>
    . Follow my work, interests and accomplishments here on my page!
  </div>
);

const iconColor = "#2bc0e6";
const iconSize = "4em";

const social = [
  {
    icon: <FaGithub color={iconColor} size={iconSize} />,
    link: "https://github.com/sobiwan",
  },
  {
    icon: <Image source={Forbe30Icon} height={64} width={64} top />,
    link: "https://www.forbes.com/profile/swyft-media/#298e1dd86f38",
  },
  {
    icon: <FaLinkedin color={iconColor} size={iconSize} />,
    link: "https://www.linkedin.com/in/seanmichaelobrien/",
  },
  {
    icon: <FaInstagram color={iconColor} size={iconSize} />,
    link: "https://www.instagram.com/ramensean/",
  },
];

const AboutMeIcons = () => (
  <div className="am-icons-container flex-space-even">
    {social.map((s) => {
      return (
        <a
          href={s.link}
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          {s.icon}
        </a>
      );
    })}
  </div>
);

const AboutMe = () => (
  <ScreenWrapper>
    <div className="avatar-buffer" />
    <SectionTitle intro="details" title="about me" />
    <AboutMeParagraph />
    <AboutMeIcons />
    <div className="am-gutter" />
  </ScreenWrapper>
);

export default AboutMe;
