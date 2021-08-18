import React from "react";
import PropTypes from "prop-types";

const TextSummary = ({ direction, size, title, icon, number, className }) => {
  const styleDirection = () => {
    return direction === "horizontal" ? " app-text-summary--horizontal" : "";
  };

  const styleSize = (originalClass) => {
    return size === "large" ? ` ${originalClass}--large` : "";
  };

  return (
    <div
      className={`app-text-summary${styleDirection()}${
        className ? " " + className : ""
      }`}
    >
      {title && (
        <div
          className={`app-text-summary__title${styleSize(
            "app-text-summary__title"
          )}`}
        >
          {title}
        </div>
      )}
      {icon && (
        <div className="app-text-summary__icon">
          <img src={icon} alt="" />
        </div>
      )}
      <div
        className={`app-text-summary__number${styleSize(
          "app-text-summary__number"
        )}`}
      >
        {number.toLocaleString("en-US")}
      </div>
    </div>
  );
};

TextSummary.propTypes = {
  direction: PropTypes.string,
  size: PropTypes.string,
  icon: PropTypes.string,
  title: PropTypes.string,
  number: PropTypes.number,
  className: PropTypes.string,
};

TextSummary.defaultProps = {
  icon: "",
  title: "",
  size: "normal",
  direction: "vertical", // vertical or horizontal
  number: 0,
  className: "",
};

export default TextSummary;
