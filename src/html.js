import React, { useEffect } from "react";
import PropTypes from "prop-types";

export default function HTML(props) {
  // const script = () => {
  //   const isBrowser = typeof window !== "undefined";
  //   if (isBrowser) {
  //     if (window?.netlifyIdentity) {
  //       (" ");
  //     }
  //     {
  //       window?.netlifyIdentity.on("init", (user) => {
  //         if (!user) {
  //           window?.netlifyIdentity.on("login", () => {
  //             document.location.href = "/admin/";
  //           });
  //         }
  //       });
  //     }
  //   }
  // };
  return (
    <html {...props.htmlAttributes} lang="en">
      <head>
        <meta charSet="utf-8" />

        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <link rel="icon" type="image/x-icon" href="favicon.ico"></link>
        <title>Playlist Orchard</title>
        <meta name="description" content="Voici un exemple de description" />

        <meta
          name="keywords"
          content="lavender farm, handmade lavender products, lavender soap, lavender essential oils, Airbnb with jacuzzi, lake view Airbnb, lavender farm stay, peaceful getaway, luxury accommodation, nature retreat"
        />
        <meta
          property="og:title"
          content="Lavender Farm & Airbnb with Jacuzzi - Relax by the Lake"
        />
        <meta
          property="og:description"
          content="Visit our Lavender Farm for handcrafted lavender products and a relaxing stay in our Airbnb with a jacuzzi and stunning lake views. Unwind in a peaceful retreat surrounded by nature."
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {/* <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script> */}
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  );
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};
