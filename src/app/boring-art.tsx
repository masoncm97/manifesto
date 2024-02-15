import classNames from "classnames";
import { motion } from "framer-motion";
import * as React from "react";
import { paths, ttds } from "./path-data";

interface SVGElementProps {
  className?: string;
}

export const BoringArt = ({ className }: SVGElementProps) => {
  return (
    <motion.svg
      className={classNames(className, "flex")}
      viewBox="0 0 1135.38 93.54"
      initial="hidden"
      animate="visible"
    >
      <defs>
        <style>
          {
            ".cls-1{fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:2px}"
          }
        </style>
      </defs>
      {paths.map((path, index) => (
        <motion.path
          key={index}
          className="cls-1"
          d={path}
          variants={draw}
          custom={{
            sumPreviousttd: sumBeforeIndex(ttds, index),
            ttd: ttds[index],
          }}
          id={`path_${index}`}
        />
      ))}
    </motion.svg>
  );
};

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: ({
    sumPreviousttd,
    ttd,
  }: {
    sumPreviousttd: number;
    ttd: number;
  }) => {
    const delay = sumPreviousttd * 0.7;
    const duration = ttd * 0.7;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, duration },
        opacity: { delay, duration: 0.01 },
      },
    };
  },
};

function sumBeforeIndex(array: number[], index: number): number {
  return array.reduce((acc, cur, curIndex) => {
    if (curIndex < index) {
      return acc + cur;
    } else {
      return acc;
    }
  }, 0);
}
