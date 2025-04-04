/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function UnionIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1890 896"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g filter={"url(#tuapBf8WQf0ja)"}>
        <path
          d={
            "M1576 448c0 74.006-282.51 134-631 134-348.492 0-631-59.994-631-134s282.508-134 631-134c348.49 0 631 59.994 631 134z"
          }
          fill={"currentColor"}
          fillOpacity={".5"}
          style={{
            mixBlendMode: 'color-dodge"',
          }}
        ></path>
      </g>

      <defs>
        <filter
          id={"tuapBf8WQf0ja"}
          x={".5"}
          y={".5"}
          width={"1889"}
          height={"895"}
          filterUnits={"userSpaceOnUse"}
          colorInterpolationFilters={"sRGB"}
        >
          <feFlood floodOpacity={"0"} result={"BackgroundImageFix"}></feFlood>

          <feBlend
            in={"SourceGraphic"}
            in2={"BackgroundImageFix"}
            result={"shape"}
          ></feBlend>

          <feGaussianBlur
            stdDeviation={"156.75"}
            result={"effect1_foregroundBlur_1_111"}
          ></feGaussianBlur>
        </filter>
      </defs>
    </svg>
  );
}

export default UnionIcon;
/* prettier-ignore-end */
