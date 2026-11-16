import React, { useState, useEffect, useCallback, memo } from "react";
import { Helmet } from "react-helmet-async";
import { Github, Linkedin, Mail, ExternalLink, Instagram, Sparkles, MessageCircle } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { PERSONAL_INFO } from "../data/portfolioData";

const StatusBadge = memo(() => (
  <div className="inline-block animate-float lg:mx-0" data-aos="zoom-in" data-aos-delay="400">
    <div className="relative group">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-full blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
      {/* <div className="relative px-3 sm:px-4 py-2 rounded-full bg-black/40 backdrop-blur-xl border border-white/10">
        <span className="bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-transparent bg-clip-text sm:text-sm text-[0.7rem] font-medium flex items-center">
          <Sparkles className="sm:w-4 sm:h-4 w-3 h-3 mr-2 text-blue-400" />
          Ready to Innovate & Collaborate
        </span>
      </div> */}
    </div>
  </div>
));

const MainTitle = memo(() => (
  <div className="space-y-2" data-aos="fade-up" data-aos-delay="600">
    <div className="text-lg sm:text-xl text-indigo-300 font-medium">Halo, Saya</div>
    <h1 className="text-4xl sm:text-6xl md:text-6xl lg:text-6xl xl:text-7xl font-bold tracking-tight">
      <span className="relative inline-block">
        <span className="absolute -inset-2 bg-gradient-to-r from-[#6366f1] to-[#a855f7] blur-2xl opacity-20"></span>
        <span className="relative bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
          Dimas Adjie
        </span>
      </span>
      <br />
      <span className="relative inline-block mt-2">
        <span className="absolute -inset-2 bg-gradient-to-r from-[#6366f1] to-[#a855f7] blur-2xl opacity-20"></span>
        <span className="relative bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">
          Wibowo
        </span>
      </span>
    </h1>
  </div>
));

const TechStack = memo(({ tech }) => (
  <div className="px-4 py-2 hidden sm:block rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-sm text-gray-300 hover:bg-white/10 transition-colors">
    {tech}
  </div>
));

const CTAButton = memo(({ href, text, icon: Icon, isWhatsApp = false }) => (
  <a href={href} target={isWhatsApp ? "_blank" : undefined} rel={isWhatsApp ? "noopener noreferrer" : undefined}>
    <button className="group relative w-[160px]">
      <div className={`absolute -inset-0.5 rounded-xl opacity-50 blur-md group-hover:opacity-90 transition-all duration-700 ${
        isWhatsApp 
          ? "bg-gradient-to-r from-emerald-500 to-green-600" 
          : "bg-gradient-to-r from-[#4f52c9] to-[#8644c5]"
      }`}></div>
      <div className="relative h-11 bg-[#030014] backdrop-blur-xl rounded-lg border border-white/10 leading-none overflow-hidden">
        <div className={`absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ${
          isWhatsApp 
            ? "bg-gradient-to-r from-emerald-500/20 to-green-600/20" 
            : "bg-gradient-to-r from-[#4f52c9]/20 to-[#8644c5]/20"
        }`}></div>
        <span className="absolute inset-0 flex items-center justify-center gap-2 text-sm group-hover:gap-3 transition-all duration-300">
          <span className="bg-gradient-to-r from-gray-200 to-white bg-clip-text text-transparent font-medium z-10">
            {text}
          </span>
          <Icon className="w-4 h-4 text-gray-200 transform transition-all duration-300 z-10" />
        </span>
      </div>
    </button>
  </a>
));

const SocialLink = memo(({ icon: Icon, link, label }) => (
  <a href={link} target="_blank" rel="noopener noreferrer" aria-label={label}>
    <button className="group relative p-3" aria-label={label}>
      <div className="absolute inset-0 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
      <div className="relative rounded-xl bg-black/50 backdrop-blur-xl p-2 flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-all duration-300">
        <Icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
      </div>
    </button>
  </a>
));

const TYPING_SPEED = 100;
const ERASING_SPEED = 50;
const PAUSE_DURATION = 2000;
const WORDS = PERSONAL_INFO.roles;
const TECH_STACK = ["Flutter", "Kotlin", "Laravel", "PHP", "MySQL", "React", "Tailwind CSS"];
const SOCIAL_LINKS = [
  { icon: Github, link: PERSONAL_INFO.github, label: "GitHub Profile" },
  { icon: Linkedin, link: PERSONAL_INFO.linkedin, label: "LinkedIn Profile" },
  { icon: Instagram, link: PERSONAL_INFO.instagram, label: "Instagram Profile" },
];

const Home = () => {
  const [text, setText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const initAOS = () => {
      AOS.init({
        once: true,
        offset: 10,
      });
    };

    initAOS();
    window.addEventListener("resize", initAOS);
    return () => window.removeEventListener("resize", initAOS);
  }, []);

  useEffect(() => {
    setIsLoaded(true);
    return () => setIsLoaded(false);
  }, []);

  const handleTyping = useCallback(() => {
    if (isTyping) {
      if (charIndex < WORDS[wordIndex].length) {
        setText((prev) => prev + WORDS[wordIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      } else {
        setTimeout(() => setIsTyping(false), PAUSE_DURATION);
      }
    } else {
      if (charIndex > 0) {
        setText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      } else {
        setWordIndex((prev) => (prev + 1) % WORDS.length);
        setIsTyping(true);
      }
    }
  }, [charIndex, isTyping, wordIndex]);

  useEffect(() => {
    const timeout = setTimeout(
      handleTyping,
      isTyping ? TYPING_SPEED : ERASING_SPEED
    );
    return () => clearTimeout(timeout);
  }, [handleTyping]);

  return (
    <>
      <Helmet>
        <title>{PERSONAL_INFO.name} — Portfolio Landing Page</title>
        <meta name="description" content={PERSONAL_INFO.heroSummary} />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={`${PERSONAL_INFO.name} — Portfolio Landing Page`} />
        <meta property="og:description" content={PERSONAL_INFO.heroSummary} />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-[#030014] overflow-hidden px-[5%] sm:px-[5%] lg:px-[10%]" id="Home">
        <div className={`relative z-10 transition-all duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
          <div className="container mx-auto min-h-screen">
            <div className="flex flex-col lg:flex-row items-center justify-center h-screen md:justify-between gap-6 sm:gap-12 lg:gap-20">
              {/* Left Column */}
              <div
                className="w-full lg:w-1/2 space-y-6 sm:space-y-8 text-left lg:text-left order-1 lg:order-1 lg:mt-0"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                <div className="space-y-4 sm:space-y-6">
                  <StatusBadge />
                  <MainTitle />

                  {/* Typing Effect */}
                  <div className="h-8 flex items-center" data-aos="fade-up" data-aos-delay="800">
                    <span className="text-xl md:text-2xl bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent font-light">
                      {text}
                    </span>
                    <span className="w-[3px] h-6 bg-gradient-to-t from-[#6366f1] to-[#a855f7] ml-1 animate-blink"></span>
                  </div>

                  {/* Description */}
                  <p
                    className="text-base md:text-lg text-gray-400 max-w-xl leading-relaxed font-light"
                    data-aos="fade-up"
                    data-aos-delay="1000"
                  >
                    {PERSONAL_INFO.heroSummary}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-3 justify-start" data-aos="fade-up" data-aos-delay="1200">
                    {TECH_STACK.map((tech, index) => (
                      <TechStack key={index} tech={tech} />
                    ))}
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-wrap gap-3 w-full justify-start" data-aos="fade-up" data-aos-delay="1400">
                    <CTAButton href="#Portofolio" text="Projects" icon={ExternalLink} />
                    <CTAButton href={PERSONAL_INFO.whatsappLink} text="WhatsApp" icon={MessageCircle} isWhatsApp={true} />
                  </div>

                  {/* Social Links */}
                  <div className="hidden sm:flex gap-4 justify-start" data-aos="fade-up" data-aos-delay="1600">
                    {SOCIAL_LINKS.map((social, index) => (
                      <SocialLink key={index} {...social} />
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column - Hero Profile Photo & Glassmorphism Card */}
              <div
                className="w-full py-0 md:py-[10%] sm:py-0 lg:w-1/2 h-[340px] sm:h-[420px] lg:h-[600px] xl:h-[700px] relative flex items-center justify-center order-2 lg:order-2 mt-5 sm:mt-0"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                data-aos="fade-left"
                data-aos-delay="600"
              >
                <div className="relative w-full max-w-[420px] opacity-95">
                  <div
                    className={`absolute inset-0 bg-gradient-to-r from-[#6366f1]/20 to-[#a855f7]/20 rounded-3xl blur-3xl transition-all duration-700 ease-in-out ${
                      isHovering ? "opacity-70 scale-105" : "opacity-30 scale-100"
                    }`}
                  ></div>
                  <div
                    className={`relative z-10 w-full flex flex-col items-center justify-center transform transition-transform duration-500 ${
                      isHovering ? "scale-105" : "scale-100"
                    }`}
                  >
                    {/* Hero Profile Photo Avatar Frame */}
                    <div className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full p-1.5 bg-gradient-to-tr from-[#6366f1] via-[#a855f7] to-cyan-400 shadow-[0_0_50px_rgba(139,92,246,0.35)]">
                      <img
                        src="profile.jpg"
                        alt={PERSONAL_INFO.name}
                        className="w-full h-full object-cover rounded-full border-4 border-[#030014]"
                      />
                    </div>
                  </div>

                  <div
                    className={`absolute inset-0 pointer-events-none transition-all duration-700 ${
                      isHovering ? "opacity-50" : "opacity-20"
                    }`}
                  >
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-gradient-to-br from-indigo-500/10 to-purple-500/10 blur-3xl animate-[pulse_6s_cubic-bezier(0.4,0,0.6,1)_infinite]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Home);
