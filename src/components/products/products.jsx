import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { CardProducts } from "./cardProducts";
import { CategoriesList } from "./categoriesList";
import "../../styles/components/products/products.scss";

export function Products() {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query MyQuery {
      allMarkdownRemark(
        filter: {
          frontmatter: { templateKey: { in: ["products", "categories"] } }
        }
      ) {
        nodes {
          frontmatter {
            title
            description
            categorie
            templateKey
            image {
              childImageSharp {
                gatsbyImageData(
                  height: 300
                  placeholder: DOMINANT_COLOR
                  formats: WEBP
                )
              }
            }
            price {
              price
              quantity
            }
          }
        }
      }
    }
  `);

  const categoriesList = allMarkdownRemark.nodes.filter(
    (item) => item.frontmatter.templateKey === "categories"
  );

  const allProducts = allMarkdownRemark.nodes.filter(
    (item) => item.frontmatter.templateKey === "products"
  );

  const [currentCategorie, setCurrentCategorie] = useState(categoriesList[0]);

  return (
    <section className="productsList">
      <div className="categoriesSelect">
        <h2>The products :</h2>
        <CategoriesList
          data={categoriesList}
          setCurrentCategorie={setCurrentCategorie}
          currentCategorie={currentCategorie}
        />
      </div>
      <div className="products">
        <ul className="products-list">
          {allProducts
            .filter(
              (item) =>
                item.frontmatter.categorie ===
                currentCategorie.frontmatter.title
            )
            .map((item, key) => (
              <li key={key} className="products-list-item">
                <CardProducts data={item.frontmatter} />
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
}
