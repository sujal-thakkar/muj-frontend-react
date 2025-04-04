/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Group168Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 32 28"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M4.553 18.161C6.155 13.815 9.371 4.298 9.417 1m.478 19.789c2.06-3.504 7.544-10.637 12.986-11.131m-9.277 15.418c2.477-1.564 9.395-4.452 17.251-3.486"
        }
        stroke={"currentColor"}
        strokeWidth={"3.71"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Group168Icon;
/* prettier-ignore-end */
