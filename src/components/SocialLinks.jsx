import { useEffect } from "react";
import {
  Linkedin,
  Github,
  Instagram,
  ExternalLink,
  MessageCircle,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { PERSONAL_INFO } from "../data/portfolioData";

const socialLinks = [
  {
    name: "WhatsApp",
    displayName: "WhatsApp",
    subText: "+62 812-3003-8392",
    icon: MessageCircle,
    url: PERSONAL_INFO.whatsappLink,
    color: "#25D366",
    gradient: "from-[#25D366] to-[#128C7E]",
    isPrimary: true,
  },
  {
    name: "LinkedIn",
    displayName: "LinkedIn",
    subText: "Let's Connect",
    icon: Linkedin,
    url: PERSONAL_INFO.linkedin,
    color: "#0A66C2",
    gradient: "from-[#0A66C2] to-[#0077B5]",
  },
  {
    name: "GitHub",
    displayName: "GitHub",
    subText: "@Dimasadjw",
    icon: Github,
    url: PERSONAL_INFO.github,
    color: "#ffffff",
    gradient: "from-[#333] to-[#24292e]",
  },
  {
    name: "Instagram",
    displayName: "Instagram",
    subText: "@dimsadjw__",
    icon: Instagram,
    url: PERSONAL_INFO.instagram,
    color: "#E4405F",
    gradient: "from-[#833AB4] via-[#E4405F] to-[#FCAF45]",
  },
];

const SocialLinks = () => {
  const primaryLink = socialLinks.find((link) => link.isPrimary);
  const otherLinks = socialLinks.filter((link) => !link.isPrimary);

  useEffect(() => {
    AOS.init({
      offset: 10,
    });
  }, []);

  return (
    <div className="w-full bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-6 py-8 backdrop-blur-xl">
      <h3
        className="text-xl font-semibold text-white mb-6 flex items-center gap-2"
        data-aos="fade-down"
      >
        <span className="inline-block w-8 h-1 bg-emerald-500 rounded-full"></span>
        Connect With Me
      </h3>

      <div className="flex flex-col gap-4">
        {/* Primary Row - WhatsApp */}
        <a
          href={primaryLink.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-between p-4 rounded-lg 
                     bg-white/5 border border-white/10 overflow-hidden
                     hover:border-emerald-500/40 transition-all duration-500"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div
            className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500
                       bg-gradient-to-r ${primaryLink.gradient}`}
          />

          <div className="relative flex items-center gap-4">
            <div className="relative flex items-center justify-center">
              <div
                className="absolute inset-0 opacity-20 rounded-md transition-all duration-500
                               group-hover:scale-110 group-hover:opacity-30"
                style={{ backgroundColor: primaryLink.color }}
              />
              <div className="relative p-2 rounded-md">
                <primaryLink.icon
                  className="w-6 h-6 transition-all duration-500 group-hover:scale-105"
                  style={{ color: primaryLink.color }}
                />
              </div>
            </div>

            <div className="flex flex-col">
              <span className="text-lg font-bold pt-[0.2rem] text-gray-200 tracking-tight leading-none group-hover:text-white transition-colors duration-300">
                {primaryLink.displayName}
              </span>
              <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                {primaryLink.subText}
              </span>
            </div>
          </div>

          <ExternalLink
            className="relative w-5 h-5 text-gray-500 group-hover:text-white
                       opacity-0 group-hover:opacity-100 transition-all duration-300
                       transform group-hover:translate-x-0 -translate-x-1"
          />

          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none overflow-hidden">
            <div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent
                               translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"
            />
          </div>
        </a>

        {/* Other Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {otherLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-3 p-3 rounded-xl 
                               bg-white/5 border border-white/10 overflow-hidden
                               hover:border-white/20 transition-all duration-500"
              data-aos="fade-up"
              data-aos-delay={200 + index * 100}
            >
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500
                                     bg-gradient-to-r ${link.gradient}`}
              />

              <div className="relative flex items-center justify-center">
                <div
                  className="absolute inset-0 opacity-20 rounded-lg transition-all duration-500
                                       group-hover:scale-125 group-hover:opacity-30"
                  style={{ backgroundColor: link.color }}
                />
                <div className="relative p-1.5 rounded-lg">
                  <link.icon
                    className="w-4 h-4 transition-all duration-500 group-hover:scale-110"
                    style={{ color: link.color }}
                  />
                </div>
              </div>

              <div className="flex flex-col min-w-0">
                <span className="text-xs font-bold text-gray-200 group-hover:text-white transition-colors duration-300">
                  {link.displayName}
                </span>
                <span className="text-[11px] text-gray-400 truncate group-hover:text-gray-300 transition-colors duration-300">
                  {link.subText}
                </span>
              </div>

              <ExternalLink
                className="w-3.5 h-3.5 text-gray-500 group-hover:text-white ml-auto
                                       opacity-0 group-hover:opacity-100 transition-all duration-300
                                       transform group-hover:translate-x-0 -translate-x-2"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialLinks;
