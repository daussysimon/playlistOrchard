/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useState } from "react";
import { useMediaAsset } from "@staticcms/core/";
import { useMediaInsert } from "@staticcms/core/";

import "./style.scss";

export const FileControl = ({
  collection,
  controlID,
  field,
  value,
  entry,
  onChange,
  label,
}) => {
  const [path, setPath] = useState();
  const [urls, setUrls] = useState(value?.length > 0 ? value : []);
  const handleChange = ({ path }) => {
    setPath(path);
  };

  const handleOpenMediaLibrary = useMediaInsert(
    value,
    { collection, field, controlID },
    handleChange
  );

  const assetSource = useMediaAsset(path, collection, field, entry);

  const handleDelete = useCallback((item) => {
    onChange([...value.filter((it) => it !== item)]);
    setUrls((prev) => prev.filter((it) => it !== item));
  }, []);

  useEffect(() => {
    if (assetSource) {
      setUrls((prevUrls) => {
        if (!prevUrls.includes(assetSource)) {
          onChange([...prevUrls, assetSource]);
          return [...prevUrls, assetSource];
        }
        return prevUrls;
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [assetSource]);

  return (
    <div className="custom">
      <div className=" custom_action">
        <label className="custom__action_label label CMS_Label_root CMS_Label_cursor-pointer CMS_Field_label">
          {label}
        </label>
        <button
          type="button"
          onClick={handleOpenMediaLibrary}
          className="CMS_Button_root .CMS_Button_outlined-secondary custom_action_button"
        >
          Add a picture
        </button>
      </div>
      <div className="custom_gallery">
        {urls.map((item) => (
          <div className="custom_gallery_container">
            <button
              className="custom_gallery_container_button"
              onClick={() => handleDelete(item)}
            >
              Delete
            </button>
            <img
              className="custom_gallery_container_img"
              alt="presentation"
              src={item}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
