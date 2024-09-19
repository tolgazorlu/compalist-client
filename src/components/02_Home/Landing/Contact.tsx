import { FormEvent, useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useLocation } from "react-router-dom";
import { useContactMutation } from "../../../api/contact";
import { ContactType } from "../../../types/FormTypes";

const initialFormData: ContactType = {
  name: "",
  surname: "",
  email: "",
  phone: "",
  message: "",
};

const Contact = () => {
  const { mutateAsync: contact } = useContactMutation();

  const [formData, setFormData] = useState<ContactType>(initialFormData);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await contact(formData);
      toast.success("İletişim formu başarıyla gönderildi!");
    } catch (error) {
      toast.error("Bir hata oluştu!");
    }
  };

  const params = useLocation();
  useEffect(() => {
    const targetId = params.search.split("=")[1];

    if (targetId == "contact") {
      const targetElement = document.getElementById("contact");

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "start",
        });
      }
    }
  }, [params]);

  return (
    <div className="bg-gray-100" id="contact">
      {/* Contact Us */}
      <div id="contact" className="px-4 py-10 mx-auto">
        <div className="max-w-2xl lg:max-w-5xl mx-auto">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl">
              Bize Ulaşın, Çözümleri Keşfedelim!
            </h1>
            <p className="mt-1 text-gray-600">
              İhtiyaçlarınızı dinlemek ve size en iyi hizmeti sunmak için
              buradayız. Şimdi bizimle iletişime geçin ve iş birliği için adım
              atalım!
            </p>
          </div>
          <div className="mt-12 grid items-center lg:grid-cols-2 gap-6 lg:gap-16">
            {/* Card */}
            <div className="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-8 bg-white">
              <h2 className="mb-8 text-xl font-semibold text-gray-800">
                Formu Doldurun{" "}
              </h2>
              <form onSubmit={handleSubmit}>
                <div className="grid gap-4">
                  {/* Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="hs-firstname-contacts-1"
                        className="sr-only"
                      >
                        Ad
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        name="name"
                        className="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                        placeholder="Ad"
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="hs-lastname-contacts-1"
                        className="sr-only"
                      >
                        Soyad
                      </label>
                      <input
                        type="text"
                        name="surname"
                        className="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                        placeholder="Soyad"
                        value={formData.surname}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  {/* End Grid */}
                  <div>
                    <label htmlFor="hs-email-contacts-1" className="sr-only">
                      E-Posta
                    </label>
                    <input
                      type="e-mail"
                      name="email"
                      autoComplete="e-posta"
                      className="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                      placeholder="E-Posta"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="hs-phone-number-1" className="sr-only">
                      Telefon
                    </label>
                    <input
                      type="text"
                      name="phone"
                      className="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                      placeholder="Telefon"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="hs-about-contacts-1" className="sr-only">
                      Mesaj
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      className="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                      placeholder="Bir mesaj giriniz..."
                      value={formData.message}
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                </div>
                {/* End Grid */}
                <div className="flex mt-2">
                  <input
                    type="checkbox"
                    className="shrink-0 mt-0.5 border-gray-200 rounded text-primary focus:ring-primary"
                    id="hs-default-checkbox"
                  />
                  <label
                    htmlFor="hs-default-checkbox"
                    className="text-sm text-gray-500 ms-3"
                  >
                    Kvkk metnini okudum onaylıyorum
                  </label>
                </div>
                <div className="mt-4 grid">
                  <button
                    type="submit"
                    className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                  >
                    Gönder
                  </button>
                </div>
                <div className="mt-3 text-center">
                  <a
                    href="mailto:info@compalist.com"
                    className="text-sm text-gray-500"
                  >
                    info@compalist.com
                  </a>
                </div>
              </form>
            </div>
            {/* End Card */}
            <div className="divide-y divide-gray-200">
              {/* Icon Block */}
              <div className="flex gap-x-7 py-6">
                <svg
                  className="flex-shrink-0 size-6 mt-1.5 text-gray-800"
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
                  <circle cx={12} cy={12} r={10} />
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                  <path d="M12 17h.01" />
                </svg>
                <div className="grow">
                  <h3 className="font-semibold text-gray-800">Soru Sorun</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Her türlü soruda yardımcı olmak için buradayız.{" "}
                  </p>
                </div>
              </div>
              {/* End Icon Block */}
              {/* Icon Block */}
              <div className="flex gap-x-7 py-6">
                <svg
                  className="flex-shrink-0 size-6 mt-1.5 text-gray-800"
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
                  <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
                  <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
                </svg>
                <div className="grow">
                  <h3 className="font-semibold text-gray-800">SSS</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Sorabileceğiniz her şeyin yanıtını SSS bölümümüzde arayın.
                  </p>
                  <a
                    className="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-gray-600 hover:text-gray-800"
                    href="/?target=faq"
                  >
                    Sık Sorulan Soruları ziyaret et
                    <svg
                      className="flex-shrink-0 size-2.5 transition ease-in-out group-hover:translate-x-1"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              {/* End Icon Block */}
              {/* Icon Block */}
              <div className=" flex gap-x-7 py-6">
                <svg
                  className="flex-shrink-0 size-6 mt-1.5 text-gray-800"
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
                  <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" />
                  <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" />
                </svg>
                <div className="grow">
                  <h3 className="font-semibold text-gray-800">
                    Bizimle email ile iletişime geçin
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Bunun yerine bize bir e-posta yazmak isterseniz lütfen şunu
                    kullanın:
                  </p>
                  <a
                    className="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-gray-600 hover:text-gray-800"
                    href="mailto:info@compalist.com"
                  >
                    info@compalist.com{" "}
                  </a>
                </div>
              </div>
              {/* End Icon Block */}
            </div>
          </div>
        </div>
      </div>
      {/* End Contact Us */}
    </div>
  );
};

export default Contact;
