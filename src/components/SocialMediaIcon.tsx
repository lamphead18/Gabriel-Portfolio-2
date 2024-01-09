import { Tooltip } from "@mui/material";
import { FC, ReactNode } from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

interface SocialMediaIconProps {
  imgSrc: string;
  title: string;
}

const SocialMediaIcon: FC<SocialMediaIconProps> = ({ imgSrc, title }) => {
  const mapImgSrcToIcon = (imgSrc: string): ReactNode => {
    switch (imgSrc) {
      case "linkedin":
        return <LinkedInIcon />;
      case "github":
        return <GitHubIcon />;
      default:
        return null;
    };
  };

  const icon = mapImgSrcToIcon(imgSrc);

  return (
    <Tooltip title={title} placement="bottom" arrow>
      <div className="flex items-center justify-center h-12 w-12 rounded-full bg-icons bg-icons cursor-pointer
      hover:bg-secondary transition-all ease-linear duration-300">
        {icon}
      </div>
    </Tooltip>
  );
};

export default SocialMediaIcon;
