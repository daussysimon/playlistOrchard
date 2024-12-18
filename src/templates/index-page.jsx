import React, { useEffect, useState, useRef } from "react";
import { graphql } from "gatsby";
import { Layout, Button } from "../components";
import { useScroll } from "../hooks";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import "../styles/pages/index-page.scss";

function IndexPage({ data }) {
  const { frontmatter } = data.markdownRemark;

  const scrollRef = useRef(null);
  const videoPlayer = useRef(null);

  const [imageHeight, setImageHeight] = useState([]);
  const [mobile, setMobile] = useState(false);

  const play = useScroll(scrollRef);

  useEffect(() => {
    setImageHeight(document.getElementsByClassName("home-section1-img"));
    if (window.matchMedia("(max-width: 1200px)").matches) {
      setMobile(true);
    }
  }, []);

  useEffect(() => {
    if (videoPlayer.current) {
      if (play) {
        videoPlayer.current.play();
      } else {
        videoPlayer.current.pause();
      }
    }
  }, [play, videoPlayer]);

  const headerContent = (
    <>
      <h1>{frontmatter.header.title}</h1>
      <p>{frontmatter.header.description}</p>
      <nav>
        <Button
          url={frontmatter.header.button_1.link}
          label={frontmatter.header.button_1.label}
          type="header"
        />
        <Button
          url={frontmatter.header.button_2.link}
          label={frontmatter.header.button_2.label}
          type="header"
        />
      </nav>
    </>
  );

  const image1 = getImage(frontmatter.section2.part1.image);
  const image2 = getImage(frontmatter.section2.part2.image);

  return (
    <Layout
      headerData={{
        image: { url: frontmatter.header.backgoundImage },
        content: headerContent,
      }}
    >
      <section className="home-section1">
        <div className="home-section1-container">
          <div className="home-section1-part ">
            <div className="home-section1-part-container">
              <h2>{frontmatter.section2.part1.title}</h2>
              <p>{frontmatter.section2.part1.desciption}</p>
              <Button
                url={frontmatter.section2.part2.button.link}
                label={frontmatter.section2.part2.button.label}
              />
            </div>
            <GatsbyImage
              style={{
                height: imageHeight[0]?.scrollWidth
                  ? imageHeight[0]?.scrollWidth * 0.8
                  : 0,
              }}
              image={image1}
              alt={frontmatter.section2.part1.title}
              className="home-section1-img"
            />
          </div>
          <div className="home-section1-part ">
            {!mobile && (
              <GatsbyImage
                style={{
                  height: imageHeight[0]?.scrollWidth
                    ? imageHeight[0]?.scrollWidth * 0.8
                    : 0,
                }}
                image={image2}
                alt={frontmatter.section2.part2.title}
                className="home-section1-img"
              />
            )}
            <div className="home-section1-part-container">
              <h2>{frontmatter.section2.part2.title}</h2>
              <p>{frontmatter.section2.part2.desciption}</p>
              <Button
                url={frontmatter.section2.part2.button.link}
                label={frontmatter.section2.part2.button.label}
              />
            </div>
            {mobile && (
              <GatsbyImage
                style={{ height: imageHeight[0]?.scrollWidth }}
                image={image2}
                alt={frontmatter.section2.part2.title}
                className="home-section1-img"
              />
            )}
          </div>
        </div>
      </section>
      <section className="home-section2" ref={scrollRef}>
        <div className="home-section2-content">
          <h2>About us</h2>
          <p
            dangerouslySetInnerHTML={{
              __html: frontmatter.aboutUs.text.replaceAll(".", ` . <br />`),
            }}
          />
        </div>
        <video
          className="home-section2-content-video"
          muted
          autoPlay
          src={frontmatter.aboutUs.video.publicURL}
          ref={videoPlayer}
        ></video>
      </section>
    </Layout>
  );
}

export default IndexPage;

export const query = graphql`
  query {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        header {
          backgoundImage {
            childImageSharp {
              gatsbyImageData(
                webpOptions: { quality: 100 }
                placeholder: TRACED_SVG
                height: 800
                width: 1090
              )
            }
          }
          description
          title
          button_1 {
            label
            link
          }
          button_2 {
            label
            link
          }
        }
        section2 {
          part1 {
            title
            button {
              label
              link
            }
            desciption
            image {
              childImageSharp {
                gatsbyImageData(
                  webpOptions: { quality: 100 }
                  placeholder: TRACED_SVG
                )
              }
            }
          }
          part2 {
            button {
              label
              link
            }
            desciption
            title
            image {
              childImageSharp {
                gatsbyImageData(
                  webpOptions: { quality: 100 }
                  placeholder: TRACED_SVG
                )
              }
            }
          }
        }
        aboutUs {
          text
          video {
            publicURL
          }
        }
        description
        title
      }
    }
  }
`;
