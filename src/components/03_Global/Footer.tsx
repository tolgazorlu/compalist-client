import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-blue-600">
      {/* ========== FOOTER ========== */}
      <footer className="mt-auto w-full py-10 px-4 mx-auto max-w-7xl">
        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-10">
          <div className="col-span-full hidden lg:col-span-1 lg:block">
            <a
              className="flex text-xl font-semibold text-white"
              href="#"
              aria-label="Brand"
            >
              <svg
                version="1.0"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 500.000000 500.000000"
                preserveAspectRatio="xMidYMid meet"
                className="w-[1.5rem]"
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
              <span>Compalist</span>
            </a>
            <p className="mt-3 text-xs sm:text-sm text-gray-200">
              Fulya Mahallesi Yeşilçimen Sokak Polat Tower Bağımsız Bölüm 430,
              34394 Şişli/İstanbul
            </p>
            <p className="mt-3 text-xs sm:text-sm text-gray-200">
              info@compalist.com
            </p>
            <p className="mt-3 text-xs sm:text-sm text-gray-200">
              © 2024 Compalist.
            </p>
          </div>
          {/* End Col */}
          <div>
            <h4 className="text-xs font-semibold text-gray-100 uppercase">
              Hakkımızda
            </h4>
            <div className="mt-3 grid space-y-3 text-sm">
              <p>
                <Link
                  className="inline-flex gap-x-2 text-gray-300 hover:text-orange-500"
                  to="/why-us"
                >
                  Neden Biz?
                </Link>
              </p>
              <p>
                <Link
                  className="inline-flex gap-x-2 text-gray-300 hover:text-orange-500"
                  to="/?target=contact"
                >
                  İletişim
                </Link>
              </p>
              <p>
                <Link
                  className="inline-flex gap-x-2 text-gray-300 hover:text-orange-500"
                  to="/?target=faq"
                >
                  SSS
                </Link>
              </p>
              <p>
                <Link
                  className="inline-flex gap-x-2 text-gray-300 hover:text-orange-500"
                  to="/blog"
                >
                  Blog
                </Link>
              </p>
            </div>
          </div>
          {/* End Col */}
          <div>
            <h4 className="text-xs font-semibold text-gray-100 uppercase">
              Hizmetlerimiz
            </h4>
            <div className="mt-3 grid space-y-3 text-sm">
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-300 hover:text-orange-500"
                  href="get-suggest"
                >
                  Öneri Al{" "}
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-300 hover:text-orange-500"
                  href="be-listed"
                >
                  Listelen
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-300 hover:text-orange-500"
                  href="rating"
                >
                  Derecelendirme
                </a>{" "}
                <span className="inline text-blue-600">— We're hiring</span>
              </p>
            </div>
          </div>
          {/* End Col */}
          <div>
            <h4 className="text-xs font-semibold text-gray-100 uppercase">
              Alıcılar İçin
            </h4>
            <div className="mt-3 grid space-y-3 text-sm">
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-300 hover:text-orange-500"
                  href="#"
                >
                  Sektör Ara
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-300 hover:text-orange-500"
                  href="get-suggest"
                >
                  Öneri Al
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-300 hover:text-orange-500"
                  href="rating"
                >
                  Değerlendirme Bırak
                </a>
              </p>
            </div>
          </div>
          {/* End Col */}
          <div>
            <h4 className="text-xs font-semibold text-gray-100 uppercase">
              Sözleşmeler
            </h4>
            <div className="mt-3 grid space-y-3 text-sm">
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-300 hover:text-orange-500"
                  href="/policy/user"
                >
                  Üyelik Sözleşmesi
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-300 hover:text-orange-500"
                  href="/policy/privacy"
                >
                  Gizlilik Politikası
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-300 hover:text-orange-500"
                  href="/policy/kvkk"
                >
                  KVKK Aydınlatma Metni
                </a>
              </p>
            </div>
          </div>
          {/* End Col */}
        </div>
        {/* End Grid */}
        <div className="pt-5 mt-5 border-t border-gray-200">
          <div className="sm:flex sm:justify-between sm:items-center">
            <div className="flex items-center gap-x-3">
              <div className="space-x-4 text-sm ">
                <a
                  className="inline-flex gap-x-2 text-gray-300 hover:text-orange-500"
                  href="/policy/user"
                >
                  Şartlar
                </a>
                <a
                  className="inline-flex gap-x-2 text-gray-300 hover:text-orange-500"
                  href="/policy/privacy"
                >
                  Gizlilik
                </a>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="mt-3 sm:hidden">
                <a
                  className="flex-none text-xl font-semibold text-white"
                  href="#"
                  aria-label="Brand"
                >
                  Compalist
                </a>
                <p className="mt-1 text-xs sm:text-sm text-gray-200">
                  © 2024 Compalist.
                </p>
              </div>
              {/* Social Brands */}
              <div className="space-x-4">
                <a
                  className="inline-block text-gray-200 hover:text-orange-500"
                  target="/blank"
                  href="https://www.linkedin.com/company/compalist/"
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
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
                <a
                  className="inline-block text-gray-200 hover:text-orange-500"
                  target="/blank"
                  href="https://www.facebook.com/people/Compalist/61557206260749/?locale=tr_TR"
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
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a
                  className="inline-block text-gray-200 hover:text-orange-500"
                  target="/blank"
                  href="https://www.instagram.com/compalistt/"
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
                    <rect
                      x="2"
                      y="2"
                      width="20"
                      height="20"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a
                  className="inline-block text-gray-200 hover:text-orange-500"
                  href="mailto:info@compalist.com"
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
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </a>
              </div>
              {/* End Social Brands */}
            </div>
            {/* End Col */}
          </div>
        </div>
      </footer>
      {/* ========== END FOOTER ========== */}
    </div>
  );
};

export default Footer;
