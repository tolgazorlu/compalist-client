import { useNavigate } from "react-router-dom";
import { CompanyType } from "../../../types/CompanyType";
import {
  useUpdateVisitMutation,
  useUpdateWebsiteVisitMutation,
} from "../../../api/company";

interface CompanyItemProps {
  item: CompanyType;
}

const CompanyItem: React.FC<CompanyItemProps> = ({ item }) => {
  const navitate = useNavigate();

  const { mutateAsync: updateVisit } = useUpdateVisitMutation(item.slug!);
  const { mutateAsync: updateWebsiteVisit } = useUpdateWebsiteVisitMutation(
    item.slug!
  );

  const handleVisit = () => {
    updateVisit();
    navitate(`/company/${item.slug}`);
  };

  const handleWebsiteVisit = () => {
    updateWebsiteVisit();
    window.location.href = item.website_link;
  };

  return (
    <>
      {/* Features */}
      <div className="overflow-hidden">
        <div className="max-w-7xl mx-auto ">
          {/* Grid */}
          <div className="grid grid-cols-1 gap-6 lg:gap-8">
            {/* Card */}
            <div className="p-4 relative z-10 bg-[#f5f7fa] rounded-lg md:p-6 border mb-5 shadow">
              <div className="flex flex-col md:flex-row justify-between border-b border-gray-300 pb-4">
                <div className="flex gap-4 flex-col md:flex-row">
                  <img
                    src={item.logo}
                    className="h-32 rounded-lg bg-[#eaeef4] border border-neutral-300"
                  />
                  <div className="flex gap-1 flex-col items-start justify-center">
                    <div className="flex gap-1">
                      <h1 className="text-neutral-800 text-4xl font-bold">
                        {item.company_name}
                      </h1>
                      {item?.isVerified && (
                        <svg
                          className="flex-shrink-0 size-7 mt-1.5 text-blue-500"
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
                        </svg>
                      )}
                    </div>
                    <span className="text-neutral-500 text-xl">
                      {item.slogan}
                    </span>
                  </div>
                </div>
                <div className="hidden md:flex flex-col gap-3">
                  <button
                    type="button"
                    className="flex items-center justify-start gap-2 text-white bg-blue-500 p-4 rounded-lg hover:bg-blue-600"
                    onClick={handleVisit}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                      <path d="M2 12h20" />
                    </svg>
                    Profil Sayfasına Git
                  </button>
                  <button
                    onClick={handleWebsiteVisit}
                    type="button"
                    className="flex items-center justify-start gap-2 text-white bg-orange-400 p-4 rounded-lg hover:bg-orange-500"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                      <path d="M2 12h20" />
                    </svg>
                    Web Sayfasına Git
                  </button>
                </div>
              </div>

              <div className="py-4 mt-2 flex flex-col gap-3">
                <div className="col-span-4">
                  <h1 className="text font-semibold text-gray-600 uppercase">
                    Açıklama
                  </h1>
                  <span className="text-gray-500 col-span-4">
                    {" "}
                    {item.company_describe &&
                      item.company_describe.substring(0, 500)}
                    {!item.company_describe && <>Açıklama Yok</>}
                    ...{" "}
                    <button onClick={handleVisit} className="text-blue-400">
                      Daha fazla
                    </button>
                  </span>
                </div>
                <div className="col-span-1">
                  {/* List */}
                  <h1 className="text font-semibold text-gray-600 uppercase">
                    Organizasyon
                  </h1>
                  <ul className="text-sm sm:text-base">
                    <li className="flex space-x-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="lucide lucide-user p-0.5 border rounded-lg bg-white"
                      >
                        <path d="M8 2v4" />
                        <path d="M16 2v4" />
                        <path d="M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8" />
                        <path d="M3 10h18" />
                        <path d="M16 19h6" />
                        <path d="M19 16v6" />
                      </svg>

                      <span className="text-gray-500">
                        {item.founded_year} yılında kuruldu
                      </span>
                    </li>
                    <li className="flex space-x-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="lucide lucide-user p-0.5 border rounded-lg bg-white"
                      >
                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                      <span className="text-gray-500">
                        {item.numbers_of_employee}+ çalışanı var.
                      </span>
                    </li>
                    <li className="flex space-x-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="lucide lucide-user p-0.5 border rounded-lg bg-white"
                      >
                        <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z" />
                        <circle cx="7.5" cy="7.5" r=".5" fill="currentColor" />
                      </svg>
                      <span className="text-gray-500">{item.category}</span>
                    </li>
                  </ul>
                  {/* End List */}
                </div>
                <div className="col-span-1">
                  {item.sub_categories && (
                    <>
                      <h1 className="text font-semibold text-gray-600 uppercase">
                        Yetenekler
                      </h1>{" "}
                      <ul className="text-sm sm:text-base grid grid-cols-6">
                        {item.sub_categories.map((sub_category: string) => {
                          return (
                            <li className="flex space-x-3" key={sub_category}>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="lucide lucide-user p-0.5 border rounded-lg bg-white"
                              >
                                <path d="m15 5 6.3 6.3a2.4 2.4 0 0 1 0 3.4L17 19" />
                                <path d="M9.586 5.586A2 2 0 0 0 8.172 5H3a1 1 0 0 0-1 1v5.172a2 2 0 0 0 .586 1.414L8.29 18.29a2.426 2.426 0 0 0 3.42 0l3.58-3.58a2.426 2.426 0 0 0 0-3.42z" />
                                <circle
                                  cx="6.5"
                                  cy="9.5"
                                  r=".5"
                                  fill="currentColor"
                                />
                              </svg>
                              <span className="text-gray-500">
                                {sub_category}
                              </span>
                            </li>
                          );
                        })}
                      </ul>
                    </>
                  )}
                </div>
              </div>
            </div>
            {/* End Card */}
          </div>
        </div>
        {/* End Section */}
      </div>
      {/* End Comparison Table */}
    </>
  );
};

export default CompanyItem;
