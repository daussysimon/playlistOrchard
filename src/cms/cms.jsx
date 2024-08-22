import CMS from "@staticcms/core";
import React, { useEffect } from "react";
import config from "./config";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNewspaper } from "@fortawesome/free-solid-svg-icons";
import { FileControl } from "./widget/galleryPhoto/galleryPhoto";

import "@staticcms/core/dist/main.css";

const CMSView = () => {
  useEffect(() => {
    if (typeof window !== `undefined`) {
      CMS.init({ config });

      CMS.registerWidget("image-gallery", FileControl);

      CMS.registerPreviewStyle("/styles/content.module.css");

      CMS.registerIcon("news", () => (
        <FontAwesomeIcon icon={faNewspaper} size="lg" />
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
        .CMS_WidgetObject_summary {
          font-size: 0.9rem;
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
