"use client";
import React from "react";

// determines if on client or server side
const isServerSideRendered = () => {
  return typeof window === "undefined";
};

const Axe: React.FC = () => {
  if (process.env.NODE_ENV !== "production" && !isServerSideRendered()) {
    // we import react-dom and @axe-core/react dynamically
    // so that we'll receive warning in our console about
    // inaccessible code.
    import("react-dom").then((ReactDOM) => {
      import("@axe-core/react").then((axe) => {
        axe.default(React, ReactDOM, 1000, {});
      });
    });
  }

  return null;
};

export default Axe;
