import { Row, Col } from "antd";
import { motion } from "framer-motion";
import PassImage from "../../assets/PassImage.png";
import PassLogo from "../../assets/PassLogo.png";
import DeltaImage from "../../assets/DeltaImage.png";
import DeltaMobile from "../../assets/DeltaMobile.png";
import DeltaLogo from "../../assets/DeltaLogo.png";
import Blur1 from "../../assets/Blur1.png";
import Blur2 from "../../assets/Blur2.png";

const Projects = () => {
  const projects = [
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

  return (
    <section className="relative py-15 overflow-hidden bg-[#061B3A]">

  {/* Background radial glow */}
  {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_1%_1%,rgba(0,100,255,0.25),transparent_1%)] pointer-events-none" /> */}

  {/* Background blurred preview images */}
   <Row gutter={[48, 48]}>
  <div className="absolute top-40 left-1/2 
  -translate-x-1/2 w-full flex rounded-[32px] justify-center gap-10 opacity-40 pointer-events-none z-0">
  
<Col xs={24} lg={12} >
    <img
      src={Blur1}
      alt=""
      className="w-[500px] blur-sm"
    />
    </Col>
    <Col xs={24} lg={12} >
    <img
      src={Blur2}
      alt=""
      className="w-[500px] blur-sm"
    /></Col>
  </div>
    </Row>
  <div className="container mx-auto px-6 relative z-10">

    {/* Section Header */}
    <div className="text-center mb-24">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-6xl font-light text-white tracking-tight"
      >
        Recent Projects
      </motion.h2>
    </div>

    <Row gutter={[48, 48]}>

      {projects.map((project, index) => (
        <Col xs={24} lg={12} key={index}>
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15, duration: 0.8 }}
            className="group"
          >
            <div
              className="relative rounded-[32px] h-[560px] p-10 overflow-hidden
              bg-linear-to-br from-white/10 via-white/5 to-transparent
              backdrop-blur-2xl border border-white/10
              hover:border-white/20 transition-all duration-500
              hover:shadow-[0_40px_100px_rgba(0,111,234,0.25)]"
            >
              {/* Blur Background Image inside card */}
              <div className="absolute inset-0 z-0">
                <img
                  src={project.blur}
                  alt=""
                  className="w-full h-full object-cover opacity-60"
                  style={{ filter: "blur(8.3px)" }}
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-linear-to-br from-[#081426]/70 via-[#081426]/75 to-[#081426]/80"></div>
              </div>

              {/* Content - relative z-10 to appear above blur */}
              <div className="relative z-10">
                {/* Logo */}
                <div className="absolute top-0 right-0">
                  <img
                    src={project.logo}
                    alt=""
                    className="h-8 opacity-80"
                  />
                </div>

                {/* Project Image Area */}
                <div className="flex items-center justify-center h-[320px]">
                  {project.mobileImage ? (
                    <div className="relative">
                      <img
                        src={project.image}
                        alt=""
                        className="h-72 drop-shadow-[0_30px_80px_rgba(0,0,0,0.6)]"
                      />
                      <img
                        src={project.mobileImage}
                        alt=""
                        className="absolute bottom-0 left-10 h-52 drop-shadow-[0_30px_80px_rgba(0,0,0,0.8)]"
                      />
                    </div>
                  ) : (
                    <img
                      src={project.image}
                      alt=""
                      className="h-72 drop-shadow-[0_30px_80px_rgba(0,0,0,0.6)]"
                    />
                  )}
                </div>

                {/* Text Content */}
                <div className="mt-10">
                  <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-blue-300 transition">
                    {project.title}
                  </h3>
                  <p className="text-gray-300/80 leading-relaxed text-sm">
                    {project.description}
                  </p>
                </div>
              </div>

            </div>
          </motion.div>
        </Col>
      ))}

    </Row>
  </div>
</section>
  );
};

export default Projects;
