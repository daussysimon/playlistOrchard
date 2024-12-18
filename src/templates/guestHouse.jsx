import React from "react";
import { Layout, Button, Gallery } from "../components";
import { graphql } from "gatsby";
import "../styles/pages/guesthouse.scss";

export default function Guesthouse({ data }) {
  const { frontmatter } = data?.markdownRemark;

  const headerContent = (
    <>
      <h1>{frontmatter.header.title}</h1>
      <Button
        url={frontmatter.header.button.link}
        label={frontmatter.header.button.label}
        type="header"
        to="external"
      />
    </>
  );

  return (
    <Layout
      headerData={{
        image: { url: frontmatter.header.backgoundImage },
        content: headerContent,
      }}
    >
      <div className="guesthouse">
        <div className="guesthouse-gallery">
          <Gallery images={frontmatter?.gallery} />
        </div>
        <div className="guesthouse-container">
          <p>{frontmatter?.description}</p>
          <Button
            extraClass="center"
            url={`${frontmatter.bookingButton.link}`}
            label={frontmatter.bookingButton.label}
            to="external"
          />
          <div className="guesthouse-presentation">
            <div className="guesthouse-details-amenities">
              <h2 className="guesthouse-details-amenities-title">Amenities</h2>
              <ul>
                {frontmatter?.amenties.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="guesthouse-details-policies">
              <h2 className="guesthouse-details-policies-title">Policies</h2>
              <ul>
                {frontmatter?.bookingPolicies.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* <Comments type="guesthouse" /> */}
    </Layout>
  );
}

export const query = graphql`
  query {
    markdownRemark(frontmatter: { templateKey: { eq: "guestHouse" } }) {
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
          title
          button {
            label
            link
          }
        }
        gallery {
          childImageSharp {
            gatsbyImageData(
              formats: WEBP
              placeholder: TRACED_SVG
              height: 500
              webpOptions: { quality: 100 }
            )
          }
        }
        description
        bookingButton {
          label
          link
        }
        amenties
        bookingPolicies
      }
    }
  }
`;
