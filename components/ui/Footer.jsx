"use client";
import Link from "next/link";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import upwork from "@/public/upwork.png";
import fiverr from "@/public/fiverr.png";
import Image from "next/image";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Me", href: "/AboutMe" },
  { label: "Services", href: "/Services" },
  { label: "Projects", href: "/Projects" },
  { label: "Contact", href: "/ContactMe" },
];

const socialLinks = [
  {
    icon: <FaGithub size={20} />,
    href: "https://github.com/AdeelTahir-SE",
    label: "GitHub",
  },
  {
    icon: <FaInstagram size={20} />,
    href: "https://www.instagram.com/adeeltahir150/?hl=en",
    label: "Instagram",
  },
  {
    icon: <FaLinkedin size={20} />,
    href: "https://www.linkedin.com/in/adeel-tahir-fullstackdeveoper/",
    label: "LinkedIn",
  },
];

export default function Footer() {
  return (
    <footer
      className="relative z-10 w-full"
      style={{
        background: "rgba(5,5,10,0.98)",
        borderTop: "1px solid rgba(147,51,234,0.2)",
      }}
    >
      {/* Glow line at top */}
      <div
        className="w-full h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(147,51,234,0.6), transparent)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 md:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div
              className="text-3xl font-bold mb-4"
              style={{
                background: "linear-gradient(135deg, #c084fc, #9333ea)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontFamily: "var(--font-mono)",
              }}
            >
              AT.
            </div>
            <p
              className="text-sm leading-relaxed max-w-xs"
              style={{ color: "#475569" }}
            >
              Building scalable, high-performance web applications with a passion
              for clean code and beautiful UIs.
            </p>

            {/* Social row */}
            <div className="flex gap-3 mt-6">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 flex items-center justify-center rounded-lg transition-all duration-300"
                  style={{
                    border: "1px solid rgba(147,51,234,0.25)",
                    color: "#64748b",
                    background: "rgba(147,51,234,0.05)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(147,51,234,0.6)";
                    e.currentTarget.style.color = "#c084fc";
                    e.currentTarget.style.background = "rgba(147,51,234,0.15)";
                    e.currentTarget.style.boxShadow =
                      "0 0 15px rgba(147,51,234,0.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(147,51,234,0.25)";
                    e.currentTarget.style.color = "#64748b";
                    e.currentTarget.style.background = "rgba(147,51,234,0.05)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  {s.icon}
                </a>
              ))}
              <a
                href="https://www.upwork.com/freelancers/adeelt14?mp_source=share"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Upwork"
                className="w-10 h-10 flex items-center justify-center rounded-lg transition-all duration-300"
                style={{
                  border: "1px solid rgba(147,51,234,0.25)",
                  background: "rgba(147,51,234,0.05)",
                }}
              >
                <Image src={upwork} width={18} height={18} alt="Upwork" className="filter invert opacity-50" />
              </a>
              <a
                href="https://www.fiverr.com/s/vvE6leq"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Fiverr"
                className="w-10 h-10 flex items-center justify-center rounded-lg transition-all duration-300"
                style={{
                  border: "1px solid rgba(147,51,234,0.25)",
                  background: "rgba(147,51,234,0.05)",
                }}
              >
                <Image src={fiverr} width={18} height={18} alt="Fiverr" className="filter invert opacity-50" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3
              className="text-sm font-semibold uppercase tracking-widest mb-6"
              style={{ color: "#9333ea", fontFamily: "var(--font-mono)" }}
            >
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm nav-link"
                    style={{ color: "#64748b" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3
              className="text-sm font-semibold uppercase tracking-widest mb-6"
              style={{ color: "#9333ea", fontFamily: "var(--font-mono)" }}
            >
              Contact
            </h3>
            <div className="space-y-3 text-sm" style={{ color: "#64748b" }}>
              <p>📍 Islamabad, NUST</p>
              <p>
                ✉️{" "}
                <a
                  href="mailto:adeeltahir6a@gmail.com"
                  className="nav-link"
                  style={{ color: "#64748b" }}
                >
                  adeeltahir6a@gmail.com
                </a>
              </p>
              <p>📞 +92 300 1124769</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-14 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs"
          style={{
            borderTop: "1px solid rgba(147,51,234,0.12)",
            color: "#334155",
          }}
        >
          <p>© 2025 Adeel Tahir. All rights reserved.</p>
          <p style={{ fontFamily: "var(--font-mono)" }}>
            Built with{" "}
            <span style={{ color: "#9333ea" }}>Next.js</span> &{" "}
            <span style={{ color: "#9333ea" }}>Three.js</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
