import React from "react";
import "../styles/components/header.scss";

import { Link } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import { TopHeader } from "./topHeader";

export function Header({ data }) {
  const backgoundImage = data.image && getImage(data.image.url);

  return (
    <header className="header-container">
      <TopHeader />
      {data.content && (
        <div className="header">
          <GatsbyImage
            className="header-img"
            image={backgoundImage}
            alt="header image"
          />

          <span className="header-filter" />
          <div className="header-content">{data.content}</div>
        </div>
      )}
    </header>
  );
}
