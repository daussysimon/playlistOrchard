import React, { useCallback, useState } from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import "../../styles/components/products/cardProduct.scss";

export function CardProducts({ data }) {
  const cardImg = getImage(data.image);

  const [visible, setVisible] = useState(true);

  const description = useCallback(() => {
    const lengthMax = 60;
    if (data.description <= lengthMax) {
      return data.description; // Si le texte est déjà plus court que la longueur maximale, on le retourne tel quel
    }

    // Trouver la position du dernier espace avant la longueur maximale
    let texteCoupe = data.description.slice(0, lengthMax);
    let dernierEspace = texteCoupe.lastIndexOf(" ");

    // Si un espace est trouvé, couper au dernier espace
    if (dernierEspace !== -1) {
      texteCoupe = data.description.slice(0, dernierEspace);
    }

    console.log(texteCoupe.length);

    // Ajouter des points de suspension à la fin
    return (
      <>
        <span>{visible ? `${texteCoupe} ...` : data.description}</span>{" "}
        <button onClick={() => setVisible((prev) => !prev)}>
          {visible ? "+" : "-"}
        </button>
      </>
    );
  }, [data.description, visible]);

  return (
    <div className="card">
      <header className="card-header">
        <GatsbyImage
          className="card-header-image"
          image={cardImg}
          alt="products"
        />
        <h3 className="card-header-title">{data.title}</h3>
      </header>
      <p className="card-description">{description()}</p>

      <ul className="card-price">
        {data.price.map((item) => (
          <li>
            <p>
              {item.quantity} - <span>{`${item.price} CAD `}</span>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
