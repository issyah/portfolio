import React, { useRef } from "react";
import Socials from "../Socials";
import Link from "next/link";
import Button from "../Button";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);
const Footer = ({}) => {
  const ReachOutContainer = useRef();
  const ctaButton = useRef();
  const handleFooterAnimation = () => {
    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: ReachOutContainer.current,
        toggleActions: "play pause pause reverse",
        scrub: true,
        pin: true,
        end: "240%",
      },
    });
    const footerTextAnim = gsap.utils.toArray(".footer-text-anim");
    t1.from(footerTextAnim, {
      xPercent: -80,
      stagger: 0.1,
    });
    t1.from(ctaButton.current, {
      yPercent: -80,
      opacity: 0,
    });
  };

  useGSAP(() => {
    handleFooterAnimation();
  }, []);

  return (
    <>
      <div
        className="laptop:mt-40 p-2 overflow-x-hidden laptop:overflow-x-auto laptop:p-0"
        ref={ReachOutContainer}
      >
        <div className="mt-24">
          <h1 className="text-2xl text-bold">Contact.</h1>
          <div className="mt-2">
            <h1 className="footer-text-anim text-6xl laptop:text-[10.2rem] text-bold">
              REACH
            </h1>
            <h1 className="footer-text-anim text-6xl laptop:text-[10.2rem] text-bold">
              OUT
            </h1>
            <div ref={ctaButton}>
              <Button
                type="primary"
                onClick={() => window.open("mailto:issyah89@gmail.com")}
              >
                Schedule a call
              </Button>
            </div>
            <div className="mt-10">
              <Socials />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
