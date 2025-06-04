import { useEffect, useRef } from "react";
import Header from "../components/Header";
import ServiceCard from "../components/ServiceCard";
import Socials from "../components/Socials";
import WorkCard from "../components/WorkCard";
import { useIsomorphicLayoutEffect } from "../utils";
import { stagger } from "../animations";
import Footer from "../components/Footer";
import Head from "next/head";
import Button from "../components/Button";
import Link from "next/link";
import Cursor from "../components/Cursor";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import SplitText from "gsap/dist/SplitText";
import { useGSAP } from "@gsap/react";
// Local Data
import data from "../data/portfolio.json";
import ScrollTextAppear from "../animations/ScrollTextAppear";
gsap.registerPlugin(ScrollTrigger, SplitText);
export default function Home() {
  // Ref
  const workRef = useRef();
  const profilePhotoRef = useRef();
  const aboutRef = useRef();
  const textOne = useRef();
  const textTwo = useRef();
  const textThree = useRef();
  const textFour = useRef();
  const workCardContainer = useRef();
  const serviceContainer = useRef();
  // Handling Scroll
  const handleWorkScroll = () => {
    window.scrollTo({
      top: workRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleAboutScroll = () => {
    window.scrollTo({
      top: aboutRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };
  useGSAP(() => {
    const workCard = gsap.utils.toArray(".work-card");
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: workCardContainer.current,
        scrub: true,
        // markers: true,
        end: "bottom center",
      },
    });
    timeline.from(workCard, {
      y: 240,
      opacity: 0,
      stagger: 0.1,
      pin: true,
      duration: 1,
    });
    stagger(
      [
        profilePhotoRef.current,
        textOne.current,
        textTwo.current,
        textThree.current,
        textFour.current,
      ],
      { y: 40, x: -10, transform: "scale(0.95) skew(10deg)", delay: "500ms" },
      { y: 0, x: 0, transform: "scale(1)" }
    );

    const timeline2 = gsap.timeline({
      scrollTrigger: {
        trigger: serviceContainer.current,
        scrub: true,
        end: "bottom center",
        // markers: true,
      },
    });
    const serviceCard = gsap.utils.toArray(".service-card");

    timeline2
      .to(".services-background-wrapper", {
        height: "100%",
        width: "4000px",
        borderRadius: 0,
        duration: 5,
        left: "-4rem",
        top: 0,
        bottom: 0,
      })
      .from(".services-title", {
        opacity: 0,
        y: -40,
        duration: 5,
      });
    timeline2.from(serviceCard, {
      opacity: 0,
      x: 0,
      stagger: 0.5,
      duration: 5,
    });
  });

  return (
    <div className={`relative ${data.showCursor && "cursor-none"}`}>
      {data.showCursor && <Cursor />}
      <Head>
        <title>{data.name}</title>
      </Head>

      <div className="gradient-circle"></div>
      <div className="gradient-circle-bottom"></div>

      <div className="mx-4 tablet:mx-6 laptop:mx-16 mb-10">
        <Header
          handleWorkScroll={handleWorkScroll}
          handleAboutScroll={handleAboutScroll}
        />
        <div className="flex">
          <div className="laptop:mt-20 mt-10 p-1 tablet:p-2 laptop:w-4/5  w-4/5  mob:w-full ">
            <img
              src="/images/synthewave_syah.jpg"
              className={"h-52 w-52 rounded-full"}
              ref={profilePhotoRef}
            />
            <div className="mt-5">
              <h1
                ref={textOne}
                className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold"
              >
                {data.headerTaglineOne}
              </h1>
              <h2
                ref={textTwo}
                className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold"
              >
                {data.headerTaglineTwo}
              </h2>
              <h2
                ref={textThree}
                className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold"
              >
                {data.headerTaglineThree}
              </h2>
              <h2
                ref={textFour}
                className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold"
              >
                {data.headerTaglineFour}
              </h2>
            </div>

            <Socials className="mt-2 laptop:mt-5" />
          </div>
        </div>
        <div className="mt-10 laptop:mt-30 p-2 laptop:p-0" ref={workRef}>
          <h3 className="text-2xl text-bold">Work.</h3>

          <div
            ref={workCardContainer}
            className="mt-5 laptop:mt-10 grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-2 desktop:grid-cols-3 gap-4"
          >
            {data.projects.map((project) => (
              <WorkCard
                key={project.id}
                img={project.imageSrc}
                name={project.title}
                description={project.description}
                onClick={() => window.open(project.url)}
              />
            ))}
          </div>
        </div>

        <div
          className="mt-10 laptop:mt-30 relative overflow-x-hidden -mx-4 desktop:-mx-16"
          ref={serviceContainer}
        >
          <div className="rounded-full absolute h-2 w-2 bg-gradient-to-tr dark:bg-none dark:bg-gray-900 from-teal-200 services-background-wrapper top-1/2 left-1/2"></div>
          <div className="p-2">
            <div className="relative">
              <h1 className="tablet:m-10 text-2xl text-bold services-title">
                Services.
              </h1>
              <div className="mt-5 tablet:m-10 grid grid-cols-1 laptop:grid-cols-2 gap-6">
                {data.services.map((service, index) => (
                  <ServiceCard
                    key={index}
                    name={service.title}
                    description={service.description}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* This button should not go into production */}
        {process.env.NODE_ENV === "development" && (
          <div className="fixed bottom-5 right-5">
            <Link href="/edit">
              <Button type="primary">Edit Data</Button>
            </Link>
          </div>
        )}
        <div className="mt-10 laptop:mt-40 p-2 laptop:p-0" ref={aboutRef}>
          <h1 className="tablet:m-10 text-2xl text-bold">About.</h1>
          <div className="text-xl laptop:text-3xl w-full laptop:w-3/5 tablet:m-10 mt-2">
            <ScrollTextAppear classsName={"mb-10"}>
              <div>
                Hi, I'm Issyah Ismail — a Front-End Developer based in
                Singapore. For the past{" "}
                <span className="font-bold">10 years</span> at SendForensics,
                I’ve been building robust, high-performing web applications that
                scale, perform, and deliver smooth user experiences.
                <p>My current tech stack includes:</p>
              </div>
            </ScrollTextAppear>
            <ScrollTextAppear>
              <ul className="list-disc mb-10">
                <li className="ml-10 my-2">
                  <span className="font-bold">React & Next.js</span> – for
                  building fast, modern web apps
                </li>
                <li className="ml-10 my-2">
                  <span className="font-bold">Tailwind CSS & Material UI</span>{" "}
                  – for efficient, consistent styling
                </li>
                <li className="ml-10 my-2">
                  <span className="font-bold">Shopify Liquid</span> – for
                  building and customizing e-commerce storefronts
                </li>
                <li className="ml-10 my-2">
                  <span className="font-bold">Highcharts & D3.js</span> – making
                  complex datasets actionable and understandable
                </li>
                <li className="ml-10 my-2">
                  <span className="font-bold">Cypress</span> – for writing
                  end-to-end integration tests
                </li>
                <li className="ml-10 my-2">
                  <span className="font-bold">GitHub Actions </span> – for
                  setting up CI/CD pipelines and automated deployments
                </li>
              </ul>
            </ScrollTextAppear>
            <ScrollTextAppear classsName={"mb-10"}>
              <p>
                I focus on maintainable front-end architecture, performance, and
                clean code—shipping features that work reliably across devices
                and browsers.
              </p>
            </ScrollTextAppear>
            <ScrollTextAppear>
              <p>
                When I’m off the clock, I’m usually deep in{" "}
                <span className="font-bold">Warhammer 40K lore</span>, blasting
                through <span className="font-bold">Space Marine 2</span>, or
                vibing to <span className="font-bold">80s Synthwave</span>. I
                also enjoy building side projects and helping small brands come
                to life online.
              </p>
            </ScrollTextAppear>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
