import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { sectorValues } from "../../utils/constants";

const Search = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState<string>("all");
  const submitHandler = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    navigate(`/search?query=${query}`);
  };
  // const [categoryTabs, setCategoryTabs] = useState(false);
  // const [selectedCategory, setSelectedCategory] = useState<Array<any>>([]);

  // useEffect(() => {
  //   const handleMouseDown = (event: any) => {
  //     // mouse ile hedef dışına tıklanırsa kategori divi gizlensin
  //     if (event.target.id === "safe-area") {
  //       setCategoryTabs(true);
  //       return;
  //     }
  //     setCategoryTabs(false);
  //   };

  //   document.addEventListener("mousedown", handleMouseDown);

  //   return () => {
  //     document.removeEventListener("mousedown", handleMouseDown);
  //   };
  // }, []);

  return (
    <>
      {/* Hero */}
      <div className="relative bg-gradient-to-b from-white via-gray-300 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-24">
          <div className="text-center">
            {/* Title */}
            <div className="text-center">
              {/* <p className="text-xs font-semibold text-gray-500 tracking-wide uppercase mb-3">
                Compalist Teknoloji
              </p> */}
              <h1 className="text-3xl text-neutral-700 font-bold sm:text-5xl lg:text-6xl lg:leading-tight">
                Şirketleri <span className="text-blue-500">Compalist</span> ile
                keşfedin!
              </h1>
            </div>
            {/* End Title */}
            <p className="mt-2 text-xl text-gray-500">
              Hedef sektörünüzü seçin, binlerce işletme arasında size uygun
              olanı keşfedin.
            </p>

            {/** AVATAR GROUP */}

            <div
              id="json-example-with-tab-filter-in-dropdown-tab-preview-markup safe-area"
              className="mt-7 sm:mt-12 mx-auto max-w-3xl relative"
            >
              {/* Form */}
              <form onSubmit={submitHandler}>
                <div
                  className="relative flex space-x-3 p-3 bg-white border rounded-lg shadow z-20"
                  id="safe-area"
                >
                  <div className="flex-[1_0_0%]">
                    <label
                      htmlFor="hs-search-article-1"
                      className="block text-sm text-gray-700 font-medium"
                    >
                      <span className="sr-only">
                        Yazılm Geliştirme, UI-UX Tasarım ...
                      </span>
                    </label>
                    <input
                      type="search"
                      className="py-2.5 px-4 block w-full border-transparent rounded-lg"
                      placeholder="Yazılm Geliştirme, UI-UX Tasarım ..."
                      onChange={(e) => setQuery(e.target.value)}
                      defaultValue=""
                      data-hs-combo-box-input=""
                      id="safe-area"
                    />
                  </div>
                  <div
                    className="absolute z-50 w-full bg-white rounded-lg shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)]"
                    style={{ display: "none" }}
                    data-hs-combo-box-output=""
                  >
                    <div
                      className="max-h-[300px] p-2 rounded-lg overflow-y-auto overflow-hidden [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300"
                      data-hs-combo-box-output-items-wrapper=""
                    />
                  </div>
                  {/* End SearchBox Dropdown */}
                  <div className="flex-[0_0_auto]">
                    <button
                      type="submit"
                      className="shadow py-2.5 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none z-40"
                    >
                      <svg
                        className="flex-shrink-0 size-5"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx={11} cy={11} r={8} />
                        <path d="m21 21-4.3-4.3" />
                      </svg>
                      Şirket Ara
                    </button>
                  </div>
                </div>
              </form>
              {/* End Form */}

              {/* SVG Element */}
              <div className="hidden md:block absolute top-0 end-0 -translate-y-12 translate-x-20 z-10">
                <svg
                  className="w-16 h-auto text-primary"
                  width={121}
                  height={135}
                  viewBox="0 0 121 135"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164"
                    stroke="currentColor"
                    strokeWidth={10}
                    strokeLinecap="round"
                  />
                  <path
                    d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5"
                    stroke="currentColor"
                    strokeWidth={10}
                    strokeLinecap="round"
                  />
                  <path
                    d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874"
                    stroke="currentColor"
                    strokeWidth={10}
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              {/* End SVG Element */}
              {/* SVG Element */}
              <div className="hidden md:block absolute bottom-0 start-0 translate-y-10 -translate-x-32 z-10">
                <svg
                  className="w-40 h-auto text-primary"
                  width={347}
                  height={188}
                  viewBox="0 0 347 188"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 82.4591C54.7956 92.8751 30.9771 162.782 68.2065 181.385C112.642 203.59 127.943 78.57 122.161 25.5053C120.504 2.2376 93.4028 -8.11128 89.7468 25.5053C85.8633 61.2125 130.186 199.678 180.982 146.248L214.898 107.02C224.322 95.4118 242.9 79.2851 258.6 107.02C274.299 134.754 299.315 125.589 309.861 117.539L343 93.4426"
                    stroke="currentColor"
                    strokeWidth={7}
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              {/* End SVG Element */}
            </div>

            <div className="mt-10 sm:mt-20">
              <a
                className="m-1 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                href="/search?query=digital"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="flex-shrink-0 size-4"
                >
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                  <polyline points="17 6 23 6 23 12"></polyline>
                </svg>
                Dijital Pazarlama
              </a>

              <a
                className="m-1 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                href="/search?query=software"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="flex-shrink-0 size-4"
                >
                  <path d="m18 16 4-4-4-4" />
                  <path d="m6 8-4 4 4 4" />
                  <path d="m14.5 4-5 16" />
                </svg>
                Yazılım ve Teknoloji
              </a>

              <a
                className="m-1 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                href="/search?query=brand"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="flex-shrink-0 size-4"
                >
                  <line x1="4" y1="9" x2="20" y2="9"></line>
                  <line x1="4" y1="15" x2="20" y2="15"></line>
                  <line x1="10" y1="3" x2="8" y2="21"></line>
                  <line x1="16" y1="3" x2="14" y2="21"></line>
                </svg>
                Reklam ve Marka
              </a>

              <a
                className="m-1 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                href="/search?query=consultancy"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="flex-shrink-0 size-4"
                >
                  <path d="m11 17 2 2a1 1 0 1 0 3-3" />
                  <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
                  <path d="m21 3 1 11h-2" />
                  <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
                  <path d="M3 4h8" />
                </svg>
                İş ve Danışmanlık
              </a>

              <a
                className="m-1 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                href="/search?query=it"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="flex-shrink-0 size-4"
                >
                  <circle cx="12" cy="12" r="3" />
                  <path d="M4.5 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-.5" />
                  <path d="M4.5 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-.5" />
                  <path d="M6 6h.01" />
                  <path d="M6 18h.01" />
                  <path d="m15.7 13.4-.9-.3" />
                  <path d="m9.2 10.9-.9-.3" />
                  <path d="m10.6 15.7.3-.9" />
                  <path d="m13.6 15.7-.4-1" />
                  <path d="m10.8 9.3-.4-1" />
                  <path d="m8.3 13.6 1-.4" />
                  <path d="m14.7 10.8 1-.4" />
                  <path d="m13.4 8.3-.3.9" />
                </svg>
                BT Hizmetleri
              </a>

              <a
                className="m-1 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                href="/search?query=design"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="flex-shrink-0 size-4"
                >
                  <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
                  <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
                  <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
                  <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
                  <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
                </svg>
                Tasarım ve Ürün
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* End Hero */}
    </>
  );
};

export default Search;
