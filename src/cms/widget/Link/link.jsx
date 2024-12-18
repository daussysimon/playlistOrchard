/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import "../style.scss";

export function LinkControl({ onChange, value }) {
  const [customValue, setCustomValue] = useState(
    value
      ? value
      : {
          url: "",
          label: "",
          link: false,
        }
  );
  const handleChange = function (type, data) {
    if (type === "link") {
      setCustomValue({ ...value, [type]: data, url: "" });
    } else {
      setCustomValue({ ...value, [type]: data });
    }
  };

  useEffect(() => {
    onChange(customValue);
  }, [onChange, customValue]);

  const webPages = [
    { label: "home", link: "/" },
    { label: "contact", link: "/contact" },
    { label: "The Shop", link: "/theShop" },
    { label: "The guesthouse", link: "/guesthouse" },
  ];

  return (
    <div className="custom">
      <div className="custom_container">
        <div className="custom-link">
          <fieldset>
            <label
              htmlFor="label"
              className="custom__action_label label CMS_Label_root CMS_Label_cursor-pointer CMS_Field_label"
            >
              Label
            </label>
            <input
              className="MuiInput-input CMS_TextField_input CMS_WidgetString_input CMS_TextField_borderless CMS_TextField_cursor-default"
              type="text"
              id="label"
              value={customValue?.label}
              onChange={(e) => handleChange("label", e.target.value)}
            />
          </fieldset>
          <fieldset>
            <label
              htmlFor="checkbox"
              className="custom__action_label label CMS_Label_root CMS_Label_cursor-pointer CMS_Field_label"
            >
              From the website
            </label>
            <input
              type="checkbox"
              id="radio"
              checked={customValue.link}
              onChange={(e) => {
                handleChange("link", e.target.checked);
              }}
            />
          </fieldset>
        </div>
        <label
          htmlFor="link"
          className="custom__action_label label CMS_Label_root CMS_Label_cursor-pointer CMS_Field_label"
        >
          Link
        </label>
        {!value?.link ? (
          <input
            className="MuiInput-input CMS_TextField_input CMS_WidgetString_input CMS_TextField_borderless CMS_TextField_cursor-default"
            type="text"
            id="link"
            value={customValue?.url}
            onChange={(e) => handleChange("url", e.target.value)}
          />
        ) : (
          <select
            className="MuiInput-input CMS_TextField_input CMS_WidgetString_input CMS_TextField_borderless CMS_TextField_cursor-default"
            value={customValue?.url}
            onChange={(e) => handleChange("url", e.target.value)}
          >
            {webPages.map((item) => (
              <option value={item.link}>{item.label}</option>
            ))}
          </select>
        )}
      </div>
    </div>
  );
}
