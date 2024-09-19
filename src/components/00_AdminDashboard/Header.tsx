import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppDispatch, RootState } from "../../redux/store";
import { logOut } from "../../redux/userSlice";
import { useGetNotificationQuery } from "../../api/stats";

const Header = () => {
  const { data: notification } = useGetNotificationQuery();

  const user = useSelector((state: RootState) => state.user.user);

  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logOut());
    navigate("/auth/signin");
  };
  return (
    <>
      {/* ========== HEADER ========== */}
      <header className="sticky top-0 inset-x-0 flex flex-wrap sm:justify-start sm:flex-nowrap z-[48] w-full bg-white border-b text-sm py-2.5 sm:py-4 lg:ps-64">
        <nav
          className="flex basis-full items-center w-full mx-auto px-4 sm:px-6"
          aria-label="Global"
        >
          <div className="me-5 lg:me-0 lg:hidden">
            {/* Logo */}
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
            {/* End Logo */}
          </div>
          <div className="w-full flex items-center justify-end ms-auto sm:justify-between sm:gap-x-3 sm:order-3">
            <div className="sm:hidden">
              <button
                type="button"
                className="w-[2.375rem] h-[2.375rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
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
                  <circle cx={11} cy={11} r={8} />
                  <path d="m21 21-4.3-4.3" />
                </svg>
              </button>
            </div>
            <div className="hidden sm:block">
              <label htmlFor="icon" className="sr-only">
                Search
              </label>
              <div className="relative min-w-72 md:min-w-80">
                <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
                  <svg
                    className="flex-shrink-0 size-4 text-gray-400"
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
                    <circle cx={11} cy={11} r={8} />
                    <path d="m21 21-4.3-4.3" />
                  </svg>
                </div>
                <input
                  type="text"
                  id="icon"
                  name="icon"
                  className="py-2 px-4 ps-11 block w-full border rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                  placeholder="Compalist ile Ara"
                />
              </div>
            </div>
            <div className="flex flex-row items-center justify-end gap-2">
              <button
                type="button"
                className="relative w-[2.375rem] h-[2.375rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
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
                  <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                  <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
                </svg>
                <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-teal-500 border-2 border-white rounded-full -top-2 -end-2">
                  {notification}
                </div>
              </button>
              <button
                type="button"
                className="w-[2.375rem] h-[2.375rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
                data-hs-offcanvas="#hs-offcanvas-right"
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
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </button>
              <div className="hs-dropdown [--placement:bottom-right] relative inline-flex">
                <button
                  id="hs-dropdown-with-header"
                  type="button"
                  className="w-[2.375rem] h-[2.375rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
                >
                  <img
                    className="inline-block size-[38px] rounded-full ring-2 ring-white"
                    src={user!.avatar}
                    alt="Image Description"
                  />
                </button>
                <div
                  className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-60 bg-white shadow-md rounded-lg p-2"
                  aria-labelledby="hs-dropdown-with-header"
                >
                  <div className="py-3 px-5 -m-2 bg-gray-100 rounded-t-lg">
                    <p className="text-sm text-gray-500">İletişim için</p>
                    <p className="text-sm font-medium text-gray-800">
                      info@compalist.com
                    </p>
                  </div>
                  <div className="mt-2 py-2 first:pt-0 last:pb-0">
                    <button
                      onClick={handleLogout}
                      className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm bg-red-500 w-full text-white hover:bg-red-700 focus:ring-2 focus:ring-blue-500"
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
                        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                        <polyline points="16 17 21 12 16 7" />
                        <line x1="21" x2="9" y1="12" y2="12" />
                      </svg>
                      Çıkış Yap
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      {/* ========== END HEADER ========== */}
    </>
  );
};

export default Header;
