import React, { useEffect } from "react";
import { iconToImagePath } from "../../services/weatherIcons";

const Layout = ({ children, icon }) => {
  const imagePath = iconToImagePath[icon];
  const backgroundImage = `url(${getImagePath(imagePath)})`;

  useEffect(() => {
    document.body.style.backgroundImage = backgroundImage;
  }, [icon]);

  function getImagePath(path) {
    const defaultImagePath = "default.png";

    if (!path) {
      return defaultImagePath;
    }

    if (iconToImagePath.hasOwnProperty(icon)) {
      return path;
    }

    if (process.env.NODE_ENV === "development") {
      return `./assets/${defaultImagePath}`;
    } else {
      return `${process.env.PUBLIC_URL}/assets/${defaultImagePath}`;
    }
  }

  return <>{children}</>;
};

export default Layout;
