import React from "react";
import { Link } from "gatsby";
import "../styles/components/button.scss";

export function Button({ type, url, label, extraClass = "", to }) {
  return (
    <div
      className={
        type === "header"
          ? `button-container-header ${extraClass}`
          : `button-container ${extraClass}`
      }
    >
      {to === "external" ? (
        <>
          <a
            className={" button button-base"}
            href={url}
            target="_blank"
            rel="noreferrer"
          >
            <span>{label}</span>
          </a>
          <a
            className={
              type === "header"
                ? " button button-hover button-header-hover"
                : "button button-hover"
            }
            href={url}
            target="_blank"
            rel="noreferrer"
          >
            {label}
          </a>
          <a
            className={
              type === "header"
                ? "button button-first button-header-first"
                : " button button-first"
            }
            href={url}
            target="_blank"
            rel="noreferrer"
          >
            {label}
          </a>{" "}
        </>
      ) : (
        <>
          <Link className={" button button-base"} to={url}>
            <span>{label}</span>
          </Link>
          <Link
            className={
              type === "header"
                ? " button button-hover button-header-hover"
                : "button button-hover"
            }
            to={url}
          >
            {label}
          </Link>
          <Link
            className={
              type === "header"
                ? "button button-first button-header-first"
                : " button button-first"
            }
            to={url}
          >
            {label}
          </Link>
        </>
      )}
    </div>
  );
}
