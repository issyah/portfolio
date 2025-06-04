/**
 * Make the text/paragraph appear when on scroll */

import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import SplitText from "gsap/dist/SplitText";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useIsomorphicLayoutEffect } from "../utils";
gsap.registerPlugin(ScrollTrigger, SplitText);
const ScrollTextAppear = ({ children, classsName }) => {
  const container = useRef();
  const textWrapper = useRef();
  useGSAP(
    () => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          toggleActions: "play pause pause reverse",
          // markers: true,
          start: "top center",
        },
      });

      const paragraph = SplitText.create(textWrapper.current, {
        type: "lines",
      });

      timeline.from(paragraph.lines, {
        transform: "translateY(40px)",
        opacity: 0,
        stagger: 0.1,
      });
      timeline.scrollTrigger.refresh();
    },
    { scope: container, dependencies: [] }
  );

  return (
    <div ref={container}>
      <div ref={textWrapper} className={classsName}>
        {children}
      </div>
    </div>
  );
};

export default ScrollTextAppear;
