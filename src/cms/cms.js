import CMS from "@staticcms/core";
import React, { useEffect } from "react";
import config from "./config";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBicycle } from "@fortawesome/free-solid-svg-icons";

import "@staticcms/core/dist/main.css";

const CMSView = () => {
  useEffect(() => {
    if (typeof window !== `undefined`) {
      CMS.init({ config });

      CMS.registerPreviewStyle("/styles/content.module.css");

      CMS.registerIcon("bikes", () => (
        <FontAwesomeIcon icon={faBicycle} size="lg" />
      ));

      CMS.registerAdditionalLink({
        id: "events",
        title: "Events (Google Calendar)",
        data: "https://calendar.google.com/",
        options: {
          icon: "calendar-days",
        },
      });
    }
  }, []);

  return (
    <>
      <Head />
      <style jsx="true" global="true">{`
        html,
        body {
          height: 100%;
        }
        .CMS_Editor_content-wrapper {
          margin: 60px;
        }

        a:active,
        a:hover {
          color: unset;
        }
      `}</style>
      <body></body>
    </>
  );
};

export const Head = () => (
  <>
    <title>test</title>
    <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
    <meta name="description" />
    <meta name="twitter:url" />
  </>
);

CMSView.displayName = "CMSView";

export default CMSView;
