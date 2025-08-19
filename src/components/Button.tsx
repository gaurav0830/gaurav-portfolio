import React from "react";
import { Link } from "react-router-dom";

interface ButtonProps {
  onClick?: () => void;
  label?: string;
  value?: string;
  className?: string;
  link?: string;
  iconcolor?: string;
  iconSVG?: React.FC<{ className: string }>;
  buttoncolor?: string;
  buttonhovercolor?: string;
  type?: "button" | "submit" | "reset";
  elementType?: "input" | "button";
  target?: string;
  isExternal?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  label,
  link,
  value,
  iconSVG: IconSVGComponent,
  buttoncolor,
  buttonhovercolor,
  type = "button",
  elementType,
  target,
  isExternal = false,
}) => {
  const baseClasses = `text-white drop-shadow-2xl border-none py-4 px-8 rounded-lg text-[1.6rem] transition-all duration-200 flex flex-row gap-4 justify-center items-center cursor-pointer ${buttoncolor} ${buttonhovercolor} max-lg:text-3xl max-lg:py-8 max-lg:px-16 max-lg:rounded-xl shadow-xl hover:scale-100 hover:-translate-y-2 hover:drop-shadow-xl w-max`;

  if (elementType === "input") {
    return <input type={type} value={value} className={baseClasses} onClick={onClick} />;
  }

  // External link
  if (isExternal && link) {
    return (
      <a
        href={link}
        target={target || "_blank"}
        rel="noopener noreferrer"
        className={baseClasses + " inline-flex items-center justify-center no-underline"}
        onClick={onClick}
      >
        {IconSVGComponent && <IconSVGComponent className="w-max h-10" />}
        {label}
      </a>
    );
  }

  // Internal link using react-router
  if (link) {
    return (
      <Link
        to={link}
        className={baseClasses + " inline-flex items-center justify-center no-underline"}
        onClick={onClick}
      >
        {IconSVGComponent && <IconSVGComponent className="w-max h-10" />}
        {label}
      </Link>
    );
  }

  // Regular button
  return (
    <button type={type} onClick={onClick} className={baseClasses}>
      {IconSVGComponent && <IconSVGComponent className="w-max h-10" />}
      {label}
    </button>
  );
};

export default Button;
