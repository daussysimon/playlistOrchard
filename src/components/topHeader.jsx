import React, { useState } from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import "../styles/components/topHeader.scss";

export function TopHeader() {
  const { markdownRemark } = useStaticQuery(graphql`
    query TopHeaderQuery {
      markdownRemark(frontmatter: { templateKey: { eq: "ui" } }) {
        frontmatter {
          logo {
            childImageSharp {
              gatsbyImageData(width: 250, placeholder: NONE, quality: 100)
            }
          }
          menu {
            label
            link
            url
          }
        }
      }
    }
  `);

  const logo = getImage(markdownRemark.frontmatter.logo);
  const [open, setOpen] = useState(false);

  return (
    <div className="topHeader">
      <GatsbyImage className="topHeader-image" image={logo} alt="logo" />
      <button
        type="button"
        className={
          open
            ? "topHeader-burgerMenu topHeader-burgerMenu-open"
            : "topHeader-burgerMenu"
        }
        onClick={() => setOpen((prev) => !prev)}
      >
        <span className="topHeader-burgerMenu-item"></span>
        <span className="topHeader-burgerMenu-item"></span>
        <span className="topHeader-burgerMenu-item"></span>
      </button>
      <nav
        className={open ? "topHeader-nav topHeader-nav-open" : "topHeader-nav"}
      >
        <ul onMouseLeave={() => setOpen(false)}>
          {markdownRemark.frontmatter.menu.map((item, key) => (
            <li key={key}>
              <Link className="topHeader-nav-item" to={item.url}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
