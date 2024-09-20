import React from "react";
import { CompanyType } from "../../../types/CompanyType";

interface CompanyItemProps {
  item: CompanyType;
}

const Features: React.FC<CompanyItemProps> = ({ item }) => {
  return (
    <>
      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 py-6 max-w-7xl mx-auto">
        {/* Card */}
        <div className="flex flex-col bg-gradient-to-tl from-neutral-50 via-white to-neutral-50 border shadow-sm rounded-xl">
          <div className="p-4 md:p-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-users border rounded-lg p-2 w-10 bg-white shadow mb-4 stroke-neutral-500"
            >
              <rect width="20" height="12" x="2" y="6" rx="2" />
              <circle cx="12" cy="12" r="2" />
              <path d="M6 12h.01M18 12h.01" />
            </svg>
            <div className="flex items-center gap-x-2">
              <p className="text-sm uppercase tracking-wide text-neutral-500">
                Büyük Ölçekli İşletmeler
              </p>
            </div>
            <div className="flex items-center gap-x-2">
              <h3 className="text-xl sm:text-2xl font-bold">
                %{item.big_partners}
              </h3>
            </div>
          </div>
        </div>
        {/* End Card */}
        {/* Card */}
        <div className="flex flex-col bg-gradient-to-tl from-neutral-50 via-white to-neutral-50 border shadow-sm rounded-xl">
          <div className="p-4 md:p-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-users border rounded-lg p-2 w-10 bg-white shadow mb-4 stroke-neutral-500"
            >
              <rect width="20" height="12" x="2" y="6" rx="2" />
              <circle cx="12" cy="12" r="2" />
              <path d="M6 12h.01M18 12h.01" />
            </svg>
            <div className="flex items-center gap-x-2">
              <p className="text-sm uppercase tracking-wide text-neutral-500">
                Diğer İşletmeler
              </p>
            </div>
            <div className="flex items-center gap-x-2">
              <h3 className="text-xl sm:text-2xl font-bold">
                %{100 - item.big_partners}
              </h3>
            </div>
          </div>
        </div>
        {/* End Card */}
        {/* Card */}
        <div className="flex flex-col bg-gradient-to-tl from-neutral-50 via-white to-neutral-50 border shadow-sm rounded-xl">
          <div className="p-4 md:p-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-users border rounded-lg p-2 w-10 bg-white shadow mb-4 stroke-neutral-500"
            >
              <path d="m9 11 3 3L22 4" />
              <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
            </svg>
            <div className="flex items-center gap-x-2">
              <p className="text-sm uppercase tracking-wide text-neutral-500">
                Referans Sayısı
              </p>
            </div>
            <div className="flex items-center">
              <h3 className="text-xl sm:text-2xl font-bold">
                {item.numbers_of_customers}
              </h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-plus"
              >
                <path d="M5 12h14" />
                <path d="M12 5v14" />
              </svg>
            </div>
          </div>
        </div>
        {/* End Card */}
        {/* Card */}
        <div className="flex flex-col bg-gradient-to-tl from-neutral-50 via-white to-neutral-50 border shadow-sm rounded-xl">
          <div className="p-4 md:p-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-users border rounded-lg p-2 w-10 bg-white shadow mb-4 stroke-neutral-500"
            >
              <path d="M8 2v4" />
              <path d="M16 2v4" />
              <path d="M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8" />
              <path d="M3 10h18" />
              <path d="M16 19h6" />
              <path d="M19 16v6" />
            </svg>
            <div className="flex items-center gap-x-2">
              <p className="text-sm uppercase tracking-wide text-neutral-500">
                Kuruluş Tarihi
              </p>
            </div>
            <div className="flex items-center gap-x-2">
              <h3 className="text-xl sm:text-2xl font-bold">
                {item.founded_year.slice(0, 4)}
              </h3>
            </div>
          </div>
        </div>
        {/* End Card */}
      </div>
      {/* End Grid */}
    </>
  );
};

export default Features;
