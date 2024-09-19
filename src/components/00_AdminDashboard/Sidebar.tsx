import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  return (
    <>
      {/* Sidebar */}
      <div
        id="application-sidebar"
        className="hs-overlay [--auto-close:lg]
  hs-overlay-open:translate-x-0
  -translate-x-full transition-all duration-300 transform
  w-[260px]
  hidden
  fixed inset-y-0 start-0 z-[60]
  bg-blue-700 border-e border-gray-200
  lg:block lg:translate-x-0 lg:end-auto lg:bottom-0
 
 "
      >
        <div className="px-8 pt-4">
          {/* Logo */}
          <a
            className="flex text-3xl font-semibold text-white"
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
                fill="#fff"
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
            <span className="text-md">Compalist</span>
          </a>
          {/* End Logo */}
        </div>
        <nav
          className="hs-accordion-group p-6 w-full flex flex-col flex-wrap"
          data-hs-accordion-always-open=""
        >
          <ul className="space-y-1.5">
            <li>
              <Link
                className={`${
                  location.pathname == "/admin/dashboard"
                    ? "bg-blue-600 text-white"
                    : "text-white hover:text-white"
                } flex items-center gap-x-3.5 py-2 px-2.5  text-sm  rounded-lg hover:bg-blue-600`}
                to="/admin/dashboard"
              >
                <svg
                  className="flex-shrink-0 size-4"
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
                  <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
                Genel Bakış
              </Link>
            </li>
            <li>
              <Link
                to="/admin/users"
                type="button"
                className={`${
                  location.pathname == "/admin/users"
                    ? "bg-blue-600 text-white"
                    : "text-white hover:text-white"
                } flex items-center gap-x-3.5 py-2 px-2.5  text-sm  rounded-lg hover:bg-blue-600`}
              >
                <svg
                  className="flex-shrink-0 size-4"
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
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx={9} cy={7} r={4} />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
                Kullanıcılar
              </Link>
            </li>
            <li className="hs-accordion" id="projects-accordion">
              <button
                type="button"
                className="hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-white hs-accordion-active:hover:bg-transparent text-sm text-white rounded-lg hover:bg-blue-600 hover:text-neutral-700"
              >
                <svg
                  className="flex-shrink-0 size-4"
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
                  <path d="m11 17 2 2a1 1 0 1 0 3-3" />
                  <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
                  <path d="m21 3 1 11h-2" />
                  <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
                  <path d="M3 4h8" />
                </svg>
                Talepler
                <svg
                  className="hs-accordion-active:block ms-auto hidden size-4"
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
                  <path d="m18 15-6-6-6 6" />
                </svg>
                <svg
                  className="hs-accordion-active:hidden ms-auto block size-4"
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
              <div
                id="projects-accordion-child"
                className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"
              >
                <ul className="pt-2 ps-2">
                  <li>
                    <Link
                      className={`${
                        location.pathname == "/admin/suggest"
                          ? "bg-blue-600 text-white"
                          : "text-white hover:text-white"
                      } flex items-center gap-x-3.5 py-2 px-2.5  text-sm  rounded-lg hover:bg-blue-600`}
                      to="/admin/suggest"
                    >
                      Öneri Al
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`${
                        location.pathname == "/admin/rating"
                          ? "bg-blue-600 text-white"
                          : "text-white hover:text-white"
                      } flex items-center gap-x-3.5 py-2 px-2.5  text-sm  rounded-lg hover:bg-blue-600`}
                      to="/admin/rating"
                    >
                      Değerlendirme
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`${
                        location.pathname == "/admin/contact"
                          ? "bg-blue-600 text-white"
                          : "text-white hover:text-white"
                      } flex items-center gap-x-3.5 py-2 px-2.5  text-sm  rounded-lg hover:bg-blue-600`}
                      to="/admin/contact"
                    >
                      İletişim
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <Link
                className={`${
                  location.pathname == "/admin/companies"
                    ? "bg-blue-600 text-white"
                    : "text-white hover:text-white"
                } flex items-center gap-x-3.5 py-2 px-2.5  text-sm  rounded-lg hover:bg-blue-600`}
                to="/admin/companies"
              >
                <svg
                  className="flex-shrink-0 size-4"
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
                  <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
                  <path d="M17 18h1" />
                  <path d="M12 18h1" />
                  <path d="M7 18h1" />
                </svg>
                Şirketler
              </Link>
            </li>
            <li>
              <Link
                className={`${
                  location.pathname == "/admin/blog"
                    ? "bg-blue-600 text-white"
                    : "text-white hover:text-white"
                } flex items-center gap-x-3.5 py-2 px-2.5  text-sm  rounded-lg hover:bg-blue-600`}
                to="/admin/blog"
              >
                <svg
                  className="flex-shrink-0 size-4"
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
                  <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
                  <path d="m15 5 4 4" />
                </svg>
                Blog
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      {/* End Sidebar */}
    </>
  );
};

export default Sidebar;
