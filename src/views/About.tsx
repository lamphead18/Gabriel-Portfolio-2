import aboutPageImg from "../assets/about-me-page.svg";
import aboutIllustration from "../assets/about-illustration.svg";

import { SocialMediaIcon, Reveal } from "../components";

import { motion } from "framer-motion";

import { fadeIn, scale } from "../utils/variants";
import { transition } from "../utils/transition";

const About = () => {
  return (
    <div id="about"
      className="min-h-screen flex items-center justify-center relative"
      style={{
        background: `url(${aboutPageImg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}>
      <div className="max-w-screen-2xl flex flex-col xl:flex-row xl:justify-between
        items-center xl:items-start gap-12 w-full py-16 px-12"
      >
        <div className="flex-1 flex flex-col gap-4">
          <h2 className="text-center xl:text-start text-4xl sm:text-5xl lg:text-[64px] font-bold text-textPrimary">
            About <span className="text-secondary">me</span>
          </h2>
          <p className="text-center xl:text-start text-base sm:text-lg text-textSecondary">
            My name is Gabriel Franco Pigozzo, I am 21 years old, and I am an enthusiastic Full Stack Web and Mobile developer.
            I have a solid background in programming, with a focus on technologies such as Javascript,
            React, HTML, CSS, Node, Python, React-Native, Django, and SQL. In addition to technical skills,
            I master debugging methods, task organization, adaptability, problem-solving,
            RESTful APIs, automated testing, software architecture, UX, agile methodologies, HTTP requests, and I have effective communication and proactivity.
            My approach to software development goes beyond lines of code, incorporating a deep understanding of architectures and best practices.
          </p>
          <div className="flex items-center justify-center xl:justify-start gap-6">
            <SocialMediaIcon imgSrc="linkedin" title="LinkedIn" />

            <SocialMediaIcon imgSrc="github" title="GitHub" />
          </div>
        </div>
      </div>
    </div>
  )
};

export default About;
