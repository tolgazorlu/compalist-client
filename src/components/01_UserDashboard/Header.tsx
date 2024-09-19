import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  return (
    <>
      <nav
        className="sticky -top-px bg-white z-40 text-sm font-medium text-black ring-1 ring-gray-900 ring-opacity-5 border-t shadow-sm shadow-gray-100 pt-6 md:pb-6 -mt-px"
        aria-label="Jump links"
      >
        <div className="max-w-7xl justify-between snap-x w-full flex items-center overflow-x-auto px-4 sm:px-6 lg:px-8 pb-4 md:pb-0 mx-auto [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300">
          <div className="flex">
            <div className="snap-center shrink-0 pe-5 sm:pe-8 sm:last-pe-0">
              <Link
                className={`${
                  location.pathname == "/user/dashboard"
                    ? "text-gray-900 font-bold"
                    : "text-gray-800"
                } inline-flex items-center gap-x-2 hover:text-gray-500`}
                to="/user/dashboard"
              >
                Genel Bakış
              </Link>
            </div>
          </div>
          <div className="flex">
            <div className="snap-center shrink-0 pe-5 sm:pe-8 sm:last:pe-0">
              <Link
                className={`${
                  location.pathname == "/user/be-listed"
                    ? "text-gray-900 font-bold"
                    : "text-gray-800"
                } inline-flex items-center gap-x-2 hover:text-gray-500`}
                to="/user/be-listed"
              >
                Listelen
              </Link>
            </div>
            <div className="snap-center shrink-0 pe-5 sm:pe-8 sm:last:pe-0">
              <Link
                className={`${
                  location.pathname == "/user/get-suggest"
                    ? "text-gray-900 font-bold"
                    : "text-gray-800"
                } inline-flex items-center gap-x-2 hover:text-gray-500`}
                to="/user/get-suggest"
              >
                Öneri Al
              </Link>
            </div>
            <div className="snap-center shrink-0 pe-5 sm:pe-8 sm:last:pe-0">
              <Link
                className={`${
                  location.pathname == "/user/rating"
                    ? "text-gray-900 font-bold"
                    : "text-gray-800"
                } inline-flex items-center gap-x-2 hover:text-gray-500`}
                to="/user/rating"
              >
                Değerlendir
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
