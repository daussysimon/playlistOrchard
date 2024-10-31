import CMS from "@staticcms/core";
import React, { useEffect } from "react";
import config from "./config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faNewspaper,
  faGear,
  faSoap,
  faShop,
} from "@fortawesome/free-solid-svg-icons";
import { FileControl } from "./widget/galleryPhoto/galleryPhoto";
import { VideoControl } from "./widget/video/video";
import { LinkControl } from "./widget/Link/link";
// import { CategoriesControl } from "./widget/categories/categories";

import "@staticcms/core/dist/main.css";

const CMSView = () => {
  useEffect(() => {
    if (typeof window !== `undefined`) {
      CMS.init({ config });

      CMS.registerWidget("image-gallery", FileControl);
      CMS.registerWidget("link", LinkControl);
      CMS.registerWidget("video", VideoControl);

      CMS.registerPreviewStyle("/styles/content.module.css");

      // new icons

      CMS.registerIcon("news", () => (
        <FontAwesomeIcon icon={faNewspaper} size="lg" />
      ));
      CMS.registerIcon("setting", () => (
        <FontAwesomeIcon icon={faGear} size="lg" />
      ));
      CMS.registerIcon("categories", () => (
        <FontAwesomeIcon icon={faSoap} size="lg" />
      ));
      CMS.registerIcon("products", () => (
        <FontAwesomeIcon icon={faShop} size="lg" />
      ));
    }
  }, []);

  return (
    <>
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

export default CMSView;
