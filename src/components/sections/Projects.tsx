import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import PassImage from "../../assets/PassImage.png";
import PassLogo from "../../assets/PassLogo.png";
import DeltaImage from "../../assets/DeltaImage.png";
import DeltaMobile from "../../assets/DeltaMobile.png";
import DeltaLogo from "../../assets/DeltaLogo.png";
import Blur1 from "../../assets/Blur1.png";
import Blur2 from "../../assets/Blur2.png";
import CurveLines from "../../assets/CurveLines.png";

type Project = {
  title: string;
  description: string;
  image: string;
  mobileImage?: string;
  logo: string;
  blur: string;
};

const projects: Project[] = [
  {
    title: "PASS Mobile App",
    description:
      "Mobile application UI/UX design for a performance analysis and sports statistics app.",
    image: PassImage,
    logo: PassLogo,
    blur: Blur1,
  },
  {
    title: "More Projects Coming",
    description:
      "This layout is ready to scale. Add new cards or convert into grid.",
    image: DeltaImage,
    mobileImage: DeltaMobile,
    logo: DeltaLogo,
    blur: Blur2,
  },
  {
    title: "PASS Mobile App",
    description:
      "Mobile application UI/UX design for a performance analysis and sports statistics app.",
    image: PassImage,
    logo: PassLogo,
    blur: Blur1,
  },
  {
    title: "More Projects Coming",
    description:
      "This layout is ready to scale. Add new cards or convert into grid.",
    image: DeltaImage,
    mobileImage: DeltaMobile,
    logo: DeltaLogo,
    blur: Blur2,
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

  const Card = ({ project }: { project: Project }) => (
    <div
      className="relative rounded-[32px] min-h-[480px] p-6 overflow-hidden
      bg-white/10 backdrop-blur-2xl border border-white/10
      shadow-[0_30px_100px_rgba(0,0,0,0.35)]"
    >
      <div className="absolute inset-0 z-0">
        <img
          src={project.blur}
          alt=""
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#081426]/70 via-[#081426]/80 to-[#081426]/90" />
      </div>

      <div className="relative z-10">
        <div className="absolute top-0 right-0">
          <img src={project.logo} className="h-8 opacity-90" />
        </div>

        <div className="flex items-center justify-center h-[260px]">
          <img src={project.image} className="h-64" />
        </div>

        <div className="mt-6 text-center">
          <h3 className="text-xl font-semibold text-white mb-3">
            {project.title}
          </h3>
          <p className="text-gray-300 text-sm">{project.description}</p>
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects-section" className="relative bg-[#081426]">
      {/* Background */}
      <div className="absolute inset-0 opacity-20">
        <img src={CurveLines} className="w-full h-full object-cover" />
      </div>

      <div className="text-center pt-20 pb-10">
        <h2 className="text-5xl md:text-7xl text-white">
          Recent Projects
        </h2>
      </div>

      {/* ✅ MOBILE VIEW */}
      {isMobile ? (
        <div className="px-6 pb-20 flex flex-col gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
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
                className={`h-2.5 rounded-full ${
                  activeIndex === index
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