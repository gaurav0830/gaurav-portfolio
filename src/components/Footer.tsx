// @ts-nocheck
import React from "react";
import { Link } from "react-router-dom";
import { sideBarLeftSocials } from "../assets/lib/data";

interface SocialLink {
  link: string;
  icon: string | React.FC<{ className: string }>;
  strokeColor?: string;
  altimgname: string;
  iconcolor?: string;
}

const Footer: React.FC = () => {
  return (
    <footer className="bg-darkblue text-white px-10 py-16 flex flex-col items-center gap-10 text-center">
      {/* Top Section - Quick Links */}
      <div className="flex flex-wrap justify-center gap-10 text-lg font-medium">
        <Link to="/" className="hover:text-orange transition-colors">
          Home
        </Link>
        <Link to="/projects" className="hover:text-orange transition-colors">
          Projects
        </Link>
        <Link to="/about" className="hover:text-orange transition-colors">
          About
        </Link>
        <Link to="/contact" className="hover:text-orange transition-colors">
          Contact
        </Link>
      </div>

      {/* Middle Section - Social Icons */}
      <div className="socials flex gap-8">
        {sideBarLeftSocials.map((social: SocialLink, index: number) => (
          <Link
            to={social.link}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${social.altimgname} button`}
            className="hover:scale-110 transition-transform duration-300"
          >
            {typeof social.icon === "function" ? (
              <social.icon className="stroke-orange w-8 h-8" />
            ) : (
              <img
                src={social.icon}
                alt={social.altimgname}
                className="w-8 h-8"
                style={{ stroke: social.iconcolor || "" }}
              />
            )}
          </Link>
        ))}
      </div>

      {/* Bottom Section - Copyright */}
      <div className="text-sm opacity-80 mt-6">
        <p>© {new Date().getFullYear()} Gaurav R. All rights reserved.</p>
        <p className="mt-2">
          Crafted with ❤️ using React, Tailwind, and modern web technologies.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
