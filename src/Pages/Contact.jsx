import React, { useState, useEffect } from "react";
import { Share2, User, Mail, MessageSquare, Send, MessageCircle, Phone, ArrowUpRight, CheckCircle2 } from "lucide-react";
import SocialLinks from "../components/SocialLinks";
import Swal from "sweetalert2";
import AOS from "aos";
import "aos/dist/aos.css";
import { PERSONAL_INFO } from "../data/portfolioData";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [customWaMessage, setCustomWaMessage] = useState(
    "Halo Dimas Adjie Wibowo, saya tertarik untuk mendiskusikan peluang proyek dan kolaborasi."
  );

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    AOS.init({
      once: false,
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Kirim Pesan via WhatsApp Resmi (Click to Chat)
  const handleSendToWhatsApp = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.message) {
      Swal.fire({
        title: "Perhatian",
        text: "Silakan isi nama dan pesan Anda terlebih dahulu.",
        icon: "warning",
        confirmButtonColor: "#6366f1",
      });
      return;
    }

    const text = `Halo Dimas Adjie Wibowo,%0A%0ASaya: *${encodeURIComponent(formData.name)}*%0AEmail: ${encodeURIComponent(formData.email || "-")}%0APesan:%0A${encodeURIComponent(formData.message)}`;
    const waUrl = `https://wa.me/${PERSONAL_INFO.phone}?text=${text}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");

    Swal.fire({
      title: "Membuka WhatsApp...",
      text: "Anda sedang diarahkan ke chat WhatsApp resmi Dimas Adjie Wibowo.",
      icon: "success",
      confirmButtonColor: "#10b981",
      timer: 2500,
      timerProgressBar: true,
    });
  };

  // Quick Action template
  const handleQuickTemplate = (text) => {
    setCustomWaMessage(text);
  };

  const getWaLinkWithCustomMsg = () => {
    return `https://wa.me/${PERSONAL_INFO.phone}?text=${encodeURIComponent(customWaMessage)}`;
  };

  return (
    <div className="px-[5%] sm:px-[5%] lg:px-[10%]">
      <div className="text-center lg:mt-[5%] mt-10 mb-2 sm:px-0 px-[5%]">
        <h2
          data-aos="fade-down"
          data-aos-duration="1000"
          className="inline-block text-3xl md:text-5xl font-bold text-center mx-auto text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]"
        >
          <span
            style={{
              color: "#6366f1",
              backgroundImage:
                "linear-gradient(45deg, #6366f1 10%, #a855f7 93%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Hubungi Saya
          </span>
        </h2>
        <p
          data-aos="fade-up"
          data-aos-duration="1100"
          className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base mt-2"
        >
          Punya pertanyaan atau peluang kolaborasi digital? Hubungi saya secara langsung melalui form atau tombol WhatsApp resmi di bawah.
        </p>
      </div>

      <div
        className="h-auto py-10 flex items-center justify-center 2xl:pr-[3.1%] lg:pr-[3.8%] md:px-0"
        id="Contact"
      >
        <div className="container px-[1%] grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-[50%_50%] gap-8">
          {/* Left Column: Form Hubungi */}
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl p-5 py-8 sm:p-10 transform transition-all duration-500 hover:shadow-[#6366f1]/10 flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-3xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
                    Kirim Pesan
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Tuliskan pesan Anda dan kirimkan langsung ke WhatsApp saya.
                  </p>
                </div>
                <Share2 className="w-8 h-8 text-[#6366f1] opacity-50" />
              </div>

              <form onSubmit={handleSendToWhatsApp} className="space-y-4">
                <div className="relative group">
                  <User className="absolute left-4 top-4 w-5 h-5 text-gray-400 group-focus-within:text-[#6366f1] transition-colors" />
                  <input
                    type="text"
                    name="name"
                    placeholder="Nama Anda"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-4 pl-12 bg-white/10 rounded-xl border border-white/20 placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-[#6366f1]/30 transition-all duration-300 hover:border-[#6366f1]/30"
                    required
                  />
                </div>

                <div className="relative group">
                  <Mail className="absolute left-4 top-4 w-5 h-5 text-gray-400 group-focus-within:text-[#6366f1] transition-colors" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Anda (opsional)"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-4 pl-12 bg-white/10 rounded-xl border border-white/20 placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-[#6366f1]/30 transition-all duration-300 hover:border-[#6366f1]/30"
                  />
                </div>

                <div className="relative group">
                  <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-400 group-focus-within:text-[#6366f1] transition-colors" />
                  <textarea
                    name="message"
                    placeholder="Tuliskan pesan Anda di sini..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full resize-none p-4 pl-12 bg-white/10 rounded-xl border border-white/20 placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-[#6366f1]/30 transition-all duration-300 hover:border-[#6366f1]/30 h-[7.5rem]"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-emerald-500 to-green-600 text-white py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-emerald-500/25 active:scale-[0.98] flex items-center justify-center gap-2 shadow-md cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5" />
                  Kirim Pesan via WhatsApp
                </button>
              </form>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex justify-center space-x-6">
              <SocialLinks />
            </div>
          </div>

          {/* Right Column: Prominent WhatsApp CTA & Direct Contact Card */}
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            className="bg-white/5 backdrop-blur-xl rounded-3xl p-5 py-8 sm:p-10 shadow-2xl transform transition-all duration-500 hover:shadow-emerald-500/10 flex flex-col justify-between border border-white/10"
          >
            <div>
              <h3 className="text-3xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
                Hubungi Saya via WhatsApp
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                Klik tombol di bawah untuk langsung terhubung ke WhatsApp saya melalui tautan resmi tanpa perlu menyimpan nomor terlebih dahulu.
              </p>

              {/* Quick Template Picker */}
              <div className="mb-6 space-y-2">
                <span className="text-xs text-indigo-300 uppercase tracking-wider font-semibold block">
                  Pilih Pesan Cepat:
                </span>
                <div className="flex flex-col gap-2">
                  {[
                    "Halo Dimas Adjie Wibowo, saya tertarik untuk mendiskusikan peluang proyek aplikasi mobile/web.",
                    "Halo Dimas, saya ingin berdiskusi mengenai kolaborasi digital.",
                    "Halo Dimas Adjie Wibowo, saya telah melihat landing page portofolio Anda dan ingin menyapa!"
                  ].map((tpl, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => handleQuickTemplate(tpl)}
                      className={`text-left text-xs p-2.5 rounded-xl border transition-all duration-300 flex items-start gap-2 ${
                        customWaMessage === tpl
                          ? "bg-emerald-500/20 border-emerald-500/50 text-white"
                          : "bg-white/5 border-white/10 text-gray-400 hover:text-gray-200 hover:bg-white/10"
                      }`}
                    >
                      <CheckCircle2 className={`w-3.5 h-3.5 mt-0.5 flex-shrink-0 ${customWaMessage === tpl ? "text-emerald-400" : "text-gray-500"}`} />
                      <span>{tpl}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Message preview area */}
              <div className="bg-[#030014]/60 rounded-xl p-3 border border-white/10 mb-6">
                <label className="text-[11px] uppercase tracking-wider text-gray-400 font-semibold block mb-1">
                  Preview Pesan WhatsApp:
                </label>
                <textarea
                  value={customWaMessage}
                  onChange={(e) => setCustomWaMessage(e.target.value)}
                  rows={2}
                  className="w-full bg-transparent text-sm text-emerald-200 focus:outline-none resize-none"
                />
              </div>

              {/* Prominent WhatsApp Call-to-Action Button */}
              <a
                href={getWaLinkWithCustomMsg()}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block w-full text-center"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-green-600 rounded-2xl blur-lg opacity-70 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative px-6 py-4 bg-gradient-to-r from-emerald-500 to-green-600 rounded-xl text-white font-bold text-base sm:text-lg flex items-center justify-center gap-3 shadow-xl transform transition-transform duration-300 group-hover:scale-[1.02] active:scale-[0.98]">
                  <MessageCircle className="w-6 h-6 animate-bounce" />
                  <span>Hubungi Saya via WhatsApp</span>
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </a>
            </div>

            {/* Direct Info */}
            <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-gray-400">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>WA: +{PERSONAL_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-purple-400" />
                <span className="truncate">{PERSONAL_INFO.email}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
