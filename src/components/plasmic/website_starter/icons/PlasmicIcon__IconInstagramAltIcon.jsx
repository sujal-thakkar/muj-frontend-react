/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function IconInstagramAltIconIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 30 31"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M29.903 8.87a10.878 10.878 0 00-.698-3.692A7.68 7.68 0 0024.82.79a11.006 11.006 0 00-3.642-.7C19.575.02 19.067 0 14.998 0c-4.068 0-4.59 0-6.18.092a11.004 11.004 0 00-3.64.7A7.675 7.675 0 00.79 5.177a10.918 10.918 0 00-.698 3.64C.022 10.422 0 10.93 0 14.998c0 4.069 0 4.588.093 6.18.025 1.247.26 2.476.698 3.644a7.68 7.68 0 004.388 4.385c1.16.453 2.391.71 3.64.75 1.605.071 2.113.093 6.181.093s4.59 0 6.18-.093a10.98 10.98 0 003.642-.698 7.69 7.69 0 004.387-4.387c.438-1.166.673-2.395.698-3.643.071-1.603.093-2.11.093-6.18-.003-4.069-.003-4.585-.097-6.18zM14.988 22.691a7.7 7.7 0 01-7.701-7.702 7.702 7.702 0 117.702 7.702zm8.008-13.893a1.793 1.793 0 01-1.795-1.795 1.794 1.794 0 113.59 0c0 .992-.803 1.795-1.795 1.795z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M14.99 19.993a5.003 5.003 0 10-.001-10.006 5.003 5.003 0 000 10.006z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconInstagramAltIconIcon;
/* prettier-ignore-end */
