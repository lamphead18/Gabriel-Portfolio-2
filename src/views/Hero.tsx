import homePageImg from "../assets/home-page.svg";
import homePageIllustation from "../assets/hero-illustration.svg";
import downloadIcon from "../assets/download-btn-icon.svg";

import { Button } from "../components";

import { Typewriter } from "react-simple-typewriter";

import { motion } from "framer-motion";

import { transition } from "../utils/transition";
import { fadeIn, scale } from "../utils/variants";
import { BurstMode } from "@mui/icons-material";

const Hero = () => {
  return (
    <div id="home" className="min-h-screen flex items-center justify-center relative"
      style={{
        background: `url(${homePageImg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}>
      <div
        className="max-w-screen-2xl flex flex-col
            xl:flex-row xl:justify-between items-center xl:items-start gap-12 w-full py-16 px-12"
      >
        <div className="w-full xl:w-fit">
          <h1 className="w-full xl:w-fit text-center xl:text-start text-4xl sm:text-6xl lg:text-8xl 
                font-bolt text-textPrimary upperCase">
            Gabriel Franco Pigozzo
            <br />
            <span className="text-secondary">
              <Typewriter words={["FullStack", "Web", "Mobile"]} 
              cursor
              cursorStyle="_"
              typeSpeed={200}
              deleteSpeed={150}
              loop
              />
            </span>
          </h1>
          <div className="my-12 flex flex-col sm:flex-row items-center gap-6 justify-center xl:justify-start">
            <Button>Hire</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
