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
                <div className="flex gap-4">
                  <img
                    src={item.logo}
                    className="w-20 h-20 rounded-xl border border-gray-300 bg-[#eaeef4]"
                  />
                  <div className="flex gap-1.5 flex-col items-start justify-center">
                    <h3 className="text-4xl font-bold text-gray-700">
                      {item.company_name}
                    </h3>

                    {item.isVerified ? (
                      <span className=" inline-flex gap-x-1 bg-gray-200 font-medium text-blue-500 text-xs rounded-lg py-0.5 px-2">
                        <svg
                          className="flex-shrink-0 size-4"
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
                        </svg>
                        Compalist Onaylı
                      </span>
                    ) : (
                      <span className=" inline-flex gap-x-1 bg-gray-200 font-medium text-gray-600 text-xs rounded-lg py-0.5 px-2">
                        Onay Bekliyor
                      </span>
                    )}

                    {/* RATING START */}
                    {/* <div className="flex gap-4">
                      <div className="flex items-center gap-2">
                        {" "}
                        <svg
                          className="flex-shrink-0 size-4 text-orange-400"
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="12"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                        </svg>
                        <p className="text-md text-gray-600">4.95</p>
                      </div>{" "}
                      <span className="text-gray-400">|</span>
                      <span className="text-md text-blue-400">
                        73 Değerlendirme
                      </span>{" "}
                    </div> */}
                    {/* RATING END */}
                  </div>
                </div>
                <div className="gap-x-4 py-4">
                  <div className="flex justify-end gap-2">
                    <button
                      type="button"
                      className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg bg-blue-500 text-gray-200 shadow-sm hover:bg-blue-600 disabled:opacity-50 disabled:pointer-events-none"
                      onClick={handleVisit}
                    >
                      Profile Git
                    </button>
                    <button
                      onClick={handleWebsiteVisit}
                      type="button"
                      className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg  bg-orange-500 text-gray-100 shadow-sm hover:bg-orange-600 disabled:opacity-50 disabled:pointer-events-none"
                    >
                      Web Sayfasına Git
                    </button>
                  </div>
                </div>
              </div>

              <div className="py-2">
                <h1 className="text font-semibold text-gray-600">
                  Genel Bakış
                </h1>
                <h3 className="text-lg text-gray-600">{item.slogan}</h3>
                <span className="text-gray-500">
                  {" "}
                  {item.company_describe &&
                    item.company_describe.substring(0, 300)}
                  {!item.company_describe && <>Açıklama Yok</>}
                  ...{" "}
                  <button onClick={handleVisit} className="text-blue-400">
                    Daha fazla
                  </button>
                </span>
              </div>
              {/* <div className="mb-6">
                <span className="text-5xl font-bold text-gray-700">
                  ${item.hourly_price}
                </span>
                <span className="text-xl font-bold text-gray-700">.00</span>
                <span className="ms-3 text-gray-600">
                  USD / ortalama saat ücreti
                </span>
              </div> */}
              <div className="flex flex-col gap-2">
                {/* List */}
                <h2 className="text font-semibold text-gray-600">
                  Organizasyon
                </h2>
                <ul className="text-sm sm:text-base">
                  <li className="flex space-x-3">
                    <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-white text-black border">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-3 h-3"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                        />
                      </svg>
                    </span>
                    <span className="text-gray-500">
                      {item.numbers_of_employee} kişilik ekip
                    </span>
                  </li>
                  <li className="flex space-x-3">
                    <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-white text-black border">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-3 h-3"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                        />
                      </svg>
                    </span>
                    <span className="text-gray-500">
                      Kuruluş Tarihi: {item.founded_year}
                    </span>
                  </li>
                  <li className="flex space-x-3">
                    <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-white text-black border">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-3 h-3"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                        />
                      </svg>
                    </span>
                    <span className="text-gray-500">{item.category}</span>
                  </li>
                </ul>
                {/* End List */}
                {/* List */}
                <h2 className="text font-semibold text-gray-600">Sektör</h2>
                {item.sub_categories && (
                  <ul className="text-sm sm:text-base grid grid-cols-6">
                    {item.sub_categories.map((sub_category: string) => {
                      return (
                        <li className="flex space-x-3" key={sub_category}>
                          <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-white text-black border">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={2}
                              stroke="currentColor"
                              className="w-3 h-3"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 6h.008v.008H6V6Z"
                              />
                            </svg>
                          </span>
                          <span className="text-gray-500">{sub_category}</span>
                        </li>
                      );
                    })}
                  </ul>
                )}

                {/* End List */}
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
