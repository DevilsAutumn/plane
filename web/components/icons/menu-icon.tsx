import React from "react";

import type { Props } from "./types";

export const MenuIcon: React.FC<Props> = ({ width = "24", height = "24", className }) => (
  <svg
    width={width}
    height={height}
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.75 18C3.53333 18 3.35417 17.9292 3.2125 17.7875C3.07083 17.6458 3 17.4667 3 17.25C3 17.0333 3.07083 16.8542 3.2125 16.7125C3.35417 16.5708 3.53333 16.5 3.75 16.5H20.25C20.4667 16.5 20.6458 16.5708 20.7875 16.7125C20.9292 16.8542 21 17.0333 21 17.25C21 17.4667 20.9292 17.6458 20.7875 17.7875C20.6458 17.9292 20.4667 18 20.25 18H3.75ZM3.75 12.75C3.53333 12.75 3.35417 12.6792 3.2125 12.5375C3.07083 12.3958 3 12.2167 3 12C3 11.7833 3.07083 11.6042 3.2125 11.4625C3.35417 11.3208 3.53333 11.25 3.75 11.25H20.25C20.4667 11.25 20.6458 11.3208 20.7875 11.4625C20.9292 11.6042 21 11.7833 21 12C21 12.2167 20.9292 12.3958 20.7875 12.5375C20.6458 12.6792 20.4667 12.75 20.25 12.75H3.75ZM3.75 7.5C3.53333 7.5 3.35417 7.42917 3.2125 7.2875C3.07083 7.14583 3 6.96667 3 6.75C3 6.53333 3.07083 6.35417 3.2125 6.2125C3.35417 6.07083 3.53333 6 3.75 6H20.25C20.4667 6 20.6458 6.07083 20.7875 6.2125C20.9292 6.35417 21 6.53333 21 6.75C21 6.96667 20.9292 7.14583 20.7875 7.2875C20.6458 7.42917 20.4667 7.5 20.25 7.5H3.75Z"
      fill="#212529"
    />
  </svg>
);