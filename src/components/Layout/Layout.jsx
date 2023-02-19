import React, { useEffect } from "react";
import { iconToImagePath } from "../../services/weatherIcons";

const Layout = ({ children, icon }) => {
  const imagePath = iconToImagePath[icon];
  const backgroundImage = `url(${getImagePath(imagePath)})`;

  useEffect(() => {
    document.body.style.backgroundImage = backgroundImage;
  }, [icon]);

  function getImagePath(path) {
    if (process.env.NODE_ENV === "development") {
      return `./assets/${path}`;
    } else {
      return `${process.env.PUBLIC_URL}/assets/${path}`;
    }
  }

  return <>{children}</>;
};

export default Layout;
