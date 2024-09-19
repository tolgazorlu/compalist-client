import { useEffect, useState } from "react";
import { useSigninMutation } from "../../api/Auth";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const signinMutation = useSigninMutation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    signinMutation.mutate(credentials);
  };

  const isAuthenticated = useSelector(
    (state: RootState) => state.user.isAuthenticated
  );

  const isAdmin = useSelector(
    (state: RootState) => state.user.user?.role == "admin"
  );

  const navigation = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      if (isAdmin) {
        navigation("/admin/dashboard");
      } else {
        navigation("/user/dashboard");
      }
    }
  }, [navigation, isAuthenticated, isAdmin]);

  return (
    <>
      <div className="grid grid-cols-3 h-screen">
        <div className="h-screen hidden lg:flex col-span-1 bg-blue-500 p-6">
          <div className="flex flex-col w-full justify-between">
            <div className="flex items-start w-full justify-between">
              <svg
                version="1.0"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 500.000000 500.000000"
                preserveAspectRatio="xMidYMid meet"
                className="w-[3rem]"
              >
                <g
                  transform="translate(0.000000,500.000000) scale(0.100000,-0.100000)"
                  fill="#f6f6f6"
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
              <a
                type="submit"
                className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-[#f6f6f6] text-blue-500 hover:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none"
                href="/"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={3}
                  stroke="currentColor"
                  className="w-3 h-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5 8.25 12l7.5-7.5"
                  />
                </svg>
                Ana Sayfaya dön
              </a>
            </div>
            <div className="text-2xl font-bold text-gray-100 flex flex-col items-center">
              <h1>Compalist ile şirketinizin tanınmasını sağlayın</h1>
              <img src="/banner.png" alt="" />
            </div>
            {/* ========== FOOTER ========== */}
            <footer className="w-full px-4 sm:px-6 lg:px-8 mx-auto">
              {/* Grid */}
              <div className="text-center">
                <a
                  className="flex-none text-xl font-semibold text-white"
                  href="#"
                  aria-label="Brand"
                >
                  Compalist
                </a>
                {/* End Col */}
                <div className="mt-1">
                  <p className="text-gray-200">
                    © Compalist. 2024 Compalist. <br />
                    Tüm hakları saklıdır.
                  </p>
                </div>
                {/* Social Brands */}

                {/* End Social Brands */}
              </div>
              {/* End Grid */}
            </footer>
            {/* ========== END FOOTER ========== */}
          </div>
        </div>

        <div className="col-span-3 lg:col-span-2 place-self-center min-w-full px-4 sm:px-12 lg:px-52">
          <div className="">
            <div>
              <h1 className="block text-2xl font-bold text-gray-800">
                Giriş Yap
              </h1>
            </div>
            <div className="mt-5">
              {/* Form */}
              <form onSubmit={handleSubmit}>
                <div className="grid gap-y-4">
                  {/* Form Group */}
                  <div>
                    <label htmlFor="email" className="block text-sm mb-2">
                      E-Posta
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        value={credentials.email}
                        name="email"
                        placeholder="şirket@mail.com"
                        className="py-3 px-4 block w-full border rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                        required
                        aria-describedby="email-error"
                        onChange={handleChange}
                      />
                      <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                        <svg
                          className="size-5 text-red-500"
                          width={16}
                          height={16}
                          fill="currentColor"
                          viewBox="0 0 16 16"
                          aria-hidden="true"
                        >
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                        </svg>
                      </div>
                    </div>
                    <p
                      className="hidden text-xs text-red-600 mt-2"
                      id="email-error"
                    >
                      E-posta alanı boş kalmamalıdır.
                    </p>
                  </div>
                  {/* End Form Group */}
                  {/* Form Group */}
                  <div>
                    <div className="flex justify-between items-center">
                      <label htmlFor="password" className="block text-sm mb-2">
                        Şifre
                      </label>
                      <a
                        className="text-xs text-blue-600 decoration-2 hover:underline font-medium"
                        href="../examples/html/recover-account.html"
                      >
                        Şifremi Unuttum.
                      </a>
                    </div>
                    <div className="relative">
                      <input
                        type="password"
                        value={credentials.password}
                        id="password"
                        name="password"
                        placeholder="********"
                        className="py-3 px-4 block w-full border rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                        required
                        aria-describedby="password-error"
                        onChange={handleChange}
                      />
                      <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                        <svg
                          className="size-5 text-red-500"
                          width={16}
                          height={16}
                          fill="currentColor"
                          viewBox="0 0 16 16"
                          aria-hidden="true"
                        >
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                        </svg>
                      </div>
                    </div>
                    <p
                      className="hidden text-xs text-red-600 mt-2"
                      id="password-error"
                    >
                      Şifreniz en az 8 karakter olmalıdır.
                    </p>
                  </div>
                  {/* End Form Group */}

                  <button
                    type="submit"
                    className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                  >
                    Giriş Yap
                  </button>
                  <p className="text-sm text-gray-600 flex gap-1">
                    Hesabın yok mu?{" "}
                    <a
                      className="flex text-blue-600 decoration-2 hover:underline font-medium"
                      href="/auth/signup"
                    >
                      Buradan Kayıt Ol
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={3}
                        stroke="currentColor"
                        className="w-3 h-3 mt-1"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m8.25 4.5 7.5 7.5-7.5 7.5"
                        />
                      </svg>
                    </a>
                  </p>
                </div>
              </form>
              {/* End Form */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
