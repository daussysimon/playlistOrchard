/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useMediaInsert } from "@staticcms/core/";

import "../style.scss";

export const VideoControl = ({
  collection,
  controlID,
  field,
  value,
  onChange,
  label,
}) => {
  const handleChange = ({ path }) => {
    const number = path.split(".").length;
    const array = path.split(".");

    if (["mp4", "MP4", "mov", "MOV"].includes(array[number - 1])) {
      onChange(path);
    } else {
      onChange(undefined);
    }
  };

  const handleOpenMediaLibrary = useMediaInsert(
    value,
    { collection, field, controlID },
    handleChange
  );

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
          Add a video
        </button>
      </div>
      <div className="custom_gallery">
        {value && <video src={value} autoPlay controls></video>}
      </div>
    </div>
  );
};
