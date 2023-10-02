import { useEffect, useState } from "react";
import React from "react";
import classes from "./styles/preloader.module.css";
const svgClasses = {
  start: classes.idle,
  animating: classes.animating,
  closing: classes.closing,
};

export default function Preloader() {
  const [svgStyle, setSvgStyle] = useState(svgClasses.animating);
  const [textStyle, setTextStyle] = useState(classes.pHidden);
  const [preloaderStyle, setPreloaderStyle] = useState(classes.preloader);

  // useEffect(() => {
  //   setSvgStyle(svgClasses.start);
  //   console.log("happening", svgStyle);
  // }, []);

  // useEffect(() => {
  //   if (svgStyle === svgClasses.start) {
  //     console.log("animate!");
  //     setSvgStyle(svgClasses.animating);
  //   }
  // }, [svgStyle]);

  useEffect(() => {
    // debugger;
    // console.log("STARTT");
    document.body.style.overflow = "hidden";

    const timer2 = setTimeout(() => {
      setTextStyle(classes.p);
    }, 2000);

    const timer = setTimeout(() => {
      setSvgStyle(svgClasses.closing);
      setTextStyle(classes.pHidden);
    }, 3500);

    const timer3 = setTimeout(() => {
      setPreloaderStyle(classes.preloaderHidden);
      document.body.style.overflow = "visible";
    }, 3700);

    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <div className={preloaderStyle}>
      <svg width="300" height="300" viewBox="6 6 400 400" className={svgStyle}>
        <g>
          <path
            d="
            m 0 20.5
            l 0 -20
            l 10 0
            l 0 16.5"
            transform="scale(7)"
          />
          <path
            d="
            m 10 17.5
            m -5 -7
            l 0 10
            l 10 0
            l 0 -20
            l 10 0
            l 0 7
            l -4 0
            l 0 6
            l 4 0
            l 0 7
            l -6 0"
            transform="scale(7)"
          />
        </g>
      </svg>
      <p className={"code " + textStyle}>Danyal Babar</p>
    </div>
  );
}
