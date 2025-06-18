"use client";

import { useEffect, useState } from "react";
import { InlineWidget } from "react-calendly";

const Calendly = () => {
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
    <div className="overflow-y-hidden px-2 mt-4 md:mt-0 md:px-0 relative z-20 w-full">
      <InlineWidget
        styles={{
          height: height,
        }}
        url="https://calendly.com/dino-lexosmove/30min"
      />
    </div>
  );
};

export default Calendly;
