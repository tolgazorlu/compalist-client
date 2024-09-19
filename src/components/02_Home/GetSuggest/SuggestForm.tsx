import { FormEvent, useState } from "react";
import toast from "react-hot-toast";
import { useCreateSuggestMutation } from "../../../api/suggest";
import { SuggestType } from "../../../types/FormTypes";

const initialFormData: SuggestType = {
  _id: "",
  company_name: "",
  name: "",
  surname: "",
  email: "",
  phone: "",
  service_selection: "",
  project_detail: "",
  status: "",
  createdAt: "",
};

export default function SuggestForm() {
  const { mutateAsync: suggest } = useCreateSuggestMutation();

  const [formData, setFormData] = useState<SuggestType>(initialFormData);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
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
      await suggest(formData);
      toast.success("Öneri kaydınızı aldık!");
    } catch (error) {
      toast.error("Bir hata oluştu!");
    }
  };

  return (
    <div id="getSuggest" className="bg-gray-50">
      {/* Hire Us */}
      <div className="max-w-7xl px-4 py-4 mx-auto">
        {/* Grid */}
        <div className="grid md:grid-cols-2 items-center gap-12">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl lg:text-5xl lg:leading-tight">
              Öneri Al
            </h1>
            <p className="mt-1 md:text-lg text-gray-800">
              Markanızı en doğru ürün ve deneyime dönüştürmek için şirketleri
              keşfetmenize yardımcı oluyoruz.
            </p>
            <div className="mt-8">
              <h2 className="text-lg font-semibold text-gray-800">
                Markanız için size sunduklarımız
              </h2>
              <ul className="mt-2 space-y-2">
                <li className="flex space-x-3">
                  <svg
                    className="flex-shrink-0 mt-0.5 size-5 text-gray-600"
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
                  <span className="text-gray-600">
                    Sektör liderlerinden geri dönüş
                  </span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    className="flex-shrink-0 mt-0.5 size-5 text-gray-600"
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
                  <span className="text-gray-600">Geliştirici destekler</span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    className="flex-shrink-0 mt-0.5 size-5 text-gray-600"
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
                  <span className="text-gray-600">Uygun fiyat</span>
                </li>
              </ul>
            </div>
          </div>
          {/* End Col */}
          <div className="relative">
            {/* Card */}
            <div className="flex flex-col border rounded-lg p-4 sm:p-6 lg:p-10 bg-white">
              <h2 className="text-xl font-semibold text-gray-800">
                Formu eksiksiz bir şekilde doldurun.
              </h2>
              <form>
                <div className="mt-6 grid gap-4 lg:gap-6">
                  {/* Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                    <div>
                      <label
                        htmlFor="hs-company-hire-us-1"
                        className="block mb-2 text-sm text-gray-700 font-medium"
                      >
                        Şirketinizin Adı
                      </label>
                      <input
                        placeholder="Compalist"
                        type="text"
                        value={formData.company_name}
                        name="company_name"
                        onChange={handleChange}
                        className="py-3 border px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="hs-company-website-hire-us-1"
                        className="block mb-2 text-sm text-gray-700 font-medium"
                      >
                        Hangi Hizmete İhtiyacınız Var?
                      </label>
                      <select
                        value={formData.service_selection}
                        name="service_selection"
                        onChange={handleChange}
                        className="border py-3 px-4 pe-9 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                      >
                        <option selected>Dijital Tasarlama</option>
                        <option>İş ve Danışmanlık</option>
                        <option>Yazılım ve Teknoloji</option>
                        <option>BT Hizmetleri</option>
                        <option>Reklam ve Marka</option>
                        <option>Tasarım ve Ürün</option>
                      </select>
                    </div>
                  </div>
                  {/* End Grid */}
                  <div>
                    <label
                      htmlFor="hs-about-hire-us-1"
                      className="block mb-2 text-sm text-gray-700 font-medium"
                    >
                      Projenizle ilgili detaylar.
                    </label>
                    <textarea
                      value={formData.project_detail}
                      name="project_detail"
                      onChange={handleChange}
                      rows={4}
                      className="py-3 border px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                      defaultValue={""}
                      placeholder="Fikir, Aşama, Bütçe, Süre gibi detaylar belirtiniz..."
                    />
                  </div>
                </div>
              </form>
              {/* End Grid */}
              {/* Checkbox */}
              <div className="mt-3 flex">
                <div className="flex">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="shrink-0 mt-1.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500"
                  />
                </div>
                <div className="ms-3">
                  <label
                    htmlFor="remember-me"
                    className="text-sm text-gray-600"
                  >
                    KVKK metnini okudum, onaylıyorum{" "}
                    <a
                      className="text-blue-600 decoration-2 hover:underline font-medium"
                      href="#"
                    >
                      Gizlilik Politikası
                    </a>
                  </label>
                </div>
              </div>
              {/* End Checkbox */}
              <div className="mt-6 grid">
                <button
                  type="submit"
                  className="w-full py-3 border px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                  onClick={handleSubmit}
                >
                  Formu Gönder
                </button>
              </div>
              <div className="mt-3 text-center">
                <p className="text-sm text-gray-500">
                  Tahmini dönüş süresi 1-2 iş günüdür.
                </p>
              </div>
            </div>
            {/* End Card */}
          </div>
          {/* End Col */}
        </div>
        {/* End Grid */}
      </div>
      {/* End Hire Us */}
    </div>
  );
}
