"use client";

import { useEffect, useState } from "react";
import { InlineWidget } from "react-calendly";

const SupportCalendly = () => {
  const [height, setHeight] = useState("1050px");

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth <= 768;
      if (isMobile) {
        setHeight("1100px");
      } else {
        setHeight("900px");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="overflow-y-hidden px-6 md:px-0 -mt-[65dvh] md:-mt-[80vh] relative z-20">
      <InlineWidget
        styles={{
          height: height,
        }}
        url="https://calendly.com/dino-lexosmove/custom-solution-request"
      />
    </div>
  );
};

export default SupportCalendly;
