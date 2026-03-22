import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import CardBody from "../../assets/ProjectsImages/CardBody.png";
import PassImage from "../../assets/ProjectsImages/PassImage.png";
import PassLogo from "../../assets/ProjectsImages/PassLogo.png";

import EvovoltImage from "../../assets/ProjectsImages/EvovoltImage.png";
import EvovoltMobile from "../../assets/ProjectsImages/EvovoltMobile.png";
import EvovoltLogo from "../../assets/ProjectsImages/EvovoltLogo.png";

import EzycleanImage from "../../assets/ProjectsImages/EzycleanImage.png";
import EzycleanMobile from "../../assets/ProjectsImages/EzycleanMobile.png";
import EzycleanLogo from "../../assets/ProjectsImages/EzycleanLogo.png";

import TarraleahImage from "../../assets/ProjectsImages/TarraleahImage.png";
import TarraleahMobile from "../../assets/ProjectsImages/TarraleahMobile.png";
import TarraleahLogo from "../../assets/ProjectsImages/TarraleahLogo.png";

import CurveLines from "../../assets/CurveLines.png";

type Project = {
  title: string;
  description: string;
  mainImage: string;
  mobileImage?: string;
  logo: string;
  blur?: string;
};

const projects: Project[] = [
  {
    title: "PASS Mobile App",
    description:
      "Mobile application UI/UX design for a performance analysis and sports statistics app. Designed for quick scanning and confident decision-making.",
    mainImage: PassImage,
    logo: PassLogo,
    blur: CardBody,
  },
  {
    title: "Evovolt — Test & Tag",
    description:
      "Business website for an Australian test & tagging service provider, built for clarity, conversion, and fast load times.",
    mainImage: EvovoltImage,
    mobileImage: EvovoltMobile,
    logo: EvovoltLogo,
    blur: CardBody,
  },
  {
    title: "Ezy Clean & Co PTY LTD",
    description:
      "Business website for an Australian cleaning company, designed to be simple to navigate and optimized for enquiries.",
    mainImage: EzycleanImage,
    mobileImage: EzycleanMobile,
    logo: EzycleanLogo,
    blur: CardBody,
  },
  {
    title: "Tarraleah Lodge",
    description:
      "Business website for an Australian cleaning company, designed to be simple to navigate and optimized for enquiries.",
    mainImage: TarraleahImage,
    mobileImage: TarraleahMobile,
    logo: TarraleahLogo,
    blur: CardBody,
  },
];

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const wheelLockRef = useRef(false);
  const wheelAccumulatorRef = useRef(0);

  const [isMobile, setIsMobile] = useState(false);

  // ✅ Detect mobile
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // ✅ Scroll lock ONLY for desktop
  useEffect(() => {
    if (isMobile) return;

    const handleScrollLock = () => {
      const section = document.getElementById("projects-section");
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const isInView = rect.top <= 0 && rect.bottom >= window.innerHeight;

      document.body.style.overflow = isInView ? "hidden" : "";
    };

    window.addEventListener("scroll", handleScrollLock);
    return () => window.removeEventListener("scroll", handleScrollLock);
  }, [isMobile]);

  const goNext = () => {
    if (activeIndex >= projects.length - 1) return;
    setActiveIndex((prev) => prev + 1);
  };

  const goPrev = () => {
    if (activeIndex <= 0) return;
    setActiveIndex((prev) => prev - 1);
  };

  const lockAnimation = () => {
    wheelLockRef.current = true;

    setTimeout(() => {
      wheelLockRef.current = false;
      wheelAccumulatorRef.current = 0;
    }, 650);
  };

  const handleWheel: React.WheelEventHandler<HTMLDivElement> = (e) => {
    if (isMobile) return; // ❌ disable wheel on mobile

    if (wheelLockRef.current) {
      e.preventDefault();
      return;
    }

    wheelAccumulatorRef.current += e.deltaY;
    const threshold = 60;

    if (wheelAccumulatorRef.current > threshold) {
      if (activeIndex < projects.length - 1) {
        e.preventDefault();
        goNext();
        lockAnimation();
      }
      wheelAccumulatorRef.current = 0;
    }

    if (wheelAccumulatorRef.current < -threshold) {
      if (activeIndex > 0) {
        e.preventDefault();
        goPrev();
        lockAnimation();
      }
      wheelAccumulatorRef.current = 0;
    }
  };

  const getCardStyle = (index: number) => {
    const offset = index - activeIndex;

    if (offset === 0) {
      return {
        x: 0,
        scale: 1,
        opacity: 1,
        zIndex: 30,
        filter: "blur(0px)",
      };
    }

    if (offset === -1) {
      return {
        x: -340,
        scale: 0.8,
        opacity: 0.45,
        zIndex: 20,
        filter: "blur(2px)",
      };
    }

    if (offset === 1) {
      return {
        x: 340,
        scale: 0.8,
        opacity: 0.45,
        zIndex: 20,
        filter: "blur(2px)",
      };
    }

    return {
      x: offset < 0 ? -560 : 560,
      scale: 0.6,
      opacity: 0,
      zIndex: 10,
      filter: "blur(8px)",
    };
  };

  const Card = ({ project }: { project: Project }) => {
  return (
    <div
      className="
        relative rounded-[20px] md:rounded-[28px] overflow-hidden
        p-5 md:p-10
        bg-[#0b1220]
        shadow-[0_10px_40px_rgba(0,0,0,0.5)]
        group
      "
    >
      {/* 🔥 BACKGROUND LIGHT GLOW */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-20 -left-20 w-[300px] h-[300px] bg-blue-500/20 blur-[120px]" />
        <div className="absolute bottom-[-80px] right-[-80px] w-[300px] h-[300px] bg-purple-500/20 blur-[120px]" />
      </div>

      {/* 💡 RADIAL LIGHT SPOT */}
      <div className="
        absolute inset-0 z-0
        bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.08),transparent_60%)]
      " />

      {/* ✨ SHINE EFFECT */}
      <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
        <div className="
          absolute -left-[120%] top-0 h-full w-[60%]
          bg-gradient-to-r from-transparent via-white/10 to-transparent
          skew-x-[-20deg]
          group-hover:left-[120%]
          transition-all duration-1000
        " />
      </div>

      {/* CONTENT */}
      <div className="relative z-20">
        
        {/* LOGO */}
        {project.logo && (
          <div className="absolute -top-2 -right-2 md:-top-6 md:-right-6 z-20 p-1.5 md:p-2">
            <img
              src={project.logo}
              className="h-8 md:h-12 w-auto object-contain opacity-90"
              alt="logo"
            />
          </div>
        )}

        {/* IMAGE */}
        <div className="relative flex items-center justify-center h-[200px] md:h-[280px]">
          <img
            src={project.mainImage}
            className="relative z-10 max-h-[180px] md:max-h-[240px] object-contain"
          />

          {project.mobileImage && (
            <img
              src={project.mobileImage}
              className="absolute bottom-4 left-6 z-20 -translate-x-1/2 h-[120px] md:h-[160px] object-contain drop-shadow-xl opacity-90"
            />
          )}
        </div>

        {/* TEXT */}
        <div className="mt-4 md:mt-6 text-center md:text-left">
          <h3 className="text-white text-base md:text-xl font-semibold mb-1 md:mb-2">
            {project.title}
          </h3>
          <p className="text-gray-400 text-xs md:text-sm leading-relaxed max-w-md mx-auto md:mx-0">
            {project.description}
          </p>
        </div>
      </div>
    </div>
  );
};

  return (
    <section id="projects-section" className="relative bg-[#081426]">
      {/* Background */}
      <div className="absolute inset-0 opacity-20">
        <img src={CurveLines} className="w-full h-full object-cover" />
      </div>

      <div className="text-center pt-20 pb-10">
        <h2 className="text-4xl md:text-7xl text-white">
          Recent Projects
        </h2>
      </div>

      {/* ✅ MOBILE VIEW */}
      {isMobile ? (
        <div className="px-4 sm:px-6 pb-16 flex flex-col gap-5">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card project={project} />
            </motion.div>
          ))}
        </div>
      ) : (
        /* ✅ DESKTOP VIEW */
        <div
          className="sticky top-0 h-screen flex items-center justify-center"
          onWheel={handleWheel}
        >
          <div className="relative h-[580px] w-full flex items-center justify-center">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                animate={getCardStyle(index)}
                transition={{
                  duration: 0.65,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute w-[400px]"
              >
                <Card project={project} />
              </motion.div>
            ))}
          </div>

          {/* Indicators */}
          <div className="absolute bottom-10 flex gap-3">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2.5 rounded-full ${activeIndex === index
                    ? "w-10 bg-white"
                    : "w-2.5 bg-white/30"
                  }`}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;