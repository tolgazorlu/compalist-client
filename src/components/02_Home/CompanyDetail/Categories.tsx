import React from "react";

interface Category {
  categories: string[];
}

const Categories: React.FC<Category> = ({ categories }) => {
  return (
    <nav
      className="grid border rounded-lg p-4 bg-gradient-to-tl from-white via-white to-neutral-50"
      aria-label="Tabs"
      role="tablist"
    >
      <svg
        className="flex-shrink-0 hidden sm:block size-7  text-neutral-500 "
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
        <path d="m3 17 2 2 4-4" />
        <path d="m3 7 2 2 4-4" />
        <path d="M13 6h8" />
        <path d="M13 12h8" />
        <path d="M13 18h8" />
      </svg>
      <span className=" block font-semibold text-neutral-700">
        Hizmet Alanları
      </span>
      {categories.map((category: string, index: number) => {
        return (
          <span className="hidden lg:block text-neutral-500 ">
            {index + 1}. {category}
          </span>
        );
      })}
    </nav>
  );
};

export default Categories;
