import React from "react";

interface DescriptionProps {
  description: string;
}

const Description: React.FC<DescriptionProps> = ({ description }) => {
  return (
    <nav
      className="grid border rounded-lg col-span-2 p-4 bg-gradient-to-tl from-white via-white to-neutral-50"
      aria-label="Tabs"
      role="tablist"
    >
      <svg
        className="flex-shrink-0 hidden sm:block size-7  text-gray-400 "
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17 6.1H3" />
        <path d="M21 12.1H3" />
        <path d="M15.1 18H3" />
      </svg>
      <span className=" block font-semibold text-gray-700  ">Açıklama</span>
      <span className="hidden lg:block text-gray-400 ">{description}</span>
    </nav>
  );
};

export default Description;
