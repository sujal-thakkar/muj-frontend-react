/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function IconAddIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M12.75 5a.75.75 0 00-1.5 0v6.25H5a.75.75 0 000 1.5h6.25V19a.75.75 0 001.5 0v-6.25H19a.75.75 0 000-1.5h-6.25V5z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconAddIcon;
/* prettier-ignore-end */
