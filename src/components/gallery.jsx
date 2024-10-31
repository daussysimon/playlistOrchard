import React, { useEffect, useState } from "react";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import "../styles/components/gallery.scss";

export function Gallery({ images }) {
  const gatsbyImages = images.map((item, key) => ({
    label: `galley image ${key}`,
    image: getImage(item),
  }));

  const [selected, setSelected] = useState(0);
  const [galleryImageWidth, setGalleryImageWidth] = useState(0);

  useEffect(() => {
    setGalleryImageWidth(document.querySelector(".gallery-image").scrollWidth);
    window.addEventListener("resize", () => {
      if (document.querySelector(".gallery-image")?.scrollWidth) {
        setGalleryImageWidth(
          document.querySelector(".gallery-image").scrollWidth
        );
      }
    });
    return window.removeEventListener("resize", () => {
      setGalleryImageWidth(
        document.querySelector(".gallery-image").scrollWidth
      );
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setSelected((prev) => (prev + 1 >= gatsbyImages.length ? 0 : prev + 1));
    }, 2000);
    return clearInterval(interval);
  }, [gatsbyImages.length]);

  return (
    <div className="gallery">
      <div
        className="gallery-presentation"
        style={{
          height: `${galleryImageWidth * 4}px`,
          left: `-${(galleryImageWidth * 4 + 5) * selected}px`,
        }}
      >
        {gatsbyImages.map((item, key) => (
          <GatsbyImage
            key={key}
            style={{ left: `${(galleryImageWidth * 4 + 5) * key}px` }}
            className="gallery-presentation-image"
            image={item?.image}
            alt={item?.label}
          />
        ))}
      </div>
      <div className="gallery-slider">
        {gatsbyImages.map((item, key) => (
          <div
            className="gallery-container"
            key={key}
            style={{
              width: "calc(100% / 4)",
              height: `${galleryImageWidth}px`,
            }}
            onClick={() => setSelected(key)}
          >
            <GatsbyImage
              className="gallery-image"
              image={item.image}
              alt={item.label}
            />
            {selected !== key && <span className="gallery-filter" />}
          </div>
        ))}
      </div>
    </div>
  );
}
