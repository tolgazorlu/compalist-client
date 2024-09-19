import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { AppDispatch, RootState } from "../../redux/store";
import { logOut } from "../../redux/userSlice";

const Navbar = () => {
  const location = useLocation();

  const isAuthenticated = useSelector(
    (state: RootState) => state.user.isAuthenticated
  );

  // const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  // const [isSecondaryNavOpen, setIsSecondaryNavOpen] = useState(false);

  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logOut());
    navigate("/auth/signin");
  };

  return (
    <header
      className={`flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full text-sm py-3 sm:py-0 border-b ${
        location.pathname.startsWith("/company/") ? "bg-[#1F2937]" : "bg-white"
      }`}
    >
      <nav
        className="relative max-w-7xl w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between"
        aria-label="Global"
      >
        <div className="flex items-center justify-between">
          <a
            className="flex text-3xl font-semibold text-blue-600"
            href="/"
            aria-label="Brand"
          >
            <svg
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 500.000000 500.000000"
              preserveAspectRatio="xMidYMid meet"
              className="w-[2rem] mb-0.5"
            >
              <g
                transform="translate(0.000000,500.000000) scale(0.100000,-0.100000)"
                fill="#2463EB"
                stroke="none"
              >
                <path
                  d="M1810 4310 c-313 -31 -578 -156 -795 -374 -385 -390 -490 -972 -260
-1454 73 -153 141 -248 265 -372 122 -122 217 -190 362 -260 205 -99 392 -125
806 -114 179 6 232 4 232 -5 0 -9 72 -12 313 -9 344 3 342 3 415 72 122 114
99 308 -45 393 l-48 28 -605 6 c-522 5 -616 8 -685 23 -346 76 -585 342 -625
697 -45 393 204 748 595 850 64 16 122 21 285 26 136 3 220 9 250 19 140 44
209 205 146 340 -29 62 -93 118 -151 133 -48 12 -335 13 -455 1z"
                />
                <path
                  d="M1890 3261 c-83 -27 -170 -98 -196 -158 -21 -49 -17 -121 10 -178 24
-52 87 -117 134 -138 20 -8 201 -13 657 -17 l630 -6 95 -32 c119 -40 203 -89
292 -171 171 -158 258 -354 258 -581 0 -372 -235 -680 -595 -781 -79 -22 -87
-23 -950 -28 l-870 -6 -50 -23 c-124 -57 -171 -163 -131 -294 19 -65 60 -114
119 -143 l52 -25 860 -1 c620 -1 883 2 943 10 305 44 562 176 770 396 175 185
293 419 337 669 19 114 19 318 0 432 -47 268 -183 527 -379 719 -138 135 -343
256 -516 305 -174 48 -229 52 -855 56 -324 2 -601 0 -615 -5z"
                />
              </g>
            </svg>
            <span className="">Compalist</span>
          </a>
          <div className="sm:hidden">
            <button
              type="button"
              className="hs-collapse-toggle size-9 flex justify-center items-center text-sm font-semibold rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
              data-hs-collapse="#navbar-collapse-with-animation"
              aria-controls="navbar-collapse-with-animation"
              aria-label="Toggle navigation"
            >
              <svg
                className="hs-collapse-open:hidden size-4"
                width={16}
                height={16}
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                />
              </svg>
              <svg
                className="hs-collapse-open:block flex-shrink-0 hidden size-4"
                width={16}
                height={16}
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </button>
          </div>
        </div>
        <div
          id="navbar-collapse-with-animation"
          className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block"
        >
          <div className="flex flex-col gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:ps-7">
            <div className="hs-dropdown [--strategy:static] md:[--strategy:absolute] [--adaptive:none] md:[--trigger:hover] py-3 md:py-4">
              <button
                type="button"
                className="flex items-center w-full text-gray-500 hover:text-gray-400 font-medium"
              >
                Şirket Ara
                <svg
                  className="flex-shrink-0 ms-2 size-4"
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
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
              <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 w-full hidden z-50 top-full start-0 min-w-60 bg-white md:shadow-2xl rounded-lg py-2 md:p-4 before:absolute before:-top-5 before:start-0 before:w-full before:h-5">
                <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="flex flex-col mx-1 md:mx-0">
                    <a
                      className="group flex gap-x-5 hover:bg-gray-100 rounded-lg p-4"
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
                        className="flex-shrink-0 size-5 mt-1"
                      >
                        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                        <polyline points="17 6 23 6 23 12"></polyline>
                      </svg>
                      <div className="grow">
                        <p className="font-medium text-gray-800">
                          Dijital Pazarlama
                        </p>
                        <p className="text-sm text-gray-500 group-hover:text-gray-800">
                          En İyi Dijital Pazarlama Şirketlerini Keşfedin
                        </p>
                      </div>
                    </a>
                    <a
                      className="group flex gap-x-5 hover:bg-gray-100 rounded-lg p-4"
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
                        className="flex-shrink-0 size-5 mt-1"
                      >
                        <polyline points="16 18 22 12 16 6"></polyline>
                        <polyline points="8 6 2 12 8 18"></polyline>
                      </svg>

                      <div className="grow">
                        <p className="font-medium text-gray-800">
                          Yazılım ve Teknoloji
                        </p>
                        <p className="text-sm text-gray-500 group-hover:text-gray-800">
                          En İyi Yazılım ve Teknoloji Şirketlerini Keşfedin
                        </p>
                      </div>
                    </a>
                    <a
                      className="group flex gap-x-5 hover:bg-gray-100 rounded-lg p-4"
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
                        className="flex-shrink-0 size-5 mt-1"
                      >
                        <line x1="4" y1="9" x2="20" y2="9"></line>
                        <line x1="4" y1="15" x2="20" y2="15"></line>
                        <line x1="10" y1="3" x2="8" y2="21"></line>
                        <line x1="16" y1="3" x2="14" y2="21"></line>
                      </svg>

                      <div className="grow">
                        <p className="font-medium text-gray-800">
                          Reklam ve Marka
                        </p>
                        <p className="text-sm text-gray-500 group-hover:text-gray-800">
                          En İyi Reklam ve Marka Şirketlerini Keşfedin
                        </p>
                      </div>
                    </a>
                  </div>
                  <div className="flex flex-col mx-1 md:mx-0">
                    <a
                      className="group flex gap-x-5 hover:bg-gray-100 rounded-lg p-4"
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
                        className="flex-shrink-0 size-5 mt-1"
                      >
                        <rect
                          x="2"
                          y="7"
                          width="20"
                          height="14"
                          rx="2"
                          ry="2"
                        ></rect>
                        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                      </svg>

                      <div className="grow">
                        <p className="font-medium text-gray-800">
                          İş ve Danışmanlık
                        </p>
                        <p className="text-sm text-gray-500 group-hover:text-gray-800">
                          En İyi İş ve Danışmanlık Şirketlerini Keşfedin
                        </p>
                      </div>
                    </a>
                    <a
                      className="group flex gap-x-5 hover:bg-gray-100 rounded-lg p-4"
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
                        className="flex-shrink-0 size-5 mt-1"
                      >
                        <line x1="22" y1="12" x2="2" y2="12"></line>
                        <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
                        <line x1="6" y1="16" x2="6.01" y2="16"></line>
                        <line x1="10" y1="16" x2="10.01" y2="16"></line>
                      </svg>
                      <div className="grow">
                        <p className="font-medium text-gray-800">
                          Bt Hizmetleri
                        </p>
                        <p className="text-sm text-gray-500 group-hover:text-gray-800">
                          En İyi Bilgi Teknolojileri Şirketlerini Keşfedin
                        </p>
                      </div>
                    </a>
                    <a
                      className="group flex gap-x-5 hover:bg-gray-100 rounded-lg p-4"
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
                        className="flex-shrink-0 size-5 mt-1"
                      >
                        <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path>
                        <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path>
                        <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path>
                        <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path>
                        <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path>
                      </svg>
                      <div className="grow">
                        <p className="font-medium text-gray-800">
                          Tasarım ve Ürün
                        </p>
                        <p className="text-sm text-gray-500 group-hover:text-gray-800">
                          En İyi Tasarım ve Ürün Şirketlerini Keşfedin
                        </p>
                      </div>
                    </a>
                  </div>
                  <div className="flex flex-col pt-4 md:pt-0 mx-1 md:mx-0">
                    {/* Link */}
                    <a
                      className="group mt-2 p-3 flex gap-x-5 items-center bg-gray-100 rounded-xl hover:bg-gray-100"
                      href="/get-suggest"
                    >
                      <img
                        className="size-32 rounded-lg"
                        src="https://images.unsplash.com/photo-1648737967328-690548aec14f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=320&q=80"
                        alt="Image Description"
                      />
                      <div className="grow">
                        <span className="text-sm font-semibold uppercase text-gray-800">
                          Öneri Al
                        </span>
                        <p className="text-sm text-gray-800">
                          Compalist Öneri Al Hizmeti, stratejik bir plan sunarak
                          projelerinizi yönlendirmenizi sağlar.
                        </p>
                        <p className="mt-3 inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 hover:underline font-medium">
                          Daha fazla
                          <svg
                            className="flex-shrink-0 size-4 transition ease-in-out group-hover:translate-x-1"
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
                            <path d="m9 18 6-6-6-6" />
                          </svg>
                        </p>
                      </div>
                    </a>
                    {/* End Link */}
                  </div>
                </div>
              </div>
            </div>

            <div className="hs-dropdown [--strategy:static] md:[--strategy:absolute] [--adaptive:none] md:[--trigger:hover] py-3 md:py-6">
              <button
                type="button"
                className="flex items-center w-full text-gray-500 hover:text-gray-600 font-medium "
              >
                Hizmetlerimiz
                <svg
                  className="flex-shrink-0 ms-2 size-2.5"
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                  />
                </svg>
              </button>
              <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 md:w-80 hidden z-50 bg-white md:shadow-2xl rounded-lg py-2 md:p-2  before:absolute top-full before:-top-5 before:start-0 before:w-full before:h-5">
                <a
                  className="inline-flex gap-x-5 w-full p-4 text-gray-600 rounded-lg hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 "
                  href="/get-suggest"
                >
                  <svg
                    className="flex-shrink-0 size-5 mt-1"
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
                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                    <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                  </svg>

                  <div className="grow">
                    <span className="block font-semibold mb-1 text-gray-800">
                      Öneri Al
                    </span>
                    Compalist Öneri Al Hizmeti ile projenize uygun şirketleri
                    öğrenin.
                  </div>
                </a>
                <div className="my-2 border-t border-gray-100 " />
                <a
                  className="inline-flex gap-x-5 w-full p-4 text-gray-600 rounded-lg hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 "
                  href="/be-listed"
                >
                  <svg
                    className="flex-shrink-0 size-5 mt-1"
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
                    <line x1="8" y1="6" x2="21" y2="6"></line>
                    <line x1="8" y1="12" x2="21" y2="12"></line>
                    <line x1="8" y1="18" x2="21" y2="18"></line>
                    <line x1="3" y1="6" x2="3.01" y2="6"></line>
                    <line x1="3" y1="12" x2="3.01" y2="12"></line>
                    <line x1="3" y1="18" x2="3.01" y2="18"></line>
                  </svg>

                  <div className="grow">
                    <span className="block font-semibold mb-1 text-gray-800">
                      Listelen
                    </span>
                    Compalist ile işletmenizi en üst sıralarda listeleyin.
                  </div>
                </a>
                <div className="my-2 border-t border-gray-100 " />
                <a
                  className="inline-flex gap-x-5 w-full p-4 text-gray-600 rounded-lg hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 "
                  href="/rating"
                >
                  <svg
                    className="flex-shrink-0 size-5 mt-1"
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
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>

                  <div className="grow">
                    <span className="block font-semibold mb-1 text-gray-800">
                      Derecelendir
                    </span>
                    Compalist ile hizmet aldığınız şirketleri değerlendirin.
                  </div>
                </a>
              </div>
            </div>

            <div className="hs-dropdown [--strategy:static] sm:[--strategy:fixed] [--adaptive:none] sm:[--trigger:hover] sm:py-4">
              <button
                type="button"
                className="flex items-center w-full text-gray-500 hover:text-gray-400 font-medium "
              >
                Hakkımızda
                <svg
                  className="ms-2 size-2.5 text-gray-500"
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                  />
                </svg>
              </button>
              <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 hidden z-50 bg-white sm:shadow-md rounded-lg p-2 sm: before:absolute top-full sm:border before:-top-5 before:start-0 before:w-full before:h-5">
                <a
                  className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500"
                  href="/why-us"
                >
                  Neden Biz?
                </a>
                <a
                  className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500"
                  href="/?target=contact"
                >
                  İletişime Geç
                </a>
                <a
                  className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500"
                  href="/?target=faq"
                >
                  Sık Sorulan Sorular
                </a>
              </div>
            </div>

            <a
              className="font-medium text-blue-500 sm:py-6"
              href="/blog"
              aria-current="page"
            >
              Blog
            </a>
            <div className="pt-3 md:pt-0">
              {isAuthenticated ? (
                <>
                  {location.pathname.startsWith("/user/") ||
                  location.pathname.startsWith("/admin/") ? (
                    <button
                      className="py-2.5 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-red-500 text-white hover:bg-red-600 disabled:opacity-50 disabled:pointer-events-none"
                      onClick={handleLogout}
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
                        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                        <polyline points="16 17 21 12 16 7"></polyline>
                        <line x1="21" y1="12" x2="9" y2="12"></line>
                      </svg>
                      Çıkış Yap
                    </button>
                  ) : (
                    <a
                      className="py-2.5 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                      href="/auth/signin"
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
                        <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
                        <path d="M22 12A10 10 0 0 0 12 2v10z"></path>
                      </svg>
                      Panel'e Git
                    </a>
                  )}
                </>
              ) : (
                <a
                  className="py-2.5 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                  href="/auth/signin"
                >
                  <svg
                    className="flex-shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                  Giriş Yap
                </a>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
