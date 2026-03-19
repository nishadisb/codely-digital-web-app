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
      "Mobile application UI/UX design for a performance analysis and sports statistics app. Designed for quick scanning and confident decision-making.",
    image: PassImage,
    logo: PassLogo,
    blur: Blur1,
  },
  {
    title: "More Projects Coming",
    description:
      "This layout is ready to scale. Add new cards, or convert this section into a filterable grid (Web / UI/UX / Mobile / Branding).",
    image: DeltaImage,
    mobileImage: DeltaMobile,
    logo: DeltaLogo,
    blur: Blur2,
  },
  {
    title: "PASS Mobile App",
    description:
      "Mobile application UI/UX design for a performance analysis and sports statistics app. Designed for quick scanning and confident decision-making.",
    image: PassImage,
    logo: PassLogo,
    blur: Blur1,
  },
  {
    title: "More Projects Coming",
    description:
      "This layout is ready to scale. Add new cards, or convert this section into a filterable grid (Web / UI/UX / Mobile / Branding).",
    image: DeltaImage,
    mobileImage: DeltaMobile,
    logo: DeltaLogo,
    blur: Blur2,
  },
];

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const wheelLockRef = useRef(false);
  const wheelAccumulatorRef = useRef(0);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    const handleScrollLock = () => {
      const section = document.getElementById("projects-section");
      if (!section) return;

      const rect = section.getBoundingClientRect();

      const isInView = rect.top <= 0 && rect.bottom >= window.innerHeight;

      if (isInView) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
    };

    window.addEventListener("scroll", handleScrollLock);
    return () => window.removeEventListener("scroll", handleScrollLock);
  }, []);

  const goNext = () => {
    if (activeIndex >= projects.length - 1) return false;
    setActiveIndex((prev) => prev + 1);
    return true;
  };

  const goPrev = () => {
    if (activeIndex <= 0) return false;
    setActiveIndex((prev) => prev - 1);
    return true;
  };

  const lockAnimation = () => {
    setIsAnimating(true);
    wheelLockRef.current = true;

    window.setTimeout(() => {
      setIsAnimating(false);
      wheelLockRef.current = false;
      wheelAccumulatorRef.current = 0;
    }, 650);
  };

  const handleWheel: React.WheelEventHandler<HTMLDivElement> = (e) => {
    if (wheelLockRef.current) {
      e.preventDefault();
      return;
    }

    wheelAccumulatorRef.current += e.deltaY;
    const threshold = 60;

    // 👉 Scroll DOWN
    if (wheelAccumulatorRef.current > threshold) {
      if (activeIndex < projects.length - 1) {
        e.preventDefault(); // 🔥 BLOCK PAGE SCROLL
        goNext();
        lockAnimation();
      }
      wheelAccumulatorRef.current = 0;
    }

    // 👉 Scroll UP
    if (wheelAccumulatorRef.current < -threshold) {
      if (activeIndex > 0) {
        e.preventDefault(); // 🔥 BLOCK PAGE SCROLL
        goPrev();
        lockAnimation();
      }
      wheelAccumulatorRef.current = 0;
    }
  };

  const getCardStyle = (index: number) => {
    const offset = index - activeIndex;

    // ✅ MOBILE behavior
    if (isMobile) {
      if (offset === 0) {
        return {
          y: 0,
          scale: 1,
          opacity: 1,
          zIndex: 30,
        };
      }

      return {
        y: 80,
        scale: 0.9,
        opacity: 0,
        zIndex: 10,
      };
    }

    // ✅ DESKTOP behavior (your current logic)
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

    if (offset < -1) {
      return {
        x: -560,
        scale: 0.62,
        opacity: 0,
        zIndex: 10,
        filter: "blur(8px)",
      };
    }

    return {
      x: 560,
      scale: 0.62,
      opacity: 0,
      zIndex: 10,
      filter: "blur(8px)",
    };
  };

  return (
    <section id="projects-section" className="relative overflow-hidden bg-[#061B3A]">
      {/* <div className="h-[120px]" /> */}

      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src={CurveLines}
          alt="curve lines"
          className="w-full h-full object-cover opacity-10 md:opacity-20"
        />

        {/* Fade effect (important) */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#061B3A]/10 via-[#061B3A]/60 to-[#061B3A]" />
      </div>

      <div className="relative z-10 text-center pt-20 pb-6 md:pt-24 md:pb-10">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl font-light text-white tracking-tight"
        >
          Recent Projects
        </motion.h2>
      </div>

      <div
        className="sticky top-0 h-screen overflow-hidden flex items-center justify-center"
        onWheel={handleWheel}
        style={{ touchAction: isMobile ? "auto" : "none" }}
      >
        <div className="absolute inset-0 pointer-events-none">

          <div className="absolute top-1/2 left-[18%] -translate-y-1/2 w-[420px] h-[420px] rounded-full bg-blue-500/10 blur-[130px]" />
          <div className="absolute top-1/2 right-[18%] -translate-y-1/2 w-[420px] h-[420px] rounded-full bg-cyan-400/10 blur-[130px]" />
        </div>

        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6">

          <div className="relative h-[520px] md:h-[580px] flex items-center justify-center">
            {projects.map((project, index) => {
              const style = getCardStyle(index);

              return (
                <motion.div
                  key={index}
                  animate={style}
                  transition={{
                    duration: 0.65,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="absolute w-[90vw] max-w-[400px]"
                >
                  <div
                    className="relative rounded-[32px] min-h-[520px] p-8 overflow-hidden
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
                        <img
                          src={project.logo}
                          alt={project.title}
                          className="h-8 opacity-90"
                        />
                      </div>

                      <div className="flex items-center justify-center h-[300px] mt-2">
                        {project.mobileImage ? (
                          <div className="relative">
                            <img
                              src={project.image}
                              alt={project.title}
                              className="h-72 drop-shadow-[0_30px_80px_rgba(0,0,0,0.6)]"
                            />
                            <img
                              src={project.mobileImage}
                              alt={`${project.title} mobile`}
                              className="absolute bottom-0 left-10 h-52 drop-shadow-[0_30px_80px_rgba(0,0,0,0.8)]"
                            />
                          </div>
                        ) : (
                          <img
                            src={project.image}
                            alt={project.title}
                            className="h-72 drop-shadow-[0_30px_80px_rgba(0,0,0,0.6)]"
                          />
                        )}
                      </div>

                      <div className="mt-8 text-center">
                        <h3 className="text-2xl font-semibold text-white mb-4">
                          {project.title}
                        </h3>
                        <p className="text-gray-300/85 leading-relaxed text-sm">
                          {project.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-8 flex items-center justify-center gap-3">
            {projects.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => {
                  if (isAnimating) return;
                  setActiveIndex(index);
                }}
                className={`h-2.5 rounded-full transition-all duration-300 ${activeIndex === index
                  ? "w-10 bg-white"
                  : "w-2.5 bg-white/30 hover:bg-white/50"
                  }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="h-[120px]" />
    </section>
  );
};

export default Projects;