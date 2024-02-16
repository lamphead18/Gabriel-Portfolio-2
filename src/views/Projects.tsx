import React from "react";
import { Button } from "../components";
import homePageImg from "../assets/home-page.svg";
import { GitHub } from "@mui/icons-material"; 

const Projects = () => {
  return (
    <div
      id="projects"
      className="min-h-screen flex items-center justify-center relative"
      style={{
        background: `url(${homePageImg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="max-w-screen-2xl flex flex-col xl:flex-row xl:justify-between items-center xl:items-start gap-12 w-full py-16 px-12">
        <div className="w-full xl:w-fit">
          <h1 className="w-full xl:w-fit text-center xl:text-start text-4xl sm:text-6xl lg:text-8xl font-bolt text-textPrimary upperCase">
            Meus <span className="text-secondary">Projetos</span>
          </h1>
          <div className="my-12 flex flex-col sm:flex-row items-center gap-6 justify-center xl:justify-start">
            <Button
              onClick={() => {
                window.open(
                  "https://github.com/lamphead18/Gabriel-Portfolio-2.git",
                  "_blank"
                );
              }}
            >
              Projeto Portfólio Web
            </Button>
            <Button
            
              onClick={() => {
                window.open(
                  "https://github.com/RaimundoNCN/comanda_app.git",
                  "_blank"
                );
              }}
            >
              Projeto Comanda App
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
