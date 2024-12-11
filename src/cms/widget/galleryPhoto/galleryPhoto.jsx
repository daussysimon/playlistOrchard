/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback } from "react";
import { useMediaInsert } from "@staticcms/core/";

import "../style.scss";

export const FileControl = ({
  collection,
  controlID,
  field,
  value,
  onChange,
  label,
}) => {
  const handleChange = ({ path }) => {
    onChange([...(value || []), path]);
  };

  const handleOpenMediaLibrary = useMediaInsert(
    value,
    { collection, field, controlID },
    handleChange
  );

  const handleDelete = useCallback((item) => {
    onChange([...value?.filter((it) => it !== item)]);
  }, []);

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
        {value?.map((item, key) => (
          <div key={key} className="custom_gallery_container">
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
