/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormEvent, useState } from "react";
import { useSignupMutation } from "../../../api/Auth";
import toast from "react-hot-toast";

export const Stepper = () => {
  const [name, setName] = useState<string>("");
  const [surname, setSurname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordConfirm, setPasswordConfirm] = useState<string>("");

  const { mutateAsync: signup } = useSignupMutation();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (password == passwordConfirm) {
      try {
        await signup({
          name: name,
          surname: surname,
          email: email,
          phone: phone,
          password: password,
          passwordConfirm: passwordConfirm,
        });
        toast.success(
          "Kayıt başarılı! Lütfen e-posta adresinizi kontrol edin."
        );
      } catch (error: any) {
        toast.error(error.response.data.message);
      }
    } else {
      // şifreler aynı değilse
      // toast.error("Şifreler uyuşmuyor!");
    }
  };

  return (
    <div className="col-span-3 lg:col-span-2 place-self-center min-w-full px-4 sm:px-12 lg:px-52">
      <div className="bg-white">
        {/* Stepper */}
        <div data-hs-stepper="">
          {/* Stepper Nav */}
          <ul className="relative flex flex-row gap-x-2">
            <li
              className="flex items-center gap-x-2 shrink basis-0 flex-1 group"
              data-hs-stepper-nav-item='{
  "index": 1
}'
            >
              <span className="min-w-7 min-h-7 group inline-flex items-center text-xs align-middle">
                <span className="size-7 flex justify-center items-center flex-shrink-0 bg-gray-100 font-medium text-gray-800 rounded-full group-focus:bg-gray-200 hs-stepper-active:bg-blue-600 hs-stepper-active:text-white hs-stepper-success:bg-blue-600 hs-stepper-success:text-white hs-stepper-completed:bg-teal-500 hs-stepper-completed:group-focus:bg-teal-600">
                  <span className="hs-stepper-success:hidden hs-stepper-completed:hidden">
                    1
                  </span>
                  <svg
                    className="hidden flex-shrink-0 size-3 hs-stepper-success:block"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={3}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <span className="ms-2 text-sm font-medium text-gray-800">
                  Adım
                </span>
              </span>
              <div className="w-full h-px flex-1 bg-gray-200 group-last:hidden hs-stepper-success:bg-blue-600 hs-stepper-completed:bg-teal-600" />
            </li>
            <li
              className="flex items-center gap-x-2 shrink basis-0 flex-1 group"
              data-hs-stepper-nav-item='{
  "index": 2
}'
            >
              <span className="min-w-7 min-h-7 group inline-flex items-center text-xs align-middle">
                <span className="size-7 flex justify-center items-center flex-shrink-0 bg-gray-100 font-medium text-gray-800 rounded-full group-focus:bg-gray-200 hs-stepper-active:bg-blue-600 hs-stepper-active:text-white hs-stepper-success:bg-blue-600 hs-stepper-success:text-white hs-stepper-completed:bg-teal-500 hs-stepper-completed:group-focus:bg-teal-600">
                  <span className="hs-stepper-success:hidden hs-stepper-completed:hidden">
                    2
                  </span>
                  <svg
                    className="hidden flex-shrink-0 size-3 hs-stepper-success:block"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={3}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <span className="ms-2 text-sm font-medium text-gray-800">
                  Adım
                </span>
              </span>
              <div className="w-full h-px flex-1 bg-gray-200 group-last:hidden hs-stepper-success:bg-blue-600 hs-stepper-completed:bg-teal-600" />
            </li>
            <li
              className="flex items-center gap-x-2 shrink basis-0 flex-1 group"
              data-hs-stepper-nav-item='{
    "index": 3
  }'
            >
              <span className="min-w-7 min-h-7 group inline-flex items-center text-xs align-middle">
                <span className="size-7 flex justify-center items-center flex-shrink-0 bg-gray-100 font-medium text-gray-800 rounded-full group-focus:bg-gray-200 hs-stepper-active:bg-blue-600 hs-stepper-active:text-white hs-stepper-success:bg-blue-600 hs-stepper-success:text-white hs-stepper-completed:bg-teal-500 hs-stepper-completed:group-focus:bg-teal-600">
                  <span className="hs-stepper-success:hidden hs-stepper-completed:hidden">
                    3
                  </span>
                  <svg
                    className="hidden flex-shrink-0 size-3 hs-stepper-success:block"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={3}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <span className="ms-2 text-sm font-medium text-gray-800">
                  Adım
                </span>
              </span>
              <div className="w-full h-px flex-1 bg-gray-200 group-last:hidden hs-stepper-success:bg-blue-600 hs-stepper-completed:bg-teal-600" />
            </li>
            {/* End Item */}
          </ul>
          {/* End Stepper Nav */}

          {/* Stepper Content */}
          <div className="mt-5 sm:mt-8">
            {/* First Contnet */}
            <div
              data-hs-stepper-content-item='{
  "index": 1
}'
            >
              <div>
                <h1 className="block text-2xl font-bold text-gray-800">
                  Compalist'e Kayıt Olun{" "}
                </h1>
              </div>
              <div className="mt-5">
                {/* Form */}
                <form>
                  <div className="grid gap-y-4">
                    {/* Form Group */}
                    <div>
                      <label htmlFor="name" className="block text-sm mb-2">
                        İsim
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          id="name"
                          value={name}
                          name="name"
                          placeholder="Ahmet"
                          className="py-3 px-4 block w-full border rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                          required
                          aria-describedby="name-error"
                          onChange={(e) => setName(e.target.value)}
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
                    </div>
                    {/* End Form Group */}
                    {/* Form Group */}
                    <div>
                      <label htmlFor="surname" className="block text-sm mb-2">
                        Soyisim
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          id="surname"
                          name="surname"
                          value={surname}
                          placeholder="Uçar"
                          className="py-3 px-4 block w-full border rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                          required
                          aria-describedby="surname-error"
                          onChange={(e) => setSurname(e.target.value)}
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
                    </div>
                    {/* End Form Group */}
                    {/* Form Group */}
                    <div>
                      <label htmlFor="email" className="block text-sm mb-2">
                        E-Posta
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          id="email"
                          value={email}
                          name="email"
                          placeholder="şirket@mail.com"
                          className="py-3 px-4 block w-full border rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                          required
                          aria-describedby="email-error"
                          onChange={(e) => setEmail(e.target.value)}
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
                    </div>
                    {/* End Form Group */}
                    {/* Form Group */}
                    <div>
                      <div className="flex justify-between items-center">
                        <label htmlFor="phone" className="block text-sm mb-2">
                          Telefon
                        </label>
                      </div>
                      <div className="relative">
                        <input
                          type="phone"
                          value={phone}
                          id="phone"
                          name="phone"
                          placeholder="05289123456"
                          className="py-3 px-4 block w-full border rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                          required
                          aria-describedby="phone-error"
                          onChange={(e) => setPhone(e.target.value)}
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
                    </div>
                    {/* End Form Group */}
                  </div>
                </form>
                {/* End Form */}
              </div>
            </div>
            {/* End First Contnet */}
            {/* First Contnet */}
            <div
              data-hs-stepper-content-item='{
  "index": 2
}'
              style={{ display: "none" }}
            >
              <div>
                <h1 className="block text-2xl font-bold text-gray-800">
                  Şifrenizi Oluşturun{" "}
                </h1>
              </div>
              <div className="mt-5">
                {/* Form */}
                <form>
                  <div className="grid gap-y-4">
                    {/* Form Group */}
                    <div>
                      <>
                        {/* Strong Password */}
                        <div className="">
                          <div className="flex mb-2">
                            <div className="flex-1">
                              <input
                                type="password"
                                id="hs-strong-password-with-indicator-and-hint"
                                className="py-3 px-4 block w-full border rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                                placeholder="Şifrenizi girin"
                                onChange={(e) => setPassword(e.target.value)}
                              />
                              <div
                                id="hs-strong-password"
                                data-hs-strong-password='{
      "target": "#hs-strong-password-with-indicator-and-hint",
      "hints": "#hs-strong-password-hints",
      "stripClasses": "hs-strong-password:opacity-100 hs-strong-password-accepted:bg-teal-500 h-2 flex-auto rounded-full bg-blue-500 opacity-50 mx-1"
    }'
                                className="flex mt-2 -mx-1"
                              />
                            </div>
                          </div>
                          <div id="hs-strong-password-hints" className="mb-3">
                            <div>
                              <span className="text-sm">Seviye: </span>
                              <span
                                data-hs-strong-password-hints-weakness-text='["Boş", "Zayıf", "Orta", "Güçlü", "Çok Güçlü", "Harika!"]'
                                className="text-sm font-semibold text-gray-800"
                              />
                            </div>
                            <h4 className="my-2 text-sm font-semibold text-gray-800">
                              Şifreniz aşağıdaki ifadeleri içermelidir:
                            </h4>
                            <ul className="space-y-1 text-sm text-gray-500">
                              <li
                                data-hs-strong-password-hints-rule-text="min-length"
                                className="hs-strong-password-active:text-teal-500 flex items-center gap-x-2"
                              >
                                <span className="hidden" data-check="">
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
                                    <polyline points="20 6 9 17 4 12" />
                                  </svg>
                                </span>
                                <span data-uncheck="">
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
                                    <path d="M18 6 6 18" />
                                    <path d="m6 6 12 12" />
                                  </svg>
                                </span>
                                Karakter sayısı en az 6 olmalı.
                              </li>
                              <li
                                data-hs-strong-password-hints-rule-text="lowercase"
                                className="hs-strong-password-active:text-teal-500 flex items-center gap-x-2"
                              >
                                <span className="hidden" data-check="">
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
                                    <polyline points="20 6 9 17 4 12" />
                                  </svg>
                                </span>
                                <span data-uncheck="">
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
                                    <path d="M18 6 6 18" />
                                    <path d="m6 6 12 12" />
                                  </svg>
                                </span>
                                Küçük harf içermeli.
                              </li>
                              <li
                                data-hs-strong-password-hints-rule-text="uppercase"
                                className="hs-strong-password-active:text-teal-500 flex items-center gap-x-2"
                              >
                                <span className="hidden" data-check="">
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
                                    <polyline points="20 6 9 17 4 12" />
                                  </svg>
                                </span>
                                <span data-uncheck="">
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
                                    <path d="M18 6 6 18" />
                                    <path d="m6 6 12 12" />
                                  </svg>
                                </span>
                                Büyük harf içermeli.
                              </li>
                              <li
                                data-hs-strong-password-hints-rule-text="numbers"
                                className="hs-strong-password-active:text-teal-500 flex items-center gap-x-2"
                              >
                                <span className="hidden" data-check="">
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
                                    <polyline points="20 6 9 17 4 12" />
                                  </svg>
                                </span>
                                <span data-uncheck="">
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
                                    <path d="M18 6 6 18" />
                                    <path d="m6 6 12 12" />
                                  </svg>
                                </span>
                                Rakam içermeli.
                              </li>
                              <li
                                data-hs-strong-password-hints-rule-text="special-characters"
                                className="hs-strong-password-active:text-teal-500 flex items-center gap-x-2"
                              >
                                <span className="hidden" data-check="">
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
                                    <polyline points="20 6 9 17 4 12" />
                                  </svg>
                                </span>
                                <span data-uncheck="">
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
                                    <path d="M18 6 6 18" />
                                    <path d="m6 6 12 12" />
                                  </svg>
                                </span>
                                Özel karakterler içermeli.
                              </li>
                            </ul>
                          </div>
                        </div>
                        {/* End Strong Password */}
                      </>
                    </div>
                    {/* End Form Group */}
                  </div>
                </form>
                {/* End Form */}
              </div>
            </div>
            {/* End First Contnet */}
            <div
              data-hs-stepper-content-item='{
  "index": 3
}'
              style={{ display: "none" }}
            >
              <div>
                <h1 className="block text-2xl font-bold text-gray-800">
                  Şifrenizi Doğrulayın
                </h1>
              </div>
              <div className="mt-5">
                {/* Form */}
                <form>
                  <div className="grid gap-y-4">
                    {/* Form Group */}
                    <div>
                      <label
                        htmlFor="password-confirm"
                        className="block text-sm mb-2"
                      >
                        Şifre Tekrarı
                      </label>
                      <div className="relative">
                        <input
                          type="password"
                          id="password-confirm"
                          name="password-confirm"
                          value={passwordConfirm}
                          placeholder="Şifrenizi Tekrar Girin"
                          className="py-3 px-4 block w-full border rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                          required
                          aria-describedby="password-confirm-error"
                          onChange={(e) => setPasswordConfirm(e.target.value)}
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
                    </div>
                    {/* End Form Group */}
                  </div>
                  <div className="flex mt-2">
                    <input
                      type="checkbox"
                      className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                    />
                    <a
                      className="text-sm ms-3 hover:underline text-blue-500"
                      href="#"
                    >
                      KVKK Metnini Okudum.
                    </a>
                  </div>
                </form>
                {/* End Form */}
              </div>
            </div>

            {/* Button Group */}
            <div className="mt-5 flex justify-between items-center gap-x-2">
              <button
                type="button"
                className="py-2 px-3 inline-flex items-center gap-x-1 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                data-hs-stepper-back-btn
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
                  <path d="m15 18-6-6 6-6" />
                </svg>
                Geri Git
              </button>
              <button
                type="button"
                className="py-2 px-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                data-hs-stepper-next-btn
              >
                İleri Git
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
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </button>
              <button
                type="button"
                className="py-2 px-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                data-hs-stepper-finish-btn
                style={{ display: "none" }}
                onClick={handleSubmit}
              >
                Kayıt ol
              </button>
              <button
                type="reset"
                className="py-2 px-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                data-hs-stepper-reset-btn
                style={{ display: "none" }}
              >
                Başa dön
              </button>
            </div>
            {/* End Button Group */}
          </div>
          {/* End Stepper Content */}
        </div>
        {/* End Stepper */}
      </div>
    </div>
  );
};
