import { useRef } from "react";
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

// Local Data
import data from "../data/portfolio.json";

export default function Home() {
  // Ref
  const workRef = useRef();
  const aboutRef = useRef();
  const textOne = useRef();
  const textTwo = useRef();
  const textThree = useRef();
  const textFour = useRef();

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

  useIsomorphicLayoutEffect(() => {
    stagger(
      [textOne.current, textTwo.current, textThree.current, textFour.current],
      { y: 40, x: -10, transform: "scale(0.95) skew(10deg)" },
      { y: 0, x: 0, transform: "scale(1)" }
    );
  }, []);

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

          <div className="mt-5 laptop:mt-10 grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-2 gap-4">
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

        <div className="mt-10 laptop:mt-30 p-2 laptop:p-4 laptop:mx-4 bg-gradient-to-tr from-red-100 to-orange-50 rounded-xl shadow-xl">
          <h1 className="tablet:m-10 text-2xl text-bold">Services.</h1>
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
            <p className="mb-10">
              {/* {data.aboutpara} */}
              Hi, I'm Issyah Ismail — a Front-End Developer based in Singapore.
              For the past <span className="font-bold">10 years</span> at
              SendForensics, I’ve been building robust, high-performing web
              applications that scale, perform, and deliver smooth user
              experiences.
            </p>
            <p>My current tech stack includes:</p>
            <ul className="list-disc mb-10">
              <li className="ml-10 my-2">
                <span className="font-bold">React & Next.js</span> – for
                building fast, modern web apps
              </li>
              <li className="ml-10 my-2">
                <span className="font-bold">Tailwind CSS & Material UI</span> –
                for efficient, consistent styling
              </li>
              <li className="ml-10 my-2">
                <span className="font-bold">Shopify Liquid</span> – for building
                and customizing e-commerce storefronts
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
                <span className="font-bold">GitHub Actions </span> – for setting
                up CI/CD pipelines and automated deployments
              </li>
            </ul>
            <p className="mb-10">
              I focus on maintainable front-end architecture, performance, and
              clean code—shipping features that work reliably across devices and
              browsers.
            </p>
            <p>
              When I’m off the clock, I’m usually deep in{" "}
              <span className="font-bold">Warhammer 40K lore</span>, blasting
              through <span className="font-bold">Space Marine 2</span>, or
              vibing to <span className="font-bold">80s Synthwave</span>. I also
              enjoy building side projects and helping small brands come to life
              online.
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
