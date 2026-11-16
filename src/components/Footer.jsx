import React from "react";
import { MessageCircle } from "lucide-react";
import { PERSONAL_INFO } from "../data/portfolioData";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 pb-6 px-4">
      <center>
        <hr className="my-6 border-white/10 sm:mx-auto max-w-6xl text-center" />
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-sm text-gray-400">
          <span>
            © {currentYear}{" "}
            <span className="font-semibold text-white">
              {PERSONAL_INFO.name}
            </span>
            . All Rights Reserved.
          </span>
          <span className="hidden sm:inline">•</span>
          <a
            href={PERSONAL_INFO.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat via WhatsApp</span>
          </a>
        </div>
      </center>
    </footer>
  );
};

export default Footer;
