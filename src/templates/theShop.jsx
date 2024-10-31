import React, { useState } from "react";
import { graphql } from "gatsby";
import { Layout } from "../components";
import "../styles/pages/theShop.scss";

function TheShop({ data }) {
  const { frontmatter } = data.markdownRemark;
  const [visible, setVisible] = useState(false);

  const headerContent = (
    <>
      <h1>{frontmatter.header.title}</h1>
    </>
  );
  return (
    <Layout
      headerData={{
        image: { url: frontmatter.header.backgroundImage },
        content: headerContent,
      }}
    >
      <div className="shop">
        <section className="shop-theShop">
          <h2 className="shop-subtitle">{frontmatter.shop.title}</h2>
          <p className="shop-description">{frontmatter.shop.description}</p>

          <nav>
            {!visible ? (
              <button
                type="button"
                onClick={() => setVisible(true)}
                className="shop-theShop-button"
              >
                Contact us
              </button>
            ) : (
              <a
                className="shop-theShop-button"
                href={`http://phone${frontmatter.shop.phoneNumber}`}
              >
                {`Phone: ${frontmatter.shop.phoneNumber}`}
              </a>
            )}

            {frontmatter.shop.appointment.visible && (
              <a
                href={frontmatter.shop.appointment.link}
                className="shop-theShop-button shop-theShop-button-appointment "
              >
                {frontmatter.shop.appointment.label}
              </a>
            )}
          </nav>
        </section>
        <section className="shop-theMarkets">
          <h2 className="shop-subtitle">{frontmatter.market.title}</h2>
          <p className="shop-description">{frontmatter.market.description}</p>

          <ul className="shop-theMarkets-marketsList">
            {frontmatter.market.marketList.map((item) => (
              <li>
                <h4>{`${item.town}:`}</h4>
                <p>
                  <span>
                    {item.months.start} - {item.months.end}
                  </span>
                  <span> / </span>
                  <span>
                    {item.openingTime.start}-{item.openingTime.end}{" "}
                  </span>
                </p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </Layout>
  );
}

export default TheShop;

export const query = graphql`
  {
    markdownRemark(frontmatter: { templateKey: { eq: "theShop" } }) {
      frontmatter {
        header {
          backgroundImage {
            childImageSharp {
              gatsbyImageData(
                webpOptions: { quality: 100 }
                placeholder: TRACED_SVG
              )
            }
          }
          title
        }
        shop {
          appointment {
            label
            link
            visible
          }
          description
          phoneNumber
          title
        }
        market {
          description
          marketList {
            months {
              end
              start
            }
            openingTime {
              end
              start
            }
            town
          }
          title
        }
      }
    }
  }
`;
