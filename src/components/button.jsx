import React from "react";
import { Link } from "gatsby";
import "../styles/components/button.scss";

export function Button({ type, url, label, extraClass = "" }) {
  return (
    <div
      className={
        type === "header"
          ? `button-container-header ${extraClass}`
          : `button-container ${extraClass}`
      }
    >
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
    </div>
  );
}
