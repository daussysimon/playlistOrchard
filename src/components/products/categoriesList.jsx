import React, { useCallback, useState } from "react";
import "../../styles/components/products/categoriesList.scss";

export function CategoriesList({
  data,
  setCurrentCategorie,
  currentCategorie,
}) {
  const [open, setOpen] = useState(false);

  const handleChange = useCallback(
    (item) => {
      setCurrentCategorie(item);
      setOpen(false);
    },
    [setCurrentCategorie, setOpen]
  );

  return (
    <>
      <div className={open ? "categories categories-open" : "categories"}>
        <button
          className={
            open ? "categories-title categories-open-title" : "categories-title"
          }
          onClick={() => setOpen((state) => !state)}
        >
          <p>
            {`${currentCategorie.frontmatter.title}`} <span> &rsaquo;</span>
          </p>
        </button>
        <ul
          className={
            open ? "categories-list categories-open-list" : "categories-list"
          }
        >
          {data.map((item, key) => (
            <li
              className={
                open
                  ? "categories-list-item categories-open-list-item"
                  : "categories-list-item"
              }
              key={key}
            >
              <button type="button" onClick={() => handleChange(item)}>
                {item.frontmatter.title}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
