/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function IconCloseIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 32 32"}
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
          "M24.707 8.707a1 1 0 00-1.414-1.414L16 14.586 8.707 7.293a1 1 0 00-1.414 1.414L14.586 16l-7.293 7.293a1 1 0 101.414 1.414L16 17.414l7.293 7.293a1 1 0 001.414-1.414L17.414 16l7.293-7.293z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconCloseIcon;
/* prettier-ignore-end */
